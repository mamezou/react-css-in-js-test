import { Link, useHistory } from "react-router-dom";

export const About = () => {
  const arr = [...Array(10).keys()];
  console.log(arr)

  const history = useHistory();

  const onClickDetailA = () => history.push("/about/detailA")

  return (
    <>
      <h1>Aboutページです。</h1>
      <p>自己紹介をしよう</p>
      <Link to={{ pathname:"/about/detailA" , state: arr}}>DetailA</Link>
      <Link to="/about/detailB">DetailB</Link>
      <br>
      </br>
      <button onClick={onClickDetailA}>DetailA</button>
    </>
  );
};
