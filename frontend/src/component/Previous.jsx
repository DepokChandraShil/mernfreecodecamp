import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Previous = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to={destination} className="bg-sky-500 text-white px-4 py-1">
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default Previous;
