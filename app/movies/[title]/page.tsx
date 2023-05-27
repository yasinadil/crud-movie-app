"use client";
import React from "react";

export default function page({ params }: any) {
  console.log(params);
  const title = params.title.split("%20").join(" ");

  async function update() {
    fetch("/api/updateView", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        name: title,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="min-h-screen">
      <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <h1 className="text-center mb-10">{title}</h1>
        <button className="btn btn-wide" onClick={update}>
          Watch
        </button>
      </div>
    </div>
  );
}
