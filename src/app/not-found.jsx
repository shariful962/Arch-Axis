import notFoundImg from "@/assets/notFound.png"
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5FFF2] text-center px-4">
      <Image
        src={notFoundImg} 
        alt="Page Not Found"
        width={500}
        height={300}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-[#003917] mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href='/' >
        <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#003917] to-[#4DC16F] text-white rounded-full hover:opacity-90 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
