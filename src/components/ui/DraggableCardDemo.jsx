import React, { useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const quizData = [
  {
    title: "",
    image:
      "https://plus.unsplash.com/premium_photo-1681400630646-6df4b294bfea?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
    question: "Which language is most used for Data Science?",
    options: ["Python", "Java", "C++"],
    answer: 0,
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
    question: "What is the main goal of Cybersecurity?",
    options: ["Speed", "Protection", "Design"],
    answer: 1,
  },
  {
    title: "",
    image:
      "https://store-images.s-microsoft.com/image/apps.35954.13911592414332901.a6f13932-b416-4512-8b68-2d570ffcb4cd.f3df0310-2cff-4049-bc96-1212de10bc56?mode=scale&q=90&h=1080&w=1920",
    className: "absolute top-16 left-[15%] rotate-[6deg]",
    question: "Which AI beat the chess champion?",
    options: ["AlphaGo", "Deep Blue", "Watson"],
    answer: 1,
  },
  {
    title: "",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/abdc96132617537.61aeff6bdf058.jpg",
    className: "absolute top-44 left-[50%] rotate-[-5deg]",
    question: "Boston Dynamics is famous for which robot?",
    options: ["SPOT", "ASIMO", "Atlas"],
    answer: 0,
  },
  {
    title: "",
    image:
      "https://wallpaperaccess.com/full/1754709.jpg",
    className: "absolute top-28 right-[28%] rotate-[3deg]",
    question: "Silicon Valley is known for?",
    options: ["Finance", "Technology", "Agriculture"],
    answer: 1,
  },
  {
    title: "",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/022/491/749/large/konstantin-andreev-.jpg?1575615525",
    className: "absolute top-12 right-[40%] rotate-[-8deg]",
    question: "Which is a DevOps tool?",
    options: ["TensorFlow", "Jenkins", "Photoshop"],
    answer: 1,
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1728632286888-04c64f48e506?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "absolute top-36 left-[60%] rotate-[7deg]",
    question: "AI Campus is related to?",
    options: ["Art", "Artificial Intelligence", "Medicine"],
    answer: 1,
  },
];

export function DraggableCardDemo() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (idx) => {
    if (answers[current] !== null) return;
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
    setTimeout(() => {
      if (current < quizData.length - 1) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 700);
  };

  const correctCount = answers.filter(
    (ans, i) => ans === quizData[i].answer
  ).length;

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 mx-auto max-w-sm text-center text-2xl font-black bg-gradient-to-r from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent md:text-4xl dark:from-sky-400 dark:via-blue-600 dark:to-blue-900 z-30">
        {showResult
          ? `Quiz Complete! Your Score: ${correctCount}/${quizData.length}`
          : "Answer the quiz on each card. Good luck!"}
      </div>
      {quizData.map((item, idx) => (
        <DraggableCardBody key={idx} className={item.className}>
          <div className="relative h-80 w-80">
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-2xl"
            />
            {/* Quiz Overlay only on current card */}
            {idx === current && (
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center bg-white bg-opacity-60 rounded-2xl px-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 text-center">
                  {item.question}
                </h3>
                <div className="flex flex-col gap-3 w-full">
                  {item.options.map((opt, optIdx) => {
                    let btnColor = "bg-neutral-100 text-neutral-900";
                    if (answers[idx] !== null) {
                      if (optIdx === item.answer)
                        btnColor = "bg-green-500 text-white";
                      else if (optIdx === answers[idx])
                        btnColor = "bg-red-500 text-white";
                    }
                    return (
                      <button
                        key={optIdx}
                        className={`w-full py-2 rounded-lg font-semibold border transition ${btnColor}`}
                        onClick={() => handleOptionClick(optIdx)}
                        disabled={answers[idx] !== null}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            {/* Card Title */}
            <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300 z-30 bg-white bg-opacity-70 px-2 rounded">
              {item.title}
            </h3>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
