import avatar from "../assets/img/avatar.svg";

const Header = () => {
  const homeOnClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    alert("Home Clicked");
  };

  return (
    <>
      <header className="Header fixed top-0 w-screen flex flex-row align-center justify-between p-2 border-b-2 border-[#6c63ff] px-5">
        <div className="w-[100px] h-[100px] flex flex-row align-center justify-center border-2 border-[#6c63ff] rounded-full overflow-hidden mt-2 ms-2">
          <img src={avatar} alt="Logo" className="w-full" />
        </div>
        <nav>
          <ul className="h-full flex flex-row align-center justify-center items-center gap-4 text-lg font-semibold text-[#6c63ff]">
            <li className="cursor-pointer" onClick={homeOnClick}>
              Home
            </li>
            <li className="cursor-pointer">About Me</li>
            <li className="cursor-pointer">Contact Me</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
