import { useState, FunctionComponent } from "react";
import TextToolsAndEditor from "./TextToolsAndEditor";
import ToolsHeader from "./ToolsHeader";
import { getFilter } from "@/app/helpers/helpers";

interface ImageEditorProps {
  selectedImage: { file: File; imageUrl: string } | null;
  handleImageChange: any;
}

const ImageEditor: FunctionComponent<ImageEditorProps> = ({
  selectedImage,
  handleImageChange,
}) => {
  const [showTextTools, setShowTextTools] = useState<boolean>(false);
  const [filter, setFilter] = useState<string[]>([]);

  const toggleFilter = (filterName: string) => {
    const index = filter.indexOf(filterName);
    if (index !== -1) {
      const updatedFilters = [...filter];
      updatedFilters.splice(index, 1);
      setFilter(updatedFilters);
    } else if (filterName === "clearAll") {
      setFilter([]);
    } else {
      setFilter([...filter, filterName]);
    }
  };

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <ToolsHeader
        showTextTools={showTextTools}
        setShowTextTools={setShowTextTools}
        toggleFilter={toggleFilter}
        handleImageChange={handleImageChange}
      />
      {selectedImage && (
        <div
          className="flex justify-center items-center min-h-screen w-full"
          id="editedImageDiv"
        >
          <div className="flex justify-center w-full max-w-screen-lg">
            <div className="w-fit h-96 relative" id="editedImageWrapper">
              <TextToolsAndEditor show={showTextTools} />
              <img
                src={selectedImage.imageUrl}
                alt="Selected"
                className={`w-full h-full object-contain ${getFilter(
                  filter
                ).join(" ")}`}
                id="editedImage"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;

// bg-[#f9fafb]
