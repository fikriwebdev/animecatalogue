import { getProducts } from "@/libs/getProducts";

export default async function Home() {
  const data = await getProducts();

  console.log({ data });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
