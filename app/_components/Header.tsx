import React from "react";
import NavLinks from "./NavLinks";
import Container from "./Container";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center  py-4">
      <Link href={"/"} className="font-[500]">
        Logo
      </Link>

      <div className="mx-auto">
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
