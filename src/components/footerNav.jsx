const FooterNav = () => {
  return (
    <nav className="nav-col">
      <p className="footer-heading">Account</p>
      <ul className="footer-nav">
        <li>
          <a className="footer-link" href="#">
            Create account
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            Sign in
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            iOS app
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            Android app
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
