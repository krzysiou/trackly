'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NavbarStyled } from './Navbar.styles';
import { Dropdown } from './Dropdown/Dropdown';
import { FullLogoIcon } from '../../Common/Icons/FullLogoIcon';
import { MenuIcon } from '../../Common/Icons/MenuIcon';
import { useAuthorization } from '../../Hooks/AuthorizationHook';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { isLoggedIn, signOut } = useAuthorization();
  const router = useRouter();

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const dropdownTrigger = (
    <button onClick={handleOpen} className="menu-icon">
      <MenuIcon />
    </button>
  );

  const aboutLink = (
    <button
      className="header-link"
      onClick={() => {
        closeMenu();
        router.push('/about');
      }}
    >
      About
    </button>
  );

  const galleryLink = (
    <button
      className="header-link"
      onClick={() => {
        closeMenu();
        router.push('/gallery');
      }}
    >
      Gallery
    </button>
  );

  const logoutLink = isLoggedIn && (
    <button
      className="header-link"
      onClick={() => {
        closeMenu();
        signOut();
      }}
    >
      Sign out
    </button>
  );

  return (
    <NavbarStyled open={open}>
      <Link href="/">
        <FullLogoIcon />
      </Link>

      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[aboutLink, galleryLink, logoutLink]}
      />
      <div className="header-links">
        {aboutLink}
        {galleryLink}
        {logoutLink}
      </div>
    </NavbarStyled>
  );
};

export { Navbar };
