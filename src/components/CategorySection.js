import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      name: 'النقابات',
      path: '/niqabs',
      image: '/images/1.png',
      description: '  نقابات فاخرة بتصاميم راقية تكمل إطلالتك المحتشمة بأناقة '
    },
    {
      name: 'العبايات',
      path: '/abayas',
      image: '/images/2.png',
      description: 'عبايات فاخرة بتصاميم راقية تعكس جمالك وأنوثتك بكل تفصيلة'
    },
    {
      name: 'الطرح',
      path: '/tarhas',
      image: '/images/3.png',
      description: 'طرح فاخرة تنسدل برقي لتكتمل أناقتك في كل مناسبة'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-amiri font-normal text-5xl leading-none tracking-normal text-center text-gray-900 mb-4">
            التسوق حسب الفئة          </h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-[36rem]"
            >
              <div
                style={{ backgroundImage: `url(${category.image})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-end text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-[50px]">
                <h3 className="text-3xl font-semibold text-white mb-2 italic drop-shadow-lg">
                  {category.name}
                </h3>
                <p className="text-white italic font-semibold text-sm drop-shadow-lg bg-black bg-opacity-50 p-2 rounded w-full">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CategorySection;
