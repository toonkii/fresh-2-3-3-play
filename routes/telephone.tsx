import { define } from "../utils.ts";

export default define.page(function TelephonePage(_) {
  return (
    <>
      <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Telephony Services
      </h1>

      <section class="mt-6 px-4 md:px-8">
        <div class="grid items-center gap-12 max-w-2xl mx-auto lg:grid-cols-2 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
              Discover the Future of Telephony
            </h2>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              Voip stands for Voice over Internet Protocol. In simple terms, it
              is a technology that allows you to make voice calls over a
              broadband internet connection instead of a traditional, analog
              phone line.

              If you have ever used Skype, WhatsApp calling, Zoom, or FaceTime,
              you have used VoIP.
            </p>

            <h3 class="text-2xl font-bold mb-6 text-slate-900 md:text-3xl">
              How VoIP Works
            </h3>

            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              Traditional phones use Circuit Switching, which opens a dedicated
              physical wire connection between two callers. VoIP uses Packet
              Switching. Here is the step-by-step breakdown of how a VoIP call
              happens in real-time:

              <ol class="list-disc list-outside pl-5">
                <li>
                  Conversion (Analog to Digital): When you speak into a
                  microphone or VoIP phone, your analog voice signal is
                  converted into digital data (0s and 1s) using a device called
                  a codec.
                </li>
                <li>
                  Packetization: This digital data is chopped up into tiny,
                  organized blocks called data packets. Each packet contains a
                  piece of your voice, an IP address for where it is going, and
                  an IP address for where it came from.
                </li>
                <li>
                  Transmission: The packets travel over the internet, routed
                  across various paths to reach the destination as fast as
                  possible.
                </li>
                <li>
                  Reassembly & Decoding: Once the packets reach the receiver's
                  end, they are put back in the correct order. The digital data
                  is converted back into an analog audio signal so the other
                  person hears your voice.
                </li>
              </ol>
            </p>

            <h3 class="text-2xl font-bold py-6 mb-6 text-slate-900 md:text-3xl">
              Types of VoIP Setups
            </h3>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              While VoIP has largely replaced traditional phone lines in the
              business world, it has its pros and cons.
            </p>

            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
          </div>
          <div class="w-full aspect-20/11 -order-1 lg:order-0">
            <img
              src="https://readymadeui.com/images/kpis-dashboard-img.webp"
              alt="kpis dashboard"
              class="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
});
