"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const NoteForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const noteData = {
        title: formData.title,
        description: formData.description,
        tag: formData.tag,
      };

      console.log("Submitting note:", noteData);

      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Non-JSON response:", await res.text());
        throw new Error("Server returned non-JSON response");
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save note");
      }

      console.log("Note saved successfully:", data);
      onSuccess?.();
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error saving note:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <Card className="w-full max-w-md p-6 relative bg-white shadow-lg rounded-lg bg-orange-100">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 h-8 w-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 font-[#451b1b]">Add New Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="title"
            className="bg-white"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Textarea
            name="description"
            
            placeholder="Description..."
            value={formData.description}
            onChange={handleChange}
            required
            className="min-h-[100px] bg-white"
          />
          <select
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 bg-white text-gray-800"
            required
          >
            <option value="">Select tag</option>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
            <option value="cooking">Cooking</option>
            <option value="school">School</option>
          </select>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#451b1b] text-white hover:bg-gray-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Note"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default NoteForm;
