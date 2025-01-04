import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const ArrivalCard = ({ url, title, index}) => {

  return (
    <>
      <div className="hover:scale-95 duration-300 shadow-2xl rounded-xl">
        <div>
          <img className="w-[350px]" src={url} alt="" />
        </div>
        <div className="flex justify-between items-center mt-4 p-2">
          <div>
            <h1 className="font-bold">{title}</h1>
            <p className="text-gray-500">Explore Now!</p>
          </div>
          <Link to={`product/${index}`}>
            <div className="btn btn-ghost">
              <ArrowRightAltIcon />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArrivalCard;
