import { profile } from "../data/profile";

const links = [
  { name: "Email", href: `mailto:${profile.email}`, external: false },
  { name: "LinkedIn", href: profile.linkedin, external: true },
];

export default function Footer() {
  return (
    <footer className="border-hairline border-t">
      <div className="text-muted mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex gap-x-6">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
