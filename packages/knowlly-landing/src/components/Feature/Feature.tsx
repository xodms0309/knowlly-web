import React, { useState } from 'react';
import * as Styled from './FeatureStyle';

const Feature = () => {
  const MENU = [
    { id: 1, title: '수강클래스' },
    { id: 2, title: '운영클래스' },
    { id: 3, title: '후기' },
  ];

  const CONTENTS = [
    {
      id: 1,
      src: '/img/player-lecture-phone.png',
      title: '원하는 IT 분야의 1:1 클래스를 탐색하고 수강해 보세요!',
      subtitle: '매칭 과정을 보여줘서 쉽게 진행 상황을 체크할 수 있어요!',
    },
    {
      id: 2,
      src: '/img/coach-lecture-phone.png',
      title: '원하는 플레이어를 수강생으로 받고클래스를 진행해보세요!',
      subtitle: '응답 기한을 바로 확인할 수 있어서 편리해요!',
    },
    {
      id: 3,
      src: '/img/review-phone.png',
      title: '믿을 수 있는 플레이어의 후기로 클래스 검증!',
      subtitle: '수업했던 클래스 수강자의 생생한 후기를 통해 클래스와 코치에 대한 신뢰를 쌓아봐요',
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuClick = (id: number) => {
    setSelectedMenu(id);
  };

  return (
    <Styled.FeatureContainer>
      <Styled.MenuContainer selectedMenu={selectedMenu}>
        {MENU.map((menu) => (
          <Styled.Menu key={menu.id} onClick={() => handleMenuClick(menu.id)}>
            {menu.title}
          </Styled.Menu>
        ))}
      </Styled.MenuContainer>
      <img src={CONTENTS[selectedMenu - 1].src} />
      <span>{CONTENTS[selectedMenu - 1].title}</span>
      <span>{CONTENTS[selectedMenu - 1].subtitle}</span>
    </Styled.FeatureContainer>
  );
};

export default Feature;
