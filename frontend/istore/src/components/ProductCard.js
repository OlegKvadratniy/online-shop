import React from 'react'

const ProductCard = ({ product }) => {
	return (
		<div className='border rounded-lg p-4'>
			<img
				src={product.image}
				alt={product.name}
				className='w-full h-64 object-cover rounded-t-lg mb-4'
			/>
			<h2 className='text-xl font-bold'>{product.name}</h2>
			<p className='text-gray-700'>{product.price}</p>
			<button className='bg-blue-500 text-white mt-4 px-4 py-2 rounded'>
				Add to Cart
			</button>
		</div>
	)
}

export default ProductCard
