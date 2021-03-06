import classes from "./CssModules.module.scss"

export const CssModules = () =>{
  return(
    <div className={classes.container}>
      <p className={classes.title}>InlineStyle</p>
      <button>Fight</button>
    </div>
  )
}