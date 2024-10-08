import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="h-screen  flex flex-col bg-gradient-to-r from-amber-50 to-orange-300">
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search Pizza..."
            className="px-3 py-2 w-1/2 bg-white shadow-lg rounded-l-md focus:outline-none text-[#6B7280]"
          />

          <button className="px-5 py-3 bg-yellow-500 rounded-r-md hover:bg-yellow-600 focus:outline-none flex justify-center items-center shadow-lg">
            <FaSearch className=" text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
