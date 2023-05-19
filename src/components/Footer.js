import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 pl-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Your food ordering website provides a convenient way to order
              delicious meals from the comfort of your home. We offer a wide
              range of cuisines and deliver them right to your doorstep.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-sm">
              Address: 123 Main Street, City, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-500 transition duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-500 transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-500 transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
