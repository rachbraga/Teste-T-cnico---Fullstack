import Button from "../../Components/Buttom";
import { Container } from "./style";

const Home = () => {
  function TesteClick() {
    console.log("Teste ao clicar");
  }
  return (
    <>
      <Container>
        <h1>Bem-Vindo!</h1>
        <h3>
          {" "}
          Organize o cadastro de seu cliente e todos os contatos asssociados
          dele.
        </h3>
        <Button onClick={TesteClick}>Começar</Button>
      </Container>
    </>
  );
};

export default Home;
