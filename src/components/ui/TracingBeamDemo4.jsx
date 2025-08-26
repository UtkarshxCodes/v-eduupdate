"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo4() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 pb-0 relative">
        {trends.map((item, index) => (
          <article
            key={`trend-${index}`}
            className={`mb-14 ${index === trends.length - 1 ? "mb-0" : ""}`}
          >
            <header className="mb-2">
              <span className="inline-block bg-indigo-600 text-white rounded-full text-xs px-3 py-1 font-semibold mb-2">
                {item.badge}
              </span>
              <h2 className="text-2xl font-bold mb-1">{item.title}</h2>
            </header>
            <img
              src={item.image}
              alt="trend thumbnail"
              className="rounded-lg mb-6 w-full object-cover max-h-64"
              style={{ minHeight: 180, background: "#f3f4f6" }}
            />
            <div className="prose prose-neutral dark:prose-invert text-base leading-relaxed">
              {item.content}
            </div>
          </article>
        ))}
      </div>
    </TracingBeam>
  );
}

const trends = [
  {
    badge: "AI & Automation",
    title: "AI Talent Demand Surges in 2025",
    image: "https://img.freepik.com/premium-vector/trends-word-lettering-illustration_9233-256.jpg?w=2000",
    content: (
      <>
        <p>
          Employers worldwide are facing a shortage of professionals who can
          design, deploy, and manage{" "}
          <strong>AI automation</strong>. From finance to healthcare, industries
          are prioritizing candidates with AI project experience.
        </p>
        <ul>
          <li>Job postings requiring AI skills grew 8.1% in 2024.</li>
          <li>AI salaries outpace other tech roles by 20–25%.</li>
          <li>73% of hiring managers prefer candidates with AI project portfolios.</li>
        </ul>
        <p>
          Companies aren’t just hiring for knowledge — they want proof of hands-on
          ability. Bootcamps and industry projects are shaping the new baseline
          for AI careers.
        </p>
      </>
    ),
  },
  {
    badge: "Cybersecurity",
    title: "Cybersecurity Skills: The Fastest-Growing Career Trend",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    content: (
      <>
        <p>
          With cyberattacks rising by{" "}
          <strong>40% year-over-year</strong>, cybersecurity has become a top
          hiring priority. Organizations are scrambling to secure networks,
          protect customer data, and comply with new regulations.
        </p>
        <ul>
          <li>
            Global cybersecurity job openings projected to reach 3.5 million in
            2025.
          </li>
          <li>Cloud security and ethical hacking are among the most in-demand skills.</li>
          <li>Cybersecurity roles pay an average of 18% higher than IT roles.</li>
        </ul>
        <p>
          As threats evolve, hands-on skills in penetration testing, DevSecOps,
          and compliance frameworks are becoming indispensable.
        </p>
      </>
    ),
  },
  {
    badge: "Data Science",
    title: "From Data to Decisions: Why Analytics Skills Rule 2025",
    image: "https://static.vecteezy.com/system/resources/previews/047/231/119/original/marketing-research-abstract-concept-illustration-vector.jpg",
    content: (
      <>
        <p>
          Every business now runs on data. The ability to clean, analyze, and
          visualize large datasets is no longer optional — it’s a competitive
          edge.
        </p>
        <ul>
          <li>91% of businesses say data-driven decision-making improves profitability.</li>
          <li>Data analyst and scientist roles grew 14% since 2023.</li>
          <li>Python, SQL, and Power BI are the top requested tools in job listings.</li>
        </ul>
        <p>
          Candidates who showcase real-world projects and dashboards are landing
          interviews faster than those with degrees alone.
        </p>
      </>
    ),
  },
  {
    badge: "DevOps & Cloud",
    title: "The Cloud-First Future: DevOps Engineers in Demand",
    image: "https://images.pexels.com/photos/1181372/pexels-photo-1181372.jpeg",
    content: (
      <>
        <p>
          As companies move infrastructure to the cloud, DevOps skills are no
          longer niche — they’re essential. Organizations need engineers who can
          bridge development and operations for seamless deployments.
        </p>
        <ul>
          <li>Cloud-native adoption up by 60% since 2022.</li>
          <li>DevOps engineers with Kubernetes and Docker expertise earn premium salaries.</li>
          <li>Automation pipelines are now a hiring must-have skill.</li>
        </ul>
        <p>
          The future of DevOps lies at the intersection of AI, security, and cloud
          automation — making it a career path with staying power.
        </p>
      </>
    ),
  },
];
