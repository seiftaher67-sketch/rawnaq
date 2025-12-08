// src/pages/CheckoutPage.jsx
/**
  CheckoutPage — صفحة واحدة شاملة للسلة/الخروج مع:
  - عرض منتجات (كروت)
  - ملخص الطلب
  - بيانات العميل (نموذج)
  - خريطة مجانية (Leaflet + OpenStreetMap)
  - تفاصيل الدفع
  - زر تأكيد الدفع (placeholder action)
  
  متطلبات التثبيت:
  npm install react-leaflet leaflet react-icons
  + تأكد من إعداد Tailwind CSS في المشروع.
*/

import React, { useState, useMemo, useRef } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

/* Fix default marker icon path for many bundlers */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function CheckoutPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "عباية كريب فاخرة راقية",
      price: 199,
      qty: 1,
      image: "/images/1.png",
    },
    {
      id: 2,
      name: "عباية خليجية مطرزة فاخرة",
      price: 259,
      qty: 1,
      image: "/images/1.png",
    },
    {
      id: 3,
      name: "عباية قطنية مريحة",
      price: 150,
      qty: 1,
      image: "/images/2.png",
    },
    {
      id: 4,
      name: "عباية حريرية أنيقة",
      price: 300,
      qty: 1,
      image: "/images/3.png",
    },
  ]);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  // Default map position (Riyadh as example) — user can drag marker
  const [mapPos, setMapPos] = useState([24.7136, 46.6753]);
  const markerRef = useRef(null);

  // Cart handlers
  const increaseQty = (id) =>
    setCart(
      cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  const decreaseQty = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  // Totals
  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + it.price * it.qty, 0),
    [cart]
  );
  const shipping = subtotal > 0 ? 20 : 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  // Map interaction component to capture clicks/drag
  function MapEvents() {
    useMapEvents({
      click(e) {
        setMapPos([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }

  // Simple form validation (minimal)
  const validateAndConfirm = () => {
    if (cart.length === 0) {
      alert("عربة التسوق فارغة.");
      return;
    }
    if (!form.fullName || !form.phone || !form.address) {
      alert("يرجى تعبئة بيانات العميل (الاسم، الهاتف، العنوان).");
      return;
    }
    if (!payment.cardNumber || !payment.cardName || !payment.expiry || !payment.cvv) {
      alert("يرجى تعبئة بيانات الدفع.");
      return;
    }

    // Placeholder: process payment / submit order
    const order = {
      items: cart,
      totals: { subtotal, shipping, discount, total },
      customer: form,
      payment: { ...payment, cardNumber: maskCard(payment.cardNumber) },
      location: { lat: mapPos[0], lng: mapPos[1] },
      createdAt: new Date().toISOString(),
    };

    console.log("ORDER_SUBMIT:", order);
    alert("تم إرسال الطلب بنجاح (محاكاة). تفقد الكونسول لمزيد من التفاصيل.");
  };

  const maskCard = (num) => {
    const clean = num.replace(/\s+/g, "");
    if (clean.length <= 4) return clean;
    return "**** **** **** " + clean.slice(-4);
  };

  return (
    <div className="pt-28 pb-20 container mx-auto px-6">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">عربة التسوق</h1>
        <p className="text-lg text-gray-600 mt-2">
          راجعي المنتجات، حدّدي بيانات التوصيل، واكملي الدفع — الصفحة مصممة RTL.
        </p>
      </div>

      {/* Grid: left (items + form + map + payment) | right (summary) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT: Main column (items, form, map, payment) */}
        <div className="lg:col-span-2 space-y-6">

          {/* Items list */}
          <div className="space-y-4">
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-4 p-5 border border-[#E7DFD0] rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-40 h-40 object-cover rounded-lg border-2 border-[#C8A06A]/20"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0F0F0F]">
                      {item.name}
                    </h3>
                    <p className="text-[#C8A06A] text-xl font-bold mt-2">
                      {item.price} ر.س
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="p-2 bg-[#C8A06A] text-white rounded-full"
                        aria-label="Decrease"
                      >
                        <FiMinus />
                      </button>
                      <span className="text-lg font-medium">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="p-2 bg-[#C8A06A] text-white rounded-full"
                        aria-label="Increase"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-full"
                        aria-label="Remove"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Order Inputs Section */}
          <section className="bg-white border border-[#E7E4DD] rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">بيانات المستلم</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="col-span-1 md:col-span-1 p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="رقم الجوال"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="col-span-1 md:col-span-1 p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="تفاصيل العنوان (شارع، حي، مبنى...)"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="col-span-1 md:col-span-1 p-3 border rounded-lg"
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">
              لتحسين دقة التوصيل: يمكن تحديد الموقع على الخريطة بالنقر أو سحب العلامة.
            </p>
          </section>

          {/* Map Section */}
          <section className="bg-white border border-[#E7E4DD] rounded-2xl p-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-3">موقع التوصيل</h2>

            <div className="w-full h-64 rounded-lg overflow-hidden border relative z-10">
              <MapContainer
                center={mapPos}
                zoom={13}
                style={{ height: "100%", width: "100%", position: "relative" }}
                whenCreated={(map) => map.invalidateSize()}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEvents />
                <Marker
                  position={mapPos}
                  draggable={true}
                  eventHandlers={{
                    dragend: (e) => {
                      const latlng = e.target.getLatLng();
                      setMapPos([latlng.lat, latlng.lng]);
                    },
                  }}
                />
              </MapContainer>
            </div>

            <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-sm text-gray-600">الإحداثيات: {mapPos[0].toFixed(5)}, {mapPos[1].toFixed(5)}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    // mock: "use current marker coords" => fill short address
                    setForm((prev) => ({
                      ...prev,
                      address: `موقع مختار (${mapPos[0].toFixed(4)}, ${mapPos[1].toFixed(4)})`,
                    }));
                  }}
                  className="px-4 py-2 bg-[#0F0F0F] text-white rounded-lg"
                >
                  استخدام الموقع المحدد
                </button>

                <button
                  onClick={() => {
                    setMapPos([24.7136, 46.6753]); // reset to default
                  }}
                  className="px-4 py-2 bg-gray-100 rounded-lg"
                >
                  إعادة تعيين
                </button>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section className="bg-white border border-[#E7E4DD] rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">تفاصيل الدفع</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="اسم صاحب البطاقة"
                value={payment.cardName}
                onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                className="p-3 border rounded-lg"
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="رقم البطاقة (مثال: 4242 4242 4242 4242)"
                value={payment.cardNumber}
                onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                className="p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="تاريخ الانتهاء (MM/YY)"
                value={payment.expiry}
                onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                className="p-3 border rounded-lg"
              />
              <input
                type="password"
                placeholder="CVV"
                value={payment.cvv}
                onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                className="p-3 border rounded-lg"
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">
              جميع المعاملات مؤقتة هنا (محاكاة). لربط بوابة دفع حقيقية أعلمني لأضيف Stripe/HyperPay/PayTabs.
            </p>
          </section>
        </div>

        {/* RIGHT: Order summary */}
        <aside className="bg-white border border-[#E7E4DD] rounded-2xl p-6 shadow-sm h-fit">
          <h3 className="text-3xl font-bold mb-6">ملخص الطلب</h3>

          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>إجمالي المنتجات</span>
              <span>{subtotal} ر.س</span>
            </div>
            <div className="flex justify-between">
              <span>رسوم الشحن</span>
              <span>{shipping} ر.س</span>
            </div>
            <div className="flex justify-between">
              <span>الخصم</span>
              <span>{discount} ر.س</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-2xl font-bold text-[#C8A06A]">
              <span>الإجمالي النهائي</span>
              <span>{total} ر.س</span>
            </div>
          </div>

          <button
            onClick={validateAndConfirm}
            className="block w-full mt-8 bg-[#C8A06A] text-white text-center py-4 rounded-xl text-xl hover:opacity-95 transition"
          >
            تأكيد الدفع
          </button>
        </aside>
      </div>
    </div>
  );
}
