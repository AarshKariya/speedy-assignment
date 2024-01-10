import { useState, FunctionComponent } from "react";
import TextToolsAndEditor from "./TextToolsAndEditor";
import ToolsHeader from "./ToolsHeader";
import { DEFAULT_OPTIONS, getFilter } from "@/app/helpers/helpers";
import Slider from "./Slider";

interface ImageEditorProps {
  selectedImage: { file: File; imageUrl: string } | null;
  handleImageChange: any;
}

const initialFilter = {
  brightness: 100,
  invert: 100,
  saturate: 100,
  grayscale: 100,
  sepia: 100,
  blur: 5,
};

const ImageEditor: FunctionComponent<ImageEditorProps> = ({
  selectedImage,
  handleImageChange,
}) => {
  const [showTextTools, setShowTextTools] = useState<boolean>(false);
  const [filter, setFilter] = useState<any[]>(DEFAULT_OPTIONS);
  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(-1);
  const currentFilter =
    activeFilterIndex === -1 ? null : filter[activeFilterIndex];

  const toggleFilter = (filterId: string) => {
    const foundFilter = DEFAULT_OPTIONS.find(
      (option) => option.id === filterId
    );

    if (filterId === "clearAll") {
      console.log("filterId is hit?");
      setFilter(DEFAULT_OPTIONS);
    }

    if (!foundFilter) {
      setActiveFilterIndex(-1);
      return;
    }

    const filterIndex = filter.findIndex((f) => f.id === filterId);

    if (filterIndex !== -1) {
      setActiveFilterIndex(filterIndex);
    }
  };

  const setFilterValues = (value: string) => {
    if (activeFilterIndex === -1) return;

    const copyFilter: any = JSON.parse(JSON.stringify(filter));

    const targetFilter = copyFilter[activeFilterIndex];
    targetFilter.value = value;
    setFilter(copyFilter);
  };

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <ToolsHeader
        showTextTools={showTextTools}
        setShowTextTools={setShowTextTools}
        toggleFilter={toggleFilter}
        handleImageChange={handleImageChange}
        currentFilterId={currentFilter?.id}
      />
      {currentFilter && (
        <Slider
          max={currentFilter.max}
          min={currentFilter.min}
          onChange={setFilterValues}
        />
      )}
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
                style={{ filter: getFilter(filter) }}
                className="w-full h-full object-contain"
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
//min={min} max={max} value={value} onChange={onChange}
