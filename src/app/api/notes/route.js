import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), 'lib', 'data.js');

export async function POST(req) {
  console.log("API route hit: POST /api/notes");
  
  try {
    // Parse the request body
    let body;
    try {
      body = await req.json();
      console.log("Request body parsed:", body);
    } catch (error) {
      console.error("Failed to parse request body:", error);
      return Response.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }
    
    const { title, description, tag } = body;
    
    if (!title || !description || !tag) {
      console.log("Missing required fields:", { title, description, tag });
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Read existing notes data
    let notes = [];
    try {
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, 'utf-8'); 
        const notesMatch = fileContent.match(/export const notes = (\[.*\]);/s);
        if (notesMatch) {
          notes = JSON.parse(notesMatch[1]);
          console.log("Existing notes loaded:", notes.length);
        }
      } else {
        console.log("No existing data file, starting with empty notes array");
      }
    } catch (error) {
      console.error("Error reading existing notes:", error);
      // Continue with empty array
    }
    
    // Create new note with the exact format requested
    const newNote = {
      id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1, // Increment ID based on highest existing ID
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        .replace(',', ''),  // Format as "April 8, 2025" and remove comma
      title: title,
      content: description,
      tags: [tag], // Array with single tag from form
    };

    // Update notes array
    notes.push(newNote);
    console.log("Note added to array:", newNote);
    
    // Write updated data with exact formatting
    try {
      const fileContent = `export const notes = ${JSON.stringify(notes, null, 2)};\n`;
      fs.writeFileSync(dataFilePath, fileContent, 'utf-8');
      console.log("Data file updated successfully");
    } catch (writeError) {
      console.error("Error writing to data file:", writeError);
      return Response.json({ error: "Failed to save note to file system" }, { status: 500 });
    }

    // Return success response
    return Response.json({ success: true, note: newNote }, { status: 201 });
  } catch (error) {
    console.error("Unhandled API error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}