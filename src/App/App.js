import styles from "./App.module.scss";

import Nav from "../components/Nav/Nav";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <section className={`d-flex flex-column ${styles.appContainer}`}>
      <Nav />
      <Content />
      <Footer author="Alain Guillon" />
    </section>
  );
}

export default App;
