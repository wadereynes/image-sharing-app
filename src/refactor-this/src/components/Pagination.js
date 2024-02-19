import React from 'react';

function Pagination({ disabledPrev, disabledNext, onAdd, onMinus }) {
  return (
    <div className="flex justify-between gap-2">
      <button className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50" onClick={onMinus} disabled={disabledPrev}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                        </path>
                    </svg>
      <span className="ml-1 font-bold text-lg">Back</span>
        </button>
      <button
      className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
      onClick={onAdd} disabled={disabledNext}>
      <span className="mr-1 font-bold text-lg">Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                        </path>
                    </svg>
        </button>
    </div>
  );
}

export default Pagination;
