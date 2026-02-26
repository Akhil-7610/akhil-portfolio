import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import Icon from "./Icon";
import OptimizedLogo from "./OptimizedLogo";

interface Props {
  experience: Experience;
  showLine?: boolean;
}

export default function TimelineItem({ experience, showLine }: Props) {
  const { name, href, title, logo, start, end, description, links } =
    experience;

  // Check if this is work experience (no end date or recent work)
  const isWorkExperience =
    !end || (end && new Date(end) > new Date("2025-01-01"));

  return (
    <li
      className={`relative ml-10 py-4 ${showLine ? "after:absolute after:left-[-40px] after:top-16 after:h-full after:w-px after:bg-foreground/30" : ""}`}
    >
      <Link
        href={href}
        target="_blank"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <OptimizedLogo
          src={logo}
          alt={name}
          name={name}
          showFallback={!isWorkExperience}
        />
      </Link>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {start && (
          <time className="text-xs text-muted-foreground">
            <span>{start}</span>
            <span>{" - "}</span>
            <span>{end ? end : "Present"}</span>
          </time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        {description && (
          <ul className="ml-4 list-outside list-disc">
            {description.map((desc, i) => (
              <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.name} className="flex gap-2">
                <Icon name={link.icon} aria-hidden="true" className="size-3" />
                {link.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
