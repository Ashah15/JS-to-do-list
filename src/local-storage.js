const LocalDB = () => {
  const getItem = (item) => localStorage.getItem(item);
  const setItem = (name, val) => {
    localStorage.setItem(name, val);
    return val;
  };
  const getAr = (item) => JSON.parse(localStorage.getItem(item));
  const setAr = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
    return val;
  };
  const del = (key) => {
    localStorage.removeItem(key);
  };

  return {
    getItem, setItem, getAr, setAr, del,
  };
};

export default LocalDB;