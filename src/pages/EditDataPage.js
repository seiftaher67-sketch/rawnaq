// src/pages/EditDataPage.jsx
import { useState } from "react";

export default function EditDataPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">

      <h1 className="text-4xl font-bold mb-10 text-black text-center">
        تعديل البيانات
      </h1>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">

        {/* Input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="الاسم الكامل"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="p-4 border border-gray-300 rounded-xl"
          />

          <input
            type="text"
            placeholder="رقم الجوال"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="p-4 border border-gray-300 rounded-xl"
          />

          <input
            type="text"
            placeholder="العنوان"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="p-4 border border-gray-300 rounded-xl md:col-span-2"
          />

        </div>

        {/* Location Button */}
        <button className="mt-6 bg-black text-white py-4 px-6 rounded-xl text-lg font-semibold w-full hover:bg-gray-900">
          حدد موقعي
        </button>

        {/* Payment Section */}
        <h2 className="text-2xl font-bold mt-10 mb-5 text-black">البطاقات</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <input
            type="text"
            placeholder="رقم البطاقة"
            value={form.cardNumber}
            onChange={(e) => handleChange("cardNumber", e.target.value)}
            className="p-4 border border-gray-300 rounded-xl md:col-span-2"
          />

          <input
            type="text"
            placeholder="CVV"
            value={form.cvv}
            onChange={(e) => handleChange("cvv", e.target.value)}
            className="p-4 border border-gray-300 rounded-xl"
          />

          <input
            type="text"
            placeholder="تاريخ الانتهاء"
            value={form.expiry}
            onChange={(e) => handleChange("expiry", e.target.value)}
            className="p-4 border border-gray-300 rounded-xl"
          />

        </div>

        {/* Save button */}
        <button className="mt-10 bg-[#C8A06A] text-white py-4 px-6 rounded-xl text-xl font-bold w-full hover:opacity-90">
          حفظ التعديلات
        </button>
      </div>
    </div>
  );
}
