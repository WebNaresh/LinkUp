import { NextPage } from "next";
import { ReactNode } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-7 p-1 border-gray-900 border-b z-50 sticky bg-black top-0">
        <div className="col-span-1 my-auto">
          <AiOutlineArrowLeft className="cursor-pointer" />
        </div>
        <div className=" col-span-6">
          <div className=" font-semibold">naru bhai</div>
          <div className=" text-gray-500 text-xs">7 Tweet</div>
        </div>
      </div>
      <div
        id="profileScroll"
        className="flex mb-2 overflow-y-scroll text-sm border-b border-gray-600"
      >
        <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer relative">
          All
          <span
            style={{
              height: "0.20rem",
            }}
            className=" inline-block absolute bottom-0 left-0 right-0 flex-grow bg-sky-600 rounded-full"
          ></span>
        </div>
        <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer">
          Mention
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
