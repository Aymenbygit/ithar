import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/header_footer/footer/Footer";
import NavBar from "./Components/header_footer/header/NavBar";
import Home from "./Components/home/Home";
import Objectives from "./Components/objectives/Objectives";
import Reports from "./Components/reports/Reports";
import FamilyNotif from "./Components/familyNotifaction/FamilyNotif";
import LoiAssociation from "./Components/loi/LoiAssociation";
import SignIn from "./Components/sign_in/SignIn";
import SignUp from "./Components/sign_up/SignUp";
import AboutUs from "./Components/aboutUs/AboutUs";
import ContactUs from "./Components/contactUs/ContactUs";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/Objectives" component={Objectives} />
        <Route exact path="/Reports" component={Reports} />
        <Route exact path="/FamilyNotif" component={FamilyNotif} />
        <Route exact path="/LoiAssociation" component={LoiAssociation} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
