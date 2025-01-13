import React, { JSX } from 'react';

export const SkillCard = ({ name, icon }: { name: string; icon: JSX.Element }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg w-32 h-32">
      <div className="text-white">{icon}</div>
      <p className="mt-2 text-white font-semibold text-sm">{name}</p>
    </div>
  );
};
