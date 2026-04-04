import logo from "../../assets/NavBar/logo.png";
import user from "../../assets/NavBar/user.png";
import { Sun, Bell, Search } from "lucide-react";

export default function Nav() {
  return (
    <div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img class="h-8" src={logo}></img>
          <h1 class="font-bold text-lg">FinTrack</h1>
        </div>

        <div class="w-110 gap-2 bg-gray-900 h-8 rounded-lg flex items-center">
          <Search class="ml-3 h-5"></Search>
          <p class="text-gray-500 text-sm">Search Anything...</p>
        </div>

        <div class="flex  items-center gap-5">
          <div class="flex gap-4">
            <Sun class="dark:text-white h-5"></Sun>
            <Bell class="dark:text-white h-5"></Bell>
          </div>

          <div class="flex gap-1">
            <img src={user} class="h-8"></img>
            <div>
              <h1 class="font-medium text-sm">Robin Bhandari</h1>
              <p class="text-gray-400 text-xs">Admin</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
