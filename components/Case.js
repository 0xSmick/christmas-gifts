import React from 'react';

   const Case = ({ caseNumber, id, isOpen, prize, onSelect, isSelected }) => {
     return (
       <div 
         onClick={() => {
           console.log(`Case ${caseNumber} clicked`);
           onSelect({id, caseNumber, prize, isOpen});
         }}
         className={`cursor-pointer p-4 rounded-md text-center shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 w-32 sm:w-48 h-36 sm:h-36 m-4 justify-content-center`}
    >
         <div className={`flip-card ${isOpen ? 'flipped' : ''}`}>
           <div className="flip-card-inner">
             <div className="flip-card-front">
                <img src="/gift.svg" alt="Gift Box" className="h-36 w-36 mt-2" />
             </div>
            <div className="flip-card-back absolute w-full h-full backface-hidden flex justify-center items-center flex-col">
                <p className="text-xl   line-through text-red-500">{prize}</p>
            </div>
           </div>
         </div>
       </div>
     );
   };

   export default Case;