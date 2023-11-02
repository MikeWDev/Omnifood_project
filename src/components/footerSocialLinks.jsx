const FooterSocials = () => {
  return (
    <>
      {" "}
      <ul className="social-links">
        <li>
          <a className="footer-link" href="#">
            <ion-icon className="social-icon" name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            <ion-icon className="social-icon" name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
      <p className="copyright">
        Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
        All rights reserved.
      </p>
    </>
  );
};

export default FooterSocials;
