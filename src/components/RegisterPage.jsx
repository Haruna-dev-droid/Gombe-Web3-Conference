import React from "react";

function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Register for the Event</h1>
      <p className="mb-8 text-lg text-center max-w-md">
        Fill out the form or click the link below to complete your registration.
      </p>

      <a
        href="https://your-registration-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
      >
        Go to Registration Form
      </a>
    </div>
  );
}

export default RegisterPage;
