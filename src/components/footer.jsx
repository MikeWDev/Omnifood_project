import FooterSocials from "./footerSocialLinks";
import { omniLogo } from "../assets/img/imgIndex";
import FooterAdress from "./footerAdresses";
import FooterNav from "./footerNav";
import FooterHelpCntr from "./footerHelpCtr";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <Link
              to="hero"
              duration={1000}
              smooth={true}
              className="footer-logo"
            >
              <img className="logo" alt="Omnifood logo" src={omniLogo} />
            </Link>

            <FooterSocials />
          </div>
          <FooterAdress />
          <FooterNav />
          <FooterHelpCntr />
        </div>
      </footer>
    </>
  );
};

export default Footer;
