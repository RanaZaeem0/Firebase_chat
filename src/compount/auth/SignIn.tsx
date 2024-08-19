import { inferredPredicate } from "@babel/types";
import { doc, getDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, db } from "../../../config";



interface SigninSchemma{
    password:string,
    email:string,
   
}

export default function Component() {

    const [loading,setLaoding ]= useState(false)
    const  [ error,setError]  = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SigninSchemma>();


  const onSubmit = async (data: SigninSchemma) => {
  
    const { email, password } = data

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

     

      await getDoc(doc(db, "users","ds"));
    
      
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              email
            </label>
            <input
              id="email"
              {...register("email")}
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
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
