import React, { useState } from "react";
import EnrollNowModal from "../../components/student/EnrollNowModal";

const PaymentsEnroll = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <EnrollNowModal isOpen={open} onClose={() => setOpen(false)} />
      {/* Optionally, add a fallback message or redirect if modal is closed */}
      {!open && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Enrollment Closed</h2>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded"
            onClick={() => setOpen(true)}
          >
            Reopen Modal
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentsEnroll;