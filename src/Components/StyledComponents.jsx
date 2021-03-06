import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>Styled components</STitle>
      <button>Fight</button>
    </SContainer>
  );
};
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  display: flex;
`;

const STitle = styled.p`
font-weight: bold;
`

//コンポーネント部分はスッキリするのだが、注意点として**後から見たときにスタイルをあてだだけのものなのか、他のコンポーネントからインポートしたものか**がわからなくなってくる場合がある。頭に大文字のSを付与するなど工夫すると良い
