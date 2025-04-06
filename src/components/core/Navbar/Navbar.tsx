'use client';

import React, { useState } from 'react';

import { NavbarStyled } from './Navbar.styles';
import { Dropdown } from './Dropdown/Dropdown';
import { FullLogoIcon } from '../../common/Icons/FullLogoIcon';
import { MenuIcon } from '../../common/Icons/MenuIcon';
import { useAuthorization } from '../../hooks/AuthorizationHook';
import { tracker } from '../../../tracker';
import { navigate } from '../../hooks/NavigateHook';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { session, signOut } = useAuthorization();

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const dropdownTrigger = (
    <button
      onClick={() => {
        tracker.trackClickElement({
          actor: session?.userId || 'unknown',
          targetName: 'Navigation Menu',
          targetPageType: 'Navbar',
        });
        handleOpen();
      }}
      className="menu-icon"
    >
      <MenuIcon />
    </button>
  );

  const aboutLink = (
    <button
      className="header-link"
      onClick={() => {
        tracker.trackClickElement({
          actor: session?.userId || 'unknown',
          targetName: 'About Link',
          targetPageType: 'Navbar',
        });
        closeMenu();
        navigate('/about');
      }}
    >
      About
    </button>
  );

  const galleryLink = (
    <button
      className="header-link"
      onClick={() => {
        tracker.trackClickElement({
          actor: session?.userId || 'unknown',
          targetName: 'Gallery Link',
          targetPageType: 'Navbar',
        });
        closeMenu();
        navigate('/gallery');
      }}
    >
      Gallery
    </button>
  );

  const applicationsLink = session && (
    <button
      className="header-link"
      onClick={() => {
        tracker.trackClickElement({
          actor: session?.userId || 'unknown',
          targetName: 'Applications Link',
          targetPageType: 'Navbar',
        });
        closeMenu();
        navigate('/applications');
      }}
    >
      Applications
    </button>
  );

  const logoutLink = session && (
    <button
      className="header-link"
      onClick={() => {
        tracker.trackClickElement({
          actor: session?.userId || 'unknown',
          targetName: 'Logout Link',
          targetPageType: 'Navbar',
        });
        signOut();
        closeMenu();
      }}
    >
      Sign out
    </button>
  );

  return (
    <NavbarStyled open={open}>
      <a href="/">
        <FullLogoIcon />
      </a>
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
