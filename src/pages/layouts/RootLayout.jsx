import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main>
      <nav
        style={{
          display: "flex",
          flexDirection: "spaceAround",
          alignItems: "center",
        }}
      >
        <h1 className="logo">Logo</h1>
        <ul style={{ display: "flex", listStyle: "none", gap: "2rem" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
export default RootLayout;
