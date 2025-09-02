import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: <span style={{ color: "#142d4f" }} className="text-2xl md:text-5xl font-bold dark:text-white mb-8">Enroll In Live Classes</span>,
      content: (
        <div>
          <div className="space-y-7">
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                0% Interest Plans
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  – Learn now, pay later without extra cost.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                No Credit Checks
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  – Everyone gets a fair shot at tech careers.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Pre-Approved Access
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  – You’re already cleared to start.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Affordable Learning
                <span className="font-normal text-neutral-600 dark:text-neutral-300 ">
                  {" "}
                  – World-class bootcamps starting at
                  <br />
                  <span className="text-green-600 font-bold text-lg md:text-3xl align-middle mt-2 inline-block">
                    just $449/month
                  </span>
                  .
                </span>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <span style={{ color: "#142d4f" }} className="text-2xl md:text-5xl font-bold dark:text-white mb-8">Gain Real Experience</span>,
      content: (
        <div>
          <div className="space-y-7">
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Hands-on Projects:
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  Build real-world apps and tools as you learn.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Mentor Support:
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  Get 1-on-1 guidance from industry experts.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Mock Interviews:
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  Practice with real interview questions and feedback.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Resume Help:
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  Polish your resume and LinkedIn for tech roles.
                </span>
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Job-Ready Skills:
                <span className="font-normal text-neutral-600 dark:text-neutral-300">
                  {" "}
                  Master the tools and workflows used by top tech teams.
                </span>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <span style={{ color: "#142d4f" }} className="text-2xl md:text-5xl font-bold dark:text-white mb-8">Step Into Your Dream Role</span>,
      content: (
        <div>
          <div className="space-y-7">
            
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-green-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Get certified with industry-recognized credentials
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-green-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Build a resume that stands out to recruiters
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-green-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Gain referrals & mentorship from alumni network
              </span>
            </div>
            <div className="flex items-start gap-5">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-green-500"></span>
              <span className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Access 1:1 career coaching & mock interviews
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />



    </div>    
  );
}
