import { Link } from "react-router-dom"

export const Service = () => {
  return (
    <>
      <h1>service</h1>
      <p>サービスページだよ</p>
      <Link to="/service/9999999999999">URL Parameter</Link>
      <br></br>
      <Link to="/service/99?name=hogehoge">Query Parameter</Link>
    </>
  );
};
