import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      {" "}
      <nav className="grid grid-cols-4 border-gray-800 border-b z-50 sticky bg-black top-0">
        <div className="col-span-4 p-4">Home</div>
        <div className="col-span-2 flex cursor-pointer justify-center hover:bg-slate-900 w-full h-full pb-0 pl-2 pr-2 pt-2">
          <div className="flex relative w-fit h-full">
            <div className="w-fit text-sm ">For you</div>
            <span
              style={{
                height: "0.10rem",
              }}
              className="inline-block absolute bottom-0 left-0 right-0 flex-grow bg-sky-600"
            ></span>
          </div>
        </div>

        <div className="col-span-2 flex  cursor-pointer justify-center hover:bg-slate-900 w-full h-full pb-0 pl-2 pr-2 pt-2">
          <div className="flex relative w-fit h-full">
            <div className="w-fit text-sm">following</div>
            <span
              style={{
                height: "0.10rem",
              }}
              className=" inline-block absolute bottom-0 left-0 right-0 flex-grow bg-sky-600"
            ></span>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
