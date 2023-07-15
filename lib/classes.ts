export const classes = (
  ...classesList: (string | undefined | boolean)[]
): string | undefined => {
  if (!classesList.length) return undefined;

  return classesList
    .filter((className) => {
      if (className && typeof className === "string") return true;
      return false;
    })
    .join(" ");
};
