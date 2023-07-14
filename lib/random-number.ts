import { customAlphabet } from "nanoid";
export const getRandomNumber = (size: number): number => {
  const nanoid = customAlphabet("0123456789", size);

  return +nanoid();
};
