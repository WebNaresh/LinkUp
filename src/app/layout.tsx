import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Recommendation from "@/components/Recommendation/Recommendation";
import Trending from "@/components/Trending/Trending";
import { ThemeProvider } from "@/context/ThemeContext";
import { menu } from "@/interface";
import AuthProvider from "@/utils/AuthProvider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { BiHomeCircle, BiSolidHomeCircle, BiSolidSearch } from "react-icons/bi";
import {
  BsBookmarkHeart,
  BsBookmarkHeartFill,
  BsThreeDots,
} from "react-icons/bs";
import { FaEnvelopeOpen, FaRegEnvelope } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineVerified, MdVerified } from "react-icons/md";
import { PiDotsThreeCircle, PiDotsThreeCircleFill } from "react-icons/pi";
import {
  RiFileList2Fill,
  RiFileList2Line,
  RiNotification3Line,
  RiNotificationFill,
} from "react-icons/ri";
import { TiUser, TiUserOutline } from "react-icons/ti";

const inter = Poppins({
  weight: ["200", "100", "300", "400", "500", "800", "700", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Platform For Truth",
  description: "Social Media Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div
              className="grid grid-cols-7"
              style={{
                height: "100dvh",
              }}
            >
              <section className="col-span-2 hidden md:flex flex-row-reverse ">
                <div className="flex-col h-full relative px-20">
                  <Link href={"/"} className="flex py-2 px-2  mb-4">
                    <Image
                      src={"/logo.png"}
                      height={30}
                      width={30}
                      alt="logo"
                      className="h-fit m-2 "
                    />
                  </Link>
                  {array.map((e, i) => {
                    return (
                      <Link
                        key={i}
                        href={e.link}
                        className=" flex py-2 px-4 my-2 items-end w-fit font-medium hover:bg-gray-800 rounded-full "
                      >
                        {" "}
                        <div className="text-2xl ">{e.iconOutlined}</div>
                        <div className=" text-bold flex mx-2 h-full leading-6">
                          {e.text}
                        </div>
                      </Link>
                    );
                  })}
                  <button className="w-11/12 py-3 bg-sky-500 rounded-full">
                    Tweet
                  </button>
                  <div className="grid grid-cols-5 absolute bottom-2 hover:bg-gray-800  p-2 m-2 rounded-full cursor-pointer">
                    <div className="col-span-1 m-auto">
                      <div className="flex items-center justify-center">
                        <Image
                          src="https://pbs.twimg.com/media/F0r7mEJWYAMTyXV?format=jpg&name=small"
                          alt="userImage"
                          className="rounded-full h-8 w-8"
                          height={40}
                          width={40}
                        />
                      </div>
                    </div>
                    <div className="grid col-span-3  px-3 ">
                      <div className=" truncate text-sm">naru bhai</div>
                      <div className=" truncate text-xs text-gray-600">
                        @nareshInfinite
                      </div>
                    </div>
                    <div className="grid col-span-1 items-center justify-center">
                      <BsThreeDots className="" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="col-span-3 border-gray-800 border-x h-screen overflow-y-auto">
                {children}
              </section>
              <section className="col-span-2 p-4">
                <div className="text-gray-500 relative flex items-center">
                  <input
                    type="text"
                    className="rounded-full pl-10 p-3 peer outline-none bg-gray-950 focus:bg-transparent focus:border-sky-800 border border-transparent focus:ring-0"
                    placeholder="Search..."
                  />
                  <FiSearch className="absolute left-3 peer-focus:text-sky-300 text-gray-500 " />
                </div>
                <div className="bg-gray-950 my-4  rounded-xl">
                  <div className="text-bold p-4">What&apos;s happening</div>
                  {array2.map((e, i) => {
                    return <Trending key={i} />;
                  })}

                  <div className=" hover:bg-gray-900  text-sky-500 text-sm p-4 rounded-b-xl cursor-pointer">
                    Show more
                  </div>
                </div>
                <div className="bg-gray-950 my-4  rounded-xl">
                  <div className="text-bold p-4">Who to Follow</div>
                  {array2.map((e, i) => {
                    return <Recommendation key={i} />;
                  })}

                  <div className=" hover:bg-gray-900  text-sky-500 text-sm p-4 rounded-b-xl cursor-pointer">
                    Show more
                  </div>
                </div>
              </section>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
let array: menu[] = [
  {
    iconOutlined: <BiHomeCircle />,
    text: "Home",
    iconFilled: <BiSolidHomeCircle />,
    link: `/home`,
  },
  {
    iconOutlined: <FiSearch />,
    text: "Explore",
    iconFilled: <BiSolidSearch />,
    link: `/explore`,
  },
  {
    iconOutlined: <RiNotification3Line />,
    text: "Notifications",
    iconFilled: <RiNotificationFill />,
    link: `/notifications`,
  },
  {
    iconOutlined: <FaRegEnvelope />,
    text: "Messages",
    iconFilled: <FaEnvelopeOpen />,
    link: `/`,
  },
  {
    iconOutlined: <RiFileList2Line />,
    text: "Lists",
    iconFilled: <RiFileList2Fill />,
    link: `/`,
  },
  {
    iconOutlined: <BsBookmarkHeart />,
    text: "Bookmarks",
    iconFilled: <BsBookmarkHeartFill />,
    link: `/`,
  },
  {
    iconOutlined: <MdOutlineVerified />,
    text: "Verified",
    iconFilled: <MdVerified />,
    link: `/`,
  },
  {
    iconOutlined: <TiUserOutline />,
    text: "Profile",
    iconFilled: <TiUser />,
    link: `/user`,
  },
  {
    iconOutlined: <PiDotsThreeCircle />,
    text: "More",
    iconFilled: <PiDotsThreeCircleFill />,
    link: `/`,
  },
];

let array2: number[] = [1, 2, 3];
