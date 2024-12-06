import React from "react";

const VisaCard = ({
  country,
  countryImage,
  visaType,
  processingTime,
  fee,
  validity,
  applicationMethod,
  onSeeDetails,
}) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <img
        src={countryImage}
        alt={`${country} flag`}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-bold">{country}</h3>
        <p className="text-sm text-gray-600">Visa Type: {visaType}</p>
        <p className="text-sm text-gray-600">
          Processing Time: {processingTime}
        </p>
        <p className="text-sm text-gray-600">Fee: {fee}</p>
        <p className="text-sm text-gray-600">Validity: {validity}</p>
        <p className="text-sm text-gray-600">
          Application Method: {applicationMethod}
        </p>
      </div>
      <button
        onClick={onSeeDetails}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        See Details
      </button>
    </div>
  );
};

export default VisaCard;
