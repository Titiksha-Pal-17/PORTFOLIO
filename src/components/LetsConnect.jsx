import { mySocials } from "../constants";
import TorusScene from "./TorusScene";

const LetsConnect = () => {
  // Contact information
  const contactInfo = {
    name: "Titiksha",
    email: "titikshapal765@gmail.com",
    phone: "+91 7089030319", // Update with actual phone
    location: "Jabalpur Engineering College", // Update with actual location
  };

  // Social links - filter and format
  const socialLinks = [
    { name: "LinkedIn", url: mySocials.find(s => s.name === "Linkedin")?.href || "#", handle: "/ali-sanati" },
    { name: "Instagram", url: mySocials.find(s => s.name === "Instagram")?.href || "#", handle: "@ali.sanatidev" },
    { name: "Behance", url: "#", handle: "/ali-sanati" }, // Placeholder
  ];

  // Icon Components
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );

  const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );

  const GridIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );

  const PinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );

  // Close Icon Component
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <section className="c-space py-20 bg-primary section-spacing">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px border border-white/20 bg-white/20">
        {/* Row 1: LET'S CONNECT Header - Spans all 4 columns */}
        <div className="col-span-1 md:col-span-4 p-6 md:p-8 border-b border-white/20 bg-primary">
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tight text-white leading-none">
            LET'S CONNECT
          </h1>
        </div>

        {/* Row 2: Contact Info - 4 equal columns */}
        {/* NAME */}
        <div className="col-span-1 p-6 md:p-8 border-b border-r border-white/20 bg-primary flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
            <span>NAME</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="flex items-center gap-2 text-white">
            <StarIcon />
            <span className="text-lg md:text-xl font-semibold">{contactInfo.name}</span>
          </div>
        </div>

        {/* EMAIL */}
        <div className="col-span-1 p-6 md:p-8 border-b border-r border-white/20 bg-primary flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
            <span>EMAIL</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="flex items-center gap-2 text-white">
            <LinkIcon />
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-sm md:text-base hover:text-violet-400 transition-colors break-all"
            >
              {contactInfo.email}
            </a>
          </div>
          <p className="text-xs text-zinc-400 mt-2">
            For professional correspondence, kindly reach out via email.
          </p>
        </div>

        {/* PHONE */}
        <div className="col-span-1 p-6 md:p-8 border-b border-r border-white/20 bg-primary flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
            <span>PHONE</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="flex items-center gap-2 text-white">
            <GridIcon />
            <a 
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="text-sm md:text-base hover:text-violet-400 transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
          <p className="text-xs text-zinc-400 mt-2">
            Call availability is minimal; email remains the primary channel.
          </p>
        </div>

        {/* LOCATION */}
        <div className="col-span-1 p-6 md:p-8 border-b border-white/20 bg-primary flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
            <span>LOCATION</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="flex items-start gap-2 text-white">
            <PinIcon />
            <span className="text-sm md:text-base">{contactInfo.location}</span>
          </div>
        </div>

        {/* Row 3: Socials and Recently Added - 2 sections spanning 2 cols each */}
        {/* SOCIALS */}
        <div className="col-span-1 md:col-span-2 p-6 md:p-8 border-r border-white/20 bg-primary flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 mb-6">
            <span>SOCIALS</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="text-xs text-zinc-400 mb-4">JANUARY 2026</div>
          <div className="space-y-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-semibold hover:text-violet-400 transition-colors"
              >
                {social.name.toUpperCase()}: {social.handle}
              </a>
            ))}
          </div>
        </div>

        {/* RECENTLY ADDED */}
        <div className="col-span-1 md:col-span-2 p-6 md:p-8 bg-primary relative flex flex-col min-h-[300px]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 mb-6">
            <span>RECENTLY ADDED</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          
          {/* 3D Scene Container with Overlay */}
          <div className="flex-1 rounded-lg border border-white/10 relative overflow-hidden min-h-[200px]">
            {/* 3D Scene */}
            <TorusScene />
            
            {/* Overlay text positioned absolutely over canvas */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between pointer-events-none">
              <div className="text-xs text-zinc-400">PORTFOLIO: titiksha-pal.dev</div>
              <div className="text-right">
                <p className="text-xs text-zinc-400 mb-1">27 02 2025</p>
                <p className="text-sm md:text-base text-white">
                  <span className="font-serif italic">Leveraging</span>{" "}
                  <span className="font-sans font-bold">Attention</span>{" "}
                  <span className="font-serif italic">Economy</span>
                </p>
                <p className="text-xs text-zinc-400 mt-2">DESIGNED BY TITIKSHA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;

