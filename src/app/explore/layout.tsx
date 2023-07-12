import { NextPage } from "next";
import { ReactNode } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <div className="text-gray-500 relative flex items-center">
        <input
          type="text"
          className="rounded-full pl-10 p-3 peer outline-none w-full m-2 bg-gray-900 focus:bg-transparent focus:border-sky-800 border border-transparent focus:ring-0"
          placeholder="Search with US"
        />
        <FiSearch className="absolute left-5 peer-focus:text-sky-300 text-gray-500 " />
      </div>
      <div id="profileScroll" className="flex mb-2 overflow-y-scroll">
        <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer relative">
          Posts
          <span
            style={{
              height: "0.20rem",
            }}
            className=" inline-block absolute bottom-0 left-0 right-0 flex-grow bg-sky-600 rounded-full"
          ></span>
        </div>
        <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer">Likes</div>
        <div className="hover:bg-slate-900 py-2 px-4 cursor-pointer">
          Replies
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
