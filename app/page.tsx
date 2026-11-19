import { Suspense } from "react";
import { version as nextVersion } from "next/package.json";
import { saveNote } from "./actions";
import { NotesList } from "./_components/notes-list";
import { ServerInfo } from "./_components/server-info";

export default function Home() {
  return (
    <main className="wrap">
      <section className="intro">
        <p className="eyebrow">Next.js {nextVersion}</p>
        <h1>Your starter Next.js app, hosted by Spectivis</h1>
        <p className="lead">
          An App Router app with streamed server rendering, a server action and a health route.
          Change it or replace it with your own app.
        </p>
      </section>

      <section className="block">
        <header>
          <h2>Next steps</h2>
        </header>
        <div className="block-body">
          <ol className="steps">
            <li>
              <h3>Edit this page</h3>
              <p>
                It lives in <code>app/page.tsx</code>. The layout is in <code>app/layout.tsx</code>.
              </p>
            </li>
            <li>
              <h3>Push to deploy</h3>
              <p>Each push to the connected branch builds and redeploys the app.</p>
            </li>
            <li>
              <h3>Read the logs</h3>
              <p>Server output, including the <code>after()</code> callback, shows in the Logs tab.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="block">
        <header>
          <h2>Streaming</h2>
          <p>The page shell arrives first. This part follows once the server is done.</p>
        </header>
        <div className="block-body">
          <Suspense fallback={<p className="state wait">Loading from the server.</p>}>
            <ServerInfo />
          </Suspense>
        </div>
      </section>

      <section className="block">
        <header>
          <h2>Notes</h2>
          <p>A form that calls a server action.</p>
        </header>
        <div className="block-body">
          <form className="inline" action={saveNote}>
            <input name="text" placeholder="Write a note" aria-label="Note" maxLength={200} required />
            <button className="button" type="submit">
              Save
            </button>
          </form>
          <p className="note">
            Notes are kept in memory, so they reset on each deploy. After each save, a callback
            registered with <code>after()</code> logs a line once the response is sent.
          </p>
          <Suspense fallback={<p className="empty">Loading notes.</p>}>
            <NotesList />
          </Suspense>
        </div>
      </section>

      <section className="block">
        <header>
          <h2>Health route</h2>
          <p>For uptime checks.</p>
        </header>
        <div className="block-body">
          <p>
            <a href="/api/health">
              <code>/api/health</code>
            </a>{" "}
            answers <code>{'{"status":"ok"}'}</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
