export function ContactButton() {
  return (
    <button
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
      style={{
        background:
          "linear-gradient(123deg, #0A2E2E 7%, #0E8B8B 37%, #2DC5C5 72%, #5EE4E4 100%)",
        boxShadow:
          "0px 4px 4px rgba(45, 197, 197, 0.25), 4px 4px 12px #0E8B8B inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </button>
  );
}

export function LiveProjectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border-2 border-[#5EE4E4] text-[#5EE4E4] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#5EE4E4]/10 transition-colors"
    >
      Live Project
    </a>
  );
}
