export const isEmpty = (value: unknown) => {
  if (value === undefined || value === null) {
    return true;
  }

  //array
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  //object
  if (value.constructor === Object) {
    return Object.keys(value).length === 0;
  }

  //string
  return String(typeof value).toLowerCase() === "string" && value === "";
};
