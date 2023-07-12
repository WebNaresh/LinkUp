import { NextPage } from "next";
import { BsThreeDots } from "react-icons/bs";

interface Props {}

const Trending: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-5 py-4 hover:bg-gray-900 cursor-pointer text-xs ">
      <div className=" col-span-4 px-4 ">
        <div className="text-sm text-gray-400 ">Trending in India</div>
        <div>28%GST</div>
        <div className="text-xs truncate text-gray-400">
          Trending with ,&nbsp;
          <div className="inline text-sky-500 cursor-pointer"># Dream 11</div>
          ,&nbsp;
          <div className="inline text-sky-500 cursor-pointer">
            #onlinegaming
          </div>
        </div>
      </div>
      <div className=" m-auto col-span-1">
        <BsThreeDots className="" />
      </div>
    </div>
  );
};

export default Trending;
