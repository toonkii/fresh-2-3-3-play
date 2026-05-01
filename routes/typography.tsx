import { define } from "../utils.ts";

export default define.page(function TypographyPage(_) {
  return (
    <>
      <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Typography
      </h1>

      <h1 class="text-xl font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Text Sizing
      </h1>      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
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
      <p className="font-sans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique explicabo enim officiis, neque est repellat fugiat esse excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum nemo sint labore accusamus debitis, iure saepe consequuntur rerum corrupti eligendi sit dolores nisi?</p>
      <br/>
      <p className="font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique explicabo enim officiis, neque est repellat fugiat esse excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum nemo sint labore accusamus debitis, iure saepe consequuntur rerum corrupti eligendi sit dolores nisi?</p>
      <br/>
      <p className="font-mono">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique explicabo enim officiis, neque est repellat fugiat esse excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum nemo sint labore accusamus debitis, iure saepe consequuntur rerum corrupti eligendi sit dolores nisi?</p>
      <br/>
      <p className="font-sans font-paci">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique explicabo enim officiis, neque est repellat fugiat esse excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum nemo sint labore accusamus debitis, iure saepe consequuntur rerum corrupti eligendi sit dolores nisi?</p>
      <br/>
      <p className="font-sans font-chewy">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique explicabo enim officiis, neque est repellat fugiat esse excepturi doloremque quibusdam saepe, maiores nostrum vero laudantium cumque sint? Voluptatum esse assumenda ducimus corporis illo sunt eum nemo sint labore accusamus debitis, iure saepe consequuntur rerum corrupti eligendi sit dolores nisi?</p>
    </>
  );
});
