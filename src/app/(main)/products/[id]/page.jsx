import getProductDetails from '@/lib/data'
import Link from 'next/link';
import {redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async ({ params }) => {
  const { id } = await params;
  // Check session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const product = getProductDetails(id);
  console.log(product);
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-square bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
              {product.category}
            </span>
            <h1 className="text-2xl font-semibold mt-3">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-3">by {product.brand}</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">★ {product.rating}</span>
              <span className="text-sm text-gray-400">
                · {product.stock} in stock
              </span>
            </div>

            <p className="text-3xl font-semibold mb-4">${product.price}.00</p>
            <hr className="mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {product.description}
            </p>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium">
              <Link href="/" className="block">
                Back to Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};;

export default page;