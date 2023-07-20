import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";

function Cities({ user }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cities, setCities] = useState([]);
  const citiesRef = collection(db, "cities");
  async function handleAddCity(e) {
    e.preventDefault();
    try {
      await addDoc(citiesRef, {
        city,
        state,
        userId: user.uid,
        userEmail: user.email,
      });
    } catch (err) {
      console.error(err.message);
    }
    setCity("");
    setState("");
    fetchAllCities();
  }

  useEffect(function () {
    fetchAllCities();
  }, []);

  async function fetchAllCities() {
    const citiesRef = collection(db, "cities");
    const citiesSnapshot = await getDocs(citiesRef);
    const cities = citiesSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setCities(cities);
  }

  async function handleDeleteCity(id) {
    const cityRef = doc(db, "cities", id);
    await deleteDoc(cityRef);
    // const cities = await fetchAllCities();
    // setCities(cities);
    fetchAllCities();
  }
  return (
    <div>
      <form action="" onSubmit={handleAddCity}>
        <input
          type="text"
          placeholder="city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="state..."
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button>Add city</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <h3>
              {city.city} , {city.state}
            </h3>
            <p>created by - {city.userEmail}</p>
            {user.uid === city.userId && (
              <button onClick={() => handleDeleteCity(city.id)}>delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cities;
