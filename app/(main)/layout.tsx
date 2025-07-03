import React, { ReactNode } from "react";
import Header from "../_components/Header";
import Container from "../_components/Container";
import Footer from "../_components/Footer";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className="  relative  ">
      <div className="fixed top-0 lef-0 w-screen h-screen  bg-gradient-to-b from-white   via-indigo-200    to-indigo-300 z-[-1]"/>
              <Header />
      <Container>

        {children}
      </Container>
      <Footer/>
    </div>
  );
};

export default layout;
