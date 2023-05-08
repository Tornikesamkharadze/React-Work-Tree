export const sessionStorage = (key, defaultValue) => {
  let storedValues = sessionStorage.getItem(key);
  return storedValues ? JSON.parse(storedValues) : defaultValue;
};
