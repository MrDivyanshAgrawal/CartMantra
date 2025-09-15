import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import Confetti from "react-confetti";

const PurchaseSuccessPage = () => {
	const [isProcessing, setIsProcessing] = useState(true);
	const { clearCart } = useCartStore();
	const [error, setError] = useState(null);
	const [orderId, setOrderId] = useState(null); 

	useEffect(() => {
		const handleCheckoutSuccess = async (sessionId) => {
			try {
				await axios.post("/payments/checkout-success", {
					sessionId,
				});
				clearCart();
				const randomOrderId = Math.floor(100000 + Math.random() * 900000);
				setOrderId(randomOrderId);
			} catch (error) {
				console.log(error);
			} finally {
				setIsProcessing(false);
			}
		};

		const sessionId = new URLSearchParams(window.location.search).get("session_id");
		if (sessionId) {
			handleCheckoutSuccess(sessionId);
		} else {
			setIsProcessing(false);
			setError("No session ID found in the URL");
		}
	}, [clearCart]);

	if (isProcessing) return "Processing...";
	if (error) return `Error: ${error}`;

	return (
		<div className='h-screen flex items-center justify-center px-4'>
			<Confetti
				width={window.innerWidth}
				height={window.innerHeight}
				gravity={0.1}
				style={{ zIndex: 99 }}
				numberOfPieces={700}
				recycle={false}
			/>

			<div className='max-w-md w-full card overflow-hidden relative z-10'>
				<div className='p-6 sm:p-8'>
					<div className='flex justify-center'>
						<CheckCircle className='text-green-500 w-16 h-16 mb-4' />
					</div>
					<h1 className='text-2xl sm:text-3xl font-bold text-center text-green-600 mb-2'>
						Purchase Successful!
					</h1>

					<p className='text-gray-600 text-center mb-2'>
						Thank you for your order. {"We're"} processing it now.
					</p>
					<p className='text-green-600 text-center text-sm mb-6'>
						Check your email for order details and updates.
					</p>

					<div className='bg-gray-100 rounded-lg p-4 mb-6'>
						<div className='flex items-center justify-between mb-2'>
							<span className='text-sm text-gray-600'>Order number</span>
							<span className='text-sm font-semibold text-green-600'>
								#{orderId || "Loading..."}
							</span>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-gray-600'>Estimated delivery</span>
							<span className='text-sm font-semibold text-green-600'>
								3-5 business days
							</span>
						</div>
					</div>

					<div className='space-y-4'>
						<button
							className='btn-primary w-full font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center'
						>
							<HandHeart className='mr-2' size={18} />
							Thanks for trusting us!
						</button>
						<Link
							to={"/"}
							className='w-full bg-gray-100 hover:bg-gray-200 text-blue-600 font-bold py-2 px-4 
								rounded-lg transition duration-300 flex items-center justify-center'
						>
							Continue Shopping
							<ArrowRight className='ml-2' size={18} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PurchaseSuccessPage;
