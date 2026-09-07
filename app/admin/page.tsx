import Link from "next/link";

const djNames: Record<string, string> = {
  djMaphorisa: "DJ Maphorisa",
  blackCoffee: "Black Coffee",
  uncleWaffles: "Uncle Waffles",
};

async function getVoteCounts() {
  const response = await fetch("/api/votes", { cache: "no-store" });
  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function AdminPage() {
  const data = await getVoteCounts();
  const votes = data?.votes ?? {};

  return (
    <main className="min-h-screen bg-[#0b0a0a] px-5 pb-24 pt-28 text-[#e5e2e1] sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto max-w-[1024px] space-y-10">
        <header className="space-y-4 text-center">
          <p className="inline-flex rounded-full border border-[#FF3131]/25 bg-[#1d1410]/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#FF3131]">Admin Dashboard</p>
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold md:text-5xl">Vote Count</h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#dec0b5]">This page shows the current backend tally for each Best DJ nominee. It is intentionally separate from the voter-facing pages.</p>
          </div>
          <div className="flex justify-center gap-3">
            <Link href="/vote" className="rounded-full border border-[#dec0b5]/25 bg-[#191817] px-6 py-3 text-sm font-semibold text-[#dec0b5] transition hover:border-[#FF3131] hover:text-[#FF3131]">Back to Vote</Link>
            <Link href="/my-votes" className="rounded-full bg-[#FF3131] px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#FF5C5C]">My Votes</Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {Object.keys(djNames).map((id) => (
            <div key={id} className="rounded-[1.75rem] border border-white/10 bg-[#151414] p-8 shadow-[0_24px_60px_-40px_rgba(255,49,49,0.9)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#FF3131]">Nominee</p>
              <h2 className="mt-4 text-2xl font-bold text-white">{djNames[id]}</h2>
              <p className="mt-3 text-6xl font-extrabold text-[#FF3131]">{typeof votes[id] === "number" ? votes[id] : "—"}</p>
              <p className="mt-4 text-sm leading-7 text-[#cfc1b5]">This backend tally updates when a voter selects this nominee from the voting screen.</p>
            </div>
          ))}
        </section>

        <div className="rounded-[1.75rem] border border-[#FF3131]/10 bg-[#111010] p-6 text-sm leading-7 text-[#cfc1b5] shadow-[0_18px_50px_-30px_rgba(255,49,49,0.95)]">
          <p className="font-semibold text-[#FF3131]">Note</p>
          <p className="mt-3">Vote counts are tracked by the backend API at <code>/api/votes</code>. The voter-facing selection is saved locally in the browser, while the admin tally is stored server-side.</p>
        </div>
      </div>
    </main>
  );
}
