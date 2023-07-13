"use client";
import Trending from "@/components/utils/Trending/Trending";
import { useThemeContext } from "@/hooks/ThemeContext";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const sesstion = useSession();
  const data = useThemeContext();
  console.log(`🚀 ~ sesstion:`, sesstion);
  return (
    <div>
      {array.map((e, i) => {
        return <Trending key={i} />;
      })}
      <button onClick={() => signIn()}>sign in with gooogel</button>
    </div>
  );
};

export default Page;
let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
