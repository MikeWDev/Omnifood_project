const FooterAdress = () => {
  return (
    <div className="address-col">
      <p className="footer-heading">Contact us</p>
      <address className="contacts">
        <p className="address">
          623 Harrison St., 2nd Floor, San Francisco, CA 94107
        </p>
        <p>
          <a className="footer-link" href="tel:415-201-6370">
            415-201-6370
          </a>
          <br />
          <a className="footer-link" href="mailto:hello@omnifood.com">
            hello@omnifood.com
          </a>
        </p>
      </address>
    </div>
  );
};

export default FooterAdress;
