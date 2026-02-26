import { cn } from "@/lib/utils";
import Image from "next/image";

interface SwipeCardsProps {
  className?: string;
}

const SwipeCards = ({ className }: SwipeCardsProps) => {
  return (
    <div
      className={cn("relative aspect-[3/4] w-[240px] sm:w-[300px]", className)}
    >
      <Image
        src="/img/akhil.jpeg"
        alt="Akhil"
        fill
        sizes="(max-width: 640px) 240px, 300px"
        quality={95}
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        style={{ objectFit: "cover" }}
        className="rounded-lg shadow-lg transition-opacity duration-300"
      />
    </div>
  );
};

export default SwipeCards;
