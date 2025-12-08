import ProductCard from "../components/ProductCard";
import { FiHeart } from "react-icons/fi";

const favoritesData = [
  {
    id: 1,
    name: "عباية كريب فاخرة",
    price: 180,
    oldPrice: 240,
    image: "/images/a1.jpg",
  },
  {
    id: 2,
    name: "عباية سعودية فاخرة",
    price: 220,
    oldPrice: 300,
    image: "/images/a2.jpg",
  },
  {
    id: 3,
    name: "عباية يومية أنيقة",
    price: 150,
    oldPrice: 199,
    image: "/images/a3.jpg",
  },
];

export default function Favorites() {
  // const favoritesData = []; // Use this to test the empty state

  return (
    <>
      <div className="pt-36 pb-20 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#0F0F0F] mb-12">
          قائمة المفضلة
        </h1>

        {favoritesData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favoritesData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="default" // or any other variant that fits
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FiHeart className="text-7xl text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              قائمة المفضلة فارغة
            </h2>
            <p className="text-gray-600 mb-8">
              أضيفي المنتجات التي نالت إعجابك للعودة إليها لاحقاً
            </p>
            <a
              href="/"
              className="bg-[#0F0F0F] text-white px-8 py-3 rounded-md text-lg hover:bg-[#222] transition"
            >
              ابدئي التسوق
            </a>
          </div>
        )}
      </div>
    </>
  );
}