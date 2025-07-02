import React from "react";
import NavLinks from "./NavLinks";
import Container from "./Container";
import Link from "next/link";
import ImageComponent from "./ImageComponent";
import NavSheet from "./NavSheet";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" w-full sticky top-0 bg-white border-b z-50">
      <Container>
        <div className="flex items-center   justify-between">
          <Link href={"/"} className="font-[500]">
          <ImageComponent src="/logo-blue.png" aspect="video" imgClassName="object-contain" className="w-[120px]" alt="Logo" />
          </Link>

          <div className="hidden lg:block">
            <NavLinks />
          </div>
          <div className="block  lg:hidden">
            <NavSheet/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
