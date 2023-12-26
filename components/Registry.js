import React from 'react';

const Registry = ({ cases }) => {
  const unrevealedCases = cases.filter(caseItem => !caseItem.isOpen);

  return (
    <div className="bg-black text-white shadow rounded p-4 m-2">
      <ul>
        {unrevealedCases.map((caseItem, index) => (
          <li key={index} className={`border-b border-gray-200 py-2 ${caseItem.isOpen ? 'line-through text-red-500' : ''}`}>
            {caseItem.prize}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registry;