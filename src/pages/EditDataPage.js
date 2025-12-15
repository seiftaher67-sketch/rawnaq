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
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">

        <h1 className="text-4xl font-extrabold mb-32 text-black text-right">
          تعديل البيانات
        </h1>

        {/* Input fields */}
        <div className="flex gap-6">

          <div className="flex flex-col gap-6 mt-[100px]" style={{ width: '500px', marginLeft: '60px' }}>

            <div>
              <label className="block text-lg font-bold text-gray-700 mb-2 mr-2 text-right">الاسم الكامل</label>
              <input
                type="text"
                placeholder="ادخل اسمك الكامل "
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                style={{ width: '400px', height: '40px', opacity: 1, borderRadius: '8px', borderWidth: '1px', padding: '10px' }}
                className="border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-700 mb-2 mr-2 text-right">رقم الجوال</label>
              <input
                type="text"
                placeholder=" أدخل رقم جوالك"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                style={{ width: '400px', height: '40px', opacity: 1, borderRadius: '8px', borderWidth: '1px', padding: '10px' }}
                className="border border-gray-300"
              />
            </div>

            <div style={{ marginTop: '-18px' }}>
              <label className="block text-lg font-bold text-gray-700 mb-2 mr-2 text-right">العنوان</label>
              <input
                type="text"
                placeholder="رقم المبني , رقم الشقةح"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                style={{ width: '400px', height: '40px', opacity: 1, borderRadius: '8px', borderWidth: '1px', padding: '10px' }}
                className="border border-gray-300"
              />
            </div>

          </div>

          {/* Map */}
          <div style={{ width: '382px', height: '350px', borderRadius: '0px', position: 'sticky', top: '8rem' }}>
            <MapContainer center={[24.7136, 46.6753]} zoom={6} zoomControl={false} maxBounds={[[16.4, 34.5], [32.2, 55.7]]} maxBoundsViscosity={1.0} style={{ height: '100%', width: '100%', borderRadius: '0px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=""
              />
              <GeoJSON data={saudiRegions} style={style} onEachFeature={onEachFeature} />
            </MapContainer>
          </div>

        </div>

        <h2 className="text-2xl font-bold mt-6 mb-5 text-black text-right">البطاقات</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
        <button className="mt-10 bg-[#C8A06A] text-white py-2 px-4 rounded-xl text-lg font-bold w-auto hover:scale-105 hover:shadow-lg transition-all duration-200">
          حفظ التعديلات
        </button>
      </div>
    </div >
  );
}
