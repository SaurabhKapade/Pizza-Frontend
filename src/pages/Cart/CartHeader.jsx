function CartHeader() {
    return (
      <div className="hidden md:flex flex-col">
        <div className="flex w-full items-center justify-between border-b border-gray-200 px-10 py-5 mt-2">
          {/* Product Image Header */}
          <div className="w-32 sm:w-30 text-md text-gray-600">Item</div>
  
          {/* Product Info Header */}
          <div className="flex-1 w-1/4 ml-6 text-md text-gray-600">Description</div>
  
          {/* Product Price Header */}
          <div className="flex w-1/4 justify-center text-md text-gray-600">Price</div>
  
          {/* Quantity Controls Header */}
          <div className="flex w-1/4 items-center ml-4 text-md text-gray-600">Quantity</div>
  
          {/* Total Price Header */}
          <div className="ml-4 w-24 justify-center text-md text-gray-600">Total</div>
  
          {/* Remove Item Header */}
          <div className="cursor-pointer text-md text-red-600">Remove</div>
        </div>
      </div>
    );
  }
  
  export default CartHeader;
  