import React, { useEffect, useState } from "react";

const ButtonNumbly = ({ btnname, work }) => {
  const [data, setData] = useState("default");
  useEffect(() => {
    if (btnname) {
      setData(btnname);
    }
  }, [btnname]);
  return (
    <div>
      <button
        onClick={work}
        className="text-teal-600 py-2 px-4 lg:py-5 lg:px-10 font-bold text-lg rounded-lg border-4 border-teal-600 hover:bg-teal-600 hover:text-white"
      >
        {data}
      </button>
    </div>
  );
};
export default ButtonNumbly;
