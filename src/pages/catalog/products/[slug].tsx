import { useRouter } from "next/router";
import { client } from "@/lib/prismic";
import { GetStaticPaths, GetStaticProps } from "next";
import { Document } from "prismic-javascript/types/documents";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";

interface ProductsProps {
  product: Document;
}

export default function Product({ product }: ProductsProps) {
  const { query, isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{PrismicDOM.RichText.asText(product.data.title)}</h1>

      <img
        src={product.data.thumbnail.url}
        width="300"
        alt="foto-ilustrativa"
      />

      <div
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(product.data.description),
        }}
      ></div>

      <p>Price: ${product.data.price}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductsProps> = async (ctx) => {
  const { slug } = ctx.params;

  const product = await client().getByUID("product", String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 5,
  };
};
