import logo from "../../assets/NavBar/logo.png"

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:block hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-full w-50
          bg-(--surface) border-r border-(--border)
          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0 lg:static md:block
        `}
      >
        <div class="flex items-center">
          
        <img src={logo}
        class="h-10 ml-3"
        ></img>
       
        <div className="py-4 font-bold text-lg">
          FinTrack
        </div>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <div className="p-2 rounded-lg hover:bg-(--surface-2) cursor-pointer">
            Dashboard
          </div>
          <div className="p-2 rounded-lg hover:bg-(--surface-2) cursor-pointer">
            Transactions
          </div>
          <div className="p-2 rounded-lg hover:bg-(--surface-2) cursor-pointer">
            Settings
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;