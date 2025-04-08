'use client';

import { useState } from "react"

import NoteForm from "./NoteForm";
import Navbar from "./Navbar";

export default function NoteLayout({ children }) {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm((prev) => !prev)
    const closeForm = () => setShowForm(false);

    return (
        <>
            <Navbar onAddNoteClick={toggleForm} />
            {showForm && <NoteForm onClose={closeForm} />}
            <main className="p-4">{ children }</main>
        </>
    )
}