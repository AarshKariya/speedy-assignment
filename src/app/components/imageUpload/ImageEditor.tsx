import { useState, FunctionComponent } from "react";
import TextToolsAndEditor from "./TextToolsAndEditor";
import ToolsHeader from "./ToolsHeader";
import { getFilter } from "@/app/helpers/helpers";

interface ImageEditorProps {
  selectedImage: { file: File; imageUrl: string } | null;
}

const ImageEditor: FunctionComponent<ImageEditorProps> = ({
  selectedImage,
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
      />
      {selectedImage && (
        <div className="flex w-full h-full max-w-screen-lg p-1 rounded-lg inset-0">
          <div id="editedImageDiv">
            <TextToolsAndEditor show={showTextTools} />
            <img
              src={selectedImage.imageUrl}
              alt="Selected"
              className={`w-full max-h-96 ${getFilter(filter)}`}
              id={"editedImage"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;

// bg-[#f9fafb]
