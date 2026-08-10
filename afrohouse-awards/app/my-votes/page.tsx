"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const djs = [
  {
    id: "djMaphorisa",
    name: "DJ Maphorisa",
    image: "/DJ Maphorisa.jpg",
    role: "Amapiano",
  },
  {
    id: "blackCoffee",
    name: "Black Coffee",
    image: "/Black-Coffee.jpg",
    role: "Ato Music",
  },
  {
    id: "uncleWaffles",
    name: "Uncle Waffles",
    image: "/Uncle Waffles.jpg",
    role: "Amapiano",
  },
];

const storageKey = "afrohouse-vote-best-dj";

export default function MyVotesPage() {
  const [selectedDj, setSelectedDj] = useState<string | null>(null);

  useEffect(() => {
    const storedVote = window.localStorage.getItem(storageKey);
    if (storedVote) {
      setSelectedDj(storedVote);
    }
  }, []);

  const vote = djs.find((dj) => dj.id === selectedDj);

  return (
    <main className="min-h-screen bg-[#0e0d0d] px-5 pb-24 pt-28 text-[#e5e2e1] sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8">
        <header className="space-y-4 text-center">
          <p className="inline-flex rounded-full border border-[#e2703a]/25 bg-[#1d1410]/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ffb596]">Your Vote</p>
          <h1 className="font-display text-4xl font-bold md:text-5xl">My Votes</h1>
        </header>

        {vote ? (
          <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#191818] shadow-[0_28px_80px_-45px_rgba(0,0,0,0.7)]">
            <div className="relative h-[420px] bg-[#0f0f0f]">
              <Image src={vote.image} alt={vote.name} fill className="object-cover object-center" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/95 via-[#131313]/25 to-transparent" />
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-white">{vote.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#a98d6e]">{vote.role}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#cfc1b5]">You voted for this DJ in the Best DJ category. </p>
            </div>
          </section>
        ) : (
          <section className="rounded-[2rem] border border-white/10 bg-[#121010] p-8 text-center shadow-[0_24px_70px_-40px_rgba(226,112,58,0.9)]">
            <p className="text-lg font-semibold text-white">Looks like you haven&apos;t voted yet.</p>
            <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-[#cfc1b5]">Head to the voting page to choose your favorite DJ and keep your selection visible here.</p>
            <Link href="/vote" className="mt-8 inline-flex rounded-full bg-[#e2703a] px-8 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#ffb596]">Go Vote Now</Link>
          </section>
        )}
      </div>
    </main>
  );
}
