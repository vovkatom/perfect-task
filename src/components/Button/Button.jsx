export const Button = ({
  children,
  type = 'click',
  className,
  handlerClick,
  label,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={handlerClick}
      aria-label={label}
    >
      {children}
    </button>
  );
};
