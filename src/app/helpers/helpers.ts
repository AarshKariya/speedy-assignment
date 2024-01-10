export const getFilter = (filter: string[] | undefined): string[] => {
  if (!filter || filter.length === 0) {
    return ["none"];
  }

  return filter.map((filter) => {
    switch (filter) {
      case "light-sepia":
        return "sepia";
      case "dark-grayscale":
        return "grayscale";
      case "dark-blur":
        return "blur-[3px]";
      case "saturate":
        return "saturate-200";
      case "light-theme":
        return "brightness-200";
      case "dark-theme":
        return "invert";
      default:
        return "none";
    }
  });
};
