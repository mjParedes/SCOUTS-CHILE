import React from "react";

const CustomButton = ({ title }) => {
  return (
    <button
      className="bg-blue-700 w-fit rounded-md px-6 py-2 hover:bg-blue-900 hover:font-bold"
      type="button"
      // onClick={""}
    >
      {title}
    </button>
  );
};

export default CustomButton;
