export const products = [
  {
    id: 1,
    name: "عباية كريب فاخرة",
    price: 199,
    originalPrice: 250,
    image: "/images/a1.jpg",
    thumbnails: ["/images/a1.jpg", "/images/a1.jpg", "/images/a1.jpg", "/images/a1.jpg", "/images/a1.jpg"],
    rating: 5,
    description: "عباية فاخرة مصنوعة من أجود أنواع الكتان، بتصميم يناسب الإطلالات الرسمية واليومية. خياطة عالية الجودة وخامة خفيفة ومريحة طوال اليوم.",
    features: [
      "خامة كتان فاخر مستورد",
      "متوفر بعدة مقاسات تناسب الجميع",
      "تصميم مناسب للاستخدام اليومي",
      "خفيف ولطيف على الجسم"
    ],
    reviews: [
      {
        name: "سارة محمد",
        rating: 5,
        date: "13 يوليو 2023",
        text: "العباية روعة جدًا والخامة ممتازة، التوصيل كان سريع والتعامل راقي."
      },
      {
        name: "منه الله",
        rating: 4,
        date: "4 ديسمبر 2023",
        text: "المقاسات مضبوطة والخامة مريحة جداً. أنصح بالشراء."
      },
      {
        name: "هدير إسلام",
        rating: 3,
        date: "12 ديسمبر 2023",
        text: "الخامة جيدة لكن التوصيل تأخر يومين. أتمنى تتحسن خدمة الشحن."
      },
      {
        name: "فاطمة علي",
        rating: 5,
        date: "20 ديسمبر 2023",
        text: "عباية جميلة جداً وتناسب جميع الإطلالات. الخامة ممتازة والسعر مناسب جداً."
      },
      {
        name: "نور محمود",
        rating: 5,
        date: "25 ديسمبر 2023",
        text: "أفضل عباية اشتريتها! الجودة عالية والتفاصيل أنيقة جداً. موصى به بقوة."
      },
      {
        name: "ليلى حسن",
        rating: 4,
        date: "28 ديسمبر 2023",
        text: "المنتج ممتاز وسريع الوصول. أتمنى أن تتوفر ألوان أكثر في المستقبل."
      },
      {
        name: "أمل محمد",
        rating: 5,
        date: "2 يناير 2024",
        text: "عباية فاخرة جداً بسعر مناسب. خياطة ممتازة وتفاصيل دقيقة. أنصح جميع الفتيات بالشراء."
      },
      {
        name: "رنا إبراهيم",
        rating: 5,
        date: "5 يناير 2024",
        text: "أفضل عباية من حيث الجودة والراحة. تستحق السعر بالفعل وأنا راضية جداً عن الشراء."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 2
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: "عباية مطرزة سعودية",
    price: 250,
    originalPrice: 300,
    image: "/images/a2.jpg",
    thumbnails: ["/images/a2.jpg", "/images/a2.jpg", "/images/a2.jpg", "/images/a2.jpg", "/images/a2.jpg"],
    rating: 5,
    description: "عباية مطرزة بالذهب مصنوعة بعناية عالية جداً، مناسبة للمناسبات الخاصة والحفلات.",
    features: [
      "خامة قماش فاخر عالي الجودة",
      "تطريز يدوي بالذهب والفضة",
      "مقاسات متعددة وملبسة",
      "مناسبة للمناسبات الخاصة"
    ],
    reviews: [
      {
        name: "ليلى عمر",
        rating: 5,
        date: "20 نوفمبر 2023",
        text: "تحفة فنية بكل المعاني! الخياطة احترافية والتطريز رائع جداً."
      },
      {
        name: "فاطمة أحمد",
        rating: 5,
        date: "8 ديسمبر 2023",
        text: "ممتازة جداً وتستحق السعر. سأشتري منهم مجددا."
      },
      {
        name: "مريم علي",
        rating: 5,
        date: "10 ديسمبر 2023",
        text: "العباية رائعة والتطريز يدوي بأتقان. جودة عالية جداً."
      },
      {
        name: "سارة حسن",
        rating: 4,
        date: "15 ديسمبر 2023",
        text: "جميلة جداً لكن السعر مرتفع قليلاً. الخياطة ممتازة."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 3,
    name: "عباية يومية عملية",
    price: 170,
    originalPrice: 220,
    image: "/images/a3.jpg",
    thumbnails: ["/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg"],
    rating: 5,
    description: "",
    features: [
      "خامة قطنية ناعمة وخفيفة",
      "سهلة العناية والغسيل",
      "متوفرة بألوان متعددة",
      "مناسبة للاستخدام اليومي"
    ],
    reviews: [
      {
        name: "نور محمد",
        rating: 4,
        date: "15 ديسمبر 2023",
        text: "مريحة جداً وأسعارها معقول. أنصح بها للجميع."
      },
      {
        name: "ريم أحمد",
        rating: 5,
        date: "18 ديسمبر 2023",
        text: "ممتازة للاستخدام اليومي. مريحة وسعرها مناسب جداً."
      },
      {
        name: "هند علي",
        rating: 5,
        date: "20 ديسمبر 2023",
        text: "أفضل عباية يومية! الخامة ناعمة والملبس مريح جداً."
      },
      {
        name: "سلمى محمد",
        rating: 4,
        date: "25 ديسمبر 2023",
        text: "جودة عالية وسعر معقول. سأشتري المزيد من هنا."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 4,
    name: "عباية رسميّة راقية",
    price: 280,
    originalPrice: 350,
    image: "/images/a4.jpg",
    thumbnails: ["/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg"],
    rating: 5,
    description: "عباية رسمية بتصميم فاخر وراقي، مناسبة للمناسبات الرسمية والعزائم.",
    features: [
      "خامة حرير فاخرة ناعمة",
      "تصميم فريد وراقي",
      "مقاسات حصرية",
      "مناسبة للمناسبات الرسمية"
    ],
    reviews: [
      {
        name: "دينا سامي",
        rating: 5,
        date: "18 ديسمبر 2023",
        text: "روعة! الخامة فاخرة جداً والتصميم مميز."
      },
      {
        name: "جيهان محمد",
        rating: 5,
        date: "22 ديسمبر 2023",
        text: "عباية رسمية راقية جداً. مناسبة للمناسبات الخاصة."
      },
      {
        name: "ولاء حسن",
        rating: 5,
        date: "25 ديسمبر 2023",
        text: "تصميم فريد وجميل. الخامة حرير فاخرة وناعمة جداً."
      },
      {
        name: "زينب علي",
        rating: 5,
        date: "28 ديسمبر 2023",
        text: "أحسن عباية رسمية شفتها. جودة وتصميم ممتاز."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 5,
    name: "عباية قطنية ناعمة",
    price: 180,
    originalPrice: 220,
    image: "/images/a3.jpg",
    thumbnails: ["/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg"],
    rating: 5,
    description: "عباية قطنية ناعمة ومريحة للاستخدام اليومي.",
    features: [
      "خامة قطنية ناعمة",
      "سهلة العناية",
      "مناسبة للاستخدام اليومي"
    ],
    reviews: [
      {
        name: "مريم أحمد",
        rating: 5,
        date: "1 يناير 2024",
        text: "مريحة جداً وخامة ناعمة."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      }
    ]
  },
  {
    id: 6,
    name: "عباية حرير فاخرة",
    price: 299,
    originalPrice: 350,
    image: "/images/a4.jpg",
    thumbnails: ["/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg"],
    rating: 5,
    description: "عباية حرير فاخرة للمناسبات الخاصة.",
    features: [
      "خامة حرير فاخرة",
      "تصميم راقي",
      "مناسبة للمناسبات"
    ],
    reviews: [
      {
        name: "لينا محمد",
        rating: 5,
        date: "3 يناير 2024",
        text: "فاخرة جداً وجميلة."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      }
    ]
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
