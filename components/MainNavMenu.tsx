export function MainNavMenu() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">Sidereal 365 Inc</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/landing">Landing</a>
          </li>
          <li>
            <a href="/typography">Typography</a>
          </li>
          <li>
            <a href="/color">Colour</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/blendful">Blendful</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
