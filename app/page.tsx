"use client";

export default function Home() {
  const submitMovie = async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    console.log(data);

    fetch("/api/addMovie", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        name: data.name,
        genre: data.genre,
      }),
    })
      .then((response) => {
        console.log(response.status);

        response.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <main className="min-h-screen px-10 py-24">
      <form onSubmit={submitMovie}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Movie Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Movie Genre</span>
          </label>
          <input
            type="text"
            name="genre"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-outline btn-accent" type="submit">
          Add
        </button>
      </form>
    </main>
  );
}
