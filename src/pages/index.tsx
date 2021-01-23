import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>(
    []
  );

  const apiURL = "http://localhost:3333";

  useEffect(() => {
    fetch(apiURL + "/recommended").then((response) => {
      response.json().then((data) => {
        setRecommendedProducts(data);
      });
    });
  }, []);

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
