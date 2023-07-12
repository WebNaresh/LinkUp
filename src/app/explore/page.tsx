import Trending from "@/components/Trending/Trending";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      {array.map((e, i) => {
        return <Trending key={i} />;
      })}
    </div>
  );
};

export default Page;
let array: number[] = [1, 2, 3];
