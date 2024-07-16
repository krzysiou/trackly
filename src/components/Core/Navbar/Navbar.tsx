'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { NavbarStyled } from './Navbar.styles';
import { Dropdown } from './Dropdown/Dropdown';
import { FullLogoIcon } from '../../Common/Icons/FullLogoIcon';
import { MenuIcon } from '../../Common/Icons/MenuIcon';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const dropdownTrigger = (
    <button onClick={handleOpen}>
      <MenuIcon />
    </button>
  );

  const homeLink = (
    <Link href="/" className="header-link" onClick={closeMenu}>
      Home
    </Link>
  );

  const aboutLink = (
    <Link href="/about" className="header-link" onClick={closeMenu}>
      About
    </Link>
  );

  const docsLink = (
    <Link href="/docs" className="header-link" onClick={closeMenu}>
      Docs
    </Link>
  );

  return (
    <NavbarStyled open={open}>
      <FullLogoIcon />
      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[homeLink, aboutLink, docsLink]}
      />
      <div className="header-links">
        {homeLink}
        {aboutLink}
        {docsLink}
      </div>
    </NavbarStyled>
  );
};

export { Navbar };
