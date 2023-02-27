import styled from 'styled-components';

export const SectionBox = styled.div`
  padding: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;

  text-align: center;
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
