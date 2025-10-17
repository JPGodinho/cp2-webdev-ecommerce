import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="p-6">
          <Outlet/>
        </main>
    </div>
  );
}