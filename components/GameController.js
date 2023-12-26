'use client'
import { useState, useEffect } from 'react';
import {chrisPrizes, lyssiPrizes} from './prizes';
import GameBoard from '../components/GameBoard';
import PlayerSelectionModal from '../components/PlayerSelectionModal';
import Registry from '../components/Registry';

export default function GameController() {
  const [selectedCases, setSelectedCases] = useState([]);
  const [cases, setCases] = useState([]);
  const [player, setPlayer] = useState(null);

  // Initialize the game
  useEffect(() => {
    if (!player) {
        return;
    }
    let prizes;
    if (player === 'chris') { 
        prizes = chrisPrizes;
    } else if (player === 'lyssi') {
        prizes = lyssiPrizes;
    }

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
    }, [player]);

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
    <PlayerSelectionModal onPlayerSelect={setPlayer} />
        <Registry cases={cases.slice(0,20)}/>
    <GameBoard 
      cases={cases} 
      onCaseSelect={handleCaseSelect} 
      selectedCases={selectedCases}
    />
    </div>
  );
}