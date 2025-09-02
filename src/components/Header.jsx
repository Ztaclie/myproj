import avatar from "../assets/img/avatar.svg";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="w-[100px] h=[100px] flex flex-row align-center justify-center border-2 border-[#6c63ff] rounded-full overflow-hidden mt-2 ms-2">
          <img src={avatar} alt="Logo" className="w-full" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
