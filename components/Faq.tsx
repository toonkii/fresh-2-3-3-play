export function Faq() {
  return (
    <>
      <section class="mt-16 px-4 md:px-8 md:mt-28">
        <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 class="text-slate-900 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
            open
          >
            <summary class="collapse-title font-semibold">
              What is the difference between the Internet and the World Wide Web
              (WWW)?
            </summary>
            <div class="collapse-content text-sm">
              While often used interchangeably, they are entirely different
              things:
              <ol class="list-disc list-outside pl-5">
                <li>
                  The Internet is the physical network of networks. It is the
                  global infrastructure of cables, routers, data centers, and
                  satellites that connects computers worldwide.
                </li>
                <li>
                  The World Wide Web is a collection of information (web pages,
                  videos, documents) that is accessed over that physical
                  internet infrastructure using the HTTP/HTTPS protocols.
                </li>
                <li>
                  Analogy: The Internet is the highway system; the World Wide
                  Web is the traffic driving on it.
                </li>
              </ol>
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is an IP address, and how do IPv4 and IPv6 differ?
            </summary>
            <div class="collapse-content text-sm">
              An IP (Internet Protocol) address is a unique numerical label
              assigned to every device connected to a computer network, serving
              as its digital mailbox address.
              <ol class="list-disc list-outside pl-5">
                <li>
                  IPv4: Uses a 32-bit numeric format (e.g., 192.168.1.1). It
                  allows for about 4.3 billion unique addresses, which the world
                  has completely run out of due to the explosion of smartphones
                  and smart devices.
                </li>
                <li>
                  IPv6: Uses a 128-bit alphanumeric format (e.g.,
                  2001:db8::ff00:42:8329). It allows for a virtually infinite
                  number of addresses ($3.4 \times 10^{38}$), ensuring every
                  device on earth can have its own unique IP for the foreseeable
                  future.
                </li>
              </ol>
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is the OSI Model, and why is it important?
            </summary>
            <div class="collapse-content text-sm">
              The OSI (Open Systems Interconnection) Model is a conceptual
              framework that standardizes how data is transmitted across a
              network by breaking the process down into 7 distinct layers. It
              helps network engineers troubleshoot problems by isolating exactly
              where a failure is occurring (e.g., a broken cable is a Layer 1
              issue, while a bad IP configuration is a Layer 3 issue).

              The seven layers, from top to bottom, are:

              <ol class="list-decimal list-inside pl-5">
                <li class="pt-5">
                  Application: Where user interaction happens (HTTP, FTP, SMTP).
                </li>
                <li class="pt-5">
                  Presentation: Data formatting, encryption, and compression
                  (SSL/TLS, JPEG).
                </li>
                <li class="pt-5">
                  Session: Managing connections between applications.
                </li>
                <li class="pt-5">
                  Transport: Reliable data transmission and error checking (TCP,
                  UDP).
                </li>
                <li class="pt-5">
                  Network: Routing data packets based on IP addresses.
                </li>
                <li class="pt-5">
                  Data Link: Physical addressing and framing (MAC addresses,
                  Ethernet switches).
                </li>
                <li class="pt-5">
                  Physical: The literal transmission of raw bitstreams over
                  cables or radio waves.
                </li>
              </ol>
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is the difference between a Hub, a Switch, and a Router?
            </summary>
            <div class="collapse-content text-sm">
              These devices handle network traffic differently based on how
              intelligent they are:
              <ol class="list-disc list-outside pl-5">
                <li>
                  Hub (Layer 1): A basic device that receives data on one port
                  and blindly broadcasts it to all other ports. It is highly
                  inefficient and rarely used today.
                </li>
                <li>
                  Switch (Layer 2): A smart device that connects multiple
                  computers within the same local network (LAN). It learns the
                  unique MAC addresses of connected devices and forwards data
                  only to the specific device it was intended for.
                </li>
                <li>
                  Router (Layer 3): The smartest of the three. A router connects
                  entirely different networks together—specifically, it connects
                  your local home or office network to the public Internet.
                </li>
              </ol>
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is a MAC address, and how is it different from an IP address?
            </summary>
            <div class="collapse-content text-sm">
              <ol class="list-disc list-outside pl-5">
                <li>
                  MAC Address (Media Access Control): A permanent, physical
                  hardware address burned into your device’s network card at the
                  factory. It never changes, no matter where you take the
                  device.
                </li>
                <li>
                  IP Address: A temporary, logical address assigned by the
                  network you are currently connected to.
                </li>
                <li>
                  Analogy: Your MAC address is your fingerprint (unique to you
                  forever), while your IP address is your physical mailing
                  address (changes whenever you move).
                </li>
              </ol>
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is the difference between TCP and UDP?
            </summary>
            <div class="collapse-content text-sm">
              Both are Transport Layer protocols used to send data packets, but
              they have opposite priorities:
              <ol class="list-disc list-outside pl-5">
                <li>
                  TCP (Transmission Control Protocol): Prioritizes reliability.
                  It establishes a formal connection between devices, numbers
                  the data packets, and checks to ensure everything arrives
                  intact and in order. If a packet is dropped, it requests a
                  retransmission. (Used for web browsing, emails, file
                  downloads).
                </li>
                <li>
                  UDP (User Datagram Protocol): Prioritizes speed. It sends
                  packets continuously without checking if they arrive or if
                  they are in order. (Used for live video streaming, online
                  gaming, and VoIP calls, where a brief glitch is better than a
                  massive delay).
                </li>
              </ol>
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What does a DHCP server do?
            </summary>
            <div class="collapse-content text-sm">
              DHCP (Dynamic Host Configuration Protocol) automatically assigns
              IP addresses, subnet masks, and gateway information to devices
              when they connect to a network. Without DHCP, you would have to
              manually type in network configurations every single time you
              connected your phone to a new Wi-Fi network.{" "}
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is a Firewall?
            </summary>
            <div class="collapse-content text-sm">
              A firewall is a network security device that monitors and filters
              incoming and outgoing network traffic based on an established set
              of security rules. It acts as a barrier between a trusted internal
              network (like your home Wi-Fi) and an untrusted external network
              (the Internet), blocking unauthorized access and malicious
              traffic.
            </div>
          </details>

          <details
            class="collapse bg-base-100 border border-base-300"
            name="my-accordion-det-1"
          >
            <summary class="collapse-title font-semibold">
              What is a VPN?
            </summary>
            <div class="collapse-content text-sm">
              A VPN (Virtual Private Network) creates a secure, encrypted
              connection (often called a tunnel) over a less secure network,
              such as the public internet. It scrambles your data so that
              internet service providers, hackers, or government entities cannot
              read your traffic or see your actual physical location.
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
