import { PageTemplate } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <PageTemplate>
        <h1>Encontre opções em Delivery próximos à você.</h1>
        <h2>
          Descubra seu novo Delivery favorito. Milhares de opções a um clique.
        </h2>
      </PageTemplate>
    </>
  );
};

export default Home;
