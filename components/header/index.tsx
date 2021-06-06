import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Logo</div>
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
