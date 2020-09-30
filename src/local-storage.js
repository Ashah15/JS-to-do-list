const LocalDB = () => {

  const getItem = (item) => {
    return localStorage.getItem(item);
  }
  const setItem = (name, val) => {
    localStorage.setItem(name, val);
  }
  const getAr = (item) => {
    return  JSON.parse(localStorage.getItem(item));
  }
  const setAr = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  }
  const del = (key) => {
    localStorage.removeItem(key);
  }

  return { getItem, setItem, getAr, setAr, del }
}

export default LocalDB;