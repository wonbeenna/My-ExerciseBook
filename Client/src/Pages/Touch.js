import React, {useEffect, useRef, useState} from 'react';
import '../Style/Touch.css';

const data = [
  {url: 'https://www.youtube.com/watch?v=nM0xDI5R50E', image: '../../assets/images/iu_0.jpg'},
  {url: 'https://www.youtube.com/watch?v=Ub6IyAOTwr8', image: '../../assets/images/iu_1.jpg'},
  {url: 'https://www.youtube.com/watch?v=D1PvIWdJ8xo', image: '../../assets/images/iu_2.jpg'}
];
const Touch = () => {
  const wrapRef = useRef();
  const diskRef = useRef([]);
  const albumRef = useRef([]);

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [BackGround] = useState([
    ['#0272a4', '#f6a564'],
    ['#b6bfc8', '#36595b'],
    ['#e58e82', '#6f569f']
  ]);

  useEffect(() => {
    setTotal(albumRef.current.length);
  }, []);

  const pageChange = () => {
    wrapRef.current.style.background =
      'linear-gradient(120deg,' + BackGround[page][0] + ', ' + BackGround[page][1] + ')';

    for (let i = 0; i < total; i++) {
      if (page === i) {
        //현재 컨텐츠(페이지)
        albumRef.current[i].className = 'album active';
        // pointBtnAll[i].classList.add('active');
      } else {
        albumRef.current[i].className = 'album';
        // pointBtnAll[i].classList.remove('active');
      }
    }
    diskRef.current[page].style.background = BackGround[page][0];
  };

  const prevHandler = () => {
    if (page === 0) {
      setPage((page) => page - 1);
    } else {
      setPage((page) => total - 1);
    }
    pageChange();
  };

  const nextHandler = () => {
    if (page < total - 1) {
      setPage((page) => page + 1);
    } else {
      setPage(0);
    }
    pageChange();
  };

  return (
    <div className="wrap">
      <article ref={wrapRef} className="contentWrap">
        {data.map(({url, image}, idx) => (
          <section key={idx} ref={(el) => (albumRef.current[idx] = el)} className="album">
            <div className="disk">
              <div ref={(el) => (diskRef.current[idx] = el)} className="disk_inner" />
            </div>
            <a href={url} className="coverImg">
              <img src={image} alt="" />
            </a>
          </section>
        ))}
      </article>

      <div className="buttonWrap">
        <button type="button" onClick={prevHandler}>
          PREV
        </button>
        <ul className="pointWrap">
          <li />
          <li />
          <li />
        </ul>
        <button type="button" onClick={nextHandler}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Touch;
