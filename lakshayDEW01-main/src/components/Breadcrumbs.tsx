import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm py-4 px-4 bg-slate-50 rounded-lg overflow-x-auto scrollbar-hide">
      <button
        onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }))}
        className="flex items-center text-slate-600 hover:text-blue-600 transition-colors flex-shrink-0"
        aria-label="Home"
      >
        <Home size={16} />
      </button>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
          {item.onClick || item.path ? (
            <button
              onClick={item.onClick}
              className={`whitespace-nowrap transition-colors ${
                index === items.length - 1
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-slate-600 whitespace-nowrap font-semibold">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
