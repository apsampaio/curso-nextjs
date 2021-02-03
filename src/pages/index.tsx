import { GetServerSideProps } from "next";
import Link from "next/link";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";
import { client } from "@/lib/prismic";

import { BackgroundShape } from "../styles/pages/Home";

interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home() {
  return;
  <div>
    <BackgroundShape></BackgroundShape>;
  </div>;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at("document.type", "product"),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    },
  };
};
