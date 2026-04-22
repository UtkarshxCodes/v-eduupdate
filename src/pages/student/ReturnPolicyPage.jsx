import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-lg relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 font-bold"
        onClick={() => {
          navigate("/#footer");
          setTimeout(() => {
            const footer = document.getElementById("footer");
            if (footer) {
              footer.scrollIntoView({ behavior: "smooth" });
            }
          }, 200);
        }}
        aria-label="Close"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>

      <p className="text-sm text-gray-700 mb-4">
        At V-EDU, we aim to provide high-quality training and a valuable
        learning experience. Please review our refund terms carefully:
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>1. Trial / Initial Satisfaction:</strong> Students may request
        a refund of the registration fee within the first week of the program
        if they are not satisfied with the initial classes.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>2. First Week Refund Window:</strong> Refund requests must be
        raised within <strong>7 days</strong> from the batch start date. After
        this period, no refunds will be processed.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>3. Post Enrollment Policy:</strong> Once a student continues
        beyond the first week or actively participates in the batch, no refund
        will be applicable.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>4. Non-Refundable Fees:</strong> Any administrative or
        processing charges (if applicable) are non-refundable.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>5. Refund Processing Time:</strong> Approved refunds will be
        processed within <strong>7–10 business days</strong>.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>Contact Us:</strong>
        <br />
        📧 Email:{" "}
        <a
          href="mailto:support@v-edu.us"
          className="text-blue-600 hover:underline"
        >
          support@v-edu.us
        </a>
        <br />
        📞 Phone:{" "}
        <a
          href="tel:+18883444990"
          className="text-blue-600 hover:underline"
        >
          +1 (888) 344-4990
        </a>
      </p>
    </div>
  );
};

export default ReturnPolicyPage;