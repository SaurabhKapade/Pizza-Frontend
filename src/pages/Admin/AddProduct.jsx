import { useEffect, useState } from "react";
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
        const { name, value ,files } = e.target;
        if(name==="productImage"){
            
            setFormState({
                ...formState,
                [name]:files[0]
            })
        }else{
            
            setFormState({
                ...formState,
                [name]: value,
            });
        }
        
    }
    async function handleFormSubmit(e){
        e.preventDefault();
        // console.log('path is ',e.target.files[0])
      
        if(!formState.productName || !formState.description || !formState.price || !formState.quantity || !formState.category){
            toast.error('missing values from form',{duration:2000})
            return
        }

        const formData = new FormData();
        formData.append('productName', formState.productName);
        formData.append('description', formState.description);
        formData.append('price', formState.price);
        formData.append('quantity', formState.quantity);
        formData.append('category', formState.category);
        formData.append('productImage', formState.productImage);
        const apiResponse = await dispatch(addProduct(formData))
    }   
    return (
        <AddProductPresentation handleFormInput={handleFormInput} handleFormSubmit={handleFormSubmit}/>
    )
}

export default AddProduct;