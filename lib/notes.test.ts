import { beforeEach, expect, test } from "vitest";
import { addNote, listNotes, resetNotes } from "./notes";

beforeEach(resetNotes);

test("adds a note and lists the newest first", () => {
  addNote("first");
  addNote("second");
  expect(listNotes().map((n) => n.text)).toEqual(["second", "first"]);
});

test("ignores empty notes and trims long ones", () => {
  expect(addNote("   ")).toBeNull();
  expect(addNote("x".repeat(300))?.text).toHaveLength(200);
});
