const OrderForm = ({ order }) => {
  if (!order) {
    return <p className="py-10 text-center">ไม่มีข้อมูลคำสั่งซื้อ</p>;
  }

  const {
    orderId,
    userId,
    stateVariant,
    totalAmount,
    deliveryFee,
    orderItems,
    createdAt,
    paymentSlipLink, // Assuming this might be available from your Order model
  } = order;

  return (
    <div className="py-4 space-y-6">
      {/* Order Information */}
      <section>
        <h3 className="pb-2 mb-3 text-lg font-semibold border-b">ข้อมูลคำสั่งซื้อ</h3>
        <div className="grid grid-cols-1 text-sm md:grid-cols-2 gap-x-4 gap-y-2">
          <p><span className="font-medium">รหัสคำสั่งซื้อ:</span> {orderId}</p>
          <p><span className="font-medium">สถานะ:</span> {stateVariant}</p>
          <p className="md:col-span-2"><span className="font-medium">วันที่สั่งซื้อ:</span> {new Date(createdAt).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' })}</p>
        </div>
      </section>

      {/* Customer Information */}
      {userId && (
        <section>
          <h3 className="pb-2 mb-3 text-lg font-semibold border-b">ข้อมูลลูกค้า</h3>
          <div className="grid grid-cols-1 text-sm md:grid-cols-2 gap-x-4 gap-y-2">
            <p><span className="font-medium">ชื่อ:</span> {userId.firstName} {userId.lastName}</p>
            <p><span className="font-medium">อีเมล:</span> {userId.email}</p>
            <p><span className="font-medium">โทรศัพท์:</span> {userId.phone || "ไม่ได้ระบุ"}</p>
            {userId.address && (
              <div className="md:col-span-2">
                <p className="font-medium">ที่อยู่จัดส่ง:</p>
                <address className="mt-1 not-italic">
                  {userId.address.street}<br />
                  {userId.address.subDistrict && `ต. ${userId.address.subDistrict}, `}
                  {userId.address.district && `อ. ${userId.address.district}`}<br />
                  {userId.address.province && `จ. ${userId.address.province}, `}
                  {userId.address.postal}
                </address>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Order Items */}
      <section>
        <h3 className="pb-2 mb-3 text-lg font-semibold border-b">รายการสินค้า</h3>
        {orderItems && orderItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 font-medium text-left text-gray-600">สินค้า</th>
                  <th className="px-4 py-2 font-medium text-left text-gray-600">ตัวเลือก</th>
                  <th className="px-4 py-2 font-medium text-right text-gray-600">จำนวน</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orderItems.map((item) => (
                  <tr key={item._id}>
                    <td className="px-4 py-3 whitespace-nowrap">{item.productId?.name || "N/A"}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.variantValue}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>ไม่มีรายการสินค้าในคำสั่งซื้อนี้</p>
        )}
      </section>

      {/* Payment Slip */}
      <section>
        <h3 className="pb-2 mb-3 text-lg font-semibold border-b">สลิปโอนเงิน</h3>
        <p><span className="break-all text-wrap">{paymentSlipLink ? paymentSlipLink : "ลูกค้ายังไม่ได้โอนเงิน"}</span></p>
      </section>

      {/* Order Summary */}
      <section>
        <h3 className="pb-2 mb-3 text-lg font-semibold border-b">สรุปยอดรวม</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>ค่าจัดส่ง:</span>
            <span>฿{deliveryFee?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="flex justify-between pt-2 mt-2 text-base font-semibold border-t">
            <span>ยอดรวมทั้งสิ้น:</span>
            <span>฿{totalAmount?.toFixed(2) || "0.00"}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderForm;