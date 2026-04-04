import logo from "../../assets/NavBar/logo.png";
import user from "../../assets/NavBar/user.png";
import { Sun, Bell, Search, Menu } from "lucide-react";

export default function Nav({ setIsOpen }) {
  return (
    <div className="flex items-center justify-between p-4  w-full">
  
      <div className="flex items-center gap-2 md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <img className="h-8" src={logo} />
        <h1 className="font-bold text-lg">FinTrack</h1>
      </div>

      <div className="hidden md:flex bg-gray-900 h-8 rounded-lg items-center gap-2 w-80">
        <Search className="ml-3 h-5" />
        <p className="text-sm text-(--text-secondary)">Search Anything...</p>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <Sun className="size-5" />
        <Bell className="size-5" />

        <div className="flex items-center gap-2">
          <img src={user} className="h-8 w-8 rounded-full" />
          <div className="hidden sm:block">
            <h1 className="font-medium text-sm">Robin Bhandari</h1>
            <p className="text-(--text-secondary) text-xs">Admin</p>
          </div>
        </div>
      </div>

    </div>
  );
}