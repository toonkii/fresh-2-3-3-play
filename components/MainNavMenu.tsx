export function MainNavMenu() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Sidereal 365</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
