import React from 'react';

export default function TopNavBar() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div>
      <div class="mb-6 pb-3">
        <nav class="navbar is-white is-fixed-top has-shadow">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="logo.png" />
            </a>
            <a
              onClick={() => {
                setIsActive(!isActive);
              }}
              role="button"
              className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="nav-links"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="nav-links"
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          >
            <div class="navbar-end">
              <a class="navbar-item">My Account</a>
              <a class="navbar-item">Shopping Cart (0)</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
