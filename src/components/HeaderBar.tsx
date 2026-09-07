import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"


const HeaderBar = () => {
  return (
    <div className="bg-blue-950 text-white flex justify-between text-center">
      <div className="p-1">
        <h1 className="text-sm font-medium m-1  ml-2">
          Email: sales@oxon.mv | Phone No: +960 3333773 | +960 7543773
        </h1>
      </div>
      <div className="flex justify-between p-1 gap-2 mr-4 text-center items-center">
        <FiFacebook />
        <FaInstagram />
        <FaWhatsapp />
        <FaViber />
      </div>
    </div>
  )
}

export default HeaderBar