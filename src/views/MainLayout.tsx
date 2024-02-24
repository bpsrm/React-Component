//router
import { Outlet } from "react-router-dom";

//components
import Header from "@/components/private/Header";

export default function MainLayout() {
  return (
    <div className="container-main">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
