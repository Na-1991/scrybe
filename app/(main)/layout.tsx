import React, { ReactNode } from "react";
import Header from "../_components/Header";
import Container from "../_components/Container";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-white via-indigo-200 to-indigo-400 ">
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
};

export default layout;
