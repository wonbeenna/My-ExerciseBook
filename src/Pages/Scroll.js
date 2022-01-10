import React, {useEffect, useRef, useState} from 'react';
import '../Style/Scroll.css';

const Scroll = () => {
  const [posY, setPosY] = useState(0);
  const ref = useRef(null);

  const showValue = () => {
    // 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보
    setPosY(ref.current.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener('scroll', showValue);

    // 원하는 스크롤 위치에서 이벤트 동작
    if (posY < window.innerHeight * 0.3) {
      ref.current.className = 'zzangu2 zoom';
    } else {
      ref.current.className = 'zzangu2';
    }
  }, [posY]);

  return (
    <>
      <div className="output">{posY}</div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo culpa id ratione alias illum aliquam accusamus
          deleniti dolores dignissimos, temporibus iste perspiciatis voluptatem repudiandae debitis similique fugiat
          dolor, doloremque quos mollitia repellendus iure exercitationem molestiae ab! Veritatis harum voluptate enim
          ducimus amet vitae veniam dignissimos possimus facilis eaque minus similique, vel commodi sed? Sequi
          distinctio debitis numquam, necessitatibus officiis quam, sed rerum id culpa totam provident repellendus iste,
          laborum maiores, consequuntur fugiat voluptatibus? Ad, architecto. Ipsam minus quis, ea quas, ex impedit quia
          distinctio commodi expedita laudantium dolores cum? Quisquam, odit, laboriosam consequuntur expedita optio
          laudantium. Optio laboriosam, repellendus laborum.
        </p>
        <figure className="zzangu2" ref={ref}>
          <img src="../../assets/images/짱구1.png" alt="짱구" />
        </figure>
      </div>
    </>
  );
};

export default Scroll;
