import { Children, useState } from "react";
import Navbar from "./Navbar"
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  h-screen">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col">

        <Navbar setIsOpen={setIsOpen} />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;