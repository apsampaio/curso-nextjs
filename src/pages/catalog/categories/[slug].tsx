import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface IProduct {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
}

export default function Category({ products }: CategoryProps) {
  const { query, isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{query.slug}</h1>
      <ul>
        {products.map(({ id, title }: IProduct) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apiURL = "http://localhost:3333";
  const response = await fetch(apiURL + "/categories");
  const categories = await response.json();

  const paths = categories.map((category) => {
    return {
      params: { slug: category.id },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<CategoryProps> = async (ctx) => {
  const { slug } = ctx.params;

  const apiURL = "http://localhost:3333";
  const response = await fetch(apiURL + `/products?category_id=${slug}`);
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 120,
  };
};
