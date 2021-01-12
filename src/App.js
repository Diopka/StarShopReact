import { BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from "react-bootstrap";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faStar, faStarHalf, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./views/Home";
import ProductDetails from './views/ProductDetails'
library.add(fab, faShoppingCart, faStar, faStarHalf, faStarHalfAlt, faStarRegular);

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={Home} exact/>
            <Route path="/product/:id"  component={ProductDetails} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
