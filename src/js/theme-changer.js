const THEME_KEY = 'theme';
const light = 'light';
const dark = 'dark';
const violet = 'violet';

export const onChangeTheme = () => {
  const body = document.querySelector('body');
  const list = document.querySelector('.themeChangeList');
  list.addEventListener('click', (e) => {
    e.preventDefault();
    const { textContent } = e.target;

    const mode = textContent.trim().toLowerCase();
    console.log(mode);
    console.log(body);

    switch (mode) {
      case light:
        localStorage.setItem(THEME_KEY, light);
        body.classList.add(light);
        body.classList.remove(dark);
        body.classList.remove(violet);
        break;
      case dark:
        localStorage.setItem(THEME_KEY, dark);
        body.classList.add(dark);

        body.classList.remove(light);
        body.classList.remove(violet);
        break;
      case violet:
        localStorage.setItem(THEME_KEY, violet);
        body.classList.add(violet);

        body.classList.remove(light);
        body.classList.remove(dark);

        break;
      default:
        break;
    }
  });
};
