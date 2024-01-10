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
  const [filter, setFilter] = useState<string | undefined>();

  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      <ToolsHeader
        showTextTools={showTextTools}
        setShowTextTools={setShowTextTools}
        setFilter={setFilter}
        filter={filter}
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
                className={`w-full h-full object-contain ${getFilter(filter)}`}
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
