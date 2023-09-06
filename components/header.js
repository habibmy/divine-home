class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <!-- Navbar -->
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <!-- <a class="btn btn-ghost normal-case text-xl">daisyUI</a> -->
        <a href="/">
          <img src="./assets/logo.png" alt="logo" class="lg:h-16" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Conatct Us</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn" href="https://api.whatsapp.com/send/?phone=919279544276&text&type=phone_number&app_absent=0">Get started</a>
      </div>
    </div>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
