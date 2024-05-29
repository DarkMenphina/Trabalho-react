import { useContext } from "react";
import OrderContext from "../../context/OrderContext";
import { ShoppingCartElement, divHamburger, footer } from "./ShoppingCart.style";
import { priceFormat } from "../../helpers/priceFormat";
import { useNavigate } from "react-router-dom";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { hamburgerOrder, appettizerOrder, order, setOrder } =
    useContext(OrderContext);
    const navigate = useNavigate();
  return (
    <ShoppingCartElement open={isOpen}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>Carrinho de compras</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </div>
      <div>
        {appettizerOrder.map((appettizer, index) => (
          <p key={index}>
            {appettizer.name} - {appettizer.size}{" "}
            {priceFormat(appettizer.value)}
          </p>
        ))}
      </div>
      <div>
        {hamburgerOrder.map((hamburger, index) => (
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={divHamburger}>
              <img src={hamburger.image} alt="" width={100} height={90}/>
              <p key={index}>
                {hamburger.name} {priceFormat(hamburger.value)}
              </p>
            </div>
            <svg
               onClick={() => {
                console.log(hamburgerOrder)
                hamburgerOrder= hamburgerOrder.splice(index, 1);
                console.log(index)
               }}
              xmlns="http://www.w3.org/2000/svg" style={{color: "red", width: "20px", cursor: "pointer"}} fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </div>
        ))}
      </div>
      <div style={footer}>
        <p>Total: {priceFormat(order.totalValue)}</p>
        <button class="AMwOD" onClick={() => navigate("/checkout")}>Finalizar compra</button>
      </div>

    
        
    </ShoppingCartElement>
  );
};
