import React, { useRef } from "react";
import {
  TbTextSize,
  TbDownload,
  TbSunHigh,
  TbMoonFilled,
  TbBorderSides,
  TbColorFilter,
  TbBlur,
  TbBan,
  TbColorPicker,
  TbExchange,
} from "react-icons/tb";
import domtoimage from "dom-to-image";

interface ToolsHeaderProps {
  showTextTools: boolean;
  setShowTextTools: React.Dispatch<React.SetStateAction<boolean>>;
  toggleFilter: (filterName: string) => void;
  handleImageChange: any;
}

const ToolsHeader: React.FC<ToolsHeaderProps> = ({
  showTextTools,
  setShowTextTools,
  handleImageChange,
  toggleFilter,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const applyFilterAndDownload = () => {
    setShowTextTools(false);
    const divToConvert: any = document.getElementById("editedImageWrapper");

    // Use dom-to-image to capture the div content as an image
    domtoimage
      .toPng(divToConvert)
      .then(function (dataUrl: any) {
        // Create a download link for the image
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = "edited_image.png";

        // Trigger the download
        downloadLink.click();
      })
      .catch(function (error: any) {
        // Handle errors if any
        console.error("Error capturing image:", error);
      });
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center h-full space-y-1 min-w-[120px] bg-[#fff8f6] overflow-auto py-4">
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => setShowTextTools(!showTextTools)}
      >
        <TbTextSize
          size={40}
          color="black"
          className={`icon ${
            showTextTools ? "border-green-500" : "border-none"
          } p-2`}
        />
        <div className="text-black text-[10px]">Add Text</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("light-theme");
        }}
      >
        <TbSunHigh size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Brighten Image</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("dark-theme");
        }}
      >
        <TbMoonFilled size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Invert Colors</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("saturate");
        }}
      >
        <TbBorderSides size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Saturate</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("dark-grayscale");
        }}
      >
        <TbColorFilter size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Grayscale Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("dark-blur");
        }}
      >
        <TbBlur size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Blur Effect</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("light-sepia");
        }}
      >
        <TbColorPicker size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Sepia Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          toggleFilter("clearAll");
        }}
      >
        <TbBan size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Remove Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={handleClick}
      >
        <TbExchange size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Change Image</div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => applyFilterAndDownload()}
      >
        <TbDownload size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Download Image</div>
      </div>
    </div>
  );
};

export default ToolsHeader;
