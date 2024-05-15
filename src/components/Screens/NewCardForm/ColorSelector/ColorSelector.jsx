import css from './ColorSelector.module.css';

const ColorSelector = ({ updateColor }) => {
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    updateColor(selectedColor);
    console.log(selectedColor);
  };

  return (
    <div className={css.radioButtonContainer}>
      <input
        type="radio"
        id="color1"
        name="color"
        value="#8FA1D0"
        className={css.radioButtonInput}
        onChange={handleColorChange}
      />
      <label
        htmlFor="color1"
        className={css.radioButtonLabel}
        style={{ backgroundColor: '#8FA1D0' }}
      ></label>

      <input
        type="radio"
        id="color2"
        name="color"
        value="#E09CB5"
        className={css.radioButtonInput}
        onChange={handleColorChange}
      />
      <label
        htmlFor="color2"
        className={css.radioButtonLabel}
        style={{ backgroundColor: '#E09CB5' }}
      ></label>

      <input
        type="radio"
        id="color3"
        name="color"
        value="#BEDBB0"
        className={css.radioButtonInput}
        onChange={handleColorChange}
      />
      <label
        htmlFor="color3"
        className={css.radioButtonLabel}
        style={{ backgroundColor: '#BEDBB0' }}
      ></label>

      <input
        type="radio"
        id="color4"
        name="color"
        value="#1616164D"
        className={css.radioButtonInput}
        onChange={handleColorChange}
      />
      <label
        htmlFor="color4"
        className={css.radioButtonLabel}
        style={{ backgroundColor: '#1616164D' }}
      ></label>
    </div>
  );
};

export default ColorSelector;
