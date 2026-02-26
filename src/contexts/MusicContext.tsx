"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

interface Song {
  name: string;
  artist: string;
  url: string; // Required audio URL
}

interface MusicContextType {
  currentSong: Song | null;
  lastPlayedSong: Song | null;
  isPlaying: boolean;
  volume: number;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [lastPlayedSong, setLastPlayedSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", () => {});
      }
    };
  }, []);

  const playSong = async (song: Song) => {
    if (audioRef.current) {
      try {
        // If same song is clicked and currently playing, pause it
        if (currentSong?.name === song.name && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
          return;
        }
        
        // If same song is clicked and paused, resume it
        if (currentSong?.name === song.name && !isPlaying) {
          await audioRef.current.play();
          setIsPlaying(true);
          return;
        }
        
        // Different song - load and play new song
        audioRef.current.pause();
        audioRef.current.src = song.url;
        audioRef.current.volume = volume;
        await audioRef.current.play();
        setCurrentSong(song);
        setLastPlayedSong(song);
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
        setCurrentSong(song);
        setLastPlayedSong(song);
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 30000);
      }
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (currentSong) {
      if (isPlaying) {
        pauseSong();
      } else {
        if (audioRef.current) {
          audioRef.current.play().catch(() => setIsPlaying(true));
          setIsPlaying(true);
        }
      }
    }
  };
  
  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        lastPlayedSong,
        isPlaying,
        volume,
        playSong,
        pauseSong,
        togglePlay,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
