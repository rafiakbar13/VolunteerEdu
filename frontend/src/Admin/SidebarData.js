import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/User/Participant',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: <IoIcons.IoIosImages />,
    cName: 'nav-text'
  },
  {
    title: 'Class',
    path: '/class',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];