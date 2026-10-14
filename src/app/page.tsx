export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white text-zinc-950">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-sm font-semibold tracking-tight">Your Product</span>
        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#features" className="hover:text-zinc-950">
            Features
          </a>
          <a href="#cta" className="hover:text-zinc-950">
            Get started
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="flex flex-col items-start gap-6 py-24 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Coming soon
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            A clean landing page, ready to ship.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600">
            Placeholder copy for now. Swap in your headline, product story, and
            call to action when you are ready.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Join waitlist
            </a>
            <a
              href="#features"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-950 hover:bg-zinc-50"
            >
              See features
            </a>
          </div>
        </section>

        <section id="features" className="grid gap-6 border-t border-zinc-100 py-20 sm:grid-cols-3">
          {[
            {
              title: "Fast to launch",
              body: "Next.js on Vercel, so every git push can go live.",
            },
            {
              title: "Easy to edit",
              body: "Sections are already laid out. Replace the text and you are done.",
            },
            {
              title: "Ready to grow",
              body: "Add pricing, testimonials, or a form whenever you need them.",
            },
          ].map((feature) => (
            <article key={feature.title} className="rounded-2xl bg-zinc-50 p-6">
              <h2 className="text-base font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.body}</p>
            </article>
          ))}
        </section>

        <section
          id="cta"
          className="mb-24 rounded-3xl bg-zinc-950 px-8 py-16 text-white sm:px-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight">Start here.</h2>
          <p className="mt-3 max-w-lg text-zinc-300">
            This block is a call to action. Point it at an email list, signup
            form, or product link later.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
          >
            hello@example.com
          </a>
        </section>
      </main>

      <footer className="border-t border-zinc-100 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Your Product
      </footer>
    </div>
  );
}
