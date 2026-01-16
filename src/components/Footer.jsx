import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          {/* Social Icons */}
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-lg font-semibold tracking-wide">
              Connect with me
            </h2>

            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-white hover:scale-110 transition duration-300"
                >
                  <FaSquareFacebook className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/nagrajchitme"
                  target="_blank"
                  className="hover:text-white hover:scale-110 transition duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/rajvchitme"
                  target="_blank"
                  className="hover:text-white hover:scale-110 transition duration-300"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/nagrajchitme"
                  target="_blank"
                  className="hover:text-white hover:scale-110 transition duration-300"
                >
                  <FaTelegram className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Text */}
          <div className="text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Nagraj Chitme. All rights
              reserved.
            </p>
            <p className="mt-2">
              Made with ❤️ by{" "}
              <span className="text-white font-semibold">Nagraj Chitme</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
