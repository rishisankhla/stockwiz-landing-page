import React, { useState } from "react";
import { X } from "lucide-react";
import strykeXLogo from "/StrykeX.svg";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
};

export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md mx-4 sm:mx-4 bg-black rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mb-5 sm:mb-8">
          <img
            src={strykeXLogo}
            alt="StrykeX Logo"
            className="h-6 sm:h-8 mx-auto"
          />
        </div>

        <div className="text-center mb-5 sm:mb-8 px-2">
          <h2 className="text-white text-lg sm:text-2xl font-bold mb-2">
            Get{" "}
            <span
              style={{
                background:
                  "linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%), linear-gradient(90.98deg, rgba(63, 173, 255, 1) 0%, rgba(51, 108, 220, 1) 49.489009380340576%, rgba(71, 180, 180, 1) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(20px, 5vw, 28px)",
                lineHeight: "134%",
                letterSpacing: "-0.01em",
                fontWeight: "700",
              }}
            >
              2 Months Extra Access
            </span>
          </h2>
          <p className="text-white text-base sm:text-xl font-bold">
            + Special Discount Code
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="relative">
            <div
              className="absolute -top-2 left-3 sm:left-4 px-[3.04px] py-0 rounded-[3px] z-10"
              style={{
                background:
                  "linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%), linear-gradient(to left, #000000, #000000)",
              }}
            >
              <span
                className="text-[9px] sm:text-[10px] leading-[150%] font-medium"
                style={{
                  background:
                    "linear-gradient(to left, #000000, #000000), linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%), linear-gradient(to left, #367aff, #367aff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                Name
              </span>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder=""
              className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-transparent border-2 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none transition-colors"
              style={{
                borderColor: "rgba(13, 181, 11, 1)",
              }}
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-transparent border-2 border-gray-600 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone No."
              className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-transparent border-2 border-gray-600 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 mt-4 sm:mt-6 text-black font-bold text-base sm:text-lg rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};