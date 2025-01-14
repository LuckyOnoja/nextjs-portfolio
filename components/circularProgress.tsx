import React from "react";

interface CircularProgressProps {
  percentage: number;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  label,
}) => {
  const circumference = 2 * Math.PI * 45; // 2πr, where r = 45

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[100px] h-[100px]">
      <svg className="transform -rotate-90" width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="#6200ea"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-xl font-bold">{percentage}%</span>
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
};

export default CircularProgress;
