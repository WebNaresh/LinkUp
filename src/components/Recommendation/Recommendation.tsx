import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const Recommendation: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-6 py-4 hover:bg-gray-900 cursor-pointer">
      <div className=" m-auto col-span-1">
        <Image
          src={"/logo.png"}
          height={30}
          width={30}
          alt="logo"
          className="h-fit m-2 "
        />
      </div>
      <div className="my-auto col-span-3">
        <div className=" text-xs hover:underline">Anushka Gupta</div>
        <div className=" text-gray-400 text-xs">@Anushkag@</div>
      </div>
      <div className=" m-auto col-span-2">
        <button className="w-full py-2 bg-white text-black text-xs px-6  rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Recommendation;
