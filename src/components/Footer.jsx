import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { MdAddIcCall, MdMarkEmailUnread } from "react-icons/md";
import { PiAddressBookTabsFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-6 mt-12 rounded-t-3xl shadow-xl bg-gradient-to-r from-green-600 via-emerald-600 to-fuchsia-500">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                {/* About Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 border-b-2 border-white inline-block pb-1">About</h2>
                    <ul className="space-y-2 text-gray-100 text-sm md:text-base leading-relaxed">
                        <li>GreenNest helps you grow and care for your indoor plants easily.</li>
                        <li>Our mission is to make every home a little greener 🌿</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 border-b-2 border-white inline-block pb-1">Contact</h2>
                    <ul className="space-y-3 text-gray-100 text-sm md:text-base">
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <MdMarkEmailUnread className="text-lg text-blue-300" />
                            <a href="mailto:mdsamimhossen827@gmail.com" className="hover:underline"> mdsamimhossen827@gmail.com </a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <MdAddIcCall className="text-lg text-orange-300" />
                            <a href="tel:+8801700000000" className="hover:underline">+880 1700-000000</a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <PiAddressBookTabsFill className="text-lg text-emerald-300" />
                            <span>Rangpur, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* Privacy Policy Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 border-b-2 border-white inline-block pb-1">Privacy Policy</h2>
                    <ul className="space-y-2 text-gray-100 text-sm md:text-base leading-relaxed">
                        <li>We respect your privacy and protect your personal data.</li>
                        <li>All information is used responsibly within our platform.</li>
                        <li><a href="#privacy" className="hover:text-emerald-200 hover:underline italic"> Read full policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 md:gap-8 my-5 md:my-7">
                <a href="#" className="text-pink-400 hover:text-pink-500 hover:scale-110 transition-transform duration-300"> <FaInstagram size={28} /> </a>
                <a href="#" className="text-blue-400 hover:text-blue-500 hover:scale-110 transition-transform duration-300"> <FaFacebook size={28} /> </a>
                <a href="#" className="text-fuchsia-400 hover:text-fuchsia-500 hover:scale-110 transition-transform duration-300"> <FaPinterest size={28} /> </a>
            </div>

            <div className="border-t border-gray-400 my-2 mx-auto w-full shadow-md"></div>
            <div className="text-center text-xs md:text-sm text-gray-200 mt-4">
                <p>© {new Date().getFullYear()} <span className="font-semibold text-white">GreenNest</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
