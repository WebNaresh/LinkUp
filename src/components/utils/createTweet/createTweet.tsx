import { NextPage } from "next";
import Image from "next/image";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { ImImage } from "react-icons/im";

interface Props {}

const CreateTweet: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-6 p-2 border-slate-900 border-b">
      <div className="col-span-1 flex justify-center ">
        <Image
          src="https://pbs.twimg.com/media/F0r7mEJWYAMTyXV?format=jpg&name=small"
          alt="userImage"
          className="rounded-full h-10 w-10"
          height={50}
          width={50}
        />
      </div>
      <div className="col-span-4">
        <div>
          {" "}
          <textarea
            placeholder="What Is Happening?!"
            style={{}}
            className="resize-none h-auto overflow-hidden bg-transparent outline-none border-slate-900 border-b rounded-xl text-xs p-2 text-gray-300"
            name=""
            id=""
            cols={40}
            rows={3}
          ></textarea>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="grid col-span-9 grid-cols-9">
            <ImImage className="col-span-1 text-sky-700 cursor-pointer text-sm" />
            <BsEmojiSmile className="col-span-1 text-sky-700 cursor-pointer text-sm" />
            <FaRegQuestionCircle className="col-span-1 text-sky-700 cursor-pointer text-sm" />
          </div>
          <button className="grid col-span-3 text-xs bg-sky-600 px-2 py-1 rounded-full">
            Tweet
          </button>
        </div>
      </div>
      <div className="col-span-1 m-auto">
        <BsThreeDotsVertical className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CreateTweet;
