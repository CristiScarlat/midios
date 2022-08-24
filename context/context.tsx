import React from "react";
import { auth, onAuthStateChanged } from "../utils/firebase";

export const Ctx = React.createContext(null);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        console.log(user)
    })
  }, [])

  //@ts-ignore
  return <Ctx.Provider value={{authUser, setAuthUser}}>{children}</Ctx.Provider>;
};

export default Provider;
