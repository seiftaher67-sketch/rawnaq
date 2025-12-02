import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function VerifyPhone() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(49);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleResend = () => {
    setTimer(60);
    // Add logic to resend the OTP here, e.g., API call
  };

  const handleInput = (value, index) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="relative pt-36 pb-40 flex justify-center items-center px-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/images/Frau(MP4).mp4" type="video/mp4" />
      </video>
      <div className="w-full max-w-md bg-gray-50 shadow-lg border border-gray-200 rounded-xl p-8">

        {/* Back Button */}
        <div className="flex justify-end mb-4">
          <Link
            to="/login"
            className="flex items-center gap-2 text-[#0F0F0F] hover:text-[#C8A06A] transition"
          >
            <FiArrowLeft className="text-xl" />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center text-[#0F0F0F] mb-3">
          تأكيد رقم الهاتف
        </h1>

        <p className="text-gray-600 text-center mb-10">
          تم إرسال رمز مكون من 4 أرقام إلى رقم جوالك
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 mb-10">
          {otp.map((digit, index) => (
            <input
              key={index}
              maxLength={1}
              className="w-16 h-16 text-center text-3xl border border-gray-300 rounded-md focus:outline-[#C8A06A]"
              value={digit}
              onChange={(e) => handleInput(e.target.value, index)}
            />
          ))}
        </div>

        {/* Submit Button */}
        <a
          href="/"
          className="block w-full bg-[#C8A06A] text-white text-center py-4 rounded-md text-xl font-bold hover:bg-[#B58F5D] transition"
        >
          تأكيد الكود
        </a>

        {/* Resend */}
        <div className="text-center mt-8">
          {timer > 0 ? (
            <p className="text-gray-600">
              إعادة إرسال الرمز بعد{" "}
              <span className="font-semibold text-[#C8A06A]">{timer}</span>{" "}
              ثانية
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-[#C8A06A] font-semibold hover:underline cursor-pointer bg-transparent border-none"
            >
              إعادة إرسال الرمز
            </button>
          )}
        </div>

      </div>
    </div>
  );
}