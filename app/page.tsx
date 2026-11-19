import { Suspense } from "react";
import { saveNote } from "./actions";
import { NotesList } from "./_components/notes-list";
import { ServerInfo } from "./_components/server-info";

export default function Home() {
  return (
    <main>
      <h1>Next.js on Spectivis Cloud</h1>
      <p>
        This page is rendered on the server. The heading appears at once and the section below
        streams in after a short delay, which shows that responses are not buffered.
      </p>

      <h2>Server details</h2>
      <Suspense fallback={<p>Loading server details...</p>}>
        <ServerInfo />
      </Suspense>

      <h2>Notes</h2>
      <p>
        The form calls a server action. The note is kept in memory, so it resets on each deploy. A
        callback registered with <code>after()</code> logs a line once the response is sent. Check the
        Logs tab.
      </p>
      <form action={saveNote}>
        <input name="text" placeholder="Write a note" maxLength={200} required />
        <button type="submit">Save</button>
      </form>
      <Suspense fallback={<p>Loading notes...</p>}>
        <NotesList />
      </Suspense>

      <p>
        <a href="/api/health">Health route</a>
      </p>
    </main>
  );
}
