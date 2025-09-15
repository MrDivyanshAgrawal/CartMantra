import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { Users, Package, ShoppingCart, IndianRupee  } from "lucide-react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const AnalyticsTab = () => {
	const [analyticsData, setAnalyticsData] = useState({
		users: 0,
		products: 0,
		totalSales: 0,
		totalRevenue: 0,
	});
	const [isLoading, setIsLoading] = useState(true);
	const [dailySalesData, setDailySalesData] = useState([]);

	useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await axios.get("/analytics");
				setAnalyticsData(response.data.analyticsData);
				setDailySalesData(response.data.dailySalesData);
			} catch (error) {
				console.error("Error fetching analytics data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAnalyticsData();
	}, []);

	if (isLoading) {
		return <div className="text-center py-10 text-gray-500">Loading...</div>;
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<AnalyticsCard
					title="Total Users"
					value={analyticsData.users.toLocaleString()}
					icon={Users}
					color="from-blue-500 to-blue-700"
				/>
				<AnalyticsCard
					title="Total Products"
					value={analyticsData.products.toLocaleString()}
					icon={Package}
					color="from-indigo-500 to-purple-700"
				/>
				<AnalyticsCard
					title="Total Sales"
					value={analyticsData.totalSales.toLocaleString()}
					icon={ShoppingCart}
					color="from-cyan-500 to-blue-600"
				/>
				<AnalyticsCard
					title="Total Revenue"
					value={`₹${analyticsData.totalRevenue.toLocaleString()}`}
					icon={IndianRupee }
					color="from-green-500 to-emerald-700"
				/>
			</div>

			<motion.div
				className="card p-6 bg-white shadow-lg rounded-2xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				<h2 className="text-lg font-semibold mb-4 text-gray-700">Sales & Revenue Trends</h2>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3'/>
						<XAxis dataKey="date" stroke="#6B7280" />
						<YAxis yAxisId="left" stroke="#6B7280" />
						<YAxis yAxisId="right" orientation="right" stroke="#6B7280" />
						<Tooltip />
						<Legend />
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="sales"
							stroke="#10B981"
							strokeWidth={2}
							activeDot={{ r: 8 }}
							name="Sales"
						/>
						<Line
							yAxisId="right"
							type="monotone"
							dataKey="revenue"
							stroke="#3B82F6"
							strokeWidth={2}
							activeDot={{ r: 8 }}
							name="Revenue"
						/>
					</LineChart>
				</ResponsiveContainer>
			</motion.div>
		</div>
	);
};
export default AnalyticsTab;

const AnalyticsCard = ({ title, value, icon: Icon, color }) => (
	<motion.div
		className={`relative rounded-2xl shadow-lg overflow-hidden p-6 bg-gradient-to-br ${color}`}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<div className="absolute inset-0 bg-black/20"></div>

		<div className="relative flex justify-between items-center z-10">
			<div>
				<p className="text-gray-100 text-sm mb-1 font-medium">{title}</p>
				<h3 className="text-white text-3xl font-bold drop-shadow-sm">{value}</h3>
			</div>
			<div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
				<Icon className="h-8 w-8 text-white" />
			</div>
		</div>
	</motion.div>
);
