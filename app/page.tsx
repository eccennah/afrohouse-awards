import Link from "next/link";

import Hero from "./components/Hero";

const categories = [
  {
    name: "Best DJ",
    description: "The maestros who orchestrate the rhythm and move the crowd.",
    featured: true,
  },
  {
    name: "Best Song",
    description: "The anthems that defined the year.",
    featured: false,
  },
  {
    name: "Best Rave",
    description: "Unforgettable nights of pure energy.",
    featured: false,
  },
];

// const highlights = [
//   { label: "Record Sleeve", value: "Analog-inspired cover system" },
//   { label: "Local Voting", value: "Your ballot stays in browser" },
//   { label: "Hidden Admin", value: "Totals accessed by URL" },
// ];

function Arrow() {
  return <span aria-hidden="true" className="text-lg">→</span>;
}

function MenuIcon() {
  return <span aria-hidden="true" className="text-2xl leading-none">☰</span>;
}

function AccountIcon() {
  return <span aria-hidden="true" className="text-2xl leading-none">◎</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0B0C] text-[#F4EDE4]">
      <header className="fixed top-0 z-50 grid h-20 w-full grid-cols-3 items-center border-b border-[#4A1F2B]/30 bg-[#0D0B0C]/95 px-5 backdrop-blur md:px-20">
        <button aria-label="Open menu" className="col-start-1 justify-self-start text-[#8A8177] transition-colors hover:text-[#2ED9A8] md:hidden"><MenuIcon /></button>
        <div className="col-start-2 justify-self-center font-display text-xl font-bold text-[#F4EDE4] md:text-2xl">Afro House Awards</div>
        <button aria-label="Profile" className="col-start-3 justify-self-end text-[#8A8177] transition-colors hover:text-[#2ED9A8]"><AccountIcon /></button>
      </header>

      <main id="home" className="flex flex-col">
        <Hero />

        <section id="trending" className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-20">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="font-display text-[clamp(3rem,6vw,4.8rem)] uppercase tracking-[-0.05em] text-white">CATEGORIES</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            <Link href="/vote" className="md:col-span-8 relative overflow-hidden rounded-[28px] border border-[#4A1F2B]/60 bg-[#4A1F2B] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.25)] transition duration-200 hover:-translate-y-1 hover:border-[#2ED9A8]/50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_25%)]" />
              <div className="absolute bottom-0 left-0 h-24 w-full rounded-t-full bg-gradient-to-t from-[#0D0B0C]/90 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end gap-6">
        
                <div>
                  <h3 className="font-display text-4xl font-bold text-white">Best DJ</h3>

                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-[#FF3131]">Coming Soon <Arrow /></span>
              </div>
            </Link>

            <div className="flex flex-col gap-6 md:col-span-4">
              {categories.slice(1).map((category, index) => (
                <Link
                  key={category.name}
                  href="/vote"
                  className={`relative overflow-hidden rounded-[28px] border border-[#4A1F2B]/60 bg-[#2a161f] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:border-[#2ED9A8]/40 ${
                    index === 0 ? "translate-y-2 rotate-2" : "-translate-y-2 -rotate-1"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,217,168,0.08),transparent_30%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-end gap-4">
                    <h3 className="font-display text-3xl font-bold text-white">{category.name}</h3>
                    <p className="text-[#8A8177]">{category.description}</p>
                    <span className="inline-flex items-center gap-2 font-semibold text-[#FF3131]">Coming Soon <Arrow /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/vote" className="inline-flex rounded-full border border-[#8A8177]/30 bg-[#14100f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#F4EDE4] transition duration-200 hover:border-[#2ED9A8] hover:text-[#2ED9A8]">Voting Opens Soon</Link>
          </div>
        </section>

        {/* <section id="votes" className="border-t border-white/5 bg-[linear-gradient(135deg,#1c1b1b_0%,#161616_100%)] px-5 py-20 md:px-20">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Discover Nominees</h2>
            <p className="mx-auto mt-3 max-w-xl text-[#dec0b5]">Explore the artists nominated for this year&apos;s awards.</p>
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="card-shell flex aspect-square flex-col items-center justify-center rounded-[24px] border border-[#57423a]/40 bg-[#2a2a2a] text-center text-[#353534] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="text-5xl">✦</div>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF3131]">Nominee {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <footer className="flex flex-col items-center justify-between gap-6 border-t border-[#57423a]/40 bg-[#0e0e0e] px-5 py-12 text-center md:flex-row md:px-20 md:text-left">
        <div className="font-display text-2xl font-bold">Afro House Awards</div>
        <div className="flex flex-wrap justify-center gap-6 text-[#dec0b5]">
          <Link href="/" className="hover:text-[#FF3131]">Privacy Policy</Link>
          <Link href="/" className="hover:text-[#FF3131]">Terms of Service</Link>
          <Link href="/" className="hover:text-[#FF3131]">Contact Us</Link>
          <Link href="/" className="hover:text-[#FF3131]">About</Link>
        </div>
        <div className="text-sm text-[#dec0b5]">© 2026 Afro House Awards.</div>
      </footer>
    </div>
  );
}
