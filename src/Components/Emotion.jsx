/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from "@emotion/react"
import styled from "@emotion/styled"

export const Emotion = () =>{
  const containerStyle = css`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  display: flex;
  `;
  const titleStyle = css({
    fontWeight:"bold"
  })
  return(
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>Fight</SButton>
    </div>
  )
}

const SButton = styled.button`
background-color:"#fff"

`