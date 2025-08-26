"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 pb-0 relative">
        {articles.map((item, index) => (
          <article
            key={`article-${index}`}
            className={`mb-14 ${index === articles.length - 1 ? "mb-0" : ""}`}
          >
            <header className="mb-2">
              <span className="inline-block bg-indigo-600 text-white rounded-full text-xs px-3 py-1 font-semibold mb-2">
                {item.badge}
              </span>
              <h2 className="text-2xl font-bold mb-1">{item.title}</h2>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{item.date}</span>
                <span className="mx-2">•</span>
                <span>{item.readTime}</span>
              </div>
            </header>
            <img
              src={item.image}
              alt="blog thumbnail"
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

const articles = [
  {
    badge: "AI & Careers",
    title: "AI Skills: Your Ticket to a Future-Proof Career",
    date: "8/26/2025",
    readTime: "14 min read",
    image:
      "https://images.pexels.com/photos/8294652/pexels-photo-8294652.jpeg",
    content: (
      <>
        <p>
          You’re sitting in the waiting room for your next big job interview. Some
          people are nervous. You’re not. Why? Because you’ve got something they
          don’t: <strong>hard-earned AI skills</strong>. You studied through
          V-EDU’s AI Automation bootcamp, you built real-world projects, and you
          know how to apply machine learning and automation to solve actual
          business problems.
        </p>
        <h3 className="mt-6 mb-2 text-lg font-semibold">
          AI: The New Baseline
        </h3>
        <ul>
          <li>
            73% of hiring managers say they prioritize candidates with AI project
            experience.
          </li>
          <li>
            AI professionals earn 20–25% more on average than their peers in
            similar tech roles.
          </li>
          <li>
            Since 2024, job listings requiring AI skills grew by 8.1%, even while
            overall job postings slowed.
          </li>
        </ul>
        <p>
          But here’s the catch: there’s still a massive shortage of professionals
          trained in AI and automation. Employers are desperate for candidates who
          can both think critically and apply AI tools in practice.
        </p>
        <h4 className="mt-5 mb-2 font-semibold">Why V-EDU?</h4>
        <p>
          That’s where job-focused bootcamps like V-EDU come in. Unlike
          theory-heavy degrees, V-EDU focuses on hands-on learning—you’ll train
          with real datasets, automation tools, and industry mentors who know what
          employers want.
        </p>
        <p>
          So the next time you’re preparing for a career move, remember:
          <strong>
            AI isn’t just another line on your resume—it’s the edge that can land
            you the job of your dreams.
          </strong>
        </p>
        <p className="mt-4">
          👉{" "}
          <a
            href="#"
            className="text-indigo-600 underline"
          >
            Ready to get started? Explore V-EDU’s AI Automation Program
          </a>
        </p>
      </>
    ),
  },
  {
    badge: "Career Stories",
    title: "Freelance Freedom vs Stability: How One UX Designer Pivoted Into Data",
    date: "8/20/2025",
    readTime: "17 min read",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    content: (
      <>
        <p>
          What does freedom mean in the modern workforce? For freelancers, it
          often means flexibility—choosing when to work, which projects to take,
          and even where to live. But that freedom comes with a cost: uncertainty,
          irregular paychecks, and the constant stress of finding the “next gig.”
        </p>
        <h4 className="mt-5 mb-2 font-semibold">Lidia’s Leap</h4>
        <p>
          Take the story of{" "}
          <strong>Lidia J.</strong>, who began her career as a freelance UX/UI
          designer. She loved the creativity but hated the instability. Clients
          came and went, contracts ended suddenly, and she often felt like she
          wasn’t really part of a team.
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-4 italic my-4">
          “I realized I wanted structure, colleagues I could learn from, and
          long-term stability,” she said.
        </blockquote>
        <p>
          That’s when she discovered data analytics. Combining her creative
          background with structured problem-solving, she saw how data could give
          her a career that was both challenging and secure. But going back for a
          master’s wasn’t realistic—too long, too expensive. Instead, she enrolled
          in V-EDU’s Data Science bootcamp.
        </p>
        <ul>
          <li>Mentor support and peer projects</li>
          <li>Career coaching and group challenges</li>
          <li>Portfolio building and real interview prep</li>
        </ul>
        <p>
          By graduation, she had both a portfolio of projects and the confidence
          to tackle interviews. Within weeks, she landed a role as a Data Analyst
          at a major U.S. firm.
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-4 italic my-4">
          “I went from freelancing paycheck to paycheck, to having a career that
          excites me and supports my family. V-EDU helped me make that leap.”
        </blockquote>
        <p>
          👉{" "}
          <a
            href="#"
            className="text-indigo-600 underline"
          >
            If you’re stuck between freedom and stability, maybe it’s time to
            consider where a career in tech can take you.
          </a>
        </p>
      </>
    ),
  },
  {
    badge: "Growth Mindset",
    title: "The Power of Micro Habits: How Small Steps Lead to Big Career Changes",
    date: "8/18/2025",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/7972724/pexels-photo-7972724.jpeg",
    content: (
      <>
        <p>
          Big life changes—like switching careers or learning to code—can feel
          overwhelming. But here’s the truth: you don’t need to overhaul your
          entire life overnight. Instead, it’s about building{" "}
          <strong>micro habits</strong>—small, consistent actions that stack up to
          major results.
        </p>
        <h4 className="mt-5 mb-2 font-semibold">What’s a Micro Habit?</h4>
        <ul>
          <li>Spend 15 minutes a day watching a coding walkthrough.</li>
          <li>Practice writing just 10 lines of JavaScript each morning.</li>
          <li>Read five pages of a tech blog or textbook before bed.</li>
          <li>Take short study breaks every hour to stay sharp.</li>
          <li>Track your progress by writing down one thing you learned today.</li>
        </ul>
        <p>
          These may seem small, but here’s the science: repetition builds
          mastery. Over weeks, those 15 minutes of code turn into hundreds of
          lines. Over months, five pages become a full textbook. Before you know
          it, you’ve gone from beginner to confident job-ready candidate.
        </p>
        <h4 className="mt-5 mb-2 font-semibold">How V-EDU Helps</h4>
        <p>
          This is exactly how V-EDU structures its bootcamps. Instead of cramming
          everything into overwhelming lectures, we break learning into bite-sized,
          project-based modules. Each step builds on the last, so your confidence
          grows steadily until you’re ready for the job market.
        </p>
        <p>
          So, if you’re thinking about switching careers, don’t panic. Start
          small. Build your micro habits. And let V-EDU guide you through the
          bigger leap.
        </p>
        <p className="mt-4">
          👉{" "}
          <a
            href="#"
            className="text-indigo-600 underline"
          >
            Try building your first micro habit today: Book a Free Consultation
          </a>
        </p>
      </>
    ),
  },
];
