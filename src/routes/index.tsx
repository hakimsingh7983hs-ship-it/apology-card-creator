import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, MailOpen, RotateCcw } from "lucide-react";
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
  const [page, setPage] = useState<1 | 2 | 3>(1);

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

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-10 sm:py-6 lg:px-16">
        <header className="flex items-center justify-between border-b border-veil pb-5 animate-reveal">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-soft">A letter from my heart</p>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-soft" aria-live="polite">
            {page} of 3
          </p>
        </header>

        <div className="flex flex-1 items-center justify-center py-8 sm:py-12">
          {page === 1 && (
            <div key="page-1" className="w-full max-w-2xl text-center animate-page-turn">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-accent">
                Sealed with all my love
              </p>
              <button
                type="button"
                className="envelope group mx-auto block w-full max-w-md cursor-pointer bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                onClick={() => setPage(2)}
                aria-label="Open the letter"
              >
                <span className="envelope-body">
                  <span className="envelope-letter">
                    <span className="font-script text-4xl text-letter-ink sm:text-5xl">My dearest love</span>
                    <span className="mt-1 text-[0.55rem] uppercase tracking-[0.3em] text-letter-soft">Forever yours</span>
                  </span>
                  <span className="envelope-flap" />
                  <span className="envelope-front" />
                  <span className="envelope-seal">
                    <Heart className="size-5 fill-current" aria-hidden="true" />
                  </span>
                </span>
              </button>
               <h1 className="mt-9 font-script text-6xl leading-tight text-foreground sm:text-8xl">A letter for you</h1>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-soft">
                 Every word inside has been waiting for your heart.
              </p>
              <Button
                variant="romantic"
                size="lg"
                className="mt-8 h-12 rounded-full px-7"
                onClick={() => setPage(2)}
              >
                <MailOpen />
                 Open gently
              </Button>
            </div>

          )}

          {page === 2 && (
            <article key="page-2" className="letter-paper relative w-full max-w-2xl rounded-sm border border-letter-border px-7 py-9 text-center shadow-[var(--shadow-letter)] sm:px-14 sm:py-12 animate-page-turn">
              <p className="font-script text-3xl text-accent-strong">My dearest love,</p>
              <h1 className="mt-3 font-display text-5xl leading-tight text-letter-ink sm:text-7xl">
                I’m sorry,
                <span className="font-script block text-6xl text-accent-strong sm:text-8xl">with all my heart.</span>
              </h1>
              <div className="mx-auto my-6 h-px w-16 bg-accent" />
              <p className="mx-auto max-w-xl text-base leading-8 text-letter-soft sm:text-lg">
                 I know my words and actions hurt you. You deserved patience, gentleness, and a love that made you feel safe. If I could hold that moment again, I would choose tenderness. I’m not asking you to forget—only for the chance to listen, to learn, and to love you better.
              </p>
              <Button
                variant="romantic"
                size="lg"
                className="mt-8 h-12 rounded-full px-7"
                onClick={() => setPage(3)}
              >
                 A promise from me
                <ArrowRight />
              </Button>
            </article>
          )}

          {page === 3 && (
            <article key="page-3" className="letter-paper relative w-full max-w-2xl rounded-sm border border-letter-border px-7 py-9 text-center shadow-[var(--shadow-letter)] sm:px-14 sm:py-12 animate-page-turn">
              <p className="font-script text-3xl text-accent-strong">My promise to you</p>
              <h1 className="mt-3 font-display text-5xl text-letter-ink sm:text-7xl">I choose us.</h1>
              <div className="mx-auto my-6 h-px w-16 bg-accent" />
              <p className="mx-auto max-w-xl text-base leading-8 text-letter-soft sm:text-lg">
                 I can’t undo the moment I hurt you, but I can own it. I will listen without defending myself, hold your heart with care, and never take your love for granted. In the quiet days and the difficult ones, I will keep choosing you.
              </p>
              <p className="font-script mt-7 text-5xl text-accent-strong sm:text-6xl">Can you forgive me?</p>
              <Heart className="mx-auto mt-6 size-6 fill-current text-accent animate-heartbeat" aria-hidden="true" />
              <Button
                variant="ghost"
                size="sm"
                className="mt-7 rounded-full text-letter-soft hover:bg-accent/15"
                onClick={() => setPage(1)}
              >
                <RotateCcw />
                Read again
              </Button>
            </article>
          )}
        </div>

        <footer className="flex items-end justify-between border-t border-veil pt-5 text-xs uppercase tracking-[0.22em] text-soft animate-reveal delay-4">
          <span>With all my heart</span>
          <span className="hidden sm:inline">Always yours</span>
        </footer>
      </section>
    </main>
  );
}
