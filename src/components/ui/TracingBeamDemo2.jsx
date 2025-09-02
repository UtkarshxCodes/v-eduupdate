"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

const webinars = [
	{
		title: "AI Skills: Your Ticket to a Future-Proof Career",
		image:
			"https://static.vecteezy.com/system/resources/previews/035/794/434/non_2x/interactive-digital-board-isolated-cartoon-illustrations-vector.jpg",
		date: "August 26, 2025 • 6 PM EST",
		speaker: "Dr. Neha Sharma, AI Automation Expert",
		duration: "90 minutes",
		format: "Live Online",
		learn: [
			"Why AI is the new baseline for every career",
			"Hands-on demos of automation tools in business",
			"Career paths in AI & Machine Learning",
			"How to build a portfolio that lands jobs",
		],
		cta: "Register Now",
	},
	{
		title: "Cybersecurity in 2025: Career Opportunities & Skills You Need",
		image:
			"https://static.vecteezy.com/system/resources/previews/047/232/216/non_2x/healthcare-big-data-abstract-concept-illustration-vector.jpg",
		date: "September 5, 2025 • 7 PM EST",
		speaker: "Mark Wilson, Cybersecurity Consultant (ex-Deloitte)",
		duration: "75 minutes",
		format: "Live Workshop",
		learn: [
			"The rise of ethical hacking and security jobs",
			"Live demo: Simulated phishing attack & defense",
			"Career roadmap for cybersecurity professionals",
			"How to get certified faster with V-EDU",
		],
		cta: "Reserve Seat",
	},
	{
		title: "Data to Decisions: Launching a Career in Data Science",
		image:
			"https://static.vecteezy.com/system/resources/previews/047/231/860/non_2x/data-driven-decision-making-abstract-concept-illustration-vector.jpg",
		date: "September 15, 2025 • 6 PM EST",
		speaker: "Lidia J., Data Analyst & V-EDU Alumna",
		duration: "60 minutes",
		format: "Interactive Webinar",
		learn: [
			"How data powers business decisions",
			"Key tools: SQL, Python, and Tableau",
			"Real project walkthrough: turning data into insights",
			"Lidia’s personal journey: freelancing → stable data career",
		],
		cta: "Join Webinar",
	},
	{
		title: "DevOps & Cloud: Skills That Companies Hire For",
		image:
			"https://img.freepik.com/premium-vector/business-team-analyzing-data-pie-chart_778176-1189.jpg",
		date: "September 22, 2025 • 7 PM EST",
		speaker: "Ravi Patel, AWS Solutions Architect",
		duration: "90 minutes",
		format: "Hands-On Workshop",
		learn: [
			"DevOps & Cloud job market in 2025",
			"Live cloud deployment on AWS",
			"CI/CD pipelines explained simply",
			"Building a career in DevOps and Cloud Engineering",
		],
		cta: "Save My Spot",
	},
];

export function TracingBeamDemo2() {
	const handleDial = (e) => {
		e.preventDefault();
		window.open("tel:(307)-216-4424");
	};

	return (
		<TracingBeam className="px-6">
			<div className="max-w-2xl mx-auto antialiased pt-4 pb-0 relative">
				<section className="mb-12">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
						<span role="img" aria-label="target">
							🎯
						</span>{" "}
						Upcoming Webinars &amp; Workshops
					</h2>
					{webinars.map((webinar, idx) => (
						<div key={idx} className="mb-12">
							<img
								src={webinar.image}
								alt={webinar.title}
								className="rounded-xl mb-4 w-full object-contain shadow"
								style={{ background: "#f3f4f6" }}
							/>
							<h3 className="text-xl font-semibold mb-2 text-indigo-700">
								🔹 {webinar.title}
							</h3>
							<ul className="text-sm text-gray-700 mb-2">
								<li>
									📅 <strong>{webinar.date}</strong>
								</li>
								<li>🎤 Speaker: {webinar.speaker}</li>
								<li>
									🕒 Duration: {webinar.duration} | 💻 Format:{" "}
									{webinar.format}
								</li>
							</ul>
							<div className="mb-2 font-semibold">What you’ll learn:</div>
							<ul className="list-disc pl-5 mb-2 text-gray-700">
								{webinar.learn.map((point, i) => (
									<li key={i}>{point}</li>
								))}
							</ul>
							<a
								href="tel:(307)-216-4424"
								onClick={handleDial}
								className="inline-block mt-2 text-indigo-600 font-bold underline"
							>
								👉 {webinar.cta}
							</a>
						</div>
					))}
				</section>

				{/* Past Webinars */}
				<section className="mb-12">
					<h3 className="text-lg font-bold mb-2 flex items-center gap-2">
						<span role="img" aria-label="book">
							📚
						</span>{" "}
						Past Webinars (On-Demand Recordings)
					</h3>
					<p className="text-sm text-gray-600 mb-2">
						(Available for enrolled students inside LMS)
					</p>
					<ul className="list-disc pl-5 text-gray-700">
						<li>Breaking Into AI Careers (July 2025) – Recording Available</li>
						<li>
							Ethical Hacking Crash Course (June 2025) – Recording Available
						</li>
						<li>
							Data Science Career Starter Pack (May 2025) – Recording Available
						</li>
						<li>
							Cloud Computing Foundations (April 2025) – Recording Available
						</li>
					</ul>
				</section>

				{/* Why Join Section */}
				<section>
					<h3 className="text-lg font-bold mb-2 flex items-center gap-2">
						<span role="img" aria-label="bell">
							🔔
						</span>{" "}
						Why Join V-EDU Webinars &amp; Workshops?
					</h3>
					<ul className="list-disc pl-5 text-gray-700 mb-4">
						<li>✔ 100% Free to Attend (with paid certificate option)</li>
						<li>✔ Learn from industry mentors &amp; alumni success stories</li>
						<li>✔ Build job-ready skills in real time</li>
						<li>✔ Networking &amp; Q&amp;A with hiring partners</li>
					</ul>
					<div className="flex flex-wrap gap-4">
						<a
							href="tel:(307)-216-4424"
							onClick={handleDial}
							className="text-indigo-600 font-bold underline"
						>
							👉 View All Events
						</a>
						<a
							href="tel:(307)-216-4424"
							onClick={handleDial}
							className="text-indigo-600 font-bold underline"
						>
							👉 Book a Free Consultation
						</a>
					</div>
				</section>
			</div>
		</TracingBeam>
	);
}
