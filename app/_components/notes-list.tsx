import { connection } from "next/server";
import { listNotes } from "@/lib/notes";

export async function NotesList() {
  await connection();
  const notes = listNotes();

  if (notes.length === 0) {
    return <p className="empty">No notes yet.</p>;
  }

  return (
    <ul className="list">
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <span className="meta">{note.createdAt}</span>
        </li>
      ))}
    </ul>
  );
}
