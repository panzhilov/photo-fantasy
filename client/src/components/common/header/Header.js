import "./header.css";
import logo from "./images/logo.png";

export const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img id="logo-img" src={logo} alt="" />
          <div className="logo__text">
            <h1 id="logo__title">PhotoFantasy</h1>
            <p className="logo__desc">Create a beatiful story</p>
          </div>
        </div>

        <div className="navigation">
          <ul className="menu" role="list">
            <li className="menu__item">Home</li>
            <li className="menu__item">Photos</li>
            <li className="menu__item">Categories</li>
          </ul>
        </div>

        <div className="navigation-btns">
          <div className="login-btn">
            <i className="fa-solid fa-arrow-right-to-bracket login-icon"></i>
            <button id="login">Login</button>
          </div>
          <div className="get-started-btn">
            <button id="get-started">Get started</button>
          </div>
        </div>
      </header>
    </>
  );
};
