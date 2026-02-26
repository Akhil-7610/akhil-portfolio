import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/Avatar";

interface OptimizedLogoProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
  showFallback?: boolean;
}

export default function OptimizedLogo({
  src,
  alt,
  name,
  className,
  showFallback = true,
}: OptimizedLogoProps) {
  // Check if it's a local image or remote image
  const isLocalImage = src.startsWith("/");

  return (
    <div
      className={`relative flex size-12 shrink-0 overflow-hidden rounded-full border ${className}`}
    >
      {isLocalImage ? (
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="48px"
            className="bg-background object-contain"
            priority
          />
        </div>
      ) : (
        // For remote images, use regular img with optimization
        <img
          src={src}
          alt={alt}
          className="h-full w-full bg-background object-contain"
          loading="eager"
          width={48}
          height={48}
        />
      )}
      {showFallback && (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-semibold">
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}
