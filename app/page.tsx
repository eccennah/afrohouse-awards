import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Best DJ",
    description: "The maestros who orchestrate the rhythm and move the crowd.",
    className: "md:col-span-8 min-h-[360px] md:min-h-[400px]",
    pattern: "rhythmic-pattern-1",
    featured: true,
  },
  {
    name: "Best Song",
    description: "The anthems that defined the year.",
    className: "min-h-[220px] md:min-h-0",
    pattern: "rhythmic-pattern-2",
  },
  {
    name: "Best Rave",
    description: "Unforgettable nights of pure energy.",
    className: "min-h-[220px] md:min-h-0",
    pattern: "rhythmic-pattern-3",
  },
];

const highlights = [
  { label: "Live MVP", value: "Local voting flow" },
  { label: "Admin view", value: "Check totals" },
  { label: "Voter recap", value: "See your picks" },
];

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
    <div className="min-h-screen bg-[#131313] pb-16 text-[#e5e2e1] md:pb-0">
      <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-[#131313]/95 px-5 backdrop-blur md:px-20">
        <button aria-label="Open menu" className="text-[#dec0b5] transition-colors hover:text-[#ffb596] md:hidden"><MenuIcon /></button>
        <div className="font-display text-center text-xl font-bold text-[#e5e2e1] md:text-2xl">Afro House Awards</div>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link className="font-bold uppercase tracking-[0.1em] text-[#ffb596]" href="/">Home</Link>
          <Link className="font-bold uppercase tracking-[0.1em] text-[#dec0b5] transition-colors hover:text-[#ffb596]" href="/vote">Vote</Link>
          <Link className="font-bold uppercase tracking-[0.1em] text-[#dec0b5] transition-colors hover:text-[#ffb596]" href="/my-votes">My Votes</Link>
        </nav>
        <button aria-label="Profile" className="text-[#dec0b5] transition-colors hover:text-[#ffb596]"><AccountIcon /></button>
      </header>

      <main id="home" className="flex flex-col">
        <section className="relative flex min-h-[740px] items-center justify-center overflow-hidden px-5 pt-20 md:min-h-[84vh] md:px-20">
          <Image src="/rave.jpg" alt="Afro House rave" fill priority className="scale-105 object-cover object-center brightness-[0.55] saturate-125" sizes="100vw" />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#131313]/95 via-[#131313]/75 to-[#131313]/30" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute left-[-6%] top-12 h-56 w-56 rounded-full bg-[#e2703a]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[6%] h-72 w-72 rounded-full bg-[#ffb596]/20 blur-[140px]" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb596]/40 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb596] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e2703a]" />
              Live MVP • Local voting
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(2.3rem,6vw,4.4rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-white">
              Afro House Awards<br /><span className="text-[#ffb596]">Vote Your Champions</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#f3e6de] sm:text-xl">Celebrate the rhythm, honor the heritage, and crown the acts shaping the sound.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link href="/vote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#e2703a] px-8 py-4 font-semibold text-white shadow-[0_14px_40px_rgba(226,112,58,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff7a3d]">Start Voting <Arrow /></Link>
              <a href="#votes" className="inline-flex rounded-[999px] border border-white/20 bg-white/10 px-8 py-4 font-semibold text-[#f3e6de] backdrop-blur transition-colors hover:border-[#ffb596] hover:text-[#ffb596]">See nominees</a>
            </div>
            <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb596]">{item.label}</p>
                  <p className="mt-1 text-sm text-[#f3e6de]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trending" className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-20">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="border-l-4 border-[#e2703a] pl-4 font-display text-3xl font-bold md:text-4xl">Trending Categories</h2>
            <p className="text-[#dec0b5]">The most hotly contested awards of the year.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <Link href="/vote" className={`${categories[0].className} card-shell group relative overflow-hidden rounded-[24px] border border-[#ffb596]/20 bg-[#2a2a2a] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#e2703a] md:p-12`}>
              <div className={`absolute inset-0 ${categories[0].pattern} opacity-35 transition-opacity group-hover:opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/70 to-transparent" />
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-[#ffb596]/20 bg-[#e2703a]/10 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col justify-end gap-6">
                <span className="inline-flex rounded-full bg-[#000000]/55 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#ffb596]">Featured</span>
                <div>
                  <h3 className="font-display text-3xl font-bold text-white md:text-4xl">Best DJ</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#f0d9c7]/90">{categories[0].description} Vote for the ultimate sound architect.</p>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-[#ffb596]">Vote Now <Arrow /></span>
              </div>
            </Link>
            <div className="flex flex-col gap-6 md:col-span-4">
              {categories.slice(1).map((category) => (
                <Link key={category.name} href="/vote" className={`${category.className} card-shell group relative overflow-hidden rounded-[24px] border border-[#57423a]/40 bg-[#212021] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e2703a]`}>
                  <div className={`absolute inset-0 ${category.pattern} opacity-25`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/40 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end gap-4">
                    <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-[#ffb596]">{category.name}</h3>
                    <p className="text-[#dec0b5]">{category.description}</p>
                    <span className="flex items-center gap-2 font-semibold text-[#ffb596]">Vote <Arrow /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/vote" className="inline-flex rounded-[999px] border border-white/20 px-6 py-3 font-semibold text-[#dec0b5] transition duration-200 hover:border-[#e2703a] hover:text-[#ffb596]">View All Categories</Link>
          </div>
        </section>

        <section id="votes" className="border-t border-white/5 bg-[linear-gradient(135deg,#1c1b1b_0%,#161616_100%)] px-5 py-20 md:px-20">
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
        </section>
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
