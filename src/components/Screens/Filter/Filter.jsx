import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../../redux/userBoard/userBoard-selectors';
import { addFilter } from '../../../redux/userBoard/userBoard-slice';
const Filter = ({ openModal }) => {
  const dispatch = useDispatch();

  const currentFilter = useSelector(getFilter);

  return (
    <>
      <h2 className={css.title}>Filters</h2>
      <div className={css.filterContainer}>
        <div className={css.filterListWrap}>
          <form
            onChange={(e) => {
              openModal();
              dispatch(addFilter(e.target.value));
            }}
            className={css.filterList}
          >
            <div className={css.radioBtn}>
              <h3 className={css.listTitle}>Label color</h3>
              <input
                value={'without priority'}
                className={css.visuallyHidden}
                type="radio"
                name="filter"
                id="without-priority"
                defaultChecked={
                  currentFilter === 'without priority' ? true : false
                }
              />
              <label htmlFor="without-priority" className={css.filterListItem}>
                <span
                  style={{ backgroundColor: '#161616' }}
                  className={css.inputBtn}
                ></span>
                Without priority
              </label>
              <input
                value={'low'}
                className={css.visuallyHidden}
                type="radio"
                name="filter"
                id="low"
                defaultChecked={currentFilter === 'low' ? true : false}
              />
              <label htmlFor="low" className={css.filterListItem}>
                <span
                  style={{ backgroundColor: '#8fa1d0' }}
                  className={css.inputBtn}
                ></span>
                Low
              </label>
              <input
                value={'medium'}
                className={css.visuallyHidden}
                type="radio"
                name="filter"
                id="medium"
                defaultChecked={currentFilter === 'medium' ? true : false}
              />
              <label htmlFor="medium" className={css.filterListItem}>
                <span
                  style={{ backgroundColor: '#e09cb5 ' }}
                  className={css.inputBtn}
                ></span>
                Medium
              </label>
              <input
                value={'high'}
                className={css.visuallyHidden}
                type="radio"
                name="filter"
                id="high"
                defaultChecked={currentFilter === 'high' ? true : false}
              />
              <label htmlFor="high" className={css.filterListItem}>
                <span
                  style={{ backgroundColor: '#bedbb0 ' }}
                  className={css.inputBtn}
                ></span>
                High
              </label>
            </div>
            <label className={css.btn}>
              Show all
              <input
                value={''}
                className={css.visuallyHidden}
                type="radio"
                name="filter"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
