import React from 'react'
import ProductCard from '../components/ProductCard'

const products = [
	{
		id: 1,
		name: 'iPhone 13',
		price: '$799',
		image: 'https://via.placeholder.com/200',
	},
	{
		id: 2,
		name: 'MacBook Pro',
		price: '$1299',
		image: 'https://via.placeholder.com/200',
	},
	// Добавьте больше продуктов здесь
]

const Home = () => {
	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-4xl font-bold mb-8'>Welcome to Istore</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default Home
