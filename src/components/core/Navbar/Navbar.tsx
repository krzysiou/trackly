'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NavbarStyled } from './Navbar.styles';
import { Dropdown } from './Dropdown/Dropdown';
import { FullLogoIcon } from '../../common/Icons/FullLogoIcon';
import { MenuIcon } from '../../common/Icons/MenuIcon';
import { useAuthorization } from '../../hooks/AuthorizationHook';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { session, signOut } = useAuthorization();
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

  const applicationsLink = session && (
    <button
      className="header-link"
      onClick={() => {
        closeMenu();
        router.push('/applications');
      }}
    >
      Applications
    </button>
  );

  const logoutLink = session && (
    <button
      className="header-link"
      onClick={() => {
        signOut();
        closeMenu();
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
        menu={[aboutLink, galleryLink, applicationsLink, logoutLink]}
      />
      <div className="header-links">
        {aboutLink}
        {galleryLink}
        {applicationsLink}
        {logoutLink}
      </div>
    </NavbarStyled>
  );
};

export { Navbar };
