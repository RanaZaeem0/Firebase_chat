import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, setDoc, addDoc, collection } from "../../../config";
import { log } from "console";
import { doc } from "@firebase/firestore";
import upload from "../../lib/upload";
import { toStatement } from "@babel/types";
import { useState } from "react";
import LoadingBtn from "../helperCompount/LoadingBtn";
interface RegisterSchema {
  username: string;
  email: string;
  password: string;
  avatar: FileList; // This represents a list of files
}

export default function SignUP() {

  const [Loading,setLaoding]  = useState(false)
 const [error,setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterSchema>();

  const onSubmit = async (data: RegisterSchema) => {
    setLaoding(true)
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    // Access the first file in the FileList
    if (data.avatar && data.avatar.length > 0) {
      formData.append("avatar", data.avatar[0]);
    }
    const { avatar,username } = Object.fromEntries(formData);
    console.log(formData,avatar,username); // Log FormData object for debugging
  const email = data.email
  const password =data.password
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar);
      console.log(imgUrl, "this si image url");

      await setDoc(doc(db, "users", res.user.uid), {
        email,
        password,
        username,
        avatar: imgUrl,
        id: res.user.uid,
        Blocked: [],
      });
      await setDoc(doc(db, "userChats", res.user.uid), {
        chat: [],
      });
      
      console.log("ueser Created");
      setLaoding(false)

    } catch (error) {
      setLaoding(false)
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-md rounded-lg">
        <div>
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <p className="text-sm text-gray-500">Create your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              {...register("username")}
              placeholder="Enter your username"
              autoComplete="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-700"
            >
              Avatar
            </label>
            <input
              id="avatar"
              type="file"
              {...register("avatar")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.avatar && (
              <p className="text-red-500 text-sm">{errors.avatar.message}</p>
            )}
        
              <p className="text-red-500 text-sm">{error}</p>
            
  
  
          </div>
        {!Loading?  <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>:
          <LoadingBtn/>
          }
        </form>
        <div className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
