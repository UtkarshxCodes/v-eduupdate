import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-lg relative">
      {/* Cross Button */}
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

      <h2 className="text-2xl font-bold mb-4">
        Return & Cancellation Policy
      </h2>

      <p className="text-sm text-gray-700 mb-4">Effective 2026</p>

      <p className="text-sm text-gray-700 mb-4">
        At V-EDU.us LLC, we are committed to ensuring a smooth and trustworthy
        experience for our learners. We understand that plans may change, and we
        aim to keep our cancellation policy clear and transparent.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>Registration Fee Refund Policy:</strong> Only the{" "}
        <strong>$199 registration amount</strong> is eligible for refund.
        Tuition fees, course fees, installment payments, or any other amounts
        paid beyond the registration fee are non-refundable.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>One-to-One Class Commencement Policy:</strong> Once your first
        scheduled one-to-one class has commenced, the registration fee remains
        refundable only within the first <strong>7 calendar days</strong> from
        the date of that class.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        After 7 days from the commencement of the first one-to-one class,{" "}
        <strong>no refund of any kind will be issued</strong>, including the
        registration fee.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>How to Cancel and Request a Refund:</strong> Please email us at{" "}
        <a
          href="mailto:support@v-edu.us"
          className="text-blue-600 hover:underline"
        >
          support@v-edu.us
        </a>{" "}
        with your full name, registered email address, and payment confirmation
        or reference number.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        Approved refunds will be processed to the original payment method within{" "}
        <strong>5–7 business days</strong> after confirmation.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>Important Notes:</strong> Refund requests must be submitted
        within the eligible refund period stated above. Access to course
        materials, classes, live sessions, or services beyond the registration
        stage may affect eligibility. Any applicable third-party payment
        processing fees may be deducted where permitted.
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
        <br />
        🏢 Address: 1908 Thomes Ave STE 12363, Cheyenne, WY 82001
      </p>
    </div>
  );
};

export default ReturnPolicyPage;