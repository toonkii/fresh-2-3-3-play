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
              Discover the Future of IP Telephony
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

            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
          </div>
          <div class="w-full aspect-20/18 -order-1 lg:order-0">
            <img
              src="\img\pexels-cottonbro-9068371.jpg"
              alt="man on phone"
              class="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      <section class="mt-6 px-4 md:px-8">
        <div class="grid items-center gap-12 max-w-2xl mx-auto lg:grid-cols-2 lg:max-w-7xl">
          <div class="w-full aspect-20/11 -order-1 lg:order-0">
            <img
              src="https://readymadeui.com/images/kpis-dashboard-img.webp"
              alt="kpis dashboard"
              class="rounded-lg object-contain w-full h-full"
            />
          </div>

          <div>
            <h3 class="text-2xl font-bold py-5 mb-4 text-slate-900 md:text-3xl">
              Types of VoIP Setups
            </h3>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              Depending on your needs, VoIP can be utilized through a few
              different setups:

              <ol class="list-disc list-outside pl-5">
                <li>
                  ATA (Analog Telephone Adapter): A device that allows you to
                  plug a standard, traditional landline phone into your internet
                  router so it can function as a VoIP phone.
                </li>
                <li>
                  IP Phones: These look exactly like standard office phones but
                  connect directly to your internet router via Ethernet or Wi-Fi
                  instead of a phone jack. They have all the hardware built-in
                  to handle digital data.
                </li>
                <li>
                  Computer-to-Computer (or App-to-App): This requires no
                  traditional phone hardware at all. You just need a device
                  (laptop, smartphone, tablet), an internet connection, a
                  microphone/speaker, and software (like Microsoft Teams or
                  Google Meet).
                </li>
              </ol>
            </p>

            <p class="mb-4 text-base text-slate-900 leading-relaxed">
            </p>
          </div>
        </div>
      </section>

      <section class="mt-6 px-4 md:px-8">
        <div class="grid items-center gap-12 max-w-2xl mx-auto lg:grid-cols-2 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
              Advantages vs. Disadvantages
            </h2>
            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              While VoIP has largely replaced traditional phone lines in the
              business world, it has its pros and cons.
            </p>

            <h3 class="text-2xl font-bold mb-6 text-slate-900 md:text-3xl">
              The Benefits
            </h3>

            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              <ol class="list-disc list-outside pl-5">
                <li>
                  Massive Cost Savings: Long-distance and international calls
                  are significantly cheaper (or free) because the data travels
                  over the internet rather than expensive telecommunication
                  lines.
                </li>
                <li>
                  Mobility: You can use your business phone number from anywhere
                  in the world, as long as you have an internet connection.
                </li>
                <li>
                  Advanced Features: Most VoIP services include features like
                  voicemail-to-text, video conferencing, auto-attendants, and
                  call routing at no extra cost.
                </li>
              </ol>
            </p>

            <h3 class="text-2xl font-bold mb-6 text-slate-900 md:text-3xl">
              The Drawbacks
            </h3>

            <p class="mb-4 text-base text-slate-900 leading-relaxed">
              <ol class="list-disc list-outside pl-5">
                <li>
                  Reliable Internet is Required: If your Wi-Fi or internet goes
                  down, your phone system goes down.
                </li>
                <li>
                  Bandwidth Dependent: If your internet connection is slow or
                  heavily congested, you might experience latency (delay),
                  jitter (choppy audio), or dropped calls.
                </li>
                <li>
                  Emergency Services (911) Limitations: Because VoIP addresses
                  are tied to IP addresses rather than a physical location,
                  emergency services can struggle to pinpoint exactly where a
                  VoIP call is coming from unless "Enhanced 911" (E911) is
                  properly configured.
                </li>
              </ol>
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
