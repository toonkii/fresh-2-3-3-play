import { define } from "../utils.ts";

export default define.page(function TypographyPage(_) {
  return (
    <>
      <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Typography
      </h1>

      <h1 class="text-xl font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Text Sizing
      </h1>{" "}
      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
      <div className="text-sm">Lorem ipsum dolor sit amet.</div>
      <div className="text-base">Lorem ipsum dolor sit amet.</div>
      <div className="text-lg">Lorem ipsum dolor sit amet.</div>
      <div className="text-xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-2xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-3xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-4xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-5xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-6xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-7xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-8xl">Lorem ipsum dolor sit amet.</div>
      <div className="text-9xl">Lorem ipsum dolor sit amet.</div>

      <h1 class="text-xl font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Fonts
      </h1>
      <p className="font-sans">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        similique explicabo enim officiis, neque est repellat fugiat esse
        excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium
        cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum
        nemo sint labore accusamus debitis, iure saepe consequuntur rerum
        corrupti eligendi sit dolores nisi?
      </p>
      <br />
      <p className="font-serif">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        similique explicabo enim officiis, neque est repellat fugiat esse
        excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium
        cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum
        nemo sint labore accusamus debitis, iure saepe consequuntur rerum
        corrupti eligendi sit dolores nisi?
      </p>
      <br />
      <p className="font-mono">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        similique explicabo enim officiis, neque est repellat fugiat esse
        excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium
        cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum
        nemo sint labore accusamus debitis, iure saepe consequuntur rerum
        corrupti eligendi sit dolores nisi?
      </p>
      <br />
      <p className="font-sans font-paci">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        similique explicabo enim officiis, neque est repellat fugiat esse
        excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium
        cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum
        nemo sint labore accusamus debitis, iure saepe consequuntur rerum
        corrupti eligendi sit dolores nisi?
      </p>
      <br />
      <p className="font-sans font-chewy">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        similique explicabo enim officiis, neque est repellat fugiat esse
        excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium
        cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum
        nemo sint labore accusamus debitis, iure saepe consequuntur rerum
        corrupti eligendi sit dolores nisi?
      </p>

      {
        /*
TEXT CASE
normal-case, uppercase, lowercase, capitalize
        */
      }
      <div class="text-2xl font-bold">Text Alignment</div>
      <div class="normal-case">Lorem ipsum dolor sit amet.</div>
      <div class="uppercase">Lorem ipsum dolor sit amet.</div>
      <div class="lowercase">Lorem ipsum dolor sit amet.</div>

      {/* font-bold, italics */}
      <div class="font-bold">Lorem ipsum dolor sit amet.</div>
      <div class="font-semibold">Lorem ipsum dolor sit amet.</div>
      <div class="italic">Lorem ipsum dolor sit amet.</div>
      <div class="italic font-bold text-2xl">Lorem ipsum dolor sit amet.</div>
      <br />

      {/* <!-- TEXT DECORATION--> */}
      <div class="font-bold text-2xl">Text Decoration</div>
      {/* <!--underline, overline, line-through--> */}
      <div class="text-xl underline">Lorem, ipsum dolor.</div>
      <div class="text-xl line-through">Lorem, ipsum dolor.</div>
      <div class="text-xl overline">Lorem, ipsum dolor.</div>
      <br />

      <div class="text-2xl underline decoration-red-500">
        Lorem, ipsum dolor.
      </div>

      {
        /* <!-- Decoration Style -->
<!--  solid, double, dotted, dashed. wavy --> */
      }
      <div class="text-2xl underline decoration-double">
        Lorem, ipsum dolor.
      </div>
      <div class="text-2xl underline decoration-dotted">
        Lorem, ipsum dolor.
      </div>

      {
        /* <!-- Decoration Thickness-->
<!--  auto/ from-font/[0,1,2,4,8] --> */
      }
      <div class="text-2xl underline decoration-4 decoration-blue-400">
        Lorem, ipsum dolor.
      </div>

      {/* <div class="text-3xl font-bold underline">Borders :<span class="text-lg">(border, outline,ring, divide)</div> */}
      {/* <!--border-[x,y,s,e,t,b,l,r]-[0,1,2,4,8,] --> */}

      <div class="text-3xl border-8 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div class="text-2xl outline ">Lorem ipsum dolor sit amet.</div>
      {/* <!--Border types = [border, outline, ring, divide], Effects=[width,style,color]--> */}

      {
        /* <!-- Line Width -->
   <!-- border|outline|ring|divide-[x,y,s,e,t,b,l,r]- [0,1,2,4,8,] --> */
      }
      <div class="text-2xl border-4 m-4 p-3">
        Border- Lorem ipsum dolor sit amet.
      </div>
      <div class="text-2xl outline outline-4 m-4 p-3">
        Outline- Lorem ipsum dolor sit amet.
      </div>
      <div class="text-2xl   ring-4 m-4 p-3">
        Ring- Lorem ipsum dolor sit amet.
      </div>

      {/* <!-- Divide --> */}
      <ul class="divide-y-8">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>

      <p class="divide-x-4">
        <span class="ml-5 pl-5">item 1</span>
        <span class="ml-5 pl-5">item 2</span>
        <span class="ml-5 pl-5">item 3</span>
        <span class="ml-5 pl-5">item 4</span>
      </p>
    </>
  );
});
