import Theme from "@/Theme";
import { Link } from "react-router";


const NavBar = () => {
    return (
        <div className=" fixed  w-full bg-secondary ">
            <div className="flex  justify-between  p-2 h-[52px]">
                <div className="px-2 font-semibold tracking-widest">
                    <Link to={"/"}>Space</Link>
                </div>
                <div className="flex">
                    <Theme />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
