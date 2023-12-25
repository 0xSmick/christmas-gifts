// GameBoard.js
// @client
import React from 'react';
import Case from './Case';

const GameBoard = ({ cases, onCaseSelect, currentRound, selectedCases, openCases, onOpenCases }) => {

  return (
    <div>

      <div className="p-8">
                <h2 className="text-2xl font-bold text-center mb-4">Remaining Cases: {cases.length - selectedCases.length}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {cases.map((caseItem, index) => (
          <Case 
            key={index}
            caseNumber={index + 1}
            id={caseItem.id}
            isOpen={caseItem.isOpen}
            prize={caseItem.prize}
            onSelect={onCaseSelect}
            isSelected={selectedCases.some(selectedCase => selectedCase.id === caseItem.id)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default GameBoard;