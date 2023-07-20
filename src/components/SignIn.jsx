import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signin() {
    const userCredential = await signInWithEmailAndPassword(
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
      <button onClick={signin}>sign In</button>
    </div>
  );
}

export default SignIn;
