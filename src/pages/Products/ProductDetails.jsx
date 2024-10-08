import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fectchProduct } from "../../Redux/Slices/ProductSlice";
import Layout from "../../Layouts/Layout";
import { addToCart, removeFromCart } from "../../Redux/Slices/CartSlice";

function ProductListing() {
    const dispatch = useDispatch();
    const param = useParams().productId;
    const [product, setProduct] = useState({});
    
    
    async function getProduct() {
        const ApiResult = await dispatch(fectchProduct(param));
        const response = ApiResult?.payload?.data?.data;
        setProduct(response);
    }
    async function modifyCart(){
        const response = await dispatch(addToCart(param))
        console.log('cart data is ',response)
    }
    async function removeModifyCart(){
        const response = await dispatch(removeFromCart(param))
        console.log(response)
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <div className="w-full flex flex-col lg:flex-row mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Product Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
                        <img
                            src={product.productImage}
                            alt="Product Image"
                            className="w-full lg:w-3/4 object-cover rounded-lg "
                        />
                    </div>
                    
                    
                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 p-6">
                        <h1 className="text-4xl font-bold mb-4">{product.productName} <span className={`text-sm  py-1 rounded-full ${product.category==='Veg'  ? 'text-green-400' : 'text-red-200'}`}>
                                {product.category==='Veg' ? 'veg' : 'Non-Veg'}
                        </span></h1>
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        
                        <div className="flex justify-between  mt-6">
                            <span className="text-3xl font-semibold text-gray-900">{product.price}</span>
                            <div className={`text-sm  py-1 rounded-full  mt-2 ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </div>
                        </div>
                        <div className="flex flex-col md:block mt-4">
                            <button className="w-full rounded-2xl lg:w-1/4 bg-orange-500 text-white font-semibold py-2 lg:rounded-lg hover:bg-orange-600 transition duration-300" onClick={modifyCart}>
                                Add to Cart
                            </button>
                            
                            <button className="w-full mt-4 rounded-2xl lg:ml-4 lg:w-1/4 bg-orange-300 text-white font-semibold py-2 lg:rounded-lg hover:bg-orange-800 transition duration-300" onClick={removeModifyCart}>
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductListing;
