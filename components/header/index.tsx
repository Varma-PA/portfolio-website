import React from "react";
import Link from "next/link";
import MainLogo from "../icons/main-icon-component";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <div className="header_logo__component">
          <Link href="/">
            <MainLogo height={40} width={40} />
          </Link>
        </div>
      </div>
      <div className="header_about">
        <div className="header_about__component">
          <Link href="/about">About</Link>
        </div>
      </div>
      <div className="header_projects">
        <div className="header_projects__component">
          <Link href="/projects">Projects</Link>
        </div>
      </div>
      <div className="header_contact">
        <div className="header_contact__component">
          <Link href="/about">Contact</Link>
        </div>
      </div>
      <div className="header_learn">
        <div className="header_learn__component">
          <Link href="/about">Learn</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
