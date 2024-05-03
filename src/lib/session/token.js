const tokenLocalStorageKey = 'token';

export const saveToken = (token) => {
  localStorage.setItem(tokenLocalStorageKey, token);
};

export const getToken = () => {
  return localStorage.getItem(tokenLocalStorageKey);
};
