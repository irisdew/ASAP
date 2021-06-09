import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Header from '../Header';
import UserInfo from './UserInfo';
import DeliveryInfo from './DelivaryInfo';
import Keywords from './Keywords';
import OrderHistory from './OrderHistory';
import LikedItems from './LikedItems';

export default function Mypage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Header type="logo" />
      <Container>
        <UserInfo user={user} />
        <DeliveryInfo user={user} />
        <Keywords />
        <OrderHistory />
        <LikedItems />
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  width: 70vw;
  height: 75rem;
  margin: 14rem auto 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'userInfo keyword liked'
    'deliveryInfo history liked';
  grid-gap: 2rem;
`;
