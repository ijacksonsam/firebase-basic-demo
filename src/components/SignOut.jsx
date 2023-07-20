import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
function SignOut() {
  async function signout() {
    await signOut(auth);
  }
  return (
    <div>
      <button onClick={signout}>sign out</button>
    </div>
  );
}

export default SignOut;
