import React, { ReactNode } from "react";
import Header from "../_components/Header";
import Container from "../_components/Container";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div>
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
};

export default layout;
