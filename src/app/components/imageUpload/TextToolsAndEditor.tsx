import React, { useState } from "react";
import Draggable from "react-draggable";
import { ChromePicker } from "react-color";

interface TextToolsAndEditorProps {
  show: boolean;
}

const TextToolsAndEditor: React.FC<TextToolsAndEditorProps> = ({ show }) => {
  const [textColor, setTextColor] = useState<string>("#000000");
  const [fontSize, setFontSize] = useState<number>(16);
  const [text, setText] = useState<string>("");

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFontSize(parseInt(e.target.value, 10));

  const handleColorChange = (color: any) => setTextColor(color.hex);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <>
      {show && (
        <div>
          <Draggable>
            <div className="absolute cursor-move top-1/4 left-1/2 transform -translate-x-1/2 z-10">
              <input
                type="text"
                value={text}
                style={{
                  fontSize: `${fontSize}px`,
                  color: textColor,
                  background: "transparent",
                  border: "none",
                }}
                placeholder="Type here!"
                onChange={handleTextChange}
                className="max-w-80 px-2 py-1 rounded border border-gray-300 focus:outline-none"
              />
            </div>
          </Draggable>
          <div className="absolute cursor-move top-5 left-1/10 z-10">
            <div className="mb-3">
              <label className="block text-black">
                Font Size: {fontSize}px
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={fontSize}
                  onChange={handleFontSizeChange}
                  className="mt-1 block w-full"
                />
              </label>
            </div>
            <div className="text-left">
              <label className="block text-black">
                Text Color:
                <ChromePicker
                  color={textColor}
                  onChangeComplete={handleColorChange}
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {!show && (
        <Draggable>
          <div
            style={{
              fontSize: `${fontSize}px`,
              color: textColor,
              position: "absolute",
              cursor: "move",
              top: "25%",
              left: "50%",
              zIndex: 1,
            }}
            className="absolute cursor-move top-1/4 left-1/2 transform -translate-x-1/2 z-10"
          >
            {text}
          </div>
        </Draggable>
      )}
    </>
  );
};

export default TextToolsAndEditor;
