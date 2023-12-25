'use client'
import { useState, useEffect } from 'react';
import prizes from './prizes';
import GameBoard from '../components/GameBoard';
import Registry from '../components/Registry';

export default function GameController() {
  const [selectedCases, setSelectedCases] = useState([]);
  const [cases, setCases] = useState([]);

  // Initialize the game
  useEffect(() => {
  const cases = prizes.map((prize, index) => {
    return {
      id: index,
      caseNumber: index + 1,
      prize: prize,
      isOpen: false
    };
  });

  // Shuffle the cases to randomize the prizes
  cases.sort(() => Math.random() - 0.5);

  // Set the state
  setCases(cases);
}, []);

  // Handle case selection
const handleCaseSelect = (selectedCase) => {
    console.log('handleCaseSelect', selectedCase);

  if (selectedCase.isOpen) {
    console.log('Case already opened');
    return
  }
  const updatedCases = cases.map((caseItem) => {
    if (caseItem.id == selectedCase.id) {
        console.log(caseItem)
        return {...caseItem, isOpen: true};
    } else {
        return caseItem;
    }
  })
  setCases(updatedCases);
  setSelectedCases(updatedCases.filter(caseItem => caseItem.isOpen));
}

  return (
    <div className="flex justify-between">
        <Registry cases={cases.slice(0,20)}/>
    <GameBoard 
      cases={cases} 
      onCaseSelect={handleCaseSelect} 
      selectedCases={selectedCases}
    />
    </div>
  );
}