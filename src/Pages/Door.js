import React, {useRef, useState} from 'react';
import '../Style/Door.css';

const Door = () => {
  const stageRef = useRef(null);
  const [currentItem, setCurrentItem] = useState();

  const activate = (elem) => {
    elem.className = 'door door-opened';
    setCurrentItem(elem);
  };

  const inactivate = (elem) => {
    elem.className = 'door';
  };

  const doorHandler = (e) => {
    const stageRef = e.target;

    if (currentItem) {
      inactivate(currentItem);
    }

    if (stageRef.classList.contains('door-body')) {
      activate(stageRef.parentNode);
    }
  };

  return (
    <div className="stage" ref={stageRef} onClick={(e) => doorHandler(e)}>
      <div className="door">
        <div className="door-back">
          <div className="zzangu" />
        </div>
        <div className="door-body" />
      </div>

      <div className="door">
        <div className="door-back">
          <div className="zzangu" />
        </div>
        <div className="door-body" />
      </div>

      <div className="door">
        <div className="door-back">
          <div className="zzangu" />
        </div>
        <div className="door-body" />
      </div>
    </div>
  );
};

export default Door;
