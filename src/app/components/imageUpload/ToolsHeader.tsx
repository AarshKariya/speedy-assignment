import React from "react";
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
} from "react-icons/tb";
import domtoimage from "dom-to-image";

interface ToolsHeaderProps {
  showTextTools: boolean;
  setShowTextTools: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
  filter: string | undefined;
}

const ToolsHeader: React.FC<ToolsHeaderProps> = ({
  showTextTools,
  setShowTextTools,
  setFilter,
}) => {
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

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2 min-w-[120px] bg-[#fff8f6]">
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
          setFilter("light-theme");
        }}
      >
        <TbSunHigh size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Brighten Image</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("dark-theme");
        }}
      >
        <TbMoonFilled size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Invert Colors</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("saturate");
        }}
      >
        <TbBorderSides size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Saturate</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("dark-grayscale");
        }}
      >
        <TbColorFilter size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Grayscale Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("dark-blur");
        }}
      >
        <TbBlur size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Blur Effect</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("light-sepia");
        }}
      >
        <TbColorPicker size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Sepia Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter(undefined);
        }}
      >
        <TbBan size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Remove Filter</div>
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
