import React from 'react';

interface DropdownProps {
  items: {
    text: string;
    path: string;
  }[];
}

const SidebarDropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className="pl-8 mt-1">
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              className="flex items-center text-gray-600 hover:bg-gray-50 rounded-lg px-3 py-2 text-sm transition-colors duration-150"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDropdown;