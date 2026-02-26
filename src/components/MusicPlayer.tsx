"use client";

import { Button } from "./ui/Button";
import { useMusic } from "../contexts/MusicContext";

interface MusicPlayerProps {
  showLastPlayed?: boolean;
}

export default function MusicPlayer({
  showLastPlayed = false,
}: MusicPlayerProps) {
  const { lastPlayedSong, isPlaying, togglePlay, volume, setVolume } = useMusic();

  const song = showLastPlayed ? lastPlayedSong : null;

  if (!song) {
    return (
      <div className="text-xs text-muted-foreground">No songs played yet</div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="truncate">
        {isPlaying ? "🎵" : "⏸️"} {song.name} - {song.artist}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="h-6 w-6"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </Button>
    </div>
  );
}
