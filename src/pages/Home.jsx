import IconArrowRight from "../Components/icons/IconArrowRight";
import PizzaImage from "../assets/images/pizza2.png";
import CookingImage from "../assets/images/cooking1.png";
import IconPatchCheck from "../Components/icons/IconPatchCheck";
import OrderFood from "../assets/images/orderFood.png";
import PickupFood from "../assets/images/pickup.png";
import EnjoyFood from "../assets/images/enjoy.png";
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Slices/ProductSlice";
import { useEffect, useState } from "react";
import ProductCard from "../Components/Cards/ProductCard";
function Home() {
  const dispatch = useDispatch();

  const { productsData, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Layout>
        {/**Hero Section */}
        {isLoading ? (
          <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
            <div className="flex items-center justify-center">
              <p>Loading...</p>
            </div>
          </nav>
        ) : null}
        <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
          <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
            <div className="flex justify-center text-4xl md:justify-normal">
              <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                Enjoy the Slice{" "}
              </h1>
              <h1>😋</h1>
            </div>

            <p className="pb-4 text-[#6b7280]">
              The Pizza App lets you order your pizza from the comfort of your
              home. Enjoy the best Pizza in town with just a few clicks
            </p>

            <button
              className="flex items-center px-4 py-2 text-white
                        bg-yellow-500 rounded-md hover:bg-yellow-600 group"
            >
              Order Now
              <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                <IconArrowRight />
              </span>
            </button>
          </div>

          <div>
            <img src={PizzaImage} height={550} width={550} />
          </div>
        </section>

        {/**Products Listing Here */}
        <div className=" px-5 justify-center items-center">
          <section className=" mt-6 flex flex-wrap justify-around items-center">
            {productsData.map((product) => (
              <div key={product._id}>
                <ProductCard
                  category={product.category}
                  name={product.productName}
                  image={product.productImage}
                  price={product.price}
                  description={product.description}
                />
              </div>
            ))}
          </section>
          <div className="flex justify-center items-center mt-4 md:mt-8">
            <button className="font-semibold text-white bg-yellow-500 p-2 rounded-md">
              Load More
            </button>
          </div>
        </div>

        {/**Services Section */}
        <section
          className="py-4 mt-6 bg-gradient-to-r 
                from-amber-50 to-orange-300"
        >
          <div className="container flex flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
              <img
                src={CookingImage}
                alt="Cooking"
                width={500}
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div>
                  <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                    Cooked by the best <br /> chefs in the world
                  </h2>
                  <p className="text-base leading-relaxed text-[#6b7289]">
                    There are many benefits regarding to that but the main ones
                    are:
                  </p>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-[#f38339] w-10 h-10 mr-4" />
                  <span className="font-bold title-font">Perfect taste</span>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-[#f38339] w-10 h-10 mr-4" />
                  <span className="font-bold title-font">Prepared quickly</span>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-[#f38339] w-10 h-10 mr-4" />
                  <span className="font-bold title-font">
                    Food hygine guranteed
                  </span>
                </div>
              </div>

              <div className="px-5 py-4 mx-auto">
                <div className="flex justify-center py-4">
                  <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-wrap space-y-6 md:space-y-0">
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={OrderFood} alt="orderFood" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900">
                      Order Food
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed">
                    As easy as 1, 2, 3. Just select your favourite pizza and
                    place your order.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={PickupFood} alt="orderFood" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900">
                      Pickup Food
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed">
                    Pickup your order from the nearest store or get it delivered
                    to your doorstep.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                    <img src={EnjoyFood} alt="orderFood" />
                  </div>

                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900">
                      Enjoy Food
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed">
                    As soon as you get your order, enjoy the delicious pizza
                    with your loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**About us and Map section */}
        <section className="flex justify-between px-9 py-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3721.469754039467!2d75.80551043682213!3d21.13369591462839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725766454458!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:'0'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div>
            <h1>About Us</h1>
          </div>
        </section>
      </Layout>
    </>
  );
}
export default Home;
