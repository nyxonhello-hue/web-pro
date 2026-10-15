/**
 * Visual portfolio pieces (design work, not software). Kept separate from content.ts so the software
 * projects stay untouched. Nothing here is a software product, and there is no live URL.
 */

export const posterProject = {
  title: "NYXON Tech Services",
  subtitle: "IT Support & Promotional Design",
  category: "IT Services Branding & Promotional Design",
  badge: "Design piece",
  note: "A visual portfolio piece: a promotional poster, not a website, app or software product.",
  summary:
    "Created a promotional advertisement for NYXON Tech Services showcasing computer repair, Windows installation, password recovery, software installation, driver installation, and data recovery services. The design uses a bold blue-and-black technology aesthetic, clear service listings, and prominent contact information to communicate the brand's offerings.",
  skills: [
    "Graphic Design",
    "Visual Branding",
    "Promotional Design",
    "IT Services Marketing",
    "Typography and Layout",
  ],
  image: {
    src: "/images/nyxon-tech-services/nyxon-tech-services.jpg",
    width: 720,
    height: 1080,
    alt: "NYXON Tech Services promotional poster in blue and black. The headline reads 'We fix. You win.' beside a list of eight IT services, a student discount badge, and WhatsApp contact details at the bottom.",
  },
  overview:
    "NYXON Tech Services is an IT services brand promoting computer repair, software installation, Windows setup, data recovery, and general technical support. This project is the promotional poster created for the brand.",
  goals: [
    "Communicate the full range of services clearly, with an easy-to-scan service list.",
    "Give the brand a bold, technology-focused look built on blue and black.",
    "Make the contact information prominent so a viewer knows how to get in touch.",
  ],
  // As listed on the poster itself.
  services: [
    "Laptop & Desktop Repair",
    "Windows Installation & Setup",
    "Windows Password Recovery",
    "Locked PC Access Assistance",
    "Software Installation",
    "Drivers Installation",
    "Data Recovery",
    "Basic Computer Diagnosis",
  ],
  // Written from what is visible on the poster. Edit to match your own reasoning.
  decisions: [
    {
      title: "Blue-and-black palette",
      text: "Deep navy and black backgrounds with electric-blue highlights give the poster a technology feel, and keep the white text high-contrast and easy to read.",
    },
    {
      title: "A sparing warm accent",
      text: "Yellow appears only on the call-to-action tab, the student-discount badge and the closing tagline, so the key actions stand out against the blue.",
    },
    {
      title: "Typography",
      text: "A heavy uppercase sans-serif headline, 'We fix. You win.', with the second line in blue for emphasis, set over lighter supporting text.",
    },
    {
      title: "Layout",
      text: "Brand and three-point promise at the top, then the headline, with the services panel on the left beside a portrait on the right, and a contact strip across the bottom.",
    },
    {
      title: "Service icons",
      text: "Each service has its own circular line icon, which makes the list quick to scan.",
    },
  ],
};
