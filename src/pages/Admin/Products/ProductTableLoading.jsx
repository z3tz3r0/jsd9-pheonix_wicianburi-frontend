import { Skeleton } from "@/components/ui/skeleton";
import {
  TableCell,
  TableRow
} from '@/components/ui/table';

const ProductTableLoading = () => {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="w-24 h-5" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-40 h-5" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-20 h-5" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-24 h-5" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-20 h-5" />
      </TableCell>
      <TableCell>
        <div className="flex justify-center gap-2">
          <Skeleton className="w-8 h-8 rounded-md" />
          <Skeleton className="w-8 h-8 rounded-md" />
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ProductTableLoading