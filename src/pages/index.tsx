import { GetServerSideProps } from "next";
import Link from "next/link";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";
import { client } from "@/lib/prismic";

import {
  BackgroundShape,
  AgentBanner,
  AnimatedTitle,
} from "../styles/pages/Home";

interface HomeProps {
  agentData: Document;
}

export default function Home({ agentData }: HomeProps) {
  return (
    <div>
      <AnimatedTitle borderBottomColors={agentData.data.shape_color[0].text}>
        <div className="text-top">
          <div>
            <span>Welcome</span>
            <span>to Valorant weapons</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>Showcase!</div>
        </div>
      </AnimatedTitle>
      <BackgroundShape />
      <AgentBanner src={agentData.data.agent_banner.url} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // const agents = await client().query([
  //   Prismic.Predicates.at("document.type", "agent"),
  // ]);

  const agent = await client().getByUID("agent", "sage", {});

  console.log();

  return {
    props: {
      agentData: agent,
    },
  };
};
