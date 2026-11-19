import { Suspense } from "react";
import { version as nextVersion } from "next/package.json";
import { saveNote } from "./actions";
import { NotesList } from "./_components/notes-list";
import { ServerInfo } from "./_components/server-info";

export default function Home() {
  return (
    <main>
      <section className="welcome">
        <div className="welcome-copy">
          <h1>Your starter Next.js app</h1>
          <p className="intro">
            Hosted on Spectivis Cloud. Edit <code>app/page.tsx</code>, push, and the new version goes
            live. The layout is in <code>app/layout.tsx</code>.
          </p>

          <ul className="services">
            <li>
              <span className="name">Streaming</span>
              <span className="detail">
                <Suspense
                  fallback={
                    <>
                      <span className="state wait">Loading</span> &middot; the shell arrived first,
                      this row follows
                    </>
                  }
                >
                  <ServerInfo />
                </Suspense>
              </span>
            </li>
            <li>
              <span className="name">Server action</span>
              <span className="detail">The notes form below saves on the server.</span>
            </li>
            <li>
              <span className="name">after()</span>
              <span className="detail">Each save logs a line once the response is sent. See the Logs tab.</span>
            </li>
            <li>
              <span className="name">Health</span>
              <span className="detail">
                <a href="/api/health">
                  <code>/api/health</code>
                </a>{" "}
                answers <code>{'{"status":"ok"}'}</code> for uptime checks.
              </span>
            </li>
          </ul>

          <div className="actions">
            <a className="button" href="#notes">
              Write a note
            </a>
            <a className="button quiet" href="https://spectivis.com">
              Open Spectivis Cloud
            </a>
          </div>
        </div>

        <div className="panel" aria-hidden="true">
          <dl className="panel-meta">
            <div>
              <dt>Framework</dt>
              <dd>Next.js {nextVersion}</dd>
            </div>
            <div>
              <dt>Router</dt>
              <dd>App Router</dd>
            </div>
          </dl>
          <div className="panel-word">Next.js</div>
        </div>
      </section>

      <section className="guestbook" id="notes">
        <div>
          <h2>Write a note</h2>
          <p className="sub">
            The form calls a server action. Notes are kept in memory, so they reset on each deploy.
          </p>
          <form className="form" action={saveNote}>
            <label className="field">
              Note
              <input name="text" maxLength={200} required />
            </label>
            <button className="button" type="submit">
              Save note
            </button>
          </form>
        </div>

        <div>
          <h2>Notes</h2>
          <p className="sub">Newest first.</p>
          <Suspense fallback={<p className="empty">Loading notes.</p>}>
            <NotesList />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
