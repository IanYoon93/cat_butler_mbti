import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';

import MongguImg from '../assets/monggu2.png';
import { useNavigate } from 'react-router-dom';

function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <>
      <Wrapper>
        <Header>😸 예비 집사 판별기 😸</Header>
        <ContentsWrapper>
          <Title>나에게 맞는 집사는?</Title>
          <LogoImg>
            <Image className="rounded-circle" src={MongguImg} width={350} height={350} />
          </LogoImg>
          <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
          <Desc>내가 집사가 되서 고양이를 키운다면?</Desc>
          <Button className="btn-primary" onClick={handleClickButton} style={{ fontSize: 25, marginTop: 40, marginBottom: 40 }}>
            테스트 시작하기
          </Button>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #cdf5ff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 40px;
  background: #7ac4ff;
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 30px;
`;

const LogoImg = styled.div`
  width: 350px;
  height: 350px;
  margin: 30px 0;
`;

const Desc = styled.div`
  font-size: 20px;
`;
