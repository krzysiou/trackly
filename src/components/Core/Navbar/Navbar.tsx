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

  const aboutLink = (
    <Link href="/about" className="header-link" onClick={closeMenu}>
      About
    </Link>
  );

  const galleryLink = (
    <Link href="/gallery" className="header-link" onClick={closeMenu}>
      Gallery
    </Link>
  );

  return (
    <NavbarStyled open={open}>
      <Link href="/">
        <FullLogoIcon />
      </Link>

      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[aboutLink, galleryLink]}
      />
      <div className="header-links">
        {aboutLink}
        {galleryLink}
      </div>
    </NavbarStyled>
  );
};

export { Navbar };
