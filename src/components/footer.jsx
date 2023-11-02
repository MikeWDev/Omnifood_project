import FooterSocials from "./footerSocialLinks";
import { omniLogo } from "../assets/img/imgIndex";
import FooterAdress from "./footerAdresses";
import FooterNav from "./footerNav";
import FooterHelpCntr from "./footerHelpCtr";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img className="logo" alt="Omnifood logo" src={omniLogo} />
            </a>
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
