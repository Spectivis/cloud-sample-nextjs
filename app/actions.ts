"use server";

import { after } from "next/server";
import { revalidatePath } from "next/cache";
import { addNote } from "@/lib/notes";

export async function saveNote(formData: FormData): Promise<void> {
  const note = addNote(String(formData.get("text") ?? ""));
  if (note) {
    after(() => {
      console.log(`after(): note ${note.id} saved, this runs once the response is sent`);
    });
    revalidatePath("/");
  }
}
