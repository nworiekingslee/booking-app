import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        try {
          const { data } = await axios.get("/profile");
          setUser(data);
          setReady(true);
        } catch (e) {
          console.log("Couldn't fetch user");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
