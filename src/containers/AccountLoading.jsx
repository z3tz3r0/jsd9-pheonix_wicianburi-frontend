import { Skeleton } from "@/components/ui/skeleton"

const AccountLoading = () => {
  return (
    <div className="space-y-8">
      <Skeleton className="w-48 h-10" />
      <div className="space-y-4">
        <Skeleton className="w-32 h-8" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10 sm:col-span-2" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
        <div className="flex justify-center gap-4 my-8 sm:justify-start">
          <Skeleton className="w-32 h-10" />
        </div>
      </div>
      <div className="hidden mb-8 border-b sm:block"></div>
      <div className="space-y-4">
        <Skeleton className="w-40 h-8" />
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="space-y-2">
            <Skeleton className="w-24 h-6" />
            <Skeleton className="w-48 h-4" />
          </div>
          <div className='flex justify-center'>
            <Skeleton className="w-40 h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLoading