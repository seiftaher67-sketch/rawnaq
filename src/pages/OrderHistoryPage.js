import ProductCard from "../components/ProductCard.jsx";
import { useNavigate } from 'react-router-dom';

export default function OrderHistoryPage() {
  const navigate = useNavigate();

  const orders = [
    {
      name: "نقاب كريب",
      image: "/images/a1.jpg",
      priceOld: "30 ",
      priceNew: "25 ",
    },
    {
      name: "عباية كتان",
      image: "/images/a2.jpg",
      priceOld: "30 ",
      priceNew: "25 ",
    },
    {
      name: "طرحة قطن",
      image: "/images/a4.jpg",
      priceOld: "30 ",
      priceNew: "25 ",
    },
    {
      name: "نقاب كريب",
      image: "/images/a3.jpg",
      priceOld: "30 ",
      priceNew: "25 ",
    },
    {
      name: "عباية صيفية",
      image: "/images/a1.jpg",
      priceOld: "40 ",
      priceNew: "35 ",
    },
    {
      name: "طرحة شيفون",
      image: "/images/a2.jpg",
      priceOld: "20 ",
      priceNew: "15 ",
    },
  ];

  return (
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">

      <h1 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }} className="text-[#0F0F0F] mb-12">
        سجل طلباتي
      </h1>

      {/* Products Grid - reuse ProductCard like Abayas page */}
      <div className="container mx-auto px-10">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {orders.map((o, i) => (
            <ProductCard
              key={i}
              id={i}
              image={o.image}
              name={o.name}
              price={o.priceNew}
              oldPrice={o.priceOld}
              showOldPrice={true}
            />
          ))}
        </div>

        <div className="mt-12 mb-6 flex justify-center">
          <button
            onClick={() => navigate('/track-order')}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-4 px-60 rounded-full text-lg focus:outline-none focus:ring-0"
            style={{
              fontFamily: 'Calibri',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            تتبع طلباتك
          </button>
        </div>
      </div>

    </div>
  );
}