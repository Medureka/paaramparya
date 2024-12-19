import React, { useState } from 'react';
import { LogOut, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { sidebarSections } from '../data/sidebarData';
import SidebarDropdown from './SidebarDropdown';

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({
    'Catalog': false // Initialize Catalog as closed
  });

  const toggleDropdown = (itemText: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemText]: !prev[itemText]
    }));
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggle}
        />
      )}

      <aside className={`
        w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 z-40
        transform transition-transform duration-200 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-2xl"></span>
            <span className="text-xl font-semibold">Paaramparya</span>
          </div>
          <button 
            onClick={toggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
        
        <nav className="p-4">
          {sidebarSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-6' : ''}>
              {section.title && (
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      onClick={() => item.hasChildren && toggleDropdown(item.text)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-colors duration-150 ${
                        item.active 
                          ? 'text-emerald-600 bg-emerald-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon size={20} />
                      <span>{item.text}</span>
                      {item.hasChildren && (
                        <span className="ml-auto transition-transform duration-200">
                          {openDropdowns[item.text] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </span>
                      )}
                    </button>
                    {item.hasChildren && openDropdowns[item.text] && (
                      <SidebarDropdown items={item.children || []} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 w-full px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;