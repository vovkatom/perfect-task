const userDataLocalStorageKey = 'user_data';

export const saveUserData = (data) => {
  localStorage.setItem(userDataLocalStorageKey, JSON.stringify(data));
};

export const getUserData = () => {
  const data = localStorage.getItem(userDataLocalStorageKey);
  return JSON.parse(data);
};
