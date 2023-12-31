import FeedCard from "@/components/utils/FeedCard/FeedCard";
import CreateTweet from "@/components/utils/createTweet/createTweet";
import { NextPage } from "next";

interface Props {}
const Page: NextPage<Props> = ({}) => (
  <div>
    <CreateTweet />
    {array3.map((e, i) => {
      return <FeedCard key={i} />;
    })}
  </div>
);

export default Page;

let array3: number[] = [1, 2, 3, 4];
