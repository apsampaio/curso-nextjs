import { GetStaticProps } from "next";

interface IProduct {
  id: string;
  title: string;
}

interface Top10Props {
  products: IProduct[];
}

export default function Top10({ products }: Top10Props) {
  return (
    <div>
      <h1>Top 10</h1>
      <ul>
        {products.map(({ id, title }: IProduct) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Top10Props> = async (ctx) => {
  const apiURL = "http://localhost:3333";
  const response = await fetch(apiURL + "/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
