"use client";

import React from 'react';
import Link from 'next/link';
import { LuSchool } from "react-icons/lu";
import { FiHome, FiUser, FiMenu, FiBriefcase, FiMessageCircle } from 'react-icons/fi';

const navItems = [
  { icon: FiHome, label: 'Home', href: '/', active: true }, 
  { icon: FiUser, label: 'Aboutme', href: '/aboutme' },
  { icon: LuSchool, label: 'Education & Experience', href: '/eduexp' }, 
  { icon: FiMenu, label: 'Portfolio', href: '/portfolio' }, 
  { icon: FiBriefcase, label: 'Experience', href: '/experience' },
  { icon: FiMessageCircle, label: 'Contact', href: '/contact' },
];

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href, active }) => {
  const activeStyle = active 
    ? "text-orange-500 border-orange-500" 
    : "text-gray-400 border-transparent hover:text-white hover:border-gray-500";

  return (
    <Link href={href} passHref>
      <div 
        className={`p-3 rounded-full transition duration-300 cursor-pointer ${activeStyle}`}
        title={label}
        aria-label={label}
      >
        <Icon className="h-6 w-6" />
      </div>
    </Link>
  );
};

const VerticalNavbar: React.FC = () => {
  return (
    <nav className="h-full">
      <div 
        className="flex flex-col items-center justify-center p-4 space-y-4 rounded-full bg-gray-900 border border-gray-700 shadow-xl"
        style={{ width: '60px' }}
      >
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default VerticalNavbar;