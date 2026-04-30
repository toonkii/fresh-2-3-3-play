import { Footer } from "@/components/Footer.tsx";
import { define } from "../utils.ts";

export default define.page(function AboutUsPage(ctx) {
  return (
    <div>
      <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        About Us
      </h1>

      <div class="about-container">
        <div class="about-image">
          <img src="https://res.cloudinary.com/cyber-sea-inc/image/upload/v1731247966/samples/coffee.jpg">
          </img>
        </div>

        <div class="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa
            eaque minus veritatis sed voluptas unde. Expedita ab aliquam minus
            debitis praesentium ex cumque fugit pariatur fuga illo, corrupti
            possimus quasi rem modi voluptate minima, neque sed officiis placeat
            enim provident nobis cum. Reprehenderit sunt asperiores modi nobis
            obcaecati sint!
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus minus, ipsam quasi accusamus provident atque voluptates
            dolore quidem facere dicta cumque veniam culpa eos architecto
            recusandae ex reiciendis necessitatibus dolores, nobis ab?
            Necessitatibus culpa doloremque, eaque voluptatibus dolorum, ipsa
            harum illum magnam cumque eos est nisi amet unde ex excepturi
            voluptates asperiores voluptatum, magni omnis eum ratione illo.
            Incidunt aspernatur quidem exercitationem, officia beatae amet quod
            recusandae rem voluptatibus, odit excepturi quos doloremque
            laboriosam enim. Aperiam ad, sit fugit natus, nulla distinctio
            corporis quia molestias ducimus modi odit eius tempora debitis eum
            cum, dolore delectus iure assumenda tempore doloribus ipsum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nisi
            voluptates doloribus sed earum at porro cupiditate rem deserunt
            veniam architecto recusandae qui itaque provident inventore beatae
            expedita sint, fuga quia officia iusto incidunt illum delectus!
            Similique quae eum quia illum cum. Perspiciatis deserunt minima
            possimus cupiditate at, sint ullam assumenda nisi voluptate cum,
            fugit iure itaque neque odit quasi sapiente enim modi suscipit
            tempore maiores sunt quia libero quae et? Quas aperiam fugiat eaque
            facere dolor mollitia modi nihil cum, optio placeat perspiciatis
            ipsam doloremque amet nemo architecto. Eos, assumenda facere! Quis
            sapiente minima porro molestias doloribus deleniti vel? Placeat
            distinctio perspiciatis exercitationem molestias officiis mollitia
            minus quam reiciendis iste vero dolorem cumque quo, repudiandae
            incidunt magni vitae illum cum debitis id ipsum aperiam illo
            suscipit qui! Voluptatem molestiae ducimus neque quia eligendi
            deserunt?
          </p>
        </div>
      </div>

      <div>
        <button class="btn btn-primary m-4" onclick="my_modal_1.showModal()">
          open modal
        </button>

        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <Footer />
    </div>
  );
});
