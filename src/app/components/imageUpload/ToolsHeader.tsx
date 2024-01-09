import React from "react";
import download from "downloadjs";
import html2canvas from "html2canvas";
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
import { getFilterBeforeDownload } from "@/app/helpers/helpers";

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
  filter,
}) => {
  const applyFilterAndDownload = async () => {
    const editedImage: any = document.getElementById("editedImage");
    console.log("EditedImage", editedImage);

    const canvas = await html2canvas(editedImage);
    console.log("canvas", canvas);

    const dataURL = canvas.toDataURL("image/png");

    if (dataURL) {
      download(dataURL, "download.png", "image/png");
    } else {
      console.error("Failed to generate Data URL");
    }

    const newImage = new Image();
    console.log("newImage", newImage);
    newImage.crossOrigin = "anonymous";
    newImage.onload = async () => {
      const canvas = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");
      console.log("ctx", ctx);
      canvas.width = newImage.width;
      canvas.height = newImage.height;

      const filteredStyle = getFilterBeforeDownload(filter);
      console.log("filteredStyle", filteredStyle);
      ctx.filter = filteredStyle;
      console.log("ctx.filter", ctx.filter);
      ctx.drawImage(newImage, 0, 0);

      const dataURL = canvas.toDataURL("image/png");
      download(dataURL, "filtered_image.png", "image/png");
    };

    newImage.src = editedImage.src;
  };

  // const handleDownload = async () => {
  //   setShowTextTools(false);
  //   try {
  //     const editedImageElement = document.getElementById("editedImage");

  //     if (!editedImageElement) {
  //       console.error("Edited image element not found");
  //       return;
  //     }

  //     const canvas = await html2canvas(editedImageElement);
  //     const dataURL = canvas.toDataURL("image/png");

  //     if (dataURL) {
  //       download(dataURL, "download.png", "image/png");
  //     } else {
  //       console.error("Failed to generate Data URL");
  //     }
  //   } catch (error) {
  //     console.error("Error downloading image:", error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2 min-w-[120px] bg-[#f9fafb]">
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
          // setTheme("light-theme");
          setFilter("light-theme");
        }}
      >
        <TbSunHigh size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Brighten Image</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          // setTheme("dark-theme");
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
          // setTheme(undefined);
        }}
      >
        <TbColorFilter size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Grayscale Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("dark-blur");
          // setTheme(undefined);
        }}
      >
        <TbBlur size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Blur Effect</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter("light-sepia");
          // setTheme(undefined);
        }}
      >
        <TbColorPicker size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Sepia Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        onClick={() => {
          setFilter(undefined);
          // setTheme(undefined);
        }}
      >
        <TbBan size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Remove Filter</div>
      </div>
      <div
        className="icon-container flex flex-col items-center justify-center hover:bg-[#fe5829] rounded-md p-2 cursor-pointer"
        // onClick={() => (filter ? applyFilterAndDownload() : handleDownload())}
        onClick={() => applyFilterAndDownload()}
        // onClick={() => handleDownload()}
      >
        <TbDownload size={40} color="black" className="icon p-2" />
        <div className="text-black text-[10px]">Download Image</div>
      </div>
    </div>
  );
};

export default ToolsHeader;
