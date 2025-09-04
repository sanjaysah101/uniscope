"use client";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      onFocus={(e) => {
        e.currentTarget.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
    >
      Skip to main content
    </a>
  );
}
