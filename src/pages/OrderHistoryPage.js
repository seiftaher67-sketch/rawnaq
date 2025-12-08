export default function OrderHistoryPage() {

  const orders = [
    {
      name: "نقاب كريب",
      image: "/images/a1.jpg",
      priceOld: "30 ر.س",
      priceNew: "25 ر.س",
    },
    {
      name: "عباية كتان",
      image: "/images/a2.jpg",
      priceOld: "30 ر.س",
      priceNew: "25 ر.س",
    },
    {
      name: "طرحة قطن",
      image: "/images/a4.jpg",
      priceOld: "30 ر.س",
      priceNew: "25 ر.س",
    },
    {
      name: "نقاب كريب",
      image: "/images/a3.jpg",
      priceOld: "30 ر.س",
      priceNew: "25 ر.س",
    },
  ];

  return (
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">

      <h1 className="text-4xl font-bold mb-12 text-black text-center">
        سجل طلباتي
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {orders.map((o, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={o.image}
              className="w-full h-72 object-cover rounded-xl mb-4"
              alt={o.name}
            />

            <h3 className="text-xl font-bold text-black mb-3">{o.name}</h3>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-500 line-through">{o.priceOld}</span>
              <span className="text-2xl font-bold text-[#C8A06A]">{o.priceNew}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-900">
              إعادة طلب
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}