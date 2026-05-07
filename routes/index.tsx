// import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Hero } from "@/components/Hero.tsx";
import { FrontMatter } from "@/components/Frontmatter.tsx";
import { Footer } from "@/components/Footer.tsx";

export default define.page(async function Home(ctx) {
  // console.log("ctx", ctx.state);
  const cat: Response = await fetch("https://api.ai-cats.net/v1/cat");

  return (
    <div class="grid-container">
      <header class="grid-header">
        <Hero />
      </header>

      <aside class="grid-sidebar ps-5">
        <h5 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
          left sidebar
        </h5>
        <p>Menu goes here</p>
        {/* <ProductMenu menu="Map" path="/map"></ProductMenu> */}
      </aside>

      <main class="grid-content">
        <FrontMatter></FrontMatter>
      </main>

      <aside class="grid-panel ps-5 pe-5">
        <h5 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
          right sidebar
        </h5>

        <article>
          <h6>Cats</h6>
          {/* <img src="/img/pexels-cats.jpg"></img> */}
          <img class="size-90" src={cat.url}></img>
        </article>

        <article>
          <h6>Card</h6>
          <p class="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            minus cupiditate dolores ducimus atque asperiores molestias id,
            distinctio blanditiis doloribus neque provident numquam a quasi rem
            quod voluptates! Totam, culpa!
          </p>
        </article>
      </aside>

      <Footer />
    </div>
  );
});
