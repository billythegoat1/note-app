import { Card, CardContent } from "@/components/ui/card";


export default function NoteCard({ note }) {
    return (
      <Card className="p-4 shadow-lg rounded-xl">
        <p className="text-gray-500 text-sm">{note.date}</p>
        <h2 className="font-bold text-lg">{note.title}</h2>
        <p className="text-gray-700">{note.content}</p>
        <div className="flex gap-2 mt-2">
          {note.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-maroon font-bold text-xs px-2 py-1 rounded-lg border border-maroon"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    );
}