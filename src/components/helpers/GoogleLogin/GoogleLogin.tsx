"use client";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

interface Props {}

const GoogleLogin: NextPage<Props> = ({}) => {
  return (
    <div className="bg-gray-950 my-4  rounded-xl">
      <div className="text-bold p-4">Join LinkUp today.</div>
      <div
        onClick={() => signIn("google")}
        className="grid grid-cols-5 p-2 m-4 rounded-full bg-white hover:bg-gray-100 cursor-pointer text-xs text-black"
      >
        <div className=" m-auto col-span-1">
          <FcGoogle className=" text-lg" />
        </div>
        <div className=" col-span-4 mx-4 ">
          <div>Sign Up With Google</div>
        </div>
      </div>
      <div className=" hover:bg-gray-900  text-sky-500 text-sm p-4 rounded-b-xl cursor-pointer">
        Show more G
      </div>
    </div>
  );
};

export default GoogleLogin;
