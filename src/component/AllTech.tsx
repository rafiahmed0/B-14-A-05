import React, { useState } from "react";
import { techType } from "../techType";
import { FaCheck, FaStar } from "react-icons/fa";
import { GrCheckmark, GrTechnology } from "react-icons/gr";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const AllTech = ({ technologies }: { technologies: techType[] }) => {
  const [stackedTechs, setStackedTechs] = useState<string[]>([]);
  const toggleStack = (techName: string) => {
    if (stackedTechs.includes(techName)) {
      setStackedTechs(stackedTechs.filter((name) => name !== techName));
       toast.error(`${techName} is remove to stack successfully`);
    } else {
      setStackedTechs([...stackedTechs, techName]);
     toast.success(`${techName} is added to stack successfully`);
    }
  };
  
  const selectedTechnologies = technologies.filter((tech) =>
    stackedTechs.includes(tech.name),
  
  );

  return (
   <div>
    <div className="max-w-6xl mx-auto px-4">
    <div className="mb-8">
      <h2 className="text-3xl font-black text-gray-900">Explore the <span className="bg-gradient-to-r from-[#ff7bbf] to-[#cf3386] bg-clip-text text-transparent">Technologies</span></h2>
    <p className="text-gray-500 mb-10 ">Pick one technology per catagory to build your ideal stack</p>
    </div>
    <div className="grid grid-cols-[3fr_1fr] gap-3">
      <div className="grid grid-cols-3 gap-x-3 gap-y-10 px-">
        {technologies.map((technology: techType) => {
          const IsStack = stackedTechs.includes(technology.name);
          return (
            <div
              key={technology.name}
              className=" card bg-base-100 w-full shadow-sm "
            >
              <div className="flex justify-between items-center p-6">
                <img
                  src={technology.icon}
                  className="w-10 h-10 object-contain"
                />
                <p className="badge badge-info badge-soft">
                  {technology.badge}
                </p>
              </div>

              <div className="card-body py-2">
                <h2 className="font-bold text-xl">{technology.name}</h2>
                <p className="text-gray-500 text-sm">
                  {technology.description}
                </p>
                <hr className="border-gray-200" />
                <div className="flex mx-1 my-1">
                  <p className="flex justify-center items-center text-gray-500 font-semibold text-xs bg-gray-300 py-0.5 mx-1.5 rounded">
                    {technology.category}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {technology.difficulty}
                  </p>
                  <div className="flex justify-center items-center gap-1 font-semibold text-xs">
                    <FaStar className="text-amber-300" />
                    <p>{technology.rating}</p>
                  </div>
                </div>

                <div className="text-center my-3">
                  <button
                    onClick={() => toggleStack(technology.name)}
                    className={`btn w-full font-medium ${
                      IsStack
                        ? "btn-disabled  text-pink-600 bg-pink-50 rounded-lg"
                        : "btn-neutral rounded-lg"
                    }`}
                  >
                    {IsStack ? (
                      <div className="flex items-center justify-center gap-2 font-bold">
                        <GrCheckmark className="text-pink-600" />
                        Added to Stack
                      </div>
                    ) : (
                      <p className="font-bold">Add to Stack</p>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto card bg-base-100 h-fit self-start w-72 shadow-sm p-5">
        <p className="text-xl font-bold ">Your Stack</p>
        <p className="text-gray-500 text-sm my-1">
          {stackedTechs.length === 0 ? "No technology selected yet." : `${stackedTechs.length} Technology Selected.`} 
        </p>
        <div>
        {stackedTechs.length === 0 ? <div
           className=" flex justify-center items-center p-5 border border-gray-200 rounded-xl my-3 px-5"><p className="text-sm text-gray-500">Your Stack is Empty.</p>
        </div> 
        
        :null}
        </div>
        <div>
          {selectedTechnologies.map((item) => {
            return (
              <div key={item.name}>
                <div className="flex justify-between p-3 border-1 border-gray-200 rounded-xl my-3 px-3">
                  <div className=" flex gap-3 justify-between items-center">
                    <img src={item.icon} className="w-10 h-10 object-contain" />
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="font-semibold text-gray-400 text-xs">{item.category}</p>
                    </div>
                  </div>

                  <div class="flex items-center justify-center">
                    <button onClick={() => toggleStack(item.name)}>
                      <RxCross1 className="text-lg"/>
                      </button>
                  </div>

                </div>
    
              </div>
              
            );
          })}
        </div>

        {stackedTechs.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() =>{ setStackedTechs([]);
              toast.error("All stack removed successfully");
              }}
              
              className="w-full py-2 text-red-500 font-bold border border-red-200 rounded-lg bg-white hover:bg-red-50 transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default AllTech;
