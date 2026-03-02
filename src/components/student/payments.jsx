import React from "react";
import { LampDemo } from "../ui/lamp";
import { FollowingPointerDemo } from "../ui/Followingpointerdemo";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const programs = [
	{
		name: "Cyber Security & Ethical Hacking",
		type: "Upfront Payment",
		highlight: "The most affordable choice",
		upfront: "$2,999",
		oldUpfront: "$4,000",
		savings: "💰 Save up to $1000",
		description:
			"Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!",
	},
	{
		name: "Data Science & AI",
		type: "Upfront Payment",
		highlight: "The most affordable choice",
		upfront: "$2,999",
		oldUpfront: "$4,000",
		savings: "💰 Save up to $1000",
		description:
			"Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!",
	},
	{
		name: "Full Stack Development",
		type: "Upfront Payment",
		highlight: "The most affordable choice",
		upfront: "$2,999",
		oldUpfront: "$4,000",
		savings: "💰 Save up to $1000",
		description:
			"Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!",
	},
	{
		name: "DevOps & Cloud Computing",
		type: "Upfront Payment",
		highlight: "The most affordable choice",
		upfront: "$2,999",
		oldUpfront: "$4,000",
		savings: "💰 Save up to $1,000",
		description:
			"Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!",
	},
	{
		name: "UX/UI Design",
		type: "Upfront Payment",
		highlight: "The most affordable choice",
		upfront: "$2,999",
		oldUpfront: "$4,000",
		savings: "💰 Save up to $1,000",
		description:
			"Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!",
	},
	{
		name: "Digital Marketing & SEO",
		type: "Upfront Payment",
		highlight: "The most affordable choice",
		upfront: "$2,999",
		oldUpfront: "$4,000",
		savings: "💰 Save up to $1000",
		description:
			"Get access to all V-EDU courses at a special discounted upfront price. One-time payment—no hidden fees. Secure your future at the best price today!",
	},
	{
		name: "Register & AfterPay",
		type: "AfterPay & Financing",
		highlight: "Learn now, pay with flexibility",
		upfront: "Start at $199",
		oldUpfront: "$299",
		savings: "Save $100 untill batches full",
		description:
			"Join now at a minimal cost and spread the rest into easy installments. Focus on learning today, pay comfortably over time. Multiple plans available depending on your needs. With AfterPay and other flexible payment partners! Credit check req’d.",
	},
	{
		name: "One-on-One Tuitions",
		type: "Personalized",
		highlight: "The best personalized learning option",
		upfront: "$5,999",
		oldUpfront: "$7,500",
		savings: "💰 Save up to $1,500",
		description:
			"Experience one-on-one classes with expert mentors tailored to your pace and goals. Get 100% personalized attention and guidance throughout your journey. No risk—you can withdraw with a 100% refund in the first 2 weeks.",
	},
];

// TuitionPlans component
const TuitionPlans = () => {
	const navigate = useNavigate();

	// Handle card click based on program name/type
	const handleCardClick = (program) => {
		if (program.name === "One-on-One Tuitions") {
			window.location.href = "/onetoone";
		} else if (program.type === "Upfront Payment") {
			window.location.href = "/payments-enroll";
		} else if (program.name === "Register & AfterPay") {
			navigate("/course-registration");
		} else {
			window.open("tel:(307)-216-4424");
		}
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Cost of Bootcamp at{" "}
					<span className="text-indigo-600">V-EDU</span>
				</h2>
				{/* Pricing Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{programs.map((program, idx) => (
						<div
							key={idx}
							onClick={() => handleCardClick(program)}
							className="cursor-pointer bg-white shadow-md rounded-2xl p-8 flex flex-col hover:shadow-xl transition min-h-[340px] border border-indigo-100 hover:border-indigo-400 group"
							style={{ minWidth: 0 }}
							tabIndex={0}
							role="button"
							aria-label={`Open payment for ${program.name}`}
						>
							<div className="w-full flex flex-col gap-1 mb-2">
								<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
									{program.type}
								</span>
								<span className="text-xs text-gray-500">
									{program.highlight}
								</span>
							</div>
							<h3 className="text-lg font-bold mb-1 text-indigo-900">
								{program.name}
							</h3>
							<div className="flex items-baseline gap-2 mb-2">
								<span className="text-2xl font-extrabold text-green-600">
									{program.upfront}
								</span>
								{program.oldUpfront && (
									<span className="text-base line-through text-gray-400">
										{program.oldUpfront}
									</span>
								)}
							</div>
							{program.savings && (
								<span className="text-sm font-semibold text-green-500 mb-2">
									{program.savings}
								</span>
							)}
							<p className="text-gray-700 text-sm mb-2 flex-1">
								{program.description}
							</p>
							<span className="mt-auto text-indigo-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition">
								{program.name === "One-on-One Tuitions"
									? "Go to One-on-One Payment"
									: program.type === "Upfront Payment"
									? "Go to Upfront Payment"
									: "Tap to Call(307)-216-4424"}
							</span>
						</div>
					))}
				</div>
				{/* Guarantee Section */}
				<div className="mt-16 bg-orange-400 rounded-2xl p-8 text-center text-white">
					<h3 className="text-2xl font-bold mb-4">
						Our Guarantee: You’ll land the job you trained for{" "}
						<span className="underline">V-Edu</span> — we provide 100% Job Assistance.
					</h3>
					<div className="grid md:grid-cols-3 gap-6 text-left mt-6 text-sm">
						<div>
							<p className="font-semibold">1.</p>
							<p className="text-sm">
								Graduate and complete our included career prep course.
							</p>
						</div>
						<div>
							<p className="font-semibold">2.</p>
							<p className="text-sm">
								Apply to relevant jobs and stay in touch with your career coach.
							</p>
						</div>
						<div>
							<p className="font-semibold">3.</p>
							<p className="text-sm">
								If your internship doesn’t transition into a full-time role, we’ll begin scheduling weekly interviews.
							</p>
						</div>
					</div>
					<p className="mt-6 text-xs opacity-80">
						The V-EDU money-back guarantee is legally binding. For details,
						please see our Terms of Use.
					</p>
				</div>
			</div>
		</section>
	);
};

const Payments = () => {
	return (
		<div
			style={{
				background: "#fff",
				minHeight: "100vh",
				width: "100%",
				paddingTop: "120px",
			}}
		>
			{/* Lamp Section */}
			<section className="mb-16">
				<LampDemo />
			</section>
			{/* Tuition Plans Section */}
			<section className="mb-16">
				<TuitionPlans />
			</section>
			{/* Following Pointer Section */}
			<section className="mb-16">
				<FollowingPointerDemo />
			</section>
			<Footer />
		</div>
	);
};

export default Payments;