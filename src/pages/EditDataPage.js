import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function EditDataPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });

  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const saudiRegions = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { name: "الرياض" },
        geometry: {
          type: "Polygon",
          coordinates: [[[46.4, 24.4], [46.9, 24.4], [46.9, 24.9], [46.4, 24.9], [46.4, 24.4]]]
        }
      },
      {
        type: "Feature",
        properties: { name: "جدة" },
        geometry: {
          type: "Polygon",
          coordinates: [[[39.0, 21.3], [39.4, 21.3], [39.4, 21.7], [39.0, 21.7], [39.0, 21.3]]]
        }
      },
      {
        type: "Feature",
        properties: { name: "الدمام" },
        geometry: {
          type: "Polygon",
          coordinates: [[[49.9, 26.2], [50.3, 26.2], [50.3, 26.6], [49.9, 26.6], [49.9, 26.2]]]
        }
      },
      {
        type: "Feature",
        properties: { name: "مكة" },
        geometry: {
          type: "Polygon",
          coordinates: [[[39.7, 21.3], [40.0, 21.3], [40.0, 21.6], [39.7, 21.6], [39.7, 21.3]]]
        }
      },
      {
        type: "Feature",
        properties: { name: "المدينة" },
        geometry: {
          type: "Polygon",
          coordinates: [[[39.5, 24.4], [39.8, 24.4], [39.8, 24.7], [39.5, 24.7], [39.5, 24.4]]]
        }
      }
    ]
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        const regionName = feature.properties.name;
        setSelectedRegions(prev =>
          prev.includes(regionName)
            ? prev.filter(r => r !== regionName)
            : [...prev, regionName]
        );
      }
    });
  };

  const style = (feature) => ({
    fillColor: selectedRegions.includes(feature.properties.name) ? '#C8A06A' : '#3388ff',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-20 font-calibri" dir="rtl" style={{ fontWeight: 400, fontStyle: 'normal', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2 text-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}>
            تعديل البيانات الشخصية
          </h1>
          <p className="text-gray-600 text-right text-lg" style={{ fontWeight: 400, fontStyle: 'normal', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>قم بتحديث معلومات حسابك وبيانات الشحن</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Column - Form Inputs */}
          <div className="lg:col-span-2 space-y-8">

            {/* Personal Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-black mb-6 text-right flex items-center gap-3 justify-start">

                <span>المعلومات الشخصية</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3 text-right">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="ادخل اسمك الكامل"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none transition-all text-right placeholder:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3 text-right">رقم الجوال</label>
                  <input
                    type="text"
                    placeholder="أدخل رقم جوالك"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none transition-all text-right placeholder:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3 text-right">العنوان</label>
                  <textarea
                    placeholder="رقم المبني، رقم الشقة "
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    rows="3"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none transition-all text-right placeholder:text-sm resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-black mb-6 text-right flex items-center gap-3 justify-start">

                <span>بيانات البطاقة</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3 text-right">رقم البطاقة</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={form.cardNumber}
                    onChange={(e) => handleChange("cardNumber", e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none transition-all text-right placeholder:text-sm font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-3 text-right">CVV</label>
                    <input
                      type="text"
                      placeholder="000"
                      value={form.cvv}
                      onChange={(e) => handleChange("cvv", e.target.value)}
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none transition-all text-right placeholder:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-3 text-right">تاريخ الانتهاء</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={form.expiry}
                      onChange={(e) => handleChange("expiry", e.target.value)}
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none transition-all text-right placeholder:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button className="w-full bg-[#C8A06A] text-white py-3 px-12 rounded-full font-bold hover:bg-[#B58F5D] transition hover:shadow-lg" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
              حفظ جميع التعديلات
            </button>

          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 sticky top-28">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-xl font-bold text-black text-right">المناطق المتاحة</h3>
                <p className="text-sm text-gray-600 text-right mt-1">اختر المناطق التي تريد التوصيل فيها</p>
              </div>
              <div style={{ height: '400px' }}>
                <MapContainer center={[24.7136, 46.6753]} zoom={6} zoomControl={false} maxBounds={[[16.4, 34.5], [32.2, 55.7]]} maxBoundsViscosity={1.0} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution=""
                  />
                  <GeoJSON data={saudiRegions} style={style} onEachFeature={onEachFeature} />
                </MapContainer>
              </div>
              {selectedRegions.length > 0 && (
                <div className="p-4 bg-blue-50 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-3 text-right">المناطق المختارة:</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {selectedRegions.map((region) => (
                      <span key={region} className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
