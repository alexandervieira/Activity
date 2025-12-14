import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const menuItems = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Activities', path: '/activities', icon: '📋' },
    { label: 'Customers', path: '/customers', icon: '👥' },
    { label: 'About', path: '/about', icon: 'ℹ️' },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-gray-800 text-white w-64 transform transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0`}
    >
      <div className="p-6 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>

      <nav className="p-6">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition"
                onClick={onClose}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-6 left-6 right-6 p-4 bg-gray-700 rounded">
        <p className="text-sm text-gray-300">Logged in as</p>
        <p className="font-semibold">User</p>
      </div>
    </aside>
  );
};

export default Sidebar;
