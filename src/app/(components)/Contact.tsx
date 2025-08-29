import { FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex justify-center items-center">
      <a
        href="https://wa.me/5519971027173"
        target="_blank"
        className="bg-[#25d366] text-white 
            text-center p-4 text-2xl my-10
            flex justify-center items-center rounded-full"
      >
        <FaWhatsapp size={45} />
      </a>
    </div>
  );
}
