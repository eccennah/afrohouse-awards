import Image from "next/image";
import Link from "next/link";

const teaserImages = [
  { src: "/DJ Maphorisa.jpg", alt: "DJ Maphorisa" },
  { src: "/Uncle Waffles.jpg", alt: "Uncle Waffles" },
  { src: "/Black-Coffee.jpg", alt: "Black Coffee" },
];

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <rect x="5" y="10.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function VotePage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#0f0e0e] px-5 pb-24 pt-28 text-[#e5e2e1] sm:px-8 md:px-16 lg:px-20">
      <div className="absolute inset-0 grain-overlay opacity-20" />
      <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center gap-10 text-center">
        <div className="flex items-end">
          {teaserImages.map((img, index) => (
            <div
              key={img.src}
              className={`relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#0f0e0e] bg-[#111] shadow-[0_18px_45px_rgba(0,0,0,0.55)] sm:h-32 sm:w-32 ${
                index === 1 ? "z-10 -mx-2 h-28 w-28 -translate-y-4 sm:h-36 sm:w-36" : "mx-[-6px]"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover object-center grayscale" sizes="140px" />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>

        <p className="inline-flex items-center gap-2 rounded-full border border-[#FF3131]/25 bg-[#1d1410]/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#FF3131]">
          <LockIcon /> Voting Coming Soon
        </p>

        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold uppercase tracking-[-0.02em] text-white md:text-6xl">The Ballot Isn&apos;t Open Yet</h1>
          <p className="mx-auto max-w-xl text-base leading-8 text-[#dec0b5]">We&apos;re finalizing this year&apos;s nominees across Best DJ, Best Song, and Best Rave. Voting opens soon &mdash; check back shortly.</p>
        </div>

        <Link href="/" className="inline-flex rounded-full bg-[#FF3131] px-8 py-4 text-sm font-semibold uppercase text-[#111] transition duration-200 hover:bg-[#FF5C5C]">Back to Home</Link>
      </div>
    </main>
  );
}
