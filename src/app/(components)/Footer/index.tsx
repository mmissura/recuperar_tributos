import { FaInstagram } from 'react-icons/fa6';
import { CiFacebook } from 'react-icons/ci';
import { BsWhatsapp } from 'react-icons/bs';

export function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-3 text-sm hover:text-gray-200 transition-all">
          <BsWhatsapp size={22} />
          <a
            href="https://wa.me/5519971027173"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            (19) 97102-7173
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://instagram.com/missuranetworks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition-all"
          >
            <FaInstagram size={22} />
            @missuranetworks
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61566022891643"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition-all"
          >
            <CiFacebook size={24} />
            missuranetworks
          </a>
        </div>
      </div>

      <div className="bg-slate-500 text-center text-sm py-4 px-6">
        <p>
          &copy; {getYear} Missura Consultoria Tributária. Todos os direitos
          reservados. <br />
          CNPJ: 53.447.302/0001-79
        </p>
      </div>
    </footer>
  );
}
