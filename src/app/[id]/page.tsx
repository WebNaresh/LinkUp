import FeedCard from "@/components/utils/FeedCard/FeedCard";
import { NextPage } from "next";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <div>
        <div
          className="h-44 bg-gray-800 bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(backgroud.jpg)",
          }}
        ></div>
        <div className="grid grid-cols-7 h-16 relative">
          <div className="col-span-5">
            <Image
              src="https://pbs.twimg.com/media/F0r7mEJWYAMTyXV?format=jpg&name=small"
              alt="userImage"
              className="rounded-full relative h-36 w-36 bottom-24 m-2 border-black border-4"
              height={200}
              width={200}
            />
          </div>
          <div className=" col-span-2">
            <button className="p-2 my-2 rounded-full text-xs bg-sky-600">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="p-4 text-xs text-gray-300 font-extralight">
          <div className="font-bold text-sm">naru bhai</div>
          <div className="">@nareshInfinite</div>
          <div className="inline-block">
            {" "}
            <SlCalender className="inline-block " />
            &nbsp; joined June 2024
          </div>
          <div className="flex gap-4">
            <div className="py-2">
              <div className=" font-bold inline-block">12</div> following
            </div>
            <div className="py-2">
              <div className=" font-bold inline-block">12</div> followers
            </div>
          </div>
        </div>
        <div id="profileScroll" className="flex  overflow-y-scroll">
          <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer relative">
            Posts
            <span
              style={{
                height: "0.20rem",
              }}
              className=" inline-block absolute bottom-0 left-0 right-0 flex-grow bg-sky-600 rounded-full"
            ></span>
          </div>
          <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer">
            Likes
          </div>
          <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer">
            Replies
          </div>
        </div>
      </div>
      {array.map((e, i) => {
        return <FeedCard key={i} />;
      })}
    </div>
  );
};

export default Page;
let array: number[] = [1, 2, 3];
