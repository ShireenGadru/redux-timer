import React from 'react';
import { useDispatch } from 'react-redux';
import './Recorder.css';
import { selectDateStart, start } from '../../redux/recorder';
import { useSelector } from 'react-redux';
import cx from 'classnames';

const Recorder = () => {
  const dispatch = useDispatch();
  const dateStart = useSelector(selectDateStart);
  const started = dateStart !== '';

  const handleClick = () => {
    dispatch(start());
  };

  return (
    <div className={cx('recorder', {'recorder-started': started})}>
      <button className="recorder-record" onClick={handleClick}>
        <span></span>
      </button>

      <div className="recorder-counter">00:00:00</div>
    </div>
  );
};

export default Recorder;
