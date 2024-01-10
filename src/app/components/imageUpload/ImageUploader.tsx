import { useState, ChangeEvent } from "react";
import ImageEditor from "./ImageEditor";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<{
    file: File;
    imageUrl: string;
  } | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setSelectedImage({
          file: file,
          imageUrl: reader.result as string,
        });
      };
    }
  };

  return (
    <div className="bg-[#fff8f6]">
      {!selectedImage ? (
        <div className="flex justify-center items-center min-h-screen">
          <label
            htmlFor="file-upload"
            className="relative inline-block px-8 py-4 cursor-pointer bg-[#fe5829] text-white border-none rounded-md text-base transition duration-300 overflow-hidden"
          >
            Choose an Image
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <ImageEditor
          selectedImage={selectedImage}
          handleImageChange={handleImageChange}
        />
      )}
    </div>
  );
};

export default ImageUploader;
