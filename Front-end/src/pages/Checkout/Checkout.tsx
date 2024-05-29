import { Layout } from "../../components";
import {
  CheckoutContainer,
  Section,
  SectionTitle,
  Item,
  Total,
  CheckoutButton
} from './Checkout.style';

export default function Checkout() {
  return (
    <Layout>
      <CheckoutContainer>
        <h1>Checkout</h1>
        <Section>
          <SectionTitle>Resumo do Pedido</SectionTitle>
          <div>
            <SectionTitle>Appetizers</SectionTitle>
            <Item>Nenhum appetizer adicionado.</Item>
          </div>
          <div>
            <SectionTitle>Hamburgers</SectionTitle>
            <Item>Nenhum hamburger adicionado.</Item>
          </div>
        </Section>
        <Section>
          <SectionTitle>Total</SectionTitle>
          <Total>R$0,00</Total>
        </Section>
        <CheckoutButton>Finalizar compra</CheckoutButton>
      </CheckoutContainer>
    </Layout>
  );
}
