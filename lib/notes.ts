export type Note = { id: number; text: string; createdAt: string };

const notes: Note[] = [];
let nextId = 1;

export function listNotes(): Note[] {
  return [...notes].reverse();
}

export function addNote(text: string): Note | null {
  const trimmed = text.trim().slice(0, 200);
  if (trimmed === "") {
    return null;
  }
  const note = { id: nextId++, text: trimmed, createdAt: new Date().toISOString() };
  notes.push(note);
  return note;
}

export function resetNotes(): void {
  notes.length = 0;
  nextId = 1;
}
