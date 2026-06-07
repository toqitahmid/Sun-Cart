"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;
    useEffect(() => {
      if (!isPending && !user) {
        router.push("/login");
      }
    }, [user, isPending]);

  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-amber-50 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-amber-400 shadow"
          />
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-500 font-medium">Email</span>
            <span className="text-gray-800">{user.email}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-500 font-medium">Email Verified</span>
            <span
              className={`font-semibold ${
                user.emailVerified ? "text-green-500" : "text-red-400"
              }`}
            >
              {user.emailVerified ? "Verified" : "Not Verified"}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-500 font-medium">User ID</span>
            <span className="text-gray-400 text-sm truncate max-w-48">
              {user.id}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-8">
          <button
            onClick={async () => {
              await authClient.signOut();
              router.push("/");
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition"
          >
            Log Out
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-xl transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
