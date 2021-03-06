export const InlineStyle = () =>{
  const containerStyle = {
    border:"solid 2px #392eff",
    borderRadius: "20px",
    padding:"8px",
    display:"flex",
  }


  const titleStyle = {
    margin : 0,
    color:"#3d84a8"
  }

  const buttonStyle = {
    border:"none",
    padding:"8px",
  }

  return(
    <div style={containerStyle}>
      <p style={titleStyle}>InlineStyle</p>
      <button style={buttonStyle}>Fight</button>
    </div>
  )
}