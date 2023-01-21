import React, { useState } from "react";

const MyButton = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label
      htmlFor="check"
      className="inline-block relative bg-primary dark:bg-secondary h-buttonHeight w-buttonWidth rounded-full cursor-pointer"
    >
      <input
        type="checkbox"
        id="check"
        defaultChecked={isToggled}
        onClick={callback}
        className="sr-only peer"
      />
      <span className="bg-white w-buttonCircleSize h-buttonCircleSize absolute rounded-full top-1 left-1 peer-checked:left-9 transition-all duration-300 ease-in" />
    </label>
  );
};

export default MyButton;
