import React from 'react';
import styled from 'styled-components';
import TextInputSearch from './TextInputSearch';
import SelectSearch from './SelectSearch';

const StyledSearchConditionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const SearchConditionBox = () => {
  const citydata = ['서울특별시', '수원시', '성남시', '과천시'];
  const districtdata = ['노원구', '강남구', '광진구'];

  return (
    <StyledSearchConditionBox>
      <TextInputSearch />
      <SelectSearch category="성별" options={['수컷', '암컷']} />
      <SelectSearch category="시" options={citydata} />
      <SelectSearch category="구" options={districtdata} />
    </StyledSearchConditionBox>
  );
};

export default SearchConditionBox;
