import { Link } from "react-router-dom";

function ProductCard({ name, description, image, price ,category,id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-80 flex flex-col mt-4 border-gray-400 bg-white p-4 rounded-lg shadow-lg lg:w-96 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer lg:mt-4">
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt="product image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold text-sm text-gray-300">{category}</p>
        </div>
        <div className="flex justify-between mt-2 mb-2">
          <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
          <h1 className="text-lg font-bold text-green-600">₹{price}</h1>
        </div>
        <div className="text-sm text-gray-600">
          <p>{description}</p>
        </div>
        <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-[#ff9110] transition-colors duration-300">
          view 
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
