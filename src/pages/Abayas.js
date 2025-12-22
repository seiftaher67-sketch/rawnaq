import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products";

export default function Abayas() {

  const abayasList = products;

  return (
    <div className="pt-36 pb-20 bg-white">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }} className="text-[#0F0F0F]">العبايات</h1>


      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-20 mb-12">
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between shadow-sm">

          {/* Sort */}
          <div className="relative w-full md:w-1/3">
            <select className="w-full appearance-none p-4 border border-gray-300 rounded-full text-black bg-white">
              <option>الفرز: من السعر الأقل للأعلى</option>
              <option>الفرز: من الأعلى للأقل</option>
              <option>الأحدث</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-black">
              ▼
            </span>
          </div>

          {/* Size */}
          <div className="relative w-full md:w-1/3">
            <select className="w-full appearance-none p-4 border border-gray-300 rounded-full text-black bg-white" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
              <option>المقاس</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-black">
              ▼
            </span>
          </div>

          {/* Color */}
          <div className="relative w-full md:w-1/3">
            <select className="w-full appearance-none p-4 border border-gray-300 rounded-full text-black bg-white">
              <option>اللون</option>
              <option>أسود</option>
              <option>بيج</option>
              <option>رمادي</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-black">
              ▼
            </span>
          </div>

          {/* Apply Filter Button */}
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto px-6 py-4 border border-gray-300 rounded-lg text-white bg-black hover:bg-gray-800 flex items-center justify-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19S3 15.4183 3 11 6.58172 3 11 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-10">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {abayasList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              oldPrice={product.originalPrice}
              showOldPrice={true}
              variant="default"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
