import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import type { Figure as FigureData } from "../data/projects";

type FigureProps = {
  figure: FigureData;
  /** Rendered width hint for the browser, passed to next/image. */
  sizes: string;
  /** Set on an image at the top of the page so it loads ahead of the rest. */
  preload?: boolean;
};

/**
 * A case study image. Until the figure has a `src`, a labelled placeholder is
 * rendered at the same size, so dropping in the real screenshot later does
 * not move anything else on the page.
 */
export default function Figure({
  figure,
  sizes,
  preload = false,
}: FigureProps) {
  if (figure.src) {
    // A screenshot fills a bordered frame. A device mockup already has its
    // own outline and a transparent background, so it is shown whole and
    // unframed, sitting directly on the page.
    return (
      <div
        className={
          figure.contain
            ? "relative aspect-video"
            : "border-hairline relative aspect-video overflow-hidden rounded-lg border"
        }
      >
        <Image
          src={figure.src}
          alt={figure.description}
          fill
          sizes={sizes}
          preload={preload}
          className={
            figure.contain ? "object-contain" : "object-cover object-top"
          }
        />
      </div>
    );
  }

  return (
    <div className="bg-surface border-hairline-strong flex aspect-video flex-col items-center justify-center gap-y-3 rounded-lg border border-dashed p-6 text-center">
      <PhotoIcon aria-hidden="true" className="text-muted size-8" />
      <p className="text-muted font-mono text-xs tracking-widest uppercase">
        Image placeholder
      </p>
      <p className="max-w-md text-sm text-pretty sm:text-base">
        {figure.description}
      </p>
    </div>
  );
}
