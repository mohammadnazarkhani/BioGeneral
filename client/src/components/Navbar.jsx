import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { GrLogin } from "react-icons/gr";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleMenuBtnClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              خانه
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              درمورد ما
            </li>
          </Link>{" "}
          <Link spy={true} smooth={true} to="/login">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              ورود
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-slate-900">
      <div className="h-10vh flex jusftify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex itmes-center flex-1">
          <span className="text-3xl font-bold">BioGeneral</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="/login">
                <li className="mt-1 hover:text-fuchsia-600 transition cursor-pointer">
                  <GrLogin />
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  درباره ما
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  خانه
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button
          className="block sm:hidden transition"
          onClick={handleMenuBtnClick}
        >
          {click ? <FaTimes /> : <CgMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
