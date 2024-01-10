export const getFilter = (filter: any[]): string => {
  if (!filter || filter.length === 0) {
    return "";
  }

  return filter
    .map((item) => {
      const finalValue = `${item.value}${item.unit}`;
      console.log("item", item);
      return `${item.property}(${finalValue})`;
    })
    .join(" ");
};

export const DEFAULT_OPTIONS = [
  {
    id: "light-theme",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    id: "dark-theme",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    id: "saturate",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    id: "dark-grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    id: "light-sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    id: "dark-blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];
