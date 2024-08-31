import { useState } from "react";
import AddProductPresentation from "./AddProductPresentation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Slices/AddProductSlice";

function AddProduct() {
    const dispatch = useDispatch()
    const [formState,setFormState] = useState({
        productName:'',
        description:'',
        price:'',
        quantity:'',
        category:'Veg',
        productImage:null,
    })
    function handleFormInput(e) {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }
    async function handleFormSubmit(e){
        e.preventDefault();

        if(!formState.productName || !formState.description || !formState.price || !formState.quantity || !formState.category){
            toast.error('missing values from form',{duration:2000})
            return
        }
        console.log('Form data is ',formState)

        const apiResponse = await dispatch(addProduct(formState))
        console.log('response isss ',apiResponse)
        // if(apiResponse.payload.data.success){
        //     navigate('/auth/login')
        // }
    }
    return (
        <AddProductPresentation handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit}/>
    )
}

export default AddProduct;