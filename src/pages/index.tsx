import { GetServerSideProps } from "next";
import Link from "next/link";
import { Title } from "../styles/pages/Home";

import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { client } from "@/lib/prismic";

import { Document } from "prismic-javascript/types/documents";

interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <div>
      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map(({ id, data, uid }) => (
            <li key={id}>
              <Link href={`/catalog/products/${uid}`}>
                <a>{PrismicDOM.RichText.asText(data.title)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
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
