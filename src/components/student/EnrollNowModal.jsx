import React, { useState, useEffect, useRef } from "react";
import USDIcon from "../../assets/USD.png";
import GBPIcon from "../../assets/GBP.png";

const EnrollNowModal = ({ isOpen, onClose }) => {
  const [currency, setCurrency] = useState("");
  const stripeContainerRef = useRef(null);

  // Stripe buy button IDs
  const stripeBuyButtonIdUSD = "buy_btn_1RTN78LR5W9p8YK7WRThvFtz";
  const stripeBuyButtonIdGBP = "buy_btn_1RmeDzLR5W9p8YK749PdfDMQ";

  const publishableKey =
    "pk_live_51ROty0LR5W9p8YK78vG1oilWcp5blFSvTFZrGGisTnrRs96OfmpeI26O6cMPMcwHXSr1SeOkJlKuGHH0bBg9IMw100ibyfTgDL";

  useEffect(() => {
    if (!currency || !isOpen) return;

    if (!window.StripeBuyButton) {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/buy-button.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.StripeBuyButton = true;
        renderStripeButton();
      };
    } else {
      renderStripeButton();
    }

    function renderStripeButton() {
      if (stripeContainerRef.current) {
        stripeContainerRef.current.innerHTML = "";

        const stripeBtn = document.createElement("stripe-buy-button");
        stripeBtn.setAttribute(
          "buy-button-id",
          currency === "USD"
            ? stripeBuyButtonIdUSD
            : stripeBuyButtonIdGBP
        );
        stripeBtn.setAttribute("publishable-key", publishableKey);

        stripeContainerRef.current.appendChild(stripeBtn);
      }
    }
  }, [currency, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-md p-5 sm:p-6 md:p-8 relative flex flex-col items-center space-y-5 max-h-[90vh] overflow-y-auto">
        
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 px-2 py-1 text-gray-600 hover:text-gray-900 text-sm font-medium"
        >
          ← Back
        </button>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mt-6">
          Select Currency
        </h2>

        {/* Currency Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            className={`flex items-center justify-center gap-2 w-full sm:flex-1 px-4 py-3 rounded-lg font-bold border transition ${
              currency === "USD"
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
            onClick={() => setCurrency("USD")}
          >
            <img src={USDIcon} alt="USD" className="w-6 h-6" />
            USD
          </button>

          <button
            className={`flex items-center justify-center gap-2 w-full sm:flex-1 px-4 py-3 rounded-lg font-bold border transition ${
              currency === "GBP"
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
            onClick={() => setCurrency("GBP")}
          >
            <img src={GBPIcon} alt="GBP" className="w-6 h-6" />
            GBP
          </button>
        </div>

        {/* Stripe Button */}
        <div
          ref={stripeContainerRef}
          className="w-full flex justify-center overflow-x-auto pt-2"
        ></div>
      </div>
    </div>
  );
};

export default EnrollNowModal;