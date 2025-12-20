import ProductCard from "../components/ProductCard.jsx";

export default function OrderHistoryPage() {

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
      </div>

    </div>
  );
}