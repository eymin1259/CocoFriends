import React, { useState } from 'react';
import SearchTemplete from '../../components/search/SearchTemplete';

const searchRes = [
  {
    userId: 2,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '알렉스',
    sex: '암컷',
    age: '6개월',
    city: '서울특별시',
    disctrict: '광진구',
  },
  {
    userId: 3,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '뽀삐',
    sex: '암컷',
    age: '1살',
    city: '서울특별시',
    disctrict: '강남구',
  },
  {
    userId: 4,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '미미',
    sex: '암컷',
    age: '2살',
    city: '서울특별시',
    disctrict: '광진구',
  },
  {
    userId: 5,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '초롱이',
    sex: '수컷',
    age: '6개월',
    city: '서울특별시',
    disctrict: '광진구',
  },
  {
    userId: 6,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '깜둥이',
    sex: '수컷',
    age: '9개월',
    city: '서울특별시',
    disctrict: '마포구',
  },
  {
    userId: 7,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '깡쥐',
    sex: '암컷',
    age: '1살',
    city: '서울특별시',
    disctrict: '성북구',
  },
  {
    userId: 8,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '마크',
    sex: '수컷',
    age: '4살',
    city: '서울특별시',
    disctrict: '강동구',
  },
  {
    userId: 9,
    profileImg:
      'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    name: '사라',
    sex: '암컷',
    age: '3살',
    city: '서울특별시',
    disctrict: '노원구',
  },
];
const SearchContainer = () => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState(0);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  return <SearchTemplete results={searchRes} />;
};

export default SearchContainer;
