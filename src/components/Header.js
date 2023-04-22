const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://imgs.search.brave.com/yyUMgcDb3kKLcaMkubxNMu3b4u4XH3-vIJsquIc_sCE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzYxMTk1/Nzkvc2NyZWVuc2hv/dHMvMTQ0MTQ3MzUv/ZHJpYmJsZV9mb29k/X2NvdXJ0XzR4LnBu/Zw"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
