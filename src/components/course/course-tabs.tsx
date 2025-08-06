'use client';

import { useState } from 'react';

const tabs = [
  'Features',
  'About',
  'Schedule',
  'Teachers',
  'Free Content',
  'More Details'
];

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState('Features');

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
