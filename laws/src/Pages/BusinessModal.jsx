import React from "react";

export default function BusinessModal({ business, onClose }) {
  if (!business) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Required Permits:</h2>

        <ul className="space-y-4">
          {business.permits && business.permits.map((permit, index) => (
            <li key={index} className="border-b pb-3">
              <p className="font-semibold">
                • {permit.name} – ₹{permit.estimatedCostINR} ({permit.validityYears} year{permit.validityYears > 1 ? "s" : ""})
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold text-blue-600">Where to apply:</span>{" "}
                {permit.whereToApply.startsWith("http") ? (
                  <a href={permit.whereToApply} target="_blank" rel="noreferrer" className="underline text-blue-600">
                    {permit.whereToApply}
                  </a>
                ) : (
                  permit.whereToApply
                )}
              </p>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
