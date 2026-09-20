import { createFileRoute } from "@tanstack/react-router";
import { Heart, MailOpen, X } from "lucide-react";
import { useState } from "react";

import flowers from "@/assets/apology-flowers.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I’m Sorry, My Love | A Letter From My Heart" },
      { name: "description", content: "A sincere apology and a promise, written from the heart." },
      { property: "og:title", content: "I’m Sorry, My Love" },
      { property: "og:description", content: "A sincere apology and a promise, written from the heart." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <img
        src={flowers}
        alt="Blush peonies and deep red roses surrounding a love letter"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover object-center animate-photo-breathe"
      />
      <div className="absolute inset-0 bg-scene-wash" />
      <div className="absolute inset-0 bg-scene-vignette" />

      <div className="petal-field pointer-events-none absolute inset-0" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} className={`petal petal-${index + 1}`} />
        ))}
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-veil pb-5 animate-reveal">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-soft">A letter from my heart</p>
          <Heart className="size-4 fill-current text-accent" aria-hidden="true" />
        </header>

        <div className="flex flex-1 items-center py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="mb-5 font-medium uppercase tracking-[0.3em] text-accent animate-reveal delay-1">
              To the one I love
            </p>
            <h1 className="font-display text-6xl leading-[0.98] text-balance sm:text-8xl lg:text-9xl animate-reveal delay-2">
              I’m sorry,
              <span className="block italic text-accent-strong">my love.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-soft sm:text-lg animate-reveal delay-3">
              I know my words and actions hurt you. You deserved patience, gentleness, and a love that made you feel safe. I’m not asking you to forget—only for the chance to listen, to learn, and to make things right.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5 animate-reveal delay-4">
              <Button
                variant="romantic"
                size="lg"
                className="h-12 rounded-full px-7"
                onClick={() => setIsOpen(true)}
              >
                <MailOpen />
                Open my heart
              </Button>
              <p className="font-display text-xl italic text-soft">Please read one last thing…</p>
            </div>
          </div>
        </div>

        <footer className="flex items-end justify-between border-t border-veil pt-5 text-xs uppercase tracking-[0.22em] text-soft animate-reveal delay-4">
          <span>With all my heart</span>
          <span className="hidden sm:inline">Always yours</span>
        </footer>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-modal-backdrop p-5 animate-modal-in" role="dialog" aria-modal="true" aria-labelledby="letter-title">
          <article className="letter-paper relative w-full max-w-xl overflow-hidden rounded-sm border border-letter-border px-7 py-10 text-center shadow-[var(--shadow-letter)] sm:px-14 sm:py-14">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3 rounded-full text-muted-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close letter"
            >
              <X />
            </Button>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">My promise to you</p>
            <h2 id="letter-title" className="mt-5 font-display text-4xl text-letter-ink sm:text-5xl">I choose us.</h2>
            <div className="mx-auto my-7 h-px w-16 bg-accent" />
            <p className="text-base leading-8 text-letter-soft sm:text-lg">
              I can’t undo the moment I hurt you, but I can own it. I will listen without defending myself, love you without taking you for granted, and show you through my actions that your heart is precious to me.
            </p>
            <p className="mt-7 font-display text-2xl italic text-accent-strong">Can you forgive me?</p>
            <Heart className="mx-auto mt-6 size-5 fill-current text-accent animate-heartbeat" aria-hidden="true" />
          </article>
        </div>
      )}
    </main>
  );
}
