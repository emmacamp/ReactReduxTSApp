export const persistLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};
export const clearLocalStorage = () => {
  localStorage.removeItem("user");
};
