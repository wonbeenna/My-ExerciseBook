import React, {useEffect, useRef} from 'react';
import '../Style/Mouse.css';

const Mouse = () => {
  const h1Ref = useRef(null);
  const humanRef = useRef(null);
  const textRef = useRef(null);
  const wallRef = useRef(null);
  const pipeRef = useRef(null);

  let x = useRef(0);
  let y = useRef(0);
  let mx = useRef(0);
  let my = useRef(0);
  let speed = useRef(0.009);

  useEffect(() => {
    window.onload = function () {
      // 화살표함수는 호이스팅이 안됨(함수표현식)
      const mouseFunc = (e) => {
        x.current = e.clientX - window.innerWidth / 2;
        y.current = e.clientY - window.innerHeight / 2;
      };
      window.addEventListener('mousemove', mouseFunc, false);
      loop();
    };
  }, []);

  const loop = () => {
    mx.current += (x.current - mx.current) * speed.current;
    my.current += (y.current - my.current) * speed.current;

    h1Ref.current.innerHTML = 'x: ' + x.current + ' mx: ' + mx.current;
    humanRef.current.style.transform = 'translate(' + mx.current / 9 + 'px,' + my.current / 9 + 'px)';
    wallRef.current.style.transform = 'translate(' + -(mx.current / 8) + 'px,' + -(my.current / 8) + 'px)';

    //3d 텍스트 모션
    //rotate3d 속성
    textRef.current.style.transform =
      'translate3d(' +
      -(mx.current / 2) +
      'px,' +
      -(my.current / 2) +
      'px,0) rotate3d(0,1,0,' +
      -mx.current / 50 +
      'deg)';

    //파이프
    pipeRef.current.style.transform = 'translate(' + mx.current / 4 + 'px,' + my.current / 3 + 'px)';

    window.requestAnimationFrame(loop);
  };

  // console.log(clientX, clientY);
  // console.log(mx, my);
  return (
    <div className="body">
      <h1 ref={h1Ref}>test</h1>
      <img ref={humanRef} src="../../assets/images/layer-7.png" className="human" alt="닝겐" />

      <div className="textWrap">
        <img ref={textRef} src="../../assets/images/masthead-logo.svg" className="text3d" alt="fix nothing" />
      </div>
      <img ref={wallRef} src="../../assets/images/layer-1.jpg" className="bg" alt="벽" />
      <img ref={pipeRef} src="../../assets/images/layer-9.png" className="pipe" alt="파이프" />
    </div>
  );
};

export default Mouse;
