import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};
export const ChildArea = memo((props) => {
  const { open,onClickClose} = props;

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
  /**
   * 親要素のコード
   * 
   * 
import { useCallback, useState,useMemo } from "react";
import { ChildArea } from "../Components/ChildArea";

export const TOP = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);


  const onChangeText = (e) =>{
    setText(e.target.value);
  }

  const onClickOpen = () =>{
    setOpen(!open)
  }

  const onClickClose = useCallback(() =>{
// useCallback
    setOpen(false)
  },[setOpen])

  return (
    <>
      <h1>TOPページ</h1>
      <input type="text" value={text} onChange={onChangeText}/>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </>
  );
};
   * 
   * 
   */
});
