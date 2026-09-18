import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/content";

const paths: Record<SocialLink["platform"], React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path d="M14 4v10.4a3.6 3.6 0 1 1-3.6-3.6c.2 0 .4 0 .6.03V7.7a6.5 6.5 0 1 0 5.7 6.4V9.4A6.3 6.3 0 0 0 20 11V8a3.6 3.6 0 0 1-3.6-3.6V4h-2.4Z" />
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.9 12.6c-.2.6-1.2 1.1-1.9 1.2-.5.1-1.1.1-3.4-.9-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.6-.1l.6-.7c.2-.3.4-.2.6-.1l1.6.8c.2.1.4.2.5.3.1.2.1.9-.1 1.6Z" />
  ),
};

interface SocialIconProps {
  platform: SocialLink["platform"];
  className?: string;
}

/** Íconos propios (SVG), sin marcas registradas de terceros. */
export function SocialIcon({ platform, className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      {paths[platform]}
    </svg>
  );
}
