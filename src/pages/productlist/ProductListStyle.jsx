import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;
const Option = styled.option``;

export {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
};