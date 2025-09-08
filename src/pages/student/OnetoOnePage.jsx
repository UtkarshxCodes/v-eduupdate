import React, { useState } from "react";
import OnetoOnePay from "../../components/student/OnetoOnePay";

const OnetoOnePage = () => {
  // Modal always open on this route
  const [isOpen, setIsOpen] = useState(true);

  return (
    <OnetoOnePay isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
};

export default OnetoOnePage;