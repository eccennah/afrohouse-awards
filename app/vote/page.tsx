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
    description: "A pioneer in shaping the modern Amapiano sound, producing anthems that dominate global dancefloors.",
    tag: "Amapiano",
  },
  {
    id: "blackCoffee",
    name: "Black Coffee",
    image: "/Black-Coffee.jpg",
    role: "Ato Music",
    description: "Grammy-winning icon whose soulful deep house sets have elevated the genre on the international stage.",
    tag: "Deep House",
  },
  {
    id: "uncleWaffles",
    name: "Uncle Waffles",
    image: "/Uncle Waffles.jpg",
    role: "Amapiano",
    description: "The infectious energy of her performances has made her a global sensation and vital force in Amapiano.",
    tag: "Amapiano",
  },
];

const storageKey = "afrohouse-vote-best-dj";

export default function VotePage() {
  const [selectedDj, setSelectedDj] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedVote = window.localStorage.getItem(storageKey);
    if (storedVote) {
      setSelectedDj(storedVote);
    }
  }, []);

  async function handleVote(djId: string) {
    if (selectedDj || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dj: djId }),
      });

      if (!response.ok) {
        throw new Error("Vote request failed");
      }

      window.localStorage.setItem(storageKey, djId);
      setSelectedDj(djId);
      setStatusMessage("Vote submitted. You can see your choice in My Votes.");
    } catch (error) {
      setStatusMessage("Unable to submit your vote. Please refresh and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0f0e0e] px-5 pb-24 pt-28 text-[#e5e2e1] sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        <header className="space-y-4 text-center">
          <p className="inline-flex rounded-full border border-[#e2703a]/25 bg-[#1d1410]/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ffb596]">Best DJ Nominees</p>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold md:text-5xl">Best DJ Nominees</h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[#dec0b5]">Celebrate the rhythmic architects who defined the sound of the year. Cast your vote for the ultimate Afro House DJ.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#dec0b5]">
            <span className="rounded-full bg-[#1b1a1a]/90 px-4 py-2">Select one DJ</span>
          </div>
          <div className="flex justify-center gap-3">
            <Link href="/my-votes" className="rounded-full border border-[#dec0b5]/25 bg-[#191817] px-6 py-3 text-sm font-semibold text-[#dec0b5] transition hover:border-[#ffb596] hover:text-[#ffb596]">My Votes</Link>
            <Link href="/admin" className="rounded-full bg-[#e2703a] px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#ffb596]">Admin View</Link>
          </div>
        </header>

        {statusMessage ? (
          <div className="rounded-3xl border border-[#ffb596]/20 bg-[#21201f] px-6 py-4 text-sm text-[#ffebd1] shadow-[0_20px_60px_-40px_rgba(226,112,58,0.9)]">{statusMessage}</div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-3">
          {djs.map((dj) => {
            const isSelected = selectedDj === dj.id;
            const isDisabled = Boolean(selectedDj && !isSelected);
            return (
              <article key={dj.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#171616] shadow-[0_28px_70px_-40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1">
                <div className="relative h-96 overflow-hidden bg-[#111]">
                  <Image src={dj.image} alt={dj.name} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/95 via-[#131313]/10 to-transparent" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-[#000]/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#ffb596]">{dj.tag}</div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#a98d6e]">{dj.role}</p>
                    <h2 className="text-2xl font-bold text-white">{dj.name}</h2>
                    <p className="text-sm leading-7 text-[#cfc1b5]">{dj.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleVote(dj.id)}
                    disabled={isDisabled || isSubmitting}
                    className={`inline-flex w-full items-center justify-center rounded-3xl px-6 py-3 text-sm font-semibold transition ${isSelected ? "bg-[#0f0] text-[#071100]" : "bg-[#e2703a] text-[#111] hover:bg-[#ffb596]"} ${isDisabled ? "cursor-not-allowed opacity-60" : "shadow-[0_18px_50px_-22px_rgba(226,112,58,0.9)]"}`}
                  >
                    {isSelected ? "Done ✓" : isDisabled ? "Voted" : isSubmitting ? "Sending…" : "Vote Now"}
                  </button>
                  {isSelected ? <p className="text-sm text-[#a4cca1]">Your vote is locked in for this DJ.</p> : null}
                </div>
              </article>
            );
          })}
        </div>

       
      </div>
    </main>
  );
}
