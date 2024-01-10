import React from "react";

interface SliderProps {
  min: number;
  max: number;
  value?: number;
  onChange: (event: string) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, value = min, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="fixed top-8 right-[40%] appearance-none w-[200px] h-3 bg-black rounded-lg outline-none focus:bg-[#fe5829] transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};

export default Slider;
