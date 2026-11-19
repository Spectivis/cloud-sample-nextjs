import { connection } from "next/server";
import { listNotes } from "@/lib/notes";

export async function NotesList() {
  await connection();
  const notes = listNotes();

  if (notes.length === 0) {
    return <p className="empty">No notes yet.</p>;
  }

  return (
    <ul className="entries">
      {notes.map((note) => (
        <li key={note.id}>
          <div className="who">
            <strong>Note {note.id}</strong>
            <span className="when">{note.createdAt.slice(11, 16)} UTC</span>
          </div>
          <p>{note.text}</p>
        </li>
      ))}
    </ul>
  );
}
