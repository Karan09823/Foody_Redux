import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col bg-green-500  w-full lg:flex-row justify-between py-3  mb-10">
      <div>
        <h1 className="text-2xl  ml-2 font-bold">Foody</h1>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border mr-3 border-gray-800 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
        />
      </div>
    </nav>
  );
}

export default Navbar;
