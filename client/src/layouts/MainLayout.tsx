import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
  return (
    <>
      <Header />
        <Outlet /> 
      <Footer />
      <Toaster/>
    </>
  );
}