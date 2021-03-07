import { useHistory, useLocation } from "react-router-dom"

export const AboutDetailA = () => {
  const state = useLocation();
  console.log(state)

  const history = useHistory();

  const onClickBack = () => history.goBack();
  return (
    <>
      <h1>DetailA</h1>
      <p>自己紹介をしよう</p>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
