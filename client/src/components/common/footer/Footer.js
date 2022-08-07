import logo from "./logo.png";

import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__first-col">
          <img src={logo} alt="" id="logo" />
          <div className="logo__text">
            <h1 id="logo__title">PhotoFantasy</h1>
            <p className="logo__desc">Create a beatiful story</p>
          </div>
        </div>
        <div className="footer__second-col">
            <span className="title">Links</span>
            <p>Home</p>
            <p>Photos</p>
        </div>
        <div className="footer__third-col">
        <span className="title">Acoount</span>
        <p>Login</p>
        <p>Register</p>
        </div>
        <div className="footer__fourth-col">
            <span className="title">Contacts</span>
            <p><i class="fa-solid fa-location-pin"></i> bul. Bulgaria №20, Asenovgrad, Bulgaria</p>
            <p><i class="fa-solid fa-phone"></i>  0876440300</p>
            
        </div>
      </div>
    </footer>
  );
};
