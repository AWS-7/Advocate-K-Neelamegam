import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function navigateTo(href: string) {
  if (href.startsWith("http")) {
    window.location.href = href;
    return;
  }

  if (href.startsWith("/#")) {
    const id = href.slice(2);
    if (window.location.pathname === "/") {
      scrollToSection(id);
    } else {
      window.location.href = href;
    }
    return;
  }

  if (href.startsWith("#")) {
    scrollToSection(href.slice(1));
    return;
  }

  window.location.href = href;
}
