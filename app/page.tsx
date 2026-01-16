import {
  Phone,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Heart,
  Shield,
  Baby,
} from "lucide-react";

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#c9a962]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span
              className="text-[#f5f0e8] text-xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Knot Today Massage
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-[#f5f0e8]/80 hover:text-[#c9a962] transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#f5f0e8]/80 hover:text-[#c9a962] transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#reviews"
              className="text-[#f5f0e8]/80 hover:text-[#c9a962] transition-colors text-sm"
            >
              Reviews
            </a>
            <a
              href="#hours"
              className="text-[#f5f0e8]/80 hover:text-[#c9a962] transition-colors text-sm"
            >
              Hours
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="tel:+14199538787"
            className="flex items-center gap-2 bg-[#c9a962] hover:bg-[#d4b87a] text-[#1a1a1a] px-4 py-2 rounded-full font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c9a962 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Experience relaxation and healing in Palm Harbor
        </h1>

        {/* Description */}
        <p className="text-[#f5f0e8]/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re seeking a peaceful escape or focused healing, we
          create a warm, professional, and welcoming environment for every
          session.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+14199538787"
            className="flex items-center gap-3 bg-[#c9a962] hover:bg-[#d4b87a] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call or Text: (419) 953-8787
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 border-2 border-[#c9a962]/50 hover:border-[#c9a962] text-[#f5f0e8] px-8 py-4 rounded-full font-medium transition-colors"
          >
            View Services
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        {/* Location Badge */}
        <div className="mt-12 inline-flex items-center gap-2 text-[#f5f0e8]/60 text-sm">
          <MapPin className="w-4 h-4 text-[#c9a962]" />
          Palm Harbor, FL • Salon Plex at Alderman Plaza
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#c9a962]/50" />
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stephanie's Photo */}
          <div className="relative">
            <div className="aspect-[3/4] bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/knot_today_massage.jpg"
                alt="Stephanie A. - Licensed Massage Therapist at Knot Today Massage"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9a962] rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-[#c9a962] font-medium tracking-wider uppercase text-sm mb-3">
              Meet Your Therapist
            </p>
            <h2
              className="text-3xl sm:text-4xl text-[#1a1a1a] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Hello, I&apos;m Stephanie
            </h2>
            <div className="w-16 h-0.5 bg-[#c9a962] mb-6" />

            <div className="space-y-4 text-[#1a1a1a]/80 leading-relaxed">
              <p>
                I grew up in a small town in Ohio and established my massage
                license in 2010. After years of honing my craft, I decided it
                was time for a change and moved to the Sunshine State!
              </p>
              <p>
                I enjoy working with my clients and figuring out how to
                help—whether it&apos;s just to relax or fix an issue with
                headaches, back pain, neck pain, sciatic pain, or sports
                injuries.
              </p>
              <p>
                With about{" "}
                <span className="text-[#c9a962] font-semibold">
                  16 years in the massage world
                </span>
                , I&apos;m always learning something new. I believe our bodies
                are amazing but need help often to keep us healthy!
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p
                  className="text-3xl text-[#c9a962]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  16+
                </p>
                <p className="text-sm text-[#1a1a1a]/60">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-[#c9a962]/30" />
              <div className="text-center">
                <p
                  className="text-3xl text-[#c9a962]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  FL
                </p>
                <p className="text-sm text-[#1a1a1a]/60">Licensed MA10832</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Data
const services = [
  {
    icon: Sparkles,
    name: "Swedish Massage",
    description:
      "Light to medium pressure with a warm table, low lighting, and cozy atmosphere. Let all your stresses melt away in this relaxation-focused treatment.",
    highlight: "Relaxation",
  },
  {
    icon: Shield,
    name: "Therapeutic Massage",
    description:
      "Firm pressure while working on targeted areas. Designed to ease chronic pain and tension, while also relieving stress from headaches and migraines.",
    highlight: "Pain Relief",
  },
  {
    icon: Heart,
    name: "Deep Tissue Massage",
    description:
      "For those seeking relief from chronic muscle tension, stiffness, or injury-related discomfort. Slow, deliberate strokes with firm pressure reach the deeper layers of muscles.",
    highlight: "Deep Relief",
  },
  {
    icon: Baby,
    name: "Prenatal Massage",
    description:
      "Available 12 weeks and after. Lighter touch while laying on your side with supportive pillows. Come in and relax while I do all the work—being a mommy-to-be is hard work!",
    highlight: "Mom & Baby",
  },
];

// Services Section
function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a962] font-medium tracking-wider uppercase text-sm mb-3">
            Our Services
          </p>
          <h2
            className="text-3xl sm:text-4xl text-[#f5f0e8] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Bodywork Services
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a962] mx-auto mb-6" />
          <p className="text-[#f5f0e8]/60 max-w-2xl mx-auto">
            Whether you&apos;re here for a peaceful escape or focused healing,
            we offer a range of massage services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#2d2d2d] rounded-2xl p-8 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-all hover:shadow-[0_0_40px_rgba(201,169,98,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a962]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#c9a962]" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#c9a962]/10 text-[#c9a962] text-xs rounded-full mb-2">
                    {service.highlight}
                  </span>
                  <h3
                    className="text-xl text-[#f5f0e8] mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:+14199538787"
            className="inline-flex items-center gap-3 bg-[#c9a962] hover:bg-[#d4b87a] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Book Your Session: (419) 953-8787
          </a>
        </div>
      </div>
    </section>
  );
}

// Reviews Data
const reviews = [
  {
    name: "Arnie G.",
    date: "Jan. 2026",
    rating: 5,
    service: "Therapeutic Massage",
    text: "Great response time took me in last minute and walked out feeling brand new.",
  },
  {
    name: "Ava G.",
    date: "Jan. 2026",
    rating: 5,
    service: "Deep Tissue Massage",
    text: "Stephanie is one of the best massage therapist I've had and I've a ton. Her style is unique and feels amazing. Highly recommend!!",
  },
  {
    name: "Ray D.",
    date: "Dec. 2025",
    rating: 5,
    service: "Deep Tissue Massage",
    text: "Stephanie has a balance of integrating her personality with her craft that she illustrates so well within her practice. My experience was nothing short of amazing. I recommend that you discover the benefits for yourself.",
  },
];

// Reviews Section
function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a962] font-medium tracking-wider uppercase text-sm mb-3">
            Client Reviews
          </p>
          <h2
            className="text-3xl sm:text-4xl text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What People Are Saying
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a962] mx-auto" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#c9a962]/10"
            >
              {/* Name */}
              <p
                className="text-xl text-[#1a1a1a] mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {review.name}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#c9a962] text-[#c9a962]"
                  />
                ))}
              </div>

              {/* Service Received */}
              <p className="text-[#c9a962] text-sm mb-3">
                {review.service} with Stephanie A.
              </p>

              {/* Review Text */}
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Source */}
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a]/50">
                <span className="inline-flex items-center gap-1">
                  MassageBook
                  <span className="text-green-600">✓</span>
                  <span className="text-green-600">Verified</span>
                </span>
                <span>•</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hours Data
const hours = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "10:00 AM - 5:00 PM", closed: false },
  { day: "Wednesday", hours: "10:00 AM - 5:00 PM", closed: false },
  { day: "Thursday", hours: "10:00 AM - 5:00 PM", closed: false },
  { day: "Friday", hours: "10:00 AM - 4:00 PM", closed: false },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM", closed: false },
  { day: "Sunday", hours: "12:00 PM - 4:00 PM", closed: false },
];

// Hours & Location Section
function HoursLocationSection() {
  return (
    <section id="hours" className="py-20 sm:py-28 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div>
            <p className="text-[#c9a962] font-medium tracking-wider uppercase text-sm mb-3">
              Operating Hours
            </p>
            <h2
              className="text-3xl sm:text-4xl text-[#f5f0e8] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              When We&apos;re Open
            </h2>
            <div className="w-16 h-0.5 bg-[#c9a962] mb-8" />

            <div className="space-y-3">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-3 px-4 rounded-lg ${
                    item.closed
                      ? "bg-[#2d2d2d]/50 text-[#f5f0e8]/40"
                      : "bg-[#2d2d2d]"
                  }`}
                >
                  <span
                    className={item.closed ? "text-[#f5f0e8]/40" : "text-[#f5f0e8]"}
                  >
                    {item.day}
                  </span>
                  <span
                    className={
                      item.closed ? "text-[#f5f0e8]/40" : "text-[#c9a962]"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-[#c9a962] font-medium tracking-wider uppercase text-sm mb-3">
              Find Us
            </p>
            <h2
              className="text-3xl sm:text-4xl text-[#f5f0e8] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Location & Directions
            </h2>
            <div className="w-16 h-0.5 bg-[#c9a962] mb-8" />

            {/* Address Card */}
            <div className="bg-[#2d2d2d] rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8] font-medium mb-1">
                    Salon Plex at Alderman Plaza
                  </p>
                  <p className="text-[#f5f0e8]/70">
                    35114 US Hwy 19 N, Suite 12
                    <br />
                    Palm Harbor, FL 34684
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-2xl p-6">
              <p className="text-[#c9a962] font-medium mb-2 flex items-center gap-2">
                <span>📍</span> How to Find Us
              </p>
              <p className="text-[#f5f0e8]/80 text-sm leading-relaxed">
                We&apos;re located inside the Salon Plex at Alderman Plaza.
                There&apos;s no big sign out front, so here&apos;s how to find
                us:
              </p>
              <ol className="mt-3 space-y-2 text-[#f5f0e8]/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a962] font-semibold">1.</span>
                  Enter the Salon Plex building
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a962] font-semibold">2.</span>
                  Turn left
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a962] font-semibold">3.</span>
                  Head to Suite 12 — look for the KTM logo on the door!
                </li>
              </ol>
            </div>

            {/* Map Embed */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-[#c9a962]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.4!2d-82.7513!3d28.0892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1234567890%3A0x0!2s35114%20US%20Hwy%2019%20N%2C%20Palm%20Harbor%2C%20FL%2034684!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Knot Today Massage Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact CTA Section
function ContactSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#f5f0e8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl text-[#1a1a1a] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Ready to Relax?
        </h2>
        <p className="text-[#1a1a1a]/70 text-lg mb-8 max-w-xl mx-auto">
          Book your massage session today. Call or text to schedule your
          appointment with Stephanie.
        </p>

        {/* Phone CTA */}
        <a
          href="tel:+14199538787"
          className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-[#c9a962] px-10 py-5 rounded-full font-semibold text-xl transition-all hover:scale-105 shadow-xl"
        >
          <Phone className="w-6 h-6" />
          (419) 953-8787
        </a>

        <p className="mt-4 text-[#1a1a1a]/50 text-sm">
          Call or text anytime to book
        </p>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#c9a962]/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div>
            <p
              className="text-[#f5f0e8] text-2xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Knot Today Massage
            </p>
            <p className="text-[#f5f0e8]/50 text-sm">
              Licensed Massage Therapy
            </p>
          </div>

          {/* License Info */}
          <div className="text-center md:text-right">
            <p className="text-[#f5f0e8]/50 text-sm">
              Florida License: MA10832
            </p>
            <p className="text-[#f5f0e8]/50 text-sm">
              Palm Harbor, FL 34684
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#c9a962]/10 text-center">
          <p className="text-[#f5f0e8]/40 text-sm">
            © {new Date().getFullYear()} Knot Today Massage. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <HoursLocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
