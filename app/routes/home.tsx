import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Turbo Uniforms" },
    { name: "description", content: "Welcome to Turbo Uniforms!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5 md:px-10 ">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold">Turbo</span>
          <span className="text-sm text-slate">Uniform Center</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#shop" className="hover:text-maroon">
            Shop
          </a>
          <a href="#sizing" className="hover:text-maroon">
            Sizing guide
          </a>
          <a href="#bulk" className="hover:text-maroon">
            categories
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-slate sm:inline">
            0712 345 678
          </span>
          <a
            href="#shop"
            className="rounded-sm bg-maroon px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
          >
            contact us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 md:px-10">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Term uniforms, sorted before the bell rings.
          </h1>
          <p className="mt-5 max-w-md text-slate">
            Full sets for every school, sized right the first time. Bring your
            child's current uniform or school size chart and we'll fit them on
            the spot.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="rounded-sm bg-maroon px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink"
            >
              Browse the shop
            </a>
            <a
              href="#sizing"
              className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Download size chart
            </a>
          </div>
        </div>

        <div className="border border-ink/15 bg-white">
          <div className="border-b border-ink/15 px-6 py-4">
            {/* <p className="font-display text-lg font-semibold">
              This term's list
            </p> */}
            <p className="text-sm text-slate">Standard primary set</p>
          </div>
          <ul className="divide-y divide-ink/10">
            {checklist.map((row) => (
              <li
                key={row.item}
                className="flex items-center justify-between px-6 py-3 text-sm"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="h-4 w-4 border border-ink/30"
                    aria-hidden="true"
                  />
                  {row.item}
                </span>
                <span className="text-slate">{row.qty}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section
        id="shop"
        className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold">
            Shop by category
          </h2>
          <ul className="mt-8 divide-y divide-ink/10">
            {categories.map((cat) => (
              <li
                key={cat.name}
                className="flex flex-col justify-between gap-2 py-6 md:flex-row md:items-center md:gap-6"
              >
                <div>
                  <p className="font-display text-xl font-semibold">
                    {cat.name}
                  </p>
                  <p className="mt-1 max-w-md text-sm text-slate">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate">{cat.price}</span>
                  <a
                    href="#"
                    className="text-sm font-medium text-maroon hover:text-ink"
                  >
                    View
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured items */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold">Popular items</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {featuredItems.map((item) => (
              <div key={item.name} className="border border-ink/15 bg-white">
                {/* <img src={item.image} alt={item.name} /> */}
                <div className="aspect-square w-full bg-khaki/40">
                  {item.img}
                </div>
                <div className="p-4">
                  <p className="font-display text-base font-semibold">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate">{item.desc}</p>
                  <p className="mt-2 text-sm font-medium text-maroon">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold">
            What parents say
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:divide-x md:divide-ink/10">
            {testimonials.map((t) => (
              <div key={t.name} className="md:px-8 md:first:pl-0">
                <p className="font-display text-lg leading-relaxed text-ink">
                  “{t.quote}”
                </p>
                <p className="mt-4 text-sm text-slate">
                  {t.name} · {t.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[200px_1fr] md:items-start">
          <div className="aspect-square w-full max-w-[200px] border border-ink/15 bg-khaki/40" />
          <div>
            <p className="text-sm text-slate">From the founder</p>
            <p className="mt-3 max-w-2xl font-display text-xl leading-relaxed text-ink">
              I started Turbo Uniforms after spending too many August mornings
              queuing at shops that didn't have my kids' sizes in stock. We keep
              a wider size range on the shelf for that reason — and if we don't
              have it, we'll tell you honestly instead of selling you the wrong
              fit.
            </p>
            <p className="mt-4 text-sm text-slate">GW, Founder</p>
          </div>
        </div>
      </section>

      {/* Size guide */}
      <section
        id="sizing"
        className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold">
            Not sure of the size?
          </h2>
          <p className="mt-2 max-w-md text-sm text-slate">
            Measure chest at the widest point under the arms, and height without
            shoes. When between two sizes, size up — uniforms are worn all term.
          </p>
          <table className="mt-8 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/15 text-slate">
                <th className="py-3 font-medium">Age</th>
                <th className="py-3 font-medium">Chest</th>
                <th className="py-3 font-medium">Height</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {sizeGuide.map((row) => (
                <tr key={row.age}>
                  <td className="py-3 font-display text-base">{row.age}</td>
                  <td className="py-3 text-slate">{row.chest}</td>
                  <td className="py-3 text-slate">{row.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-slate">Find us</p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            Turbo, Uasin Gishu
          </h2>
          <p className="mt-2 max-w-md text-sm text-slate">
            Along the main road in Turbo town — look for the maroon signage.
          </p>
          <div className="mt-8 border border-ink/15">
            <iframe
              title="Turbo  Uniform Center location in Turbo, Kenya"
              src="https://www.google.com/maps?q=Turbo,+Kenya&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0, display: "block" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Schools we supply */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold">
            Schools we supply
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate">
            {schools.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-ink px-6 py-16 text-paper md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:divide-x md:divide-paper/15">
          <div className="md:pr-10">
            <p className="font-display text-lg font-semibold">
              Bulk school orders
            </p>
            <p className="mt-2 text-sm text-paper/70">
              We work directly with schools to supply full class sets ahead of
              each term, with fixed pricing for parents.
            </p>
          </div>
          <div className="md:px-10">
            <p className="font-display text-lg font-semibold">Fabric quality</p>
            <p className="mt-2 text-sm text-paper/70">
              Cotton-poly blends chosen to hold colour and shape through a full
              school term of washing.
            </p>
          </div>
          <div className="md:pl-10">
            <p className="font-display text-lg font-semibold">Easy exchanges</p>
            <p className="mt-2 text-sm text-paper/70">
              Sizes exchanged free within 14 days — children grow faster than
              terms end.
            </p>
          </div>
          <div className="md:pl-8">
            <p className="font-display text-lg font-semibold">Uniform care</p>
            <p className="mt-2 text-sm text-paper/70">
              Wash cold, line dry — keeps colour and shape through the term.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold">
            Questions parents ask
          </h2>
          <div className="mt-6 divide-y divide-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-medium marker:content-none">
                  {f.q}
                  <span className="ml-4 text-slate group-open:hidden">+</span>
                  <span className="ml-4 hidden text-slate group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 max-w-xl text-sm text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & pickup */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:divide-x md:divide-ink/10">
          <div>
            <p className="font-display text-lg font-semibold">Pickup</p>
            <p className="mt-2 max-w-sm text-sm text-slate">
              Ready within the hour for in-stock sizes. Mon – Sat, 8am – 6pm, at
              our Turbo shop.
            </p>
          </div>
          <div className="md:pl-10">
            <p className="font-display text-lg font-semibold">Delivery</p>
            <p className="mt-2 max-w-sm text-sm text-slate">
              Covers Uasin Gishu county, 1 – 2 working days. Cost is confirmed
              by WhatsApp before dispatch.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-4 text-sm text-slate-900">
        Pay via M-Pesa/Airtel money/cheques or cash on collection or delivery.
      </p>

      {/* Footer */}
      <footer className="flex flex-col justify-between gap-6 border-t border-ink/10 px-6 py-10 text-sm text-slate md:flex-row md:px-10">
        <div>
          <p className="font-display text-base font-semibold text-ink">
            Turbo Uniform Center
          </p>
          <p className="mt-1">eldoret, Kenya</p>
        </div>
        <div className="space-y-1">
          <p>0712 345 678</p>
          <p>orders@Turbouniforms.co.ke</p>
          <p>Mon – Sat, 8am – 6pm</p>
        </div>
      </footer>

      <div>
        {" "}
        <a
          href="https://wa.me/254743709582?text=Hi%2C%20I%27d%20like%20to%20order%20a%20uniform%20set"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-paper shadow-lg transition-colors hover:bg-ink"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
            <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
          </svg>
        </a>{" "}
      </div>
    </div>
  );
}

const checklist = [
  { item: "Blazer", qty: "1" },
  { item: "Shirt", qty: "3" },
  { item: "Trousers / Skirt", qty: "2" },
  { item: "Sweater", qty: "1" },
  { item: "Tie", qty: "1" },
  { item: "PE Kit", qty: "1 set" },
  { item: "Socks", qty: "3 pairs" },
];

const categories = [
  {
    name: "Boys' Wear",
    desc: "Shirts, trousers, shorts and blazers in standard school fits.",
    price: "KSh 600 – 3,500",
  },
  {
    name: "Girls' Wear",
    desc: "Blouses, skirts, pinafores and jumpers, sized by age.",
    price: "KSh 600 – 3,500",
  },
  {
    name: "Sportswear & PE Kits",
    desc: "House colours, tracksuits and sports shoes.",
    price: "KSh 800 – 2,800",
  },
  {
    name: "Shoes & Accessories",
    desc: "School shoes, ties, belts, badges and bags.",
    price: "KSh 400 – 4,000",
  },
];
const testimonials = [
  {
    quote:
      "Ordered a full set for my daughter's new school in one visit. Everything fit — no exchanges needed.",
    name: "Wanjiru M.",
    school: "Parent, Riara Springs Primary",
  },
  {
    quote:
      "They kept our old blazer size on file, so reordering for term two took five minutes on the phone.",
    name: "David K.",
    school: "Parent, St. Christopher's",
  },
  {
    quote:
      "Fabric held up through an entire year of daily wear and washing. Buying from here again.",
    name: "Amina H.",
    school: "Parent, Braeburn Garden Estate",
  },
];

const sizeGuide = [
  { age: "4 – 6 yrs", chest: "56 – 60 cm", height: "100 – 116 cm" },
  { age: "7 – 9 yrs", chest: "61 – 66 cm", height: "117 – 132 cm" },
  { age: "10 – 12 yrs", chest: "67 – 74 cm", height: "133 – 150 cm" },
  { age: "13 – 15 yrs", chest: "75 – 84 cm", height: "151 – 165 cm" },
];

const schools = [
  "Riara Springs Primary",
  "St. Christopher's School",
  "Braeburn Garden Estate",
  "Turbo Township Primary",
  "Moi Girls' Turbo",
  "St. Patrick's Boys",
];

const faqs = [
  {
    q: "How long does an order take?",
    a: "Sizes we stock are ready same day. Made-to-size or bulk orders take 3–5 working days.",
  },
  {
    q: "Can I exchange a size after buying?",
    a: "Yes — free exchanges within 14 days as long as the item is unworn with tags on.",
  },
  {
    q: "Do you deliver outside Turbo?",
    a: "We deliver across Uasin Gishu county. Delivery cost depends on distance and is confirmed on order.",
  },
  {
    q: "What's your minimum for school bulk orders?",
    a: "20 sets or more qualifies for bulk pricing. Contact us with your school's size breakdown to get a quote.",
  },
  {
    q: "Do you take hand-me-downs?",
    a: "Yes — bring outgrown uniforms in good condition for credit toward the next size up.",
  },
];

const featuredItems = [
  {
    name: "White Shirt",
    desc: "Short sleeve, cotton-poly",
    price: "KSh 650",
    img: (
      <img
        src="https://finechef.co.ke/storage/app/public/product/2024-02-16-65cf5940cb077.webp"
        alt="Short sleeve image"
      />
    ),
  },
  {
    name: "Grey Trousers",
    desc: "Straight fit, adjustable waist",
    price: "KSh 900",
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgDrVHeeip3EduyQrok7Aa-j_ecfL9BApXxLiRdUCGw&s=10"
        alt="Grey trousers image"
      />
    ),
  },
  {
    name: "School Sweater",
    desc: "V-neck, house colour trim",
    price: "KSh 1,200",
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM14d8PFj0GElcyHMjmd8dy-GcXG7zdH0_DCYC8eifnw&s=10"
        alt="School sweater image"
      />
    ),
  },
  {
    name: "PE Kit Set",
    desc: "Shorts + t-shirt, house colours",
    price: "KSh 850",
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J10otPeqTvXt4FbdCllEDl92CU7yyEH8kMPoghXMDg&s=10"
        alt="PE kit set image"
      />
    ),
  },
];
