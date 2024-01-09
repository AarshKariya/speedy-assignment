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
    <div className="flex min-h-screen">
      <ToolsHeader
        showTextTools={showTextTools}
        setShowTextTools={setShowTextTools}
        setFilter={setFilter}
        filter={filter}
      />
      {selectedImage && (
        <div
          className="flex w-full max-w-screen-lg p-1 rounded-lg inset-0"
          id="editedImageDiv"
        >
          <TextToolsAndEditor show={showTextTools} />
          <img
            src={selectedImage.imageUrl}
            alt="Selected"
            className={`w-full max-h-96 object-contain m-auto ml-[300px] ${getFilter(
              filter
            )}`}
            id={"editedImage"}
          />
        </div>
      )}
    </div>
  );
};

export default ImageEditor;

// bg-[#f9fafb]
