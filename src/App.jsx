import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "./pages/layouts/AdminLayout";
import OrderBooking from "./pages/OrderBooking";
import Admin from "./pages/Admin";
import DeliverOrder from "./pages/DeliverOrder";
import RootLayout from "./pages/layouts/RootLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="orderBooking" element={<OrderBooking />} />
        <Route path="deliverOrder" element={<DeliverOrder />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
