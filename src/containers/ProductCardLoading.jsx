import { Skeleton } from "@/components/ui/skeleton"; // Adjusted import path

const ProductCardLoading = () => {
  return (
    <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
      <Skeleton className="w-full h-40 rounded-md" /> {/* Image Placeholder */}
      <div className="mt-3 space-y-2">
        <Skeleton className="w-3/4 h-4 rounded" /> {/* Name Placeholder */}
        <Skeleton className="w-1/2 h-4 rounded" /> {/* Price/Variant Placeholder */}
      </div>
      <Skeleton className="w-full h-8 mt-4 rounded" /> {/* Button Placeholder */}
    </div>
  )
}

export default ProductCardLoading