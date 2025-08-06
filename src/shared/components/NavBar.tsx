import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import Theme from "../Theme";
import Button from "./ui/button/Button";
import LogoutButton from "@/layout/LogoutButton";

const NavBar = () => {
  return (
    <div className=" fixed z-10  w-full bg-secondary ">
      <div className="flex  justify-between  p-2 h-[52px]">
        <div className="px-2 font-semibold tracking-widest">
          <Link to={"/"}>Blog Logo</Link>
        </div>
        <div className="flex gap-1">
          <LogoutButton />
          <Theme />
          <Link to="https://github.com/prop07" target="_blank">
            <Button icon={<FaGithub size={18} />} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
