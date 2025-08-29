'use client';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

import Logo1 from '../../../../../public/logo.png';

import MenuValues from '../menu.json';
import { handleMenuScroll } from '@/app/(utils)/MenuScroll';

export function MobileMenu() {
  const [show, setShow] = useState(false);

  const handleLink = (id: string) => {
    setShow(false);
    handleMenuScroll(id);
  };

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        <IoMdMenu size={24} className="text-[#14532d]]" />
      </button>
      <menu
        data-show={show}
        className="fixed top-0 right-0 transition-all duration-500 ease-linear data-[show=false]:w-0 data-[show=false]:invisible visible w-3/4 overflow-x-hidden h-svh bg-white z-10 shadow-lg"
      >
        <div className="w-full flex justify-between items-center mb-12 mt-6 gap-4 px-6">
          <Image src={Logo1} width={160} alt="Missura Networks" />
          <button type="button" onClick={() => setShow(false)}>
            <IoMdClose className="text-slate-700" size={24} />
          </button>
        </div>
        <ul className="w-full flex flex-col items-center gap-4 text-white font-bold">
          {MenuValues.map((menu) => (
            <button
              key={menu.id}
              type="button"
              onClick={() => handleLink(menu.id)}
              className="w-full max-w-[250px] mx-auto bg-[#14532d] hover:bg-[#14532d] hover:text-black transition-all duration-500 px-6 py-2 border-2 rounded-full"
            >
              <li className="transition-all ease-linear duration-200 ml-0 hover:ml-3 ">
                {menu.name}
              </li>
            </button>
          ))}
        </ul>
      </menu>
    </>
  );
}
