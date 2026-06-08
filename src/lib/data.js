const getProductDetails = (id) => {
  const products = [
    {
      id: 1,
      name: "UV Protection Sunglasses",
      brand: "SunShade",
      price: 15,
      rating: 4.7,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      category: "Accessories",
      description:
        "Protect your eyes in style with SunShade's UV Protection Sunglasses. Designed for summer outings, these sunglasses block 100% of harmful UVA and UVB rays. The lightweight frame ensures all-day comfort without pressure on the nose or ears. Scratch-resistant lenses maintain clarity even after extended use. Available in multiple frame colors to match any outfit. The wrap-around design reduces peripheral glare effectively. Ideal for beach trips, driving, hiking, or casual everyday wear. A must-have accessory for anyone spending time outdoors.",
    },
    {
      id: 2,
      name: "Cooling Beach Towel",
      brand: "WaveBreeze",
      price: 22,
      rating: 4.5,
      stock: 25,
      image:
        "https://images.unsplash.com/photo-1625931046289-e51edea3e176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdGNoJTIwdG93ZWx8ZW58MHx8MHx8fDA%3D",
      category: "Beach Essentials",
      description:
        "WaveBreeze's Cooling Beach Towel is crafted from premium microfiber for ultra-fast drying. The extra-large size gives you plenty of room to stretch out and relax on the sand. Its sand-resistant surface means less cleanup when you pack up and head home. Vibrant summer prints make it easy to spot among the crowd. The towel folds compactly into its own carry pouch for hassle-free transport. Highly absorbent yet lightweight, it won't weigh down your beach bag. Machine washable and fade-resistant after repeated washes. Perfect for beach, pool, camping, or gym use.",
    },
    {
      id: 3,
      name: "SPF 50 Sunscreen Lotion",
      brand: "SolarGuard",
      price: 12,
      rating: 4.8,
      stock: 50,
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=400",
      category: "Skin Care",
      description:
        "SolarGuard's SPF 50 Sunscreen Lotion delivers broad-spectrum UVA and UVB protection for all skin types. The water-resistant formula stays effective for up to 80 minutes in water or sweat. Its lightweight, non-greasy texture absorbs quickly without leaving a white cast. Enriched with Vitamin E and aloe vera to keep skin moisturized and soothed. Dermatologist-tested and suitable for sensitive skin. Reef-safe and free from harmful oxybenzone and octinoxate chemicals. Comes in a convenient flip-top bottle for easy one-handed application. Reapply every two hours for maximum sun protection outdoors.",
    },
    {
      id: 4,
      name: "Inflatable Pool Float",
      brand: "AquaFun",
      price: 18,
      rating: 4.3,
      stock: 15,
      image:
        "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=400",
      category: "Pool & Water",
      description:
        "AquaFun's Inflatable Pool Float brings the fun to any pool or calm water body. Shaped like a giant flamingo, it instantly becomes the centerpiece of any summer gathering. Made from thick, puncture-resistant PVC for long-lasting durability season after season. The quick-inflate valve means you spend less time blowing and more time floating. Wide enough to comfortably support adults up to 200 lbs. Bright pink color is highly visible in the water for added safety. Deflates and rolls up compactly for easy storage and travel. Great for pool parties, lake days, and backyard fun.",
    },
    {
      id: 5,
      name: "Portable Mini Fan",
      brand: "CoolBreeze",
      price: 9,
      rating: 4.4,
      stock: 40,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
      category: "Electronics",
      description:
        "CoolBreeze's Portable Mini Fan is your personal cooling companion on hot summer days. USB rechargeable via any power bank, laptop, or wall adapter for versatile use anywhere. Three adjustable speed settings let you control airflow from a gentle breeze to a strong gust. The compact, ergonomic handle fits comfortably in your hand for extended use. Whisper-quiet motor won't disturb conversations, meetings, or outdoor events. A single full charge provides up to 8 hours of continuous cooling. Lightweight at just 150g, it slips easily into a bag or pocket. Perfect for outdoor festivals, commutes, offices, and sports events.",
    },
    {
      id: 6,
      name: "Waterproof Sun Hat",
      brand: "TropicWear",
      price: 20,
      rating: 4.6,
      stock: 30,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400",
      category: "Accessories",
      description:
        "TropicWear's Waterproof Sun Hat combines style and serious sun protection in one packable design. The wide brim shields your face, neck, and shoulders from direct sunlight effectively. UPF 50+ rated fabric blocks over 98% of harmful ultraviolet radiation. The waterproof outer layer repels light rain and splashes with ease. A fully foldable structure lets you pack it flat without losing its shape. Adjustable inner drawstring ensures a secure, comfortable fit for all head sizes. Breathable mesh panels keep airflow moving to prevent overheating. Ideal for hiking, gardening, travel, and any outdoor summer activity.",
    },
    {
      id: 7,
      name: "Insulated Water Bottle",
      brand: "ChillSip",
      price: 25,
      rating: 4.9,
      stock: 20,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      category: "Drinkware",
      description:
        "ChillSip's Insulated Water Bottle is built from premium 18/8 stainless steel for durability and purity. Double-wall vacuum insulation keeps drinks ice-cold for 24 hours or hot for 12 hours. The 32oz capacity means fewer refills during long outdoor activities. A leak-proof lid with a secure lock prevents accidental spills in bags. BPA-free and toxin-free materials ensure every sip is clean and safe. The powder-coated exterior provides a firm, slip-free grip even with wet hands. Wide-mouth opening fits ice cubes and makes cleaning effortless. Designed for hiking, gym, office, travel, and everyday hydration needs.",
    },
    {
      id: 8,
      name: "Flip Flops",
      brand: "SandStep",
      price: 11,
      rating: 4.2,
      stock: 60,
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
      category: "Footwear",
      description:
        "SandStep's Flip Flops are designed for maximum comfort during your summer adventures. The cushioned EVA footbed molds gently to your foot for all-day wearability without fatigue. Anti-slip rubber outsole provides strong grip on wet pool decks, sandy beaches, and smooth floors. Adjustable Y-strap design accommodates a wide range of foot widths comfortably. Lightweight construction means you barely feel them on your feet. Water-friendly materials dry quickly after splashes, waves, or pool use. Available in a wide range of colors to match any casual summer outfit. Suitable for beach walks, poolside lounging, and everyday errands.",
    },
  ];

  const product = products.find((p) => p.id === Number(id));
  return product;
};

export default getProductDetails;
