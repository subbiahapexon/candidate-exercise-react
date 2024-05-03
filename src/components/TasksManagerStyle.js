import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchBox = styled.input`
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  text-indent: 10px;
`;
export const SearchSpan = styled(SearchIcon)`
  position: absolute;
  top: 6px;
  left: auto;
  right: 5px;
`;

export const SearchDiv = styled.div`
  position: relative;
  color: #aaa;
  font-size: 16px;
  display: inline-block;
`;
