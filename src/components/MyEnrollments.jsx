import React, { useState } from 'react';

const MyEnrollments = ({ userEmail }) => {
  const [showCurriculum, setShowCurriculum] = useState(false);

  // Add Simmons and Justin as Data Science users
  const isSimmons = userEmail === 'phyllissimmo@yahoo.com';
  const isJustin = userEmail === 'jprendergass@gmail.com';

  const isLucretia = userEmail === 'lucretiahenry@rocketmail.com';
  const isVeemal = userEmail === 'veemal16@gmail.com';
  const isRonesh = userEmail === 'singhronesh96@gmail.com';
  const isRocco = userEmail === 'roccosegreti@yahoo.com';
  const isMushfiq = userEmail === 'mushfiqrhmn1@gmail.com';
  const isConu = userEmail === 'conuwa.a@gmail.com';
  const isRussell = userEmail === 'russellmbaker@gmail.com';
  const isAlbert = userEmail === 'albertq2000@yahoo.com';
  const isAndini = userEmail === 'andinihamid1111@gmail.com';
  const isRayhan = userEmail === 'rayhanramadhany@gmail.com';
  const isShyfulla = userEmail === 'shyfulla@gmail.com';
  const isMdVakil = userEmail === 'm2v3k4@gmail.com';
  const isMichael = userEmail === 'smweah@hotmail.com';
  const isOluwatayo = userEmail === 'go.ccam.global@gmail.com'; // new
  const isJosheph = userEmail === 'Jlgoeh@gmail.com'; // new
  const isMichaelOrNew = isMichael || isOluwatayo || isJosheph;
  const isMichaelOrNewNames = (email) => {
    if (email === 'smweah@hotmail.com') return 'Michael';
    if (email === 'go.ccam.global@gmail.com') return 'Oluwatayo';
    if (email === 'Jlgoeh@gmail.com') return 'Josheph';
    return null;
  };

  // Treat archana, conuwa, and shyfulla as cyber users
  const isCyberUser =
    userEmail === 'christianocampo1230@hotmail.com' ||
    userEmail === 'archana.katangur@gmail.com' ||
    userEmail === 'albertq2000@yahoo.com' ||
    userEmail === 'conuwa.a@gmail.com' ||
    userEmail === 'shyfulla@gmail.com';

  // Set enrollment date based on user
  let enrollmentDate = '';
  if (isLucretia) {
    enrollmentDate = 'June, 2025';
  } else if (isVeemal) {
    enrollmentDate = 'July, 2025';
  } else if (isRonesh) {
    enrollmentDate = 'July, 2025';
  } else if (isRocco) {
    enrollmentDate = 'July, 2025';
  } else if (isSimmons || isJustin) {
    enrollmentDate = 'September, 2025';
  } else if (isMdVakil) {
    enrollmentDate = 'September, 2025';
  } else if (isMichaelOrNew) {
    enrollmentDate = 'September, 2025'; // enrollment date for Michael, Oluwatayo, Josheph
  } else if (isCyberUser) {
    enrollmentDate = 'June 15, 2025';
  } else if (isAndini) {
    enrollmentDate = 'August 10, 2025';
  } else if (isRayhan) {
    enrollmentDate = 'August 12, 2025';
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-4">📚 My Enrollments</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {(isLucretia || isVeemal || isRonesh || isMushfiq || isRussell || isAndini || isRayhan || isSimmons || isJustin || isMdVakil || isMichael || isOluwatayo || isJosheph || isMichaelOrNew) && !isCyberUser ? (
          <div className="border rounded-lg p-4 mb-6">
            <h4 className="text-xl font-bold mb-2">🎓 Data Science & AI</h4>
            <p className="text-sm text-gray-500 mb-2">Enrolled On: {enrollmentDate}</p>
            <p className="text-sm text-gray-500 mb-2">Course ID: DS-AI-101</p>
            <p className="text-sm text-gray-500 mb-2">Instructor: V-edu</p>
            <p className="text-sm text-gray-500 mb-2">Progress:1%</p>
            <p className="text-sm text-gray-500 mb-2">Status: In Progress</p>
            <p className="text-sm text-gray-500 mb-2">Duration: 26 weeks</p>
            <p className="text-sm text-gray-500 mb-4">
              "Build a strong foundation in data analysis, machine learning, and artificial intelligence. Gain hands-on
              experience with real datasets, Python libraries, and industry-standard tools to solve real-world problems."
            </p>
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
              onClick={() => setShowCurriculum(!showCurriculum)}
            >
              📜 View Curriculum
            </button>
          </div>
        ) : isCyberUser ? (
          <div className="border rounded-lg p-4 mb-6">
            <h4 className="text-xl font-bold mb-2">🎓 Cybersecurity & Ethical Hacking</h4>
            <p className="text-sm text-gray-500 mb-2">Enrolled On: {enrollmentDate}</p>
            <p className="text-sm text-gray-500 mb-2">Course ID: CSEH-205</p>
            <p className="text-sm text-gray-500 mb-2">Instructor: V-edu</p>
            <p className="text-sm text-gray-500 mb-2">Progress: 15%</p>
            <p className="text-sm text-gray-500 mb-2">Status: In Progress</p>
            <p className="text-sm text-gray-500 mb-2">Duration: 26 weeks</p>
            <p className="text-sm text-gray-500 mb-4">
              "Master the foundational and advanced concepts of digital security. Learn real-world attack simulations,
              ethical hacking frameworks, and defensive strategies used by professionals."
            </p>
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
              onClick={() => setShowCurriculum(!showCurriculum)}
            >
              📜 View Curriculum
            </button>
          </div>
        ) : null}

        {showCurriculum && (
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-bold mb-4">📜 Curriculum Modules</h4>
            <ul className="space-y-4">
              {(isLucretia || isVeemal || isRonesh || isMushfiq || isRussell || isAndini || isRayhan || isSimmons || isJustin || isMdVakil || isMichael || isOluwatayo || isJosheph) && !isCyberUser ? (
                <>
                  <li className="flex items-center gap-3">
                    <span>📊</span>
                    <span>Introduction to Data Science</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🧮</span>
                    <span>Statistics & Probability for Data Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🐍</span>
                    <span>Python Programming & Data Handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📈</span>
                    <span>Exploratory Data Analysis & Visualization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🧠</span>
                    <span>Machine Learning Algorithms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📦</span>
                    <span>Model Deployment & Evaluation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🧬</span>
                    <span>AI Concepts & Deep Learning Basics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>💼</span>
                    <span>Industry Use Cases & Case Studies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🏁</span>
                    <span>Final Capstone Project</span>
                  </li>
                </>
              ) : isCyberUser ? (
                <>
                  <li className="flex items-center gap-3">
                    <span>🛡️</span>
                    <span>Introduction to Cybersecurity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🌐</span>
                    <span>Fundamentals of Networking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🐞</span>
                    <span>Malware Types & Detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🌍</span>
                    <span>Web Application Security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🧪</span>
                    <span>Penetration Testing Basics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🎭</span>
                    <span>Social Engineering & Phishing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📶</span>
                    <span>Wireless Network Security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>⚖️</span>
                    <span>Cyber Laws and Compliance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🏁</span>
                    <span>Final Capstone Project</span>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEnrollments;