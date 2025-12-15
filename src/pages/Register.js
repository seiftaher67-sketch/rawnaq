import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newErrors = {};
    if (name.trim() === "") newErrors.name = "الاسم الكامل مطلوب";
    if (phone.trim() === "") newErrors.phone = "رقم الجوال مطلوب";
    if (password.trim() === "") newErrors.password = "كلمة المرور مطلوبة";
    if (confirmPassword.trim() === "") newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
    else if (password !== confirmPassword) newErrors.confirmPassword = "كلمة المرور غير متطابقة";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [name, phone, password, confirmPassword]);

  const handleSubmit = () => {
    if (isFormValid) {
      navigate("/verify-phone");
    }
  };

  return (
    <div className="relative pt-36 pb-20 flex justify-center items-center px-6">
      <img
        src="/images/bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
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

        <h1 className="text-3xl font-bold text-center text-[#0F0F0F] mb-3" style={{fontFamily: 'Calibri'}}>
          إنشاء حساب جديد
        </h1>

        <p className="text-gray-600 text-center mb-10" style={{fontFamily: 'Calibri'}}>
          مرحباً بك، من فضلك قم بإدخال البيانات لإنشاء حساب جديد
        </p>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium" style={{fontFamily: 'Calibri'}}>الاسم الكامل</label>
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-3">
            <FiUser className="text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="أدخل اسمك الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* Phone Input */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium" style={{fontFamily: 'Calibri'}}>رقم الجوال</label>
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
          <label className="block mb-2 text-lg font-medium" style={{fontFamily: 'Calibri'}}>كلمة المرور</label>
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

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium" style={{fontFamily: 'Calibri'}}>تأكيد كلمة المرور</label>
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-3">
            <FiLock className="text-gray-500 text-xl" />
            <input
              type="password"
              className="w-full focus:outline-none"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`block w-full text-center py-4 rounded-md text-xl transition ${
            isFormValid
              ? "bg-[#0F0F0F] text-white hover:bg-[#222]"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          style={{fontFamily: 'Calibri'}}
        >
          إنشاء الحساب
        </button>

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-8" style={{fontFamily: 'Calibri'}}>
          لديك حساب بالفعل؟{" "}
          <a href="/login" className="text-[#C8A06A] font-semibold hover:underline">
            تسجيل الدخول
          </a>
        </p>

      </div>
    </div>
  );
}
