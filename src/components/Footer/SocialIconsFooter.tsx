import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";


export default function SocialIcons() {
  const icons = [
    { Icon: FaFacebookF, color: 'text-[#1E1E1E]' },
    { Icon: FaTwitter, color: 'text-[#1E1E1E]' },
    { Icon: FaInstagram, color: 'text-[#1E1E1E]' },
    { Icon: FaYoutube, color: 'text-[#FF9F0D]' },
    { Icon: FaPinterest, color: 'text-[#1E1E1E]' },
  ]

  return (
    <div className="flex space-x-4">
      {icons.map(({ Icon, color }, index) => (
        <a
          key={index}
          href="#"
          className={`bg-white p-2 rounded ${color} hover:bg-customYellow hover:text-white transition duration-300`}
        >
          <Icon size={16}/>
        </a>
      ))}
    </div>
  )
}