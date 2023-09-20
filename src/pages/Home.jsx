import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      {user.current ? (
        <section className="card">
          <h2 className="heading-level-2">Submit Idea</h2>
          <form className="u-flex-vertical u-margin-block-start-16 u-gap-8">
            <input
              className="input-text"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              className="input-text"
              placeholder="Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button
              className="button"
              type="button"
              onClick={() =>
                ideas.add({ userId: user.current.id, title, description })
              }
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className="card">
          <p>Please login to submit an idea.</p>
        </section>
      )}
      <section className="card">
        <h2 className="heading-level-2">Latest Ideas</h2>
        <ul className="boxes-wrapper u-margin-block-start-16">
          {ideas.current.map((idea) => (
            <li key={idea.$id} className="box u-flex-vertical u-gap-8">
              <strong className="u-bold">{idea.title}</strong>
              <p>{idea.description}</p>
              {user.current && user.current.$id === idea.userId && (
                <button
                  className="button is-secondary"
                  type="button"
                  onClick={() => ideas.remove(idea.$id)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
