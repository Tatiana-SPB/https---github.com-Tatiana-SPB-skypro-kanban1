export const getThemeClass = (text) => {
  switch (text) {
    case "Research":
      return "_green";
    case "Web Design":
      return "_orange";
    case "Copywriting":
      return "_purple";
    default:
      return "";
  }
};
