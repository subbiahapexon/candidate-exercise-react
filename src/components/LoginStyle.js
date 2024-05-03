import styled from "styled-components";
import { Box } from "@mui/material";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
  @media (max-width: 768px) {
    margin: 50px;
  }
`;

export const BoxStyled = styled(Box)`
  margin-bottom: 20px;
`;

export const BtnBox = styled(Box)`
  justify-content: space-between;
  display: flex;
`;
