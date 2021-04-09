import React, { useCallback, useState } from 'react';
import { Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { CHANGE_CATEGORY_REQUEST } from '../../reducers/organization';

const { Option } = Select;

const OrganizationCategory = ({ item }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const handleChange = useCallback((value) => {
    setCategory(value);
  });

  const onClickButton = useCallback((subDomain, category) => () => {
    return dispatch({
      type: CHANGE_CATEGORY_REQUEST,
      data: { subDomain, category },
    });
  });

  return (
    <div>
      <Select
        defaultValue="그룹변경유형을 선택해주세요"
        onChange={handleChange}
      >
        <Option value="APPROVED_CIRCLE">비인준에서 인준</Option>
        <Option value="NON_APPROVED_CIRCLE">인준그룹에서 비인준</Option>
      </Select>
      <Button type="primary" onClick={onClickButton(item.subDomain, category)}>
        카테고리 변경하기
      </Button>
    </div>
  );
};

export default OrganizationCategory;
