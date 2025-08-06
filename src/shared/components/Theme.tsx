import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import Button from "../ui/button/Button";

const Theme = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    document.documentElement.setAttribute("data-theme", defaultTheme);
    setTheme(defaultTheme);
  }, []);

  return (
    <Button
      onClick={toggleTheme}
      icon={
        theme === "dark" ? (
          <RiMoonClearLine size={18} />
        ) : (
          <MdOutlineWbSunny size={18} />
        )
      }
    />
  );
};

export default Theme;
