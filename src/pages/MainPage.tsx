import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import MongguImg from '../assets/monggu.png';
import { useNavigate } from 'react-router-dom';

function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <>
      <Wrapper>
        <Header>헤더</Header>
        <Title>나에게 맞는 집사는?</Title>
        <LogoImg>
          <img src={MongguImg} width={350} height={350} />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
        <Desc>내가 집사가 되서 고양이를 키운다면?</Desc>
        <Button className="btn-danger" onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Wrapper>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
`;

const Header = styled.div`
  font-size: 50px;
  color: red;
`;

const Title = styled.div`
  font-size: 50px;
  color: red;
`;

const LogoImg = styled.div``;
const Desc = styled.div`
  font-size: 50px;
  color: red;
`;
