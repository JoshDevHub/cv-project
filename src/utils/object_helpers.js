export const objectWithDefault = (defaultValue) => {
  return (obj) => {
    return Object.keys(obj).reduce((defObj, key) => {
      defObj[key] = obj[key] ?? defaultValue;
      return defObj;
    }, {});
  };
};

export const isEmpty = (obj) => {
  return Object.values(obj).every((v) => !v);
};

export const objFromForm = (form) => {
  const formData = new FormData(form);

  const object = {};
  for (const [key, value] of formData.entries()) {
    object[key] = value;
  }
  return object;
};
