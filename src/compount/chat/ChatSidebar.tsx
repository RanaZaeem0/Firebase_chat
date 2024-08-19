import React, { useEffect, useState } from "react";
import Avatar from "../helperCompount/Avatar";
import AvatarImage from "../helperCompount/AvatarImage";
import Input from "../helperCompount/Input";
import Button from "../helperCompount/Button";
import { collection, getDoc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../../config";

export default function ChatSidebar() {
  const [inputUsername, setINputUserName] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [searchUser, setSeacrhUser] = useState([]);
  useEffect(() => {
    const handelSearch = async () => {
      try {
   if(inputUsername.length > 0){
    const userRef = collection(db, "users");
    const q = query(userRef, where("username", ">=", inputUsername), where("username", "<", inputUsername + '\uf8ff'));
  
   
    const querySnapShot = await getDocs(q);
  
    if (querySnapShot.empty) {
      console.log("No matching documents.");
    } else {
      querySnapShot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
   }
      } catch (error) {
        console.log(error);
      }
    };
    handelSearch();
  }, [inputUsername]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const documents = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const { password, ...rest } = data;
          return { id: doc.id, ...rest };
        });
        setAllUser(documents);
        return documents;
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  const handelAdd = ()=>{
    
  }

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-zinc-800 text-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl w-full">
          {" "}
          <Input
            placeholder="Search.."
            type="text"
            autoComplete="false"
            onChange={(e) => setINputUserName(e.target.value)}
          />
          <button>

          </button>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Active Conversations</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            4
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y">
          {allUser &&
            allUser.map((user, index) => {
              return (
                <div className="" key={index}>
                  <button className="flex flex-row items-center  hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      <img src={user?.avatar} alt="" />
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      {user?.username}
                    </div>
                  </button>
                </div>
              );
            })}
        </div>

        <div className="flex flex-row items-center justify-between text-xs mt-6">
          <span className="font-bold">Archivied</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            7
          </span>
        </div>
      </div>
    </div>
  );
}
function Badge({ className, children }) {
  return (
    <span className={`${className} px-2 py-1 rounded-full text-xs`}>
      {children}
    </span>
  );
}

function MessageCircleIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10h.01M12 10h.01M16 10h.01M21 16.57c0 .76-.46 1.45-1.2 1.72-1.18.43-2.53.71-3.8.71a15.94 15.94 0 01-7.2-1.67 16.05 16.05 0 01-4.66-3.75 7.28 7.28 0 010-9.56 7.28 7.28 0 019.56 0 16.05 16.05 0 013.75 4.66c.31.61.53 1.25.67 1.91.14.67.29 1.36.29 2.05 0 .76-.14 1.5-.39 2.2zM12 18l-4.5-2.4c-.83-.44-1.69-.97-2.4-1.6l4.9-1.7 1.5-.8 1.5.8 4.9 1.7c-.71.63-1.57 1.16-2.4 1.6L12 18z"
      />
    </svg>
  );
}

function PlusIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5v2a15.93 15.93 0 005.66 10.36L11 17h2a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2h2a2 2 0 012-2h2.4l.6-.36A15.93 15.93 0 0017 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2z"
      />
    </svg>
  );
}

function VideoIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.5-3.6a1 1 0 011.5.84v8.52a1 1 0 01-1.5.84L15 14m0 4a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8z"
      />
    </svg>
  );
}

function MoveHorizontalIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v14m7-7h-5m-4 0H5"
      />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 17.63V8a1 1 0 011-1h12.82a1 1 0 01.73 1.7l-7.82 7.83a1 1 0 01-1.41 0L4.27 17.07a1 1 0 01-.27-.7z"
      />
    </svg>
  );
}
