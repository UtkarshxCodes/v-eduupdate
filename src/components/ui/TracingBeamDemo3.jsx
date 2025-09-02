"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

const guides = [
	{
		badge: "AI & Careers",
		title: "AI Skills: Your Ticket to a Future-Proof Career",
		date: "8/26/2025 • 14 min read",
		image:
			"https://images.pexels.com/photos/8294652/pexels-photo-8294652.jpeg",
		summary: (
			<>
				<p>
					You’re in the waiting room for your next big job interview. Some people
					are nervous—you’re not. Why? Because you’ve got something they don’t:
					hard-earned AI skills.
				</p>
				<h4 className="mt-4 mb-2 font-semibold">AI: The New Baseline</h4>
				<ul>
					<li>
						73% of hiring managers now prioritize candidates with AI project
						experience
					</li>
					<li>AI pros earn 20–25% more than peers in similar roles</li>
					<li>Job listings requiring AI grew by 8.1% since 2024</li>
				</ul>
				<p className="mt-2">
					👉 Employers need AI-trained problem solvers—and that’s where V-EDU’s AI
					Automation Bootcamp gives you the edge.
				</p>
			</>
		),
	},
	{
		badge: "Cybersecurity & Careers",
		title: "Cybersecurity in 2025: Your Shield, Your Career",
		date: "9/02/2025 • 15 min read",
		image:
			"https://images.pexels.com/photos/5380646/pexels-photo-5380646.jpeg",
		summary: (
			<>
				<p>
					Every headline screams about data breaches, ransomware, and stolen
					identities. Behind those stories are professionals who protect
					businesses, governments, and individuals.
				</p>
				<h4 className="mt-4 mb-2 font-semibold">Why Cybersecurity is Booming</h4>
				<ul>
					<li>
						Cybercrime damages projected to hit $10.5 trillion annually by 2025
					</li>
					<li>3.5M unfilled cybersecurity jobs worldwide</li>
					<li>
						Certified ethical hackers can earn 25–30% more than IT generalists
					</li>
				</ul>
				<p className="mt-2">
					👉 With V-EDU’s Cybersecurity & Ethical Hacking Bootcamp, you don’t just
					learn theory—you practice real attacks, defense simulations, and
					industry certifications.
				</p>
			</>
		),
	},
	{
		badge: "Data Science & Careers",
		title: "From Raw Data to Real Decisions",
		date: "9/10/2025 • 16 min read",
		image:
			"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
		summary: (
			<>
				<p>
					Every click, purchase, and swipe generates data. But businesses need
					experts to turn that raw data into decisions that drive growth.
				</p>
				<h4 className="mt-4 mb-2 font-semibold">Why Data Science Matters</h4>
				<ul>
					<li>97% of businesses invest in big data and AI</li>
					<li>Entry-level Data Analysts in the U.S. earn $65K–$85K annually</li>
					<li>Demand for data professionals expected to grow 36% by 2030</li>
				</ul>
				<p className="mt-2">
					👉 In V-EDU’s Data Science Bootcamp, you’ll master Python, SQL, Tableau,
					and real-world business datasets—plus build a portfolio that gets
					interviews.
				</p>
			</>
		),
	},
	{
		badge: "DevOps & Cloud Careers",
		title: "Powering the Future of Tech",
		date: "9/18/2025 • 13 min read",
		image:
			"https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
		summary: (
			<>
				<p>
					Apps, websites, and platforms run on the cloud. And behind every smooth
					deployment is a DevOps engineer making it happen.
				</p>
				<h4 className="mt-4 mb-2 font-semibold">
					Why DevOps & Cloud Are In Demand
				</h4>
				<ul>
					<li>Cloud computing market projected to reach $1 trillion by 2030</li>
					<li>DevOps engineers among top 10 highest-paying tech jobs</li>
					<li>
						Companies now demand CI/CD pipelines, Docker, Kubernetes, AWS/GCP
						skills
					</li>
				</ul>
				<p className="mt-2">
					👉 With V-EDU’s DevOps & Cloud Bootcamp, you’ll learn how to deploy,
					scale, and secure real applications—skills hiring managers are desperate
					for.
				</p>
			</>
		),
	},
];

export function TracingBeamDemo3() {
		const handleDial = (e) => {
			e.preventDefault();
			window.open("tel:(307)-216-4424");
		};

	return (
		<TracingBeam className="px-6">
			<div className="max-w-2xl mx-auto antialiased pt-4 pb-0 relative">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
					V-EDU Career Guides
				</h2>
				{guides.map((item, index) => (
					<article
						key={`guide-${index}`}
						className={`mb-14 ${
							index === guides.length - 1 ? "mb-0" : ""
						} bg-white rounded-xl shadow p-6`}
					>
						<header className="mb-2">
							<span className="inline-block bg-indigo-600 text-white rounded-full text-xs px-3 py-1 font-semibold mb-2">
								{item.badge}
							</span>
							<h2 className="text-xl font-bold mb-1">{item.title}</h2>
							<div className="flex items-center text-xs text-gray-500 mb-2">
								<span>{item.date}</span>
							</div>
						</header>
						<img
							src={item.image}
							alt={item.title}
							className="rounded-lg mb-6 w-full object-cover max-h-56"
							style={{ minHeight: 160, background: "#f3f4f6" }}
						/>
						<div className="prose prose-neutral dark:prose-invert text-base leading-relaxed mb-4">
							{item.summary}
						</div>
						<a
							href="tel:(307)-216-4424"
							onClick={handleDial}
							className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
						>
							🔘 Enroll to Know More
						</a>
					</article>
				))}
			</div>
		</TracingBeam>
	);
}
