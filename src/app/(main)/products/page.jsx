import Link from "next/link";
import products from "../../../../public/products.json";
import Image from "next/image";

const ProductPage = async () => {
    return (
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto px-0 lg:py-40 md:py-20 py-20">
        <h1 className="lg:text-4xl md:text-2xl sm:text-xl sm:text-left text-center font-bold text-gray-800 mb-8">
          Summer Products
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full sm:h-56 h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold text-gray-800 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                {product.stock <= 10 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-xs font-semibold text-white px-2 py-1 rounded-full">
                    Low Stock
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {product.brand}
                </p>
                <h3 className="text-gray-800 font-semibold text-base leading-snug line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-gray-400">/ 5</span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-bold text-orange-500">
                    ${product.price}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ProductPage;