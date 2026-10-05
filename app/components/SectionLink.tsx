"use client";

import type { ComponentProps, MouseEvent } from "react";
import Link from "next/link";

/**
 * A next/link for links that point within the home page ("/#about", "/").
 *
 * Next.js does nothing when a link's target is the URL already in the address
 * bar. So after following "/#about" and scrolling away, clicking it again
 * would not return to the section, where a plain anchor would. This fills
 * that one gap and leaves every other navigation to Next.js.
 */
export default function SectionLink({
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    // Leave modified clicks (new tab, new window) to the browser.
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = new URL(event.currentTarget.href);
    const current = window.location;
    if (
      target.origin !== current.origin ||
      target.pathname !== current.pathname ||
      target.search !== current.search ||
      target.hash !== current.hash
    ) {
      return;
    }

    // Both calls follow the scroll-behavior set in globals.css, so they
    // animate the same way a first click does.
    event.preventDefault();
    if (target.hash) {
      document
        .getElementById(decodeURIComponent(target.hash.slice(1)))
        ?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0 });
    }
  }

  return <Link {...props} onClick={handleClick} />;
}
