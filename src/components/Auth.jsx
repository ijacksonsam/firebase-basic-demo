import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signup}>sign up</button>
    </div>
  );
}

export default Auth;
