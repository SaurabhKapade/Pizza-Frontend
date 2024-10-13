import Layout from "../../Layouts/Layout";
import { useDispatch } from "react-redux";
import {
  addToCart,
  getCartDetails,
  removeFromCart,
  removeItem,
} from "../../Redux/Slices/CartSlice";
import { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import FetchingCart from "./FetchingCart";
import { RiDeleteBinLine } from "react-icons/ri";
import IconArrowRight from "../../Components/icons/IconArrowRight";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  async function getProducts() {
    const response = await dispatch(getCartDetails());
    setProducts(response.payload.data.items);
  }

  async function handleIncreaseQuantity(param) {
    console.log("param is ", param);
    const response = await dispatch(addToCart(param));
    getProducts();
    calculatePrice();
    console.log("cart data is ", response);
  }

  async function handleDecreaseQuantity(param) {
    const response = await dispatch(removeFromCart(param));
    getProducts();
    calculatePrice();
    console.log(response);
  }

  async function removeItemFromCart(itemId) {
    const response = await dispatch(removeItem(itemId));
    if (response.meta.requestStatus === "fulfilled") {
      getProducts();
      calculatePrice();
    }
  }
  function calculatePrice(items) {
    const price = items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
    setTotal(price);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    calculatePrice(products);
  }, [products]);

  // if(isLoading){
  //   return(
  //     <Layout>
  //       <FetchingCart/>
  //     </Layout>
  //   )
  // }
  return (
    <Layout>
      {products.length == 0 && <EmptyCart />}
      {products.length >= 0 ? (
        <>
          {/* <CartHeader/> */}
          <div className="hidden md:flex flex-col">
            {products.map((item) => (
              <div
                className="flex w-full items-center justify-between border rounded-lg shadow-lg overflow-hidden px-10 py-5 mt-2"
                key={item._id}
              >
                {/* Product Image */}
                <img
                  className="w-32 h-32 object-cover sm:w-30 sm:h-30 rounded-lg"
                  src={item.product?.productImage}
                  alt={item.product?.productName}
                />

                {/* Product Info */}
                <div className="flex flex-1 w-1/4 ml-6 items-center ">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      {item.product?.productName}
                    </h3>
                    <p className="hidden md:block text-gray-500 text-sm mt-1">
                      {item.product?.description}
                    </p>
                  </div>

                  {/* Product Price */}
                  <div className="flex ml-4 w-1/4 justify-center items-center">
                    <p className="text-lg font-bold">₹{item.product?.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex w-1/4 items-center  ml-4">
                    <button
                      className="px-2 py-1 rounded-sm font-bold text-2xl "
                      onClick={() => handleDecreaseQuantity(item.product._id)}
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      className="px-2 py-1 rounded-sm font-bold text-2xl"
                      onClick={() => handleIncreaseQuantity(item.product._id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex w-1/4 justify-between">
                    <div className="ml-4 w-24 justify-center text-right">
                      <p className="text-lg font-bold">
                        ₹{item.product?.price * item.quantity}
                      </p>
                    </div>
                    <div className="cursor-pointer">
                      <RiDeleteBinLine
                        size={22}
                        color="red"
                        onClick={() => removeItemFromCart(item.product._id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex w-full items-end flex-col gap-6  px-10 py-5 mt-5 shadow-lg">
            <div className="flex flex-col">
              <p className="text-lg font-semibol">Total : <span className="text-xl font-bold ">{`₹${total}`}</span></p>
              
            </div>
            <Link to="/orders"><button 
              className="flex items-center px-3 py-1 text-white w-28
                        bg-orange-400 rounded-md hover:bg-orange-500 group"
            >
              CheckOut
              <span className="inline-block ml-2 transition-transform ease-in-out group-hover:translate-x-2">
                <IconArrowRight />
              </span>
            </button></Link>
          </div>

          <div>
           {products.length > 0 && <div className="md:hidde min-h-screen p-1">
           
            {
              products.map((item)=>{
                return(
                  <div key={item._id} className=" bg-white shadow-lg rounded-md">
                    <div key={item._id} className="mt-2 flex p-2 gap-2 items-cente">
                      <div className="p-3">
                        <img src={item.product.productImage} className="h-14 rounded-lg "/>
                          <div className="flex w-1/4 items-center  ">
                            <button
                              className="px-2 py-1 rounded-sm font-bold text-2xl "
                              onClick={() => handleDecreaseQuantity(item.product._id)}
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              className="px-2 py-1 rounded-sm font-bold text-2xl"
                              onClick={() => handleIncreaseQuantity(item.product._id)}
                            >
                              +
                            </button>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl">{item.product.productName}</h1>
                        <span>{item.product.description}</span>
                        <div className="font-bold">₹{item.product.price}</div>
                      </div>
                      
                    </div>
                   <div className="p-2 -mt-7">
                      <button className="bg-red-400 w-full p-2 rounded-lg text-white hover:bg-red-500 " onClick={() => removeItemFromCart(item.product._id)}>Remove Item</button>
                   </div>
                  </div>
                )
              })
            }
          </div>
           
          }
           <div className="flex p-5 mx-2 rounded-lg items-center justify-between md:hidden">
              <span className="font-semibold text-xl">Total : ₹{total}</span>
              <button className="p-2 font-semibold text-white bg-orange-400 rounded w-auto px-4">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <FetchingCart />
      )}
    </Layout>
  );
}

export default Cart;
