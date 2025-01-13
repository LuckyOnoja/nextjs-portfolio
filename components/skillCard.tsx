import React, { JSX } from "react";

export const SkillCard = ({
  name,
  icon,
}: {
  name: string;
  icon: JSX.Element;
}) => {
  return (
    <div className=" w-[200px] h-[100px] bg-zinc-900 shadow flex items-center justify-center p-8 rounded-2xl gap-4">
      <h1 className="mt-2 text-white font-sans text-xl">{name}</h1>
      <div className="text-white">{icon}</div>
    </div>
  );
};
