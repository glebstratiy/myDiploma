import s from './Home.module.css';

const Home = () => {
  
  return (
    <div className={s.content}>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/JHehJsAGNtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default Home;
