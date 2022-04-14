import { PageTemplate, Search } from "@/components";
import type { NextPage } from "next";
import Styles from "../styles/internals.module.css";

const Home: NextPage = () => {
  return (
    <>
      <PageTemplate>
        <div className={Styles.content}>
          <h1>Encontre opções em Delivery próximos à você.</h1>
          <Search />
          <h2>
            Descubra seu novo Delivery favorito. Milhares de opções a um clique.
          </h2>
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
