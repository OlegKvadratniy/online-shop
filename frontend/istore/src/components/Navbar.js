import React from 'react'

const Navbar = () => {
	return (
		<nav className='bg-black p-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<a href='/' className='text-white text-2xl font-bold'>
					i-Store
				</a>
				<div className='flex space-x-8'>
					<div className='relative group'>
						<a
							href='/catalog'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							Каталог товаров
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/catalog/iphone-14' className='block px-4 py-2'>
								iPhone 14
							</a>
							<a href='/catalog/iphone-13' className='block px-4 py-2'>
								iPhone 13
							</a>
							<a href='/catalog/iphone-12' className='block px-4 py-2'>
								iPhone 12
							</a>
							<a href='/catalog/macbook-pro' className='block px-4 py-2'>
								MacBook Pro 16" (2023)
							</a>
							<a href='/catalog/macbook-air' className='block px-4 py-2'>
								MacBook Air 13" (2023)
							</a>
							<a href='/catalog/imac' className='block px-4 py-2'>
								iMac 24" (2023)
							</a>
							<a href='/catalog/watch-series8' className='block px-4 py-2'>
								Apple Watch Series 8
							</a>
							<a href='/catalog/watch-ultra' className='block px-4 py-2'>
								Apple Watch Ultra
							</a>
							<a href='/catalog/watch-se' className='block px-4 py-2'>
								Apple Watch SE
							</a>
						</div>
					</div>
					<div className='relative group'>
						<a
							href='/iphone'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							iPhone
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/iphone/14' className='block px-4 py-2'>
								iPhone 14
							</a>
							<a href='/iphone/13' className='block px-4 py-2'>
								iPhone 13
							</a>
							<a href='/iphone/12' className='block px-4 py-2'>
								iPhone 12
							</a>
						</div>
					</div>
					<div className='relative group'>
						<a
							href='/mac'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							Mac
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/mac/macbook-pro' className='block px-4 py-2'>
								MacBook Pro 16" (2023)
							</a>
							<a href='/mac/macbook-air' className='block px-4 py-2'>
								MacBook Air 13" (2023)
							</a>
							<a href='/mac/imac' className='block px-4 py-2'>
								iMac 24" (2023)
							</a>
						</div>
					</div>
					<div className='relative group'>
						<a
							href='/ipad'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							iPad
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/ipad/air' className='block px-4 py-2'>
								iPad Air (2023)
							</a>
							<a href='/ipad/pro' className='block px-4 py-2'>
								iPad Pro 11" (2023)
							</a>
							<a href='/ipad/mini' className='block px-4 py-2'>
								iPad Mini (2023)
							</a>
						</div>
					</div>
					<div className='relative group'>
						<a
							href='/watch'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							Watch
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/watch/series8' className='block px-4 py-2'>
								Apple Watch Series 8
							</a>
							<a href='/watch/ultra' className='block px-4 py-2'>
								Apple Watch Ultra
							</a>
							<a href='/watch/se' className='block px-4 py-2'>
								Apple Watch SE
							</a>
						</div>
					</div>
					<div className='relative group'>
						<a
							href='/airpods'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							AirPods
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/airpods/pro' className='block px-4 py-2'>
								AirPods Pro (2-го поколения)
							</a>
							<a href='/airpods/3' className='block px-4 py-2'>
								AirPods (3-го поколения)
							</a>
							<a href='/airpods/max' className='block px-4 py-2'>
								AirPods Max
							</a>
						</div>
					</div>
					<div className='relative group'>
						<a
							href='/accessories'
							className='text-white font-medium py-4 px-6 block group-hover:text-gray-400 transition-all duration-200 ease-in-out'
						>
							Аксессуары
						</a>
						<div className='absolute opacity-0 group-hover:opacity-100 group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg w-64 transition-opacity ease-in-out duration-200 delay-200'>
							<a href='/accessories/cases' className='block px-4 py-2'>
								Чехлы для iPhone
							</a>
							<a href='/accessories/chargers' className='block px-4 py-2'>
								Зарядные устройства
							</a>
							<a href='/accessories/adapters' className='block px-4 py-2'>
								Адаптеры
							</a>
						</div>
					</div>
				</div>
				<div className='flex space-x-4'>
					<a href='/compare' className='text-white hover:text-gray-400'>
						<i className='fas fa-balance-scale'></i>
					</a>
					<a href='/wishlist' className='text-white hover:text-gray-400'>
						<i className='fas fa-heart'></i>
					</a>
					<a href='/cart' className='text-white hover:text-gray-400'>
						<i className='fas fa-shopping-cart'></i>
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
