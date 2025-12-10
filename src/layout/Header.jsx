function Header() {
  return (
    <div>
      <nav className="indigo accent-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            React Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="!#">Репо</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
