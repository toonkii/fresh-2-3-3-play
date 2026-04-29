// import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Hero } from "../components/Hero.tsx";
import { FrontMatter } from "../components/Frontmatter.tsx";

export default define.page(function Home(ctx) {
  console.log("ctx", ctx.state);

  return (
    <div class="grid-container p-10">
      <header class="grid-header">
        <Hero />
      </header>

      <aside class="grid-sidebar ps-5">
        <h5>left sidebar</h5>
        <p>Menu goes here</p>
        {/* <ProductMenu menu="Map" path="/map"></ProductMenu> */}
      </aside>

      <main class="grid-content">
        <FrontMatter></FrontMatter>
      </main>

      <aside class="grid-panel ps-5 pe-5">
        <h5>right sidebar</h5>

        <article>
          <h6>Cats</h6>
          <img src="/img/pexels-cats.jpg"></img>
        </article>

        <article>
          <h6>Card</h6>
          <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus
          cupiditate dolores ducimus atque asperiores molestias id, distinctio
          blanditiis doloribus neque provident numquam a quasi rem quod
          voluptates! Totam, culpa!</p>
        </article>
      </aside>

      <footer class="grid-footer">
        <h5>footer</h5>
        <div class="grid">
          <div></div>
          <div>
            <p>One</p>
            <p>One</p>
          </div>
          <div>Two</div>
          <div>Three</div>
          <div>
            <a href="/about">about</a>
          </div>
          <div>
            <a href="https://fresh.deno.dev">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge-dark.svg"
                alt="Made with Fresh"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
});
