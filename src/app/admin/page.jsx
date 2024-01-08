"use client";

import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState();

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    setMsg("Uploading...");
    setProgress((prev) => {
      return { ...prev, started: true };
    });
    axios
      .post("http://127.0.0.1:4000/books", formData, {
        onUploadProgress: (progressEvent) => {
          setProgress((prev) => {
            return { ...prev, pc: progressEvent.progress * 100 };
          });
        },
      })
      .then((res) => {
        setMsg("Upload successful");
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload failed");
        console.error(err);
      });
  };

  return (
    <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
      <form method="post" onSubmit={handleSubmit} className="flex flex-col">
        <label>Title</label>
        <input required type="text" name="title" className="bg-neutral-700" />
        <label>Description</label>
        <input
          required
          type="text"
          name="description"
          className="bg-neutral-700"
        />
        <label>Cover</label>
        <input required type="file" name="cover" className="bg-neutral-700" />
        {/* <label>Contents</label>
        <input
          required
          type="file"
          multiple
          name="contents"
          className="bg-neutral-700"
        /> */}
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>

      {progress.started && <progress max="100" value={progress.pc}></progress>}
      {msg && <span>{msg}</span>}
    </main>
  );
};

export default Admin;
