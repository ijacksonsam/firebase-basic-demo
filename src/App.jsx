import Auth from "./components/Auth";
import { auth } from "./config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import SignOut from "./components/SignOut";
import SignIn from "./components/SignIn";
import Movies from "./components/Cities";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import Cities from "./components/Cities";

function App() {
  const [user, setUser] = useState(null);

  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Firebase app</h2>
      <h3>{user ? `hi ${user.email}` : null}</h3>
      {!user && (
        <>
          <Auth />
          <SignIn />
        </>
      )}
      {user && (
        <>
          <SignOut />
          <Cities user={user} />
        </>
      )}
    </div>
  );
}

export default App;
