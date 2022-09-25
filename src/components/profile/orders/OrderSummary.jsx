import { Link } from "react-router-dom";
import { useData } from "contexts";
import { SummaryItem } from "./SummaryItem";

function OrderSummary() {
  const { state } = useData();

  return (
    <main className="flex-column-center">
      {state?.orders?.length > 0 && <div className="heading4">MY ORDERS</div>}
      {state.orders.length > 0 &&
        state?.orders?.map((order) => (
          <div
            className="order-container flex-row-wrap gray-text"
            key={order?.paymentId}
          >
            <div className="order-details flex-column">
              <p className="color-success font-bold">Order Confirmed</p>
              <p>{new Date(order?.orderDate?.split("T")[0]).toDateString()}</p>
              <p>
                <span className="font-bold">Payment ID :</span>{" "}
                {order?.paymentId}
              </p>
              <p className="font-bold">Delivered to :</p>
              <p>{order?.deliveryAddress?.name}</p>
              <p>{order?.deliveryAddress?.street}</p>
              <p>
                {order?.deliveryAddress?.city} -{" "}
                {order?.deliveryAddress?.zipCode}
              </p>
              <p>{order?.deliveryAddress?.state}</p>
              <p>Mobile : {order?.deliveryAddress?.mobile}</p>
              <p>
                <span className="font-bold">Total Price : ₹ </span>{" "}
                {order?.totalPrice}
              </p>
            </div>
            <div className="order-items">
              {order?.items.map((item) => (
                <SummaryItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  qty={item.qty}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}

      {state.orders.length === 0 && (
        <>
          <div className="heading4">No orders yet</div>
          <Link
            className="btn btn-primary no-decoration inline-flex"
            to="/products"
          >
            BUY NOW
          </Link>
        </>
      )}
    </main>
  );
}

export { OrderSummary };
