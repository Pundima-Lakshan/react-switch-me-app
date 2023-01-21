import { React, useEffect, useState } from "react";

import { Upper_text, MyButton, Lower_text } from "./components/index";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    console.log("Toggled: ", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-slate-200 dark:bg-primary flex flex-col justify-center items-center m-auto w-containerWidth h-containerHeight rounded-[20px] relative hover:border-4 hover:border-primary dark:hover:border-secondary hover:drop-shadow-2xl transition-all ease-in duration-300">
          <div className="absolute top-24">
            <Upper_text />
          </div>

          <div className="absolute top-64">
            <MyButton
              label={"Switch ME"}
              toggled={false}
              onClick={handleThemeSwitch}
            />
          </div>

          <div className="absolute bottom-28">
            <Lower_text />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
