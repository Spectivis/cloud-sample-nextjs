import { connection } from "next/server";
import { listNotes } from "@/lib/notes";

export async function NotesList() {
  await connection();
  const notes = listNotes();

  if (notes.length === 0) {
    return <p>No notes yet.</p>;
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text} <small>{note.createdAt}</small>
        </li>
      ))}
    </ul>
  );
}
