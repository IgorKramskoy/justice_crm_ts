import { Box, css, styled } from '@mui/material';

export const StylesBox = styled(Box)`
  ${(props) => {
    switch (props.mode) {
      case 'image':
        return css`
          width: 24px;
          height: 24px;
        `;
      case 'text':
        return css`
          align-items: center;
          font-size: 14px;
        `;
      default :
        return css`
          display: flex;
          gap: 10px;
          align-items: center;
          padding: 10px;
        `;
    }
  }}
`;
