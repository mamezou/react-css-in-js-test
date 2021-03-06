import { CssModules } from "../Components/CssModules";
import { Emotion } from "../Components/Emotion";
import { InlineStyle } from "../Components/InlineStyle";
import { StyledComponents } from "../Components/StyledComponents";
import { StyledJsx } from "../Components/StyledJsx";

export const Top = () => {
  return(
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  )
};
