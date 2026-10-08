import { FaInstagram, FaViber, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const HeaderBar = () => {
  return (
    // Added w-full, relative layout, and items-center to guarantee layout space
    <div className='w-full bg-[#000b2f] text-white flex justify-between items-center p-2 relative z-50'>
      <div className='flex items-center'>
        <h1 className='text-xs font-normal ml-2'>
          Email: sales@oxon.mv | Phone No: +960 3333773 | +960 7543773
        </h1>
      </div>
      {/* Changed to flex gap-3 for cleaner spacing control */}
      <div className='flex items-center gap-3 mr-4 text-sm'>
        <a href="#" className="hover:text-blue-400"><FiFacebook /></a>
        <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
        <a href="#" className="hover:text-green-400"><FaWhatsapp /></a>
        <a href="#" className="hover:text-purple-400"><FaViber /></a>
      </div>
    </div>
  );
};

export default HeaderBar;
