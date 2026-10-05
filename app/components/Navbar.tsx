"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { profile } from "../data/profile";
import { LinkedInIcon } from "./icons";
import SectionLink from "./SectionLink";
import ThemeToggle from "./ThemeToggle";

// `id` is the section on the home page that lights the link up while it is
// on screen. Home is the hero, and links to the top of the page.
const navItems = [
  { name: "Home", id: "home", href: "/" },
  { name: "About", id: "about", href: "/#about" },
  { name: "Experience", id: "experience", href: "/#experience" },
  { name: "Work", id: "work", href: "/#work" },
  { name: "Skills", id: "skills", href: "/#skills" },
  { name: "Education", id: "education", href: "/#education" },
];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function Wordmark() {
  return (
    <>
      {/* The monogram is decorative, so the link is named by the full name. */}
      <span className="sr-only">{profile.name}</span>
      <span
        aria-hidden="true"
        className="bg-primary text-on-primary flex size-10 items-center justify-center rounded font-mono text-base font-semibold"
      >
        {profile.initials}
      </span>
    </>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 10,
    () => false,
  );

  // Highlight the link for whichever section is crossing the middle of the
  // viewport. Above the first section and below the last, nothing is active.
  // The navbar outlives route changes, so the sections are looked up again
  // whenever the path changes.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          setActiveSection((current) =>
            entry.isIntersecting ? id : current === id ? null : current,
          );
        }
      },
      { rootMargin: "-45% 0px -55% 0px" },
    );
    for (const item of navItems) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);

  // Case study pages have none of the home page's sections, so they light up
  // the section they belong to.
  const currentSection = pathname.startsWith("/work/") ? "work" : activeSection;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/90 border-hairline backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 py-5 lg:px-8"
      >
        {/* The two outer groups only take equal shares from xl up, which is
            what centers the links. Between lg and xl there is not enough
            room for that, so the three groups are simply spaced apart. */}
        <div className="flex xl:flex-1">
          <SectionLink href="/" className="-m-1.5 p-1.5">
            <Wordmark />
          </SectionLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-muted -m-2.5 inline-flex items-center justify-center rounded p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
          {navItems.map((item) => (
            <SectionLink
              key={item.id}
              href={item.href}
              aria-current={currentSection === item.id ? "location" : undefined}
              className={`hover:text-primary text-sm font-semibold transition-colors ${
                currentSection === item.id ? "text-primary" : ""
              }`}
            >
              {item.name}
            </SectionLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-4 xl:flex-1 xl:gap-x-5">
          <ThemeToggle />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon aria-hidden="true" className="size-5" />
          </a>
          <SectionLink
            href="/#contact"
            className="bg-primary text-on-primary hover:bg-primary-hover rounded px-5 py-2 text-sm font-bold tracking-wider whitespace-nowrap transition-colors"
          >
            Get in Touch
          </SectionLink>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <DialogPanel
          transition
          className="bg-surface border-hairline fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l p-6 transition duration-300 ease-out data-closed:translate-x-full sm:max-w-sm"
        >
          <div className="flex items-center justify-between">
            <SectionLink
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <Wordmark />
            </SectionLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted -m-2.5 rounded p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="divide-hairline -my-6 divide-y">
              <div className="space-y-1 py-6">
                {navItems.map((item) => (
                  <SectionLink
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={
                      currentSection === item.id ? "location" : undefined
                    }
                    className={`hover:text-primary block px-3 py-2.5 text-base font-semibold transition-colors ${
                      currentSection === item.id ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </SectionLink>
                ))}
              </div>
              <div className="py-6">
                <SectionLink
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-primary text-on-primary hover:bg-primary-hover block rounded px-6 py-3 text-center text-sm font-bold tracking-wider transition-colors"
                >
                  Get in Touch
                </SectionLink>
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary flex items-center gap-x-2 text-sm font-semibold transition-colors"
                  >
                    <LinkedInIcon aria-hidden="true" className="size-5" />
                    LinkedIn
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
