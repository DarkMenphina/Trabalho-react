// src/pages/Checkout.style.js

import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Item = styled.p`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Total = styled.p`
  font-weight: bold;
  font-size: 1.2em;
`;

export const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff6347;
  }
`;
