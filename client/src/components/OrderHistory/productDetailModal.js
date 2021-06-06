import React, { useState, useEffect } from 'react';
import {
  CloseOutlined,
  Col,
  message,
  Typography,
  Modal,
  Button,
  Tag,
} from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectProduct,
  likeProduct,
  showModal,
  addToCart,
} from '../../actions/productsActions';
import { setModal, controlModal } from '../../actions/productsActions';

export default function ProductDetailModal({ productInfo }) {
  const { Title } = Typography;
  const selectedProducts = useSelector(
    (state) => state.selectProductReducer.selectedProducts,
  );
  const likeProducts = useSelector(
    (state) => state.likeProductReducer.likeProducts,
  );
  const modal = useSelector((state) => state.showModalReducer.modal);

  const dispatch = useDispatch();

  const handleClickCart = (e) => {
    e.stopPropagation();
    const addCartProductId = e.currentTarget.getAttribute('asin');
    console.log(addCartProductId);
    dispatch(addToCart(addCartProductId));
    message.success('상품이 선택되었습니다.', 0.5);
  };

  const handleClickLikes = (e) => {
    e.stopPropagation();
    const likeProductId = e.currentTarget.getAttribute('asin');
    console.log(likeProductId);
    dispatch(likeProduct(likeProductId));
    message.success('찜 목록에 저장되었습니다', 0.5);
  };

  return (
    <DetailModal
      title="Details"
      centered
      visible={modal.key > 0}
      onCancel={() => dispatch(showModal(0))}
      width={1200}
      maskStyle={{ background: 'white' }}
      footer={[
        <Button
          id="check-btn"
          type="primary"
          asin={modal.data.id}
          onClick={handleClickCart}
          style={{ marginLeft: 30 }}
        >
          ADD TO CART
        </Button>,
        <PushpinButton
          type="primary"
          asin={modal.data.id}
          onClick={handleClickLikes}
        >
          ADD TO LIKES
        </PushpinButton>,
      ]}
    >
      <ProductDetailDiv>
        <Col span={11}>
          <img
            alt={modal.data.title}
            src={modal.data.image}
            style={{ width: 500, height: 600 }}
          />
        </Col>
        <ProductDescriptionCol span={13}>
          <Title level={2}>{modal.data.title}</Title>
          <Title level={3}>가격: {modal.data.price}</Title>

          <KeywordContainer>
            <KeywordDiv>
              <Title level={3}>긍정 키워드</Title>
              <div>
                <Tag color="green">편함</Tag>
                <Tag color="cyan">깨끗함</Tag>
                <Tag color="blue">가성비</Tag>
                <Tag color="geekblue">빠른건조</Tag>
                <Tag color="purple">무난</Tag>
              </div>
            </KeywordDiv>
            <KeywordDiv>
              <Title level={3}>부정 키워드</Title>
              <div>
                <Tag color="magenta">실밥마감</Tag>
                <Tag color="red">무거움</Tag>
                <Tag color="volcano">애매</Tag>
                <Tag color="orange">목늘어남</Tag>
                <Tag color="gold">비쌈</Tag>
              </div>
            </KeywordDiv>
          </KeywordContainer>
        </ProductDescriptionCol>
      </ProductDetailDiv>
    </DetailModal>
  );
}

const DetailModal = styled(Modal)`
  .ant-modal-content {
    height: 800px;
  }

  .ant-modal-content .ant-modal-footer {
    text-align: left;
    padding-left: 90px;
  }

  .ant-modal-footer .ant-btn {
    width: 150px;
    height: 50px;
  }
`;

const ProductDetailDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ProductDescriptionCol = styled(Col)`
  height: 600px;
`;

const KeywordContainer = styled.div`
  margin-top: 50px;
  border: solid 1px gainsboro;
  padding: 20px;
  margin-right: 10px;
`;

const KeywordDiv = styled.div`
  margin-bottom: 15px;
`;

const PushpinButton = styled(Button)`
  margin-left: 30px;
`;