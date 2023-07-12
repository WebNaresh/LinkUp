import { NextPage } from "next";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots, FaRetweet } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

interface Props {}

const FeedCard: NextPage<Props> = ({}) => {
  return (
    <div className="grid grid-cols-8 border-slate-900 border-b ">
      <div className=" col-span-1 ">
        <Image
          src="https://pbs.twimg.com/media/F0r7mEJWYAMTyXV?format=jpg&name=small"
          alt="userImage"
          className="rounded-full h-10 w-10 m-2 "
          height={50}
          width={50}
        />
      </div>
      <div className="grid grid-col-6 col-span-6 text-xs font-light p-2">
        <div className="col-span-6 font-bold">
          Mohammad Aasim{" "}
          <p className="text-gray-500 font-extralight text-xs">
            @__aasim__ · 16h{" "}
          </p>
          <br />
          <div className="font-light">
            Hiring opportunity
            <br />
            <h6>Frontend Engineer</h6>
            <br />
            🌐 Reactjs
            <br />
            🌍 Bangalore
            <br />
            💼 2+ YoE
            <br /> ⚒️ Git and other dev tools
            <br />✨ Responsive design
            <br />
            💫 HTML5, CSS and JavaScript
            <br />
            Comment if you are interested, i
            <br />
            will DM you. Make sure to open your DM or Follow me.
            <br />
            (RTs are appreciated)
            {/* <Image
              src="https://pbs.twimg.com/media/F0r7mEJWYAMTyXV?format=jpg&name=small"
              alt="userImage"
              className="rounded-xl my-2"
              height={200}
              width={200}
            />
            <video
              autoPlay
              disablePictureInPicture
              muted
              className="rounded-xl my-2 border-gray-700 border "
              controls
            >
              <source src="video.mp4" type="video/mp4"></source>
            </video> */}
          </div>
        </div>
        <div className="grid grid-cols-6 col-span-6 gap-2 py-4">
          <div className="col-span-1 font-bold  flex justify-evenly items-center text-gray-700">
            <FaRegCommentDots className="cursor-pointer" />
            <div className="text-xs"> 20</div>
          </div>
          <div className="col-span-1 font-bold  flex justify-evenly items-center text-gray-700">
            <FaRetweet className="cursor-pointer" />
            <div className="text-xs"> 20</div>
          </div>
          <div className="col-span-1 font-bold  flex justify-evenly items-center text-gray-700">
            <MdOutlineFavoriteBorder className="cursor-pointer" />
            <div className="text-xs"> 20</div>
          </div>
          <div className="col-span-1 font-bold  flex justify-evenly items-center text-gray-700">
            <AiOutlineEye className="cursor-pointer" />
            <div className="text-xs"> 20</div>
          </div>
        </div>
      </div>
      <div className="p-4 col-span-1">
        <BsThreeDots className="cursor-pointer" />
      </div>
    </div>
  );
};

export default FeedCard;
