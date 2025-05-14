import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { InfoIcon } from 'lucide-react';
import OrderForm from './OrderForm';

const SeeOrderDialog = ({ order, children }) => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button className="flex items-center justify-center gap-2 text-center">
            <InfoIcon className="w-4 h-4" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>รายละเอียดคำสั่งซื้อ: {order?.orderId || "N/A"}</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <OrderForm order={order} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SeeOrderDialog;