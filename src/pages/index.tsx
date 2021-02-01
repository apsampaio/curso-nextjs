import { GetServerSideProps } from "next";
import { Title } from "../styles/pages/Home";

import maths from "../lib/maths";

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <div>
      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map(({ id, title }: IProduct) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // const apiURL = "http://localhost:3333";
  // const response = await fetch(apiURL + "/recommended");
  // const recommendedProducts = await response.json();

  const recommendedProducts = [];

  return {
    props: {
      recommendedProducts,
    },
  };
};
