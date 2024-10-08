import { Link } from 'react-router-dom'

function FetchingCart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-3xl font-bold mb-4">Wait for a while</h2>
    <p className="text-gray-600 mb-6">Fetching Your Cart</p>
    <Link
        to="/" // Replace with the path to your product listing page
        className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
    >
        Continue Shopping
    </Link>
</div>
  )
}

export default FetchingCart