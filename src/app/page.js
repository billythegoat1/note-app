// app/page.js
import { notes } from "../../lib/data";
import NoteCard from "../../components/NoteCard";

export const dynamic = "force-dynamic"; // this ensures server always reads fresh data

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
