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

      {children}
    </div>
  );
};

export default Layout;
