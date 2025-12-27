// components/SimilarProducts.jsx
import ProductCard from "./ProductCard.jsx";

export default function SimilarProducts({ products = [] }) {
  const defaultImgs = [
    "/images/a1.jpg",
    "/images/a2.jpg",
    "/images/a3.jpg",
    "/images/a4.jpg",
  ];

  // Force the three similar items to use a1..a3 images so all are visible
  const items = products.slice(0, 3).map((p, i) => ({ ...p, _imgIndex: i, image: defaultImgs[i] }));

  while (items.length < 3) {
    const idx = items.length;
    items.push({ id: `placeholder-${idx}`, name: "منتج مشابه", price: "", oldPrice: "", image: defaultImgs[idx], _imgIndex: idx });
  }

  return (
    <div className="mt-24">
      <h2 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }} className="mb-10 text-[#0F0F0F]">قد يعجبك أيضاً</h2>

      <div className="container mx-auto px-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {items.map((p, i) => (
            <div key={p.id || p._id || p.name || i}>
              <ProductCard
                id={p.id || p._id}
                image={p.image || defaultImgs[p._imgIndex || i]}
                name={p.name}
                price={p.price}
                oldPrice={p.oldPrice}
                showOldPrice={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}