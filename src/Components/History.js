import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function History() {
  return (
    <>
      <Header />
      <HistoryStyle>
        <h1>Historico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryStyle>
      <Footer />
    </>
  );
}
const HistoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 110px 10px 0 10px;
    background-color: #E5E5E5;
    height: 80vh;
    h1{
        color: #126BA5;
        font-size: 23px;
        margin-bottom:18px;
    }
    p{
        color: #666666;
        font-size: 18px;
    }

`
