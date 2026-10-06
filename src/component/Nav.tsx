import Logo from "../assets/logo-text.png";

function Nav() {
  return (
    <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <img src={Logo} alt="Logo" className="h-8" />

      <ul className="flex items-center gap-8 ">
        <li className="text-sm text-[#DB2777] font-semibold">Home</li>
        <li className=" text-sm text-gray-500 font-semibold">Technologies</li>
        <li className=" text-sm text-gray-500 font-semibold">Project</li>
        <li className=" text-sm text-gray-500 font-semibold">About</li>
        <li className=" text-sm text-gray-500 font-semibold">Contact</li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="px-2 py-2 text-sm font-medium text-black-300 rounded-full cursor-pointer">Sign In</button>
        <button button className="px-5 py-2 text-sm font-medium text-white bg-[#DB2777] rounded-full cursor-pointer">Sign Up</button>
      </div>
    </nav>
  );
}

export default Nav;
