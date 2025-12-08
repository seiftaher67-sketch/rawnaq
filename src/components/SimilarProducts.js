// components/SimilarProducts.jsx
import { FiShoppingCart } from "react-icons/fi";

export default function SimilarProducts({ products }) {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold mb-10 text-black">منتجات مشابهة</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {products.map((p, i) => (
          <div
            key={i}
            className="p-4 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-72 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold text-black">{p.name}</h3>

            <div className="flex items-center gap-3 mt-2 mb-5">
              <span className="text-gray-500 line-through">{p.oldPrice} ر.س</span>
              <span className="text-2xl text-[#C8A06A] font-bold">{p.price} ر.س</span>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full text-lg hover:bg-[#222] transition">
              <FiShoppingCart className="text-xl" />
              اشتري الآن
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
