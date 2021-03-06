export const StyledJsx = () =>{
  return(
    <>
    <div className="container">
      <p className="title">Styled JSX</p>
      <button>Fight</button>
    </div>
    <style jsx="true">{`
    .container{
      border: solid 2px #392eff;
      border-radius: 20px;
      padding: 8px;
      display: flex;
    }
    .title{
      font-weight: bold;
    }
    // 擬似要素使えなーい
    `}</style>
    </>
  )
}