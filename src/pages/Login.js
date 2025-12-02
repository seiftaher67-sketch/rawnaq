import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone, FiLock, FiArrowLeft } from "react-icons/fi";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!phone.trim() || !password.trim()) {
      alert("يرجى ملء جميع الحقول");
      return;
    }
    navigate("/verify-phone");
  };

  return (
    <div className="relative pt-36 pb-20 flex justify-center items-center px-6">
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
            to="/"
            className="flex items-center gap-2 text-[#0F0F0F] hover:text-[#C8A06A] transition"
          >
            <FiArrowLeft className="text-xl" />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center text-[#0F0F0F] mb-3">
          تسجيل الدخول
        </h1>

        <p className="text-gray-600 text-center mb-10">
          مرحباً بك، من فضلك قم بتسجيل الدخول للمتابعة
        </p>

        {/* Phone Input */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">رقم الجوال</label>
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-3">
            <FiPhone className="text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="05XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">كلمة المرور</label>
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-3">
            <FiLock className="text-gray-500 text-xl" />
            <input
              type="password"
              className="w-full focus:outline-none"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Forget Password */}
        <div className="text-right mb-6">
          <a href="#" className="text-[#C8A06A] hover:underline">
            نسيت كلمة المرور؟
          </a>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!phone.trim() || !password.trim()}
          className={`block w-full text-center py-4 rounded-md text-xl transition ${
            !phone.trim() || !password.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0F0F0F] hover:bg-[#222]"
          } text-white`}
        >
          تسجيل الدخول
        </button>

        {/* Create Account */}
        <p className="text-center text-gray-600 mt-8">
          ليس لديك حساب؟{" "}
          <a href="/register" className="text-[#C8A06A] font-semibold hover:underline">
            إنشاء حساب جديد
          </a>
        </p>

      </div>
    </div>
  );
}