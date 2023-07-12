import { NextPage } from "next";
import Image from "next/image";
import { FcLike } from "react-icons/fc";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      {array.map((e, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-7 font-medium text-xs border-b border-gray-600 py-2"
          >
            <div className=" col-span-1">
              <FcLike className="m-auto h-8 w-8" />
            </div>
            <div className=" col-span-6">
              <div>
                {" "}
                <Image
                  src="https://pbs.twimg.com/media/F0r7mEJWYAMTyXV?format=jpg&name=small"
                  alt="userImage"
                  className="rounded-full h-8 w-8 mb-4"
                  height={50}
                  width={50}
                />
              </div>
              <div>Mohammad Aasim liked your reply</div>
              <div className="text-gray-700">Your Message</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
let array: number[] = [1, 2, 3, 4];
