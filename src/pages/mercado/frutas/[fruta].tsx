import { useRouter } from "next/router";

export default function Fruta() {
  const { query } = useRouter();

  return <h1>{query.fruta}</h1>;
}
