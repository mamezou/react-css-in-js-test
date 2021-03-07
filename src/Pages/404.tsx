import { Link } from "react-router-dom"

export const Page404 = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>ページが見つかりません</p>
      <Link to="/">トップへ戻る</Link>
    </>
  );
};
