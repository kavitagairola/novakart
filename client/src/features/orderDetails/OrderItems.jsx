function OrderItems() {
  const items = [
    {
      name: "iPhone 16 Pro",
      qty: 1,
      price: "₹129,999",
    },
    {
      name: "Wireless Headphones",
      qty: 1,
      price: "₹7,999",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Items
      </h2>

      <div className="space-y-5">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >
            <div>
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-slate-500">
                Qty: {item.qty}
              </p>
            </div>

            <span className="font-bold text-blue-600">
              {item.price}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default OrderItems;