//import "./App.css";
import Counter from "./Counter";
import MyHeader from "./MyHeader";
import Container from "./Container";

function App() {
  const props = {
    a: 1,
    b: 2,
    initialValue: 5,
  };
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...props} />
      </div>
    </Container>
  );
}

export default App;
