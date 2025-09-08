import React, { useState, useEffect, useRef } from "react";
import USDIcon from "../../assets/USD.png";
import EuroIcon from "../../assets/GBP.png"; // Use your Euro icon here if you have one

const OnetoOnePay = ({ isOpen, onClose }) => {
  const [currency, setCurrency] = useState(""); // No default selection
  const stripeContainerRef = useRef(null);

  // Stripe buy button IDs for each currency
  const stripeBuyButtonIdUSD = "buy_btn_1S5D6WLR5W9p8YK7tmpKjbOl";
  const stripeBuyButtonIdEURO = "buy_btn_1S5DIHLR5W9p8YK7JRS7cYyU";
  const publishableKey =
    "pk_live_51ROty0LR5W9p8YK78vG1oilWcp5blFSvTFZrGGisTnrRs96OfmpeI26O6cMPMcwHXSr1SeOkJlKuGHH0bBg9IMw100ibyfTgDL";

  useEffect(() => {
    if (!currency || !isOpen) return; // Only render if currency is selected and modal is open

    // Load Stripe buy button script only once
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
          currency === "USD" ? stripeBuyButtonIdUSD : stripeBuyButtonIdEURO
        );
        stripeBtn.setAttribute("publishable-key", publishableKey);
        stripeContainerRef.current.appendChild(stripeBtn);
      }
    }
  }, [currency, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-center text-blue-700 mb-2">
          ONE TO ONE TUTIONS
        </h2>
        <h3 className="text-lg font-bold mb-2">Select Currency</h3>
        <div className="flex gap-4 mb-4">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold border transition ${
              currency === "USD"
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setCurrency("USD")}
          >
            <img src={USDIcon} alt="USD" className="w-6 h-6" />
            USD
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold border transition ${
              currency === "EURO"
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setCurrency("EURO")}
          >
            <img src={EuroIcon} alt="EURO" className="w-6 h-6" />
            EURO
          </button>
        </div>

        {/* Stripe Buy Button */}
        <div ref={stripeContainerRef} className="w-full flex justify-center"></div>
        <p className="text-sm text-black mt-1">Powered by Stripe</p>
      </div>
    </div>
  );
};

export default OnetoOnePay;