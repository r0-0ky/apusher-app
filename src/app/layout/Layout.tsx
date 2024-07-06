import React from "react";
import { Header } from "../../widgets/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../widgets/footer/ui/Footer";

export const Layout: React.FC = () => {

  return (
    <div className="bg-[#EFF2F7] h-full">
      <div className="h-full flex flex-col max-w-[1628px] box-content mx-auto lg:px-[50px]">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
};