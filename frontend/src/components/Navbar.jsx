import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-blue-200'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='flex items-center space-x-3'>
						<img 
							src="/CartMantra.png" 
							alt="CartMantra Logo" 
							className="h-12 w-auto"
						/>
						<div className='cartmantra-text'>
							<div className='cart'>Cart</div>
							<div className='mantra'>Mantra</div>
						</div>
					</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link
							to={"/"}
							className='text-gray-600 hover:text-blue-600 transition duration-300
					 ease-in-out font-medium'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-gray-600 hover:text-blue-600 transition duration-300 
							ease-in-out font-medium'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-blue-600' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2 bg-blue-500 text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-blue-600 transition duration-300 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='btn-primary px-3 py-1 text-sm font-medium
								 transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out font-medium'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='btn-primary py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out text-sm'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out font-medium'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;