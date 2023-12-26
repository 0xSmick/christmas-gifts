import React, { useState } from 'react';

const PlayerSelectionModal = ({ onPlayerSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlePlayerSelect = (player) => {
    onPlayerSelect(player);
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto dark:bg-gray-800 flex items-center justify-center">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"></div>
          </div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-700">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 dark:text-white">Who is Playing?</h3>
              <div className="mt-5 sm:mt-5">
                <button onClick={() => handlePlayerSelect('chris')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                  Chris
                </button>
                <button onClick={() => handlePlayerSelect('lyssi')} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                  Lyssi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PlayerSelectionModal;