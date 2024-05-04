import css from '../NeedHelp/NeedHelp.module.css';

const NeedHelp = () => {
  return (
    <div className={css.container}>
      <svg className={css.image}></svg>
      <p className={css.infoText}>
        If you need help with{' '}
        <span className={css.perfectTask}>Perfect Task</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <p className={css.needHelp}>
        <svg viewBox="0 0 32 32" width="20" height="20"></svg>
        <p className={css.question}>Need help?</p>
      </p>
    </div>
  );
};

export default NeedHelp;
