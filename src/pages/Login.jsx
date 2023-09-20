import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Login() {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="card">
      <h1 className="heading-level-1">Login or register</h1>
      <form className="form u-margin-block-start-16 u-gap-16 u-width-full-line u-max-width-500">
        <input
          className="input-text"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="u-flex u-gap-8">
          <button
            className="button"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <button
            className="button"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
