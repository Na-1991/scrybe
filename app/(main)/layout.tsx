import React, { ReactNode } from "react";
import Header from "../_components/Header";
import Container from "../_components/Container";
import Footer from "../_components/Footer";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className=" bg-gradient-to-b from-white   via-indigo-200  relative  to-indigo-400 ">
              <Header />
      <Container>

        {children}
      </Container>
      <Footer/>
    </div>
  );
};

export default layout;
