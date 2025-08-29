import Image from 'next/image';
import Link from 'next/link';
import Logo1 from '../../../../../public/logo.png';
import { DesktopMenu } from '../DesktopMenu';
import { MobileMenu } from '../MobileMenu';
import { FaWhatsapp } from 'react-icons/fa6';

export function Navbar() {
  return (
    <>
      <nav
        className="w-full h-40 sticky top-0 z-50 bg-white shadow-md"
        id="navbar"
      >
        <div className="w-4/5 m-auto h-full flex items-center justify-between">
          <Link href="/">
            <Image
              src={Logo1}
              width={250}
              alt="Missura Networks"
              title="Missura Networks"
            />
          </Link>

          <div className="2xl:block xl:block lg:block hidden text-[#14532d]">
            <DesktopMenu />
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden block text-[#14532d]">
            <MobileMenu />
          </div>
          <a
            href="https://wa.me/5519971027173"
            target="_blank"
            className="hidden lg:flex bg-[#25d366] hover:bg-teal-700 text-white px-5 py-2 rounded-full items-center gap-2 text-sm shadow-md"
          >
            <FaWhatsapp /> Fale conosco
          </a>
        </div>
      </nav>
    </>
  );
}
