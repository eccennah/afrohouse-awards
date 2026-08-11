import Link from "next/link";

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
    <div className="min-h-screen bg-[#0D0B0C] pb-16 text-[#F4EDE4] md:pb-0">
      <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-[#4A1F2B]/30 bg-[#0D0B0C]/95 px-5 backdrop-blur md:px-20">
        <button aria-label="Open menu" className="text-[#8A8177] transition-colors hover:text-[#2ED9A8] md:hidden"><MenuIcon /></button>
        <div className="font-display text-center text-xl font-bold text-[#F4EDE4] md:text-2xl">Afro House Awards</div>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link className="font-bold uppercase tracking-[0.1em] text-[#E8623D]" href="/">Home</Link>
          <Link className="font-bold uppercase tracking-[0.1em] text-[#8A8177] transition-colors hover:text-[#2ED9A8]" href="/vote">Vote</Link>
          <Link className="font-bold uppercase tracking-[0.1em] text-[#8A8177] transition-colors hover:text-[#2ED9A8]" href="/my-votes">My Votes</Link>
        </nav>
        <button aria-label="Profile" className="text-[#8A8177] transition-colors hover:text-[#2ED9A8]"><AccountIcon /></button>
      </header>

      <main id="home" className="flex flex-col">
        <section className="relative flex min-h-[84vh] items-center justify-center overflow-hidden px-5 pt-20 md:px-20">
          <div className="absolute inset-0 bg-[#0D0B0C]" />
          <div className="absolute inset-0 grain-overlay opacity-20" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8 text-center md:text-left">
              <div>
                <h1 className="mt-6 max-w-3xl font-display text-[clamp(3rem,7vw,5.2rem)] uppercase leading-[0.92] tracking-[-0.05em] text-white">
                  Afro House Awards
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link href="/vote" className="inline-flex items-center gap-3 rounded-full bg-[#E8623D] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(232,98,61,0.28)] transition duration-200 hover:bg-[#ff7a3d]">Vote Now <Arrow /></Link>
                <Link href="/my-votes" className="inline-flex rounded-full border border-[#8A8177]/20 bg-[#14100f] px-8 py-4 text-sm font-semibold text-[#F4EDE4] transition duration-200 hover:border-[#2ED9A8] hover:text-[#2ED9A8]">My Votes</Link>
              </div>
              {/* <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-[#4A1F2B]/50 bg-[#1d1216] px-5 py-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2ED9A8]">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-[#8A8177]">{item.value}</p>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="relative mx-auto flex h-[460px] w-[460px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#2ED9A8]/10 bg-[#0D0B0C] shadow-[0_0_90px_rgba(46,217,168,0.14)]" />
              <div className="record relative flex h-[390px] w-[390px] items-center justify-center rounded-full border border-[#F4EDE4]/10 bg-[#090709] shadow-[inset_0_0_0_1px_rgba(244,237,228,0.05)]">
                <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,237,228,0.08),transparent_42%)]" />
                <div className="groove-lines absolute inset-10 rounded-full" />
                <div className="absolute inset-[calc(50%-34px)] mx-auto h-20 w-20 rounded-full bg-[#E8623D] border border-[#F4EDE4]/15 text-center text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#0D0B0C] leading-[80px]">BEST DJ</div>
              </div>
              <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-[#F4EDE4]/10 bg-[#4A1F2B]/30 blur-3xl" />
            </div>
          </div>
        </section>

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
                <span className="inline-flex items-center gap-2 font-semibold text-[#E8623D]">Vote Now <Arrow /></span>
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
                    <span className="inline-flex items-center gap-2 font-semibold text-[#E8623D]">Vote <Arrow /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/vote" className="inline-flex rounded-full border border-[#8A8177]/30 bg-[#14100f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#F4EDE4] transition duration-200 hover:border-[#2ED9A8] hover:text-[#2ED9A8]">View All Categories</Link>
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
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb596]">Nominee {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <footer className="flex flex-col items-center justify-between gap-6 border-t border-[#57423a]/40 bg-[#0e0e0e] px-5 py-12 text-center md:flex-row md:px-20 md:text-left">
        <div className="font-display text-2xl font-bold">Afro House Awards</div>
        <div className="flex flex-wrap justify-center gap-6 text-[#dec0b5]">
          <Link href="/" className="hover:text-[#ffb596]">Privacy Policy</Link>
          <Link href="/" className="hover:text-[#ffb596]">Terms of Service</Link>
          <Link href="/" className="hover:text-[#ffb596]">Contact Us</Link>
          <Link href="/" className="hover:text-[#ffb596]">About</Link>
        </div>
        <div className="text-sm text-[#dec0b5]">© 2026 Afro House Awards.</div>
      </footer>

      <nav className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t border-white/10 bg-[#201f1f] md:hidden" aria-label="Mobile navigation">
        <Link href="/" className="flex h-full w-1/3 flex-col items-center justify-center text-xs font-bold uppercase tracking-wider text-[#ffb596]"><span className="mb-1 text-xl">⌂</span>Home</Link>
        <Link href="/vote" className="flex h-full w-1/3 flex-col items-center justify-center text-xs uppercase tracking-wider text-[#dec0b5]"><span className="mb-1 text-xl">▦</span>Vote</Link>
        <Link href="/my-votes" className="flex h-full w-1/3 flex-col items-center justify-center text-xs uppercase tracking-wider text-[#dec0b5]"><span className="mb-1 text-xl">✓</span>My Votes</Link>
      </nav>
    </div>
  );
}
