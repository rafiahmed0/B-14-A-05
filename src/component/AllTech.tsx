import React from "react";
import { techType } from "../techType";
const AllTech = ({ technologies }) => {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-10">
      <div className="grid grid-cols-3 gap-x-30 gap-y-10 px-16">
        {technologies.map((technology: techType) => (
          <div className="container mx-auto card bg-base-100 w-72 shadow-sm ">

            <div className="flex justify-between items-center p-6">
              <img src={technology.icon} className="w-10 h-10 object-contain" />
              <p className="badge badge-info badge-soft">{technology.badge}</p>
            </div>

            <div className="card-body py-2">
              <h2 className="font-bold text-xl">{technology.name}</h2>
              <p className="text-gray-500 text-sm">{technology.description}</p>
              <hr className="border-gray-200" />
              <div className="flex my-1">
                <p className="text-gray-500 font-semibold">
                  {technology.category}
                </p>
                <p className="text-gray-500">{technology.difficulty}</p>
                <p>{technology.rating}</p>
              </div>

              <div className="text-center my-3">
                <button className="btn btn-neutral w-full font-medium">Add to Stack</button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default AllTech;
