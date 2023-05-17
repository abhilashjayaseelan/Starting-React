import { useState } from "react";
import { LOGO_URL } from "../urls";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="w-28 ml-4" alt="logo" src={LOGO_URL} />
    </a>
  );
};

const Header = () => {
  const [loginButton, setLoginButton] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center border-b-2 border-orange-500 bg-white shadow-sm"
    >
      <Title />
      <div className="mr-6">
        <ul className="flex p-3 font-bold">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-3">Cart</li>
          <li className="p-3">
            <button
              className="rounded bg-violet-600 w-16"
              onClick={() => setLoginButton(!loginButton)}
            >
              {loginButton ? "logout" : "login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
