import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <section style={{ display: "flex", gap: "5rem" }}>
      <div className="sidebar">
        <ul>
          {/* <li>
            <Link to="/admin">Admin</Link>
          </li> */}
          <li>
            <Link to="deliverOrder">Deliver Order</Link>
          </li>
          <li>
            <Link to="orderBooking">Order Booking</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </section>
  );
}
export default AdminLayout;
