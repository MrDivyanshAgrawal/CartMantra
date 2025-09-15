import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { signup, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className='flex justify-center mb-6'>
					<img 
						src="/CartMantra.png" 
						alt="CartMantra Logo" 
						className="h-16 w-auto"
					/>
				</div>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-blue-600'>Create your account</h2>
				<p className='mt-2 text-center text-sm text-gray-600'>Join CartMantra and start shopping</p>
			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='card py-8 px-4 shadow-lg sm:px-10'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
								Full name
							</label>
							<div className='mt-1 relative'>
								<span className='absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-400 pointer-events-none'>
									<User className='h-5 w-5' aria-hidden='true' />
								</span>
								<input
									id='name'
									type='text'
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className='block w-full py-2 pl-12 pr-3 placeholder:text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
									placeholder='John Doe'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
								Email address
							</label>
							<div className='mt-1 relative'>
								<span className='absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-400 pointer-events-none'>
									<Mail className='h-5 w-5' aria-hidden='true' />
								</span>
								<input
									id='email'
									type='email'
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className='block w-full py-2 pl-12 pr-3 placeholder:text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
									placeholder='you@example.com'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<div className='mt-1 relative'>
								<span className='absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-400 pointer-events-none'>
									<Lock className='h-5 w-5' aria-hidden='true' />
								</span>
								<input
									id='password'
									type='password'
									required
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className='block w-full py-2 pl-12 pr-3 placeholder:text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
									placeholder='••••••••'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
								Confirm Password
							</label>
							<div className='mt-1 relative'>
								<span className='absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-400 pointer-events-none'>
									<Lock className='h-5 w-5' aria-hidden='true' />
								</span>
								<input
									id='confirmPassword'
									type='password'
									required
									value={formData.confirmPassword}
									onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
									className='block w-full py-2 pl-12 pr-3 placeholder:text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
									placeholder='••••••••'
								/>
							</div>
						</div>
						<button
							type='submit'
							className='btn-primary w-full flex justify-center py-3 px-4 text-sm font-medium disabled:opacity-50'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<UserPlus className='mr-2 h-5 w-5' aria-hidden='true' />
									Sign up
								</>
							)}
						</button>
					</form>

					<p className='mt-8 text-center text-sm text-gray-600'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-blue-600 hover:text-blue-500'>
							Login here <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default SignUpPage;
