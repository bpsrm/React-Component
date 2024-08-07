import { useState } from "react";
import { DropdownProps } from "@/@types/global.types";
import { NavigationItem } from "@/@types/global.types";
import NavItemData from "@/json/nav-item.json";

export default function Dropdown({ name, className }: DropdownProps) {
  const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <div className="relative inline-block w-full">
      <button className={`bg-gray-dr-main hover:bg-blue-dr text-black hover:text-blue font-medium py-2 px-4 rounded flex items-center justify-between gap-3 w-full" ${className}`} onClick={() => setShowItems((prevState) => !prevState)}>
        <span>{name}</span>
        {showItems ? <i className="fa-solid fa-caret-down w-5"></i> : <i className="fa-solid fa-caret-left w-5"></i>}
      </button>
      {showItems &&
        <div className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-md shadow-lg w-full font-medium">
          <ul className="w-full">
            {NavItemData.navItem.map((item: NavigationItem) =>
              <li key={item.id}>
                <a href={item.link} className="block px-4 py-2 text-black hover:text-blue hover:bg-blue-dr">{item.name}</a>
              </li>
            )}
          </ul>
        </div>
      }
    </div>
  );
}
