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
  ExploreButton,
  ExploreButtonContainer,
} from "../styles/pages/Home";

interface HomeProps {
  agentData: Document;
}

export default function Home({ agentData }: HomeProps) {
  return (
    <div>
      <AnimatedTitle color={agentData.data.shape_color[0].text}>
        <div className="text-top">
          <div>
            <span>Welcome</span>
            <span>to Valorant agent</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>Showcase!</div>
        </div>
      </AnimatedTitle>
      <ExploreButtonContainer>
        <ExploreButton
          className="from-top"
          color={agentData.data.shape_color[0].text}
        >
          EXPLORE
        </ExploreButton>
      </ExploreButtonContainer>
      <BackgroundShape color={agentData.data.shape_color[0].text} />
      <AgentBanner src={agentData.data.agent_banner.url} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { results } = await client().query([
    Prismic.Predicates.at("document.type", "agent"),
  ]);

  const randomAgent = results[(results.length * Math.random()) | 0];

  return {
    props: {
      agentData: randomAgent,
    },
  };
};
