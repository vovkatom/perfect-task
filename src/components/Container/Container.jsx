import css from './Container.module.css';

const Container = ({ className, children }) => {
  return (
    <section className={className}>
      <div className={css.container}>{children}</div>
    </section>
  );
};

export default Container;
