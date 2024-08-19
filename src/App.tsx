import { useEffect, useState } from "react";
import "./App.css";
import SignUP from "./compount/auth/Signup";
import { onAuthStateChanged } from "@firebase/auth";
import {  login } from "./store/authSlice";
import { auth } from "../config";
import Chat from "./compount/chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";
import getUserById from "./lib/userProfile";
import Chattes from "./compount/chat/Chattes";
function App() {
  const [currentuser, setCurrentUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user?.uid) {
        const handleLogin = async () => {
          const userDat = await getUserById(user?.uid);
          dispatch(login({ userData: userDat }));
        };
        handleLogin();
        setCurrentUser(true);
      }
    });
    return () => {
      unSub();
      setCurrentUser(false);
    };
  }, []);

  return <div className="">{!currentuser ? <SignUP /> : <Chattes />}</div>;
}

export default App;
