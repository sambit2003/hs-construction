import React, { useState, useEffect } from 'react';

// Roadmap Steps Data
const stepsData = {
  1: {
    title: "Lets Get Started",
    desc: "Enquire and schedule a detailed appointment with our structural experts to discuss your spatial requirements. Through virtual and physical sessions, our technical engineers ensure that no detail is overlooked, creating an initial high-fidelity blueprint.",
    img: "/project_house1.png",
    bullets: [
      "Understanding construction and budget goals.",
      "Discussing spatial requirements and layouts.",
      "Personalized customer portal launch."
    ]
  },
  2: {
    title: "Design Specification",
    desc: "Our architects work closely with your preferences to produce premium 3D design visualizations, elevation drafts, and comprehensive interior layout options optimized for solar layout and ventilation flows.",
    img: "/project_house2.png",
    bullets: [
      "Vastu compliance and micro-ventilation layout.",
      "Interactive 3D walkthrough rendering drafts.",
      "Detailed material schedule workbook approvals."
    ]
  },
  3: {
    title: "Client Agreement",
    desc: "We formulate a fully transparent, legal engineering contract defining locking pricing schedules, complete brand list parameters, milestone dates, and compensation rules for total protection.",
    img: "/project_house1.png",
    bullets: [
      "Zero hidden pricing clause locking guarantee.",
      "Detailed specifications check by customer advocates.",
      "Escrow payment protection system set up."
    ]
  },
  4: {
    title: "Construction & Updates",
    desc: "Excavation and bricklaying structures start on site under continuous supervision of our experienced structural engineers. Get real-time updates directly via your dedicated mobile tracker.",
    img: "/project_house2.png",
    bullets: [
      "300+ rigorous physical tests during slab casting.",
      "Daily status photo stream directly in customer dashboard.",
      "Raw materials checks verifying premium brands."
    ]
  },
  5: {
    title: "Site Visits",
    desc: "Detailed plumbing, premium wiring paths, high-finish ceiling installations, tiling masonry, and wood millwork are double-audited by independent safety and certification agencies.",
    img: "/project_house1.png",
    bullets: [
      "Independent structural integrity assessment reports.",
      "Dual pressure piping tests for waterproofing verification.",
      "Electrical safety audits against spark vulnerabilities."
    ]
  },
  6: {
    title: "Completion & Handover",
    desc: "Walk into your pristine, professionally deep-cleaned custom dream villa! We formally hand over complete documentation dossiers along with your 10-year waterproofing warranty card.",
    img: "/project_house2.png",
    bullets: [
      "Detailed digital dossiers of architectural blueprint assets.",
      "Dedicated manager for 5-year post-handover issues.",
      "10-year waterproofing warranty card delivery."
    ]
  }
};

// Testimonials Data
const testiData = {
  1: {
    tabTitle: "Deepa's Dream Home",
    packageName: "PREMIUM PLUS PACKAGE",
    quote: `"HS Construction completed our premium home in Kengeri on time. The level of transparency through their mobile app was phenomenal! We were updated about everything, and the structural finishing exceeded our family expectations."`,
    location: "Kengeri, Bengaluru",
    area: "3,735 sqft",
    floors: "G+2.5",
    price: "75 Lakhs",
    img: "/project_house2.png"
  },
  2: {
    tabTitle: "Krishna Prasad's Dream Home",
    packageName: "ECO-FRIENDLY PACKAGE",
    quote: `"Sahasrara, an eco-friendly G+1 home in Mysuru, designed for contemporary comfort and premium living through our sustainable construction project. This G+1 residence features amenities that seamlessly connect interior spaces to the sky, enhancing openness and allowing natural light to enrich the living experience. Spanning a generous 3,100 sq. ft. and nestled on a spacious 80x50 plot, this home offers an ideal eco-friendly environment for families to thrive."`,
    location: "Mysuru",
    area: "3100 sqft",
    floors: "G+1",
    price: "78 Lakhs",
    img: "/project_house1.png"
  },
  3: {
    tabTitle: "Sowmyashree's Dream Home",
    packageName: "ECO GREEN HOME",
    quote: `"We wanted a 100% sustainable home that minimizes energy bills. HS Construction implemented gorgeous solar roofing, rain harvesting tanks, and passive thermal cooling elements that work flawlessly."`,
    location: "Malleshwaram, Bengaluru",
    area: "2,800 sqft",
    floors: "G+1",
    price: "58 Lakhs",
    img: "/project_house2.png"
  },
  4: {
    tabTitle: "Arpitha's Dream Home",
    packageName: "PREMIUM PACKAGE",
    quote: `"The entire civil layout design process was completely virtual and painless. The structural calculations and material quality choices were meticulously explained to us. We highly recommend them!"`,
    location: "Jayanagar, Bengaluru",
    area: "3,100 sqft",
    floors: "G+3",
    price: "68 Lakhs",
    img: "/project_house1.png"
  },
  5: {
    tabTitle: "Anush's Dream Home",
    packageName: "ROYAL ONE+ PACKAGE",
    quote: `"Building our luxury smart villa with HS Construction was an absolute breeze. Their strict 'no subcontracting' policy meant highly professional carpenters and masons worked on our design layout diligently."`,
    location: "Whitefield, Bengaluru",
    area: "4,200 sqft",
    floors: "G+2",
    price: "92 Lakhs",
    img: "/project_house2.png"
  }
};


// Packages Data
const packagesData = {
  1: {
    title: "Essential",
    price: "1680/*-sqft",
    bullets: [
      "Carbon neutral fly-ash composite hollow blocks architecture.",
      "Double wall cavity thermal insulation blocks.",
      "Equipped with advanced multi-tier rainwater filter cisterns.",
      "Passive aeration window layout draft system.",
      "High quality solar panel systems fully wired and certified."
    ]
  },
  2: {
    title: "Premium",
    price: "1890/*-sqft",
    bullets: [
      "Premium structural steel (JSW / Kamdhenu steel).",
      "Premium foundation cement (Ultratech / ACC gold).",
      "Premium vitrified designer floor tiling.",
      "Premium Teakwood safety doors & smart handles.",
      "Dedicated supervisor with live mobile tracking dashboard access."
    ]
  },
  3: {
    title: "Luxury",
    price: "2370/*-sqft",
    bullets: [
      "Heavy-duty rustproof earthquake-resistant structural columns.",
      "High-end premium imported Italian marble flooring.",
      "Complete bespoke interior design & luxury smart home appliances package.",
      "Solid burma teak premium doors & window systems.",
      "Continuous HD CCTV live feed stream access in the mobile tracker app."
    ]
  }
};

// Projects Data
const projectsData = [
  { id: 1, title: "Modern Classic Villa", location: "Jayanagar, Bengaluru", img: "/completed_project_1.png" },
  { id: 2, title: "Contemporary Eco Villa", location: "Whitefield, Bengaluru", img: "/completed_project_2.png" },
  { id: 3, title: "Smart Home Luxury Villa", location: "Malleshwaram, Bengaluru", img: "/completed_project_3.png" },
  { id: 4, title: "Traditional Accents Villa", location: "Indiranagar, Bengaluru", img: "/completed_project_4.png" },
  { id: 5, title: "Minimalist Modern Villa", location: "Kengeri, Bengaluru", img: "/completed_project_1.png" },
  { id: 6, title: "Eco Green Villa", location: "Mysuru", img: "/completed_project_2.png" },
  { id: 7, title: "Urban Smart Villa", location: "Whitefield, Bengaluru", img: "/completed_project_3.png" },
  { id: 8, title: "Royal Legacy Mansion", location: "Jayanagar, Bengaluru", img: "/completed_project_4.png" }
];

// Media Ticker Data
const newsData = [
  {
    title: "Swaragh Media",
    desc: `"HS Construction is transforming the turnkey home ecosystem with transparency and real-time app tracking."`,
    icon: "fa-tv"
  },
  {
    title: "Bengaluru Daily",
    desc: `"A brand building with purpose: Eco-friendly construction methods that save up to 40K liters of water per house."`,
    icon: "fa-newspaper"
  },
  {
    title: "Startup Chronicles",
    desc: `"With 10+ years of outstanding domain experience, HS Construction remains the top choice for new home construction."`,
    icon: "fa-microphone"
  }
];

export default function App() {
  // State variables for interactive widgets
  const [activeStep, setActiveStep] = useState(1);
  const [activeTesti, setActiveTesti] = useState(1);
  const [activePack, setActivePack] = useState(1);
  const [openFaq, setOpenFaq] = useState(1);
  const [aboutSlide, setAboutSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [sliderOffset, setSliderOffset] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);

  // Form Lead State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    plotSize: '',
    requirements: '',
    authCheck: true
  });

  // Modal Callback State
  const [modalData, setModalData] = useState({
    name: '',
    phone: '',
    time: 'immediate'
  });

  // Auto scroll news ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto scroll About Us slider
  useEffect(() => {
    const timer = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto scroll Projects (Completed Works) slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderOffset((prev) => (prev + 1) % (projectsData.length - 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto scroll Packages pricing/details
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePack((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Our construction experts will contact you shortly on +91 ${formData.phone} for your project at ${formData.location}.`);
    setFormData({
      name: '',
      phone: '',
      location: '',
      plotSize: '',
      requirements: '',
      authCheck: true
    });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    alert(`Consultation booked successfully! We will contact you at your preferred time: ${modalData.time}.`);
    setIsModalOpen(false);
    setModalData({ name: '', phone: '', time: 'immediate' });
  };

  const handleSliderNext = () => {
    setSliderOffset((prev) => (prev + 1) % (projectsData.length - 3));
  };

  const handleSliderPrev = () => {
    setSliderOffset((prev) => (prev - 1 + (projectsData.length - 3)) % (projectsData.length - 3));
  };

  return (
    <div>
      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="top-banner">
        <div className="container">
          <div className="top-banner-left">
            <div className="top-banner-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Bengaluru | Karnataka | Tamilnadu</span>
            </div>
          </div>
          <div className="top-banner-right">
            <div className="top-banner-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 70900 05600</span>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR / HEADER */}
      <header className="header">
        <div className="container">
          <div className="logo-area">
            <a href="#">
              <img src="/logo.jpeg" alt="HS Construction & Builders" className="logo-img" />
            </a>
          </div>
          
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">Our Homes</a></li>
            <li><a href="#about" className="nav-link">Green Homes</a></li>
            <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
            <li><a href="#packages" className="nav-link">Packages</a></li>
          </ul>

          <div className="header-actions">
            <button className="btn nav-consultation-btn" onClick={() => setIsModalOpen(true)}>Get Free Consultation</button>
            <div className="menu-grid-btn" onClick={() => setIsModalOpen(true)}>
              <i className="fa-solid fa-grip"></i>
            </div>
          </div>

          <div className="mobile-toggle" onClick={() => setIsModalOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      {/* HERO BANNER - Full banner image */}
      <section className="hero-banner-section">
        <div className="hero-banner-img-wrap">
          <img
            src="/hero_banner.png"
            alt="10 Years of HS Construction & Builders - Crafting Structures Creating Value"
            className="hero-banner-img"
          />
        </div>
      </section>

      {/* TRUST LOGO / AWARDS BAR */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-slider">
            <div className="trust-item">
              <i className="fa-solid fa-trophy trust-icon"></i>
              <div className="trust-details">
                <h4>IGBC Green Home</h4>
                <p>Platinum Certified Partner</p>
              </div>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-award trust-icon"></i>
              <div className="trust-details">
                <h4>National Sustainability</h4>
                <p>Gold Award 2024</p>
              </div>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-newspaper trust-icon"></i>
              <div className="trust-details">
                <h4>The Times of India</h4>
                <p>Featured Builder in Bengaluru</p>
              </div>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-ribbon trust-icon"></i>
              <div className="trust-details">
                <h4>Premium Builder Award</h4>
                <p>Outstanding Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1750+</div>
              <div className="stat-label">Happy Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">18+</div>
              <div className="stat-label">Major Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5.2M+</div>
              <div className="stat-label">Sq. Ft Built Area Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HS CONSTRUCTION IS BEST */}
      <section className="why-us">
        <div className="container">

          {/* Heading - matches buildahome font/style exactly */}
          <div className="why-heading">
            <p className="why-heading-why">Why</p>
            <div className="why-heading-brand">
              <svg className="why-hand-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15c2 3.5 6 5.5 10 4.5a8 8 0 0 0 6.5-6.5" />
                <path d="M12 14c1.5-1.5 2.5-3 2-4.5s-2-1.5-3 .5c-.5.8-1 2-1 2" />
                <path d="M5 13.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M7 11.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M9 9.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              </svg>
              <span className="why-brand-name">HS Construction</span>
              <svg className="why-hand-svg why-hands-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15c2 3.5 6 5.5 10 4.5a8 8 0 0 0 6.5-6.5" />
                <path d="M12 14c1.5-1.5 2.5-3 2-4.5s-2-1.5-3 .5c-.5.8-1 2-1 2" />
                <path d="M5 13.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M7 11.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M9 9.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              </svg>
            </div>
            <h2 className="why-heading-main">Is Best for Turnkey Home Constructions?</h2>
            <div className="why-heading-divider"></div>
          </div>

          {/* Three SEPARATE boxes */}
          <div className="why-new-grid">

            {/* Box 1 - Stats with circular badges */}
            <div className="why-new-card" style={{backgroundImage: 'url(/project_house1.png)'}}>
              <div className="why-new-overlay">
                <ul className="why-stat-list">
                  <li className="why-stat-item">
                    <span className="why-stat-badge">750+</span>
                    <span className="why-stat-label">Individual Homes Delivered</span>
                  </li>
                  <li className="why-stat-item">
                    <span className="why-stat-badge">18+</span>
                    <span className="why-stat-label">Cities</span>
                  </li>
                  <li className="why-stat-item">
                    <span className="why-stat-badge">96%</span>
                    <span className="why-stat-label">of all homes handed over in time</span>
                  </li>
                  <li className="why-stat-item">
                    <span className="why-stat-badge">10</span>
                    <span className="why-stat-label">Years Waterproofing Warranty</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 2 - Promises with buildahome-style teal ring icons */}
            <div className="why-new-card" style={{backgroundImage: 'url(/project_house2.png)'}}>
              <div className="why-new-overlay">
                <ul className="why-promise-list">

                  {/* Timely Delivery - clock icon */}
                  <li className="why-promise-item">
                    <span className="why-promise-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <span className="why-promise-text">Timely Delivery</span>
                  </li>

                  {/* Construction Guarantee - shield outline */}
                  <li className="why-promise-item">
                    <span className="why-promise-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                    </span>
                    <span className="why-promise-text">Construction Guarantee</span>
                  </li>

                  {/* No Hidden Charges - wallet outline */}
                  <li className="why-promise-item">
                    <span className="why-promise-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
                        <path d="M22 11h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4V11z" />
                      </svg>
                    </span>
                    <span className="why-promise-text">No Hidden Charges</span>
                  </li>

                  {/* No Subcontracting - user profiles */}
                  <li className="why-promise-item">
                    <span className="why-promise-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <span className="why-promise-text">No Subcontracting</span>
                  </li>

                </ul>
              </div>
            </div>

            {/* Box 3 - In Media - SCROLLABLE */}
            <div className="why-new-card" style={{backgroundImage: 'url(/hero_house_bg.png)', backgroundPosition: 'center'}}>
              <div className="why-new-overlay why-media-overlay">
                <h3 className="why-media-title">IN MEDIA</h3>
                <div className="why-media-scroll">
                  <ul className="why-media-list">
                    <li className="why-media-item">
                      <span className="why-media-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 18, height: 18}}>
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="22" />
                        </svg>
                      </span>
                      <span className="why-media-text">Bengaluru-based HS Construction is helping build dream homes one step at a time.</span>
                    </li>
                    <li className="why-media-item">
                      <span className="why-media-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 18, height: 18}}>
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="22" />
                        </svg>
                      </span>
                      <span className="why-media-text">HS Construction's Revenue Rises To 100Cr In FY 22-23.</span>
                    </li>
                    <li className="why-media-item">
                      <span className="why-media-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 18, height: 18}}>
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="22" />
                        </svg>
                      </span>
                      <span className="why-media-text">Bengaluru startup helps people build houses without commission.</span>
                    </li>
                    <li className="why-media-item">
                      <span className="why-media-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 18, height: 18}}>
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="22" />
                        </svg>
                      </span>
                      <span className="why-media-text">HS Construction Delivers 45+ homes in just 2 months.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US - Reference matching slider */}
      <section className="about-new" id="about">
        {/* Fixed heading - same for all slides */}
        <div className="about-heading-wrap">
          <p className="about-heading-sub">About</p>
          <div className="about-heading-brand">
            <svg className="about-hand-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 15c2 3.5 6 5.5 10 4.5a8 8 0 0 0 6.5-6.5" />
              <path d="M12 14c1.5-1.5 2.5-3 2-4.5s-2-1.5-3 .5c-.5.8-1 2-1 2" />
              <path d="M5 13.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              <path d="M7 11.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              <path d="M9 9.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
            </svg>
            <span className="about-brand-name">HS Construction</span>
            <svg className="about-hand-svg about-hands-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 15c2 3.5 6 5.5 10 4.5a8 8 0 0 0 6.5-6.5" />
              <path d="M12 14c1.5-1.5 2.5-3 2-4.5s-2-1.5-3 .5c-.5.8-1 2-1 2" />
              <path d="M5 13.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              <path d="M7 11.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              <path d="M9 9.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
            </svg>
          </div>
          <h2 className="about-main-title">One-Stop Solution for Your Dream Home Construction</h2>
          <div className="about-title-divider"></div>
        </div>

        {/* Slider area */}
        <div className="about-slider-wrap">
          {[
            {
              img: '/project_house1.png',
              title: 'Designs for a Stylish Living',
              desc1: 'Our skilled architects, designers, and planners bring vast experience and updated innovations to every project. From floor plans and elevations to the design of doors, windows, grills, and lighting, every detail reflects our expertise in diverse architectural styles and specialties.',
              desc2: "From concept to completion, we take pride in creating personalized spaces that blend your preferences with fresh ideas and modern-day practices, ensuring a home that's both unique and future-ready.",
            },
            {
              img: '/hero_house_bg.png',
              title: 'VR360 Walkthrough Marks a New Era as Best Turnkey Home Builders',
              desc1: 'Our advanced VR360 walkthroughs allow you to visualize every aspect of your dream home with precision. This immersive experience enables you to explore the design in detail, offering the sensation of being physically on-site. With this technology, both clients and architects can collaborate effectively, review designs, and make informed decisions early in the process.',
              desc2: 'The virtual walkthrough also provides you with the opportunity to suggest minor changes to the floor plans and plan your interiors before or during construction, ensuring your vision is brought to life seamlessly.',
            },
            {
              img: '/project_house2.png',
              title: '10+ Years of Tireless Experience in Home Construction',
              desc1: 'Our hands-on experience sets the stage for exceptional home building. With extensive expertise, we meet both your essential needs and professional standards, making us pioneers in the home construction industry.',
              desc2: 'Our experience has equipped us to tackle challenging projects and craft new ways in home construction, always aligned with customer demands. Our team guides you with precision and reliability, drawing on our wealth of experience to ensure a seamless construction journey.',
            }
          ].map((slide, idx) => (
            <div key={idx} className={`about-slide${aboutSlide === idx ? ' active' : ''}`}>
              {/* Left: Image */}
              <div className="about-slide-img-col">
                <img src={slide.img} alt={slide.title} className="about-slide-img" />
              </div>
              {/* Right: Text on teal bg */}
              <div className="about-slide-content-col">
                <h3 className="about-slide-h3">{slide.title}</h3>
                <p className="about-slide-p">{slide.desc1}</p>
                <p className="about-slide-p">{slide.desc2}</p>
                <button className="about-slide-cta" onClick={() => setIsModalOpen(true)}>Know More</button>
              </div>
            </div>
          ))}

          {/* Arrow nav */}
          <button className="about-arrow about-arrow-left" onClick={() => setAboutSlide(s => (s === 0 ? 2 : s - 1))}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="about-arrow about-arrow-right" onClick={() => setAboutSlide(s => (s === 2 ? 0 : s + 1))}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Dots */}
          <div className="about-dots">
            {[0,1,2].map(i => (
              <button key={i} className={`about-dot${aboutSlide === i ? ' active' : ''}`} onClick={() => setAboutSlide(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* GET A QUOTE BANNER CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Creating Turnkey Homes That Reflect Your Personality</h2>
            <p>Experience structured, personalized, and stress-free turnkey premium construction services tailored for Bengaluru.</p>
            <button className="btn btn-accent" onClick={() => setIsModalOpen(true)}>Get an Estimate Today</button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (ROADMAP) */}
      <section className="steps-section" id="how-it-works">
        <div className="container">
          {/* Heading - matches buildahome style exactly */}
          <div className="steps-heading">
            <div className="steps-heading-brand">
              <svg className="steps-hand-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15c2 3.5 6 5.5 10 4.5a8 8 0 0 0 6.5-6.5" />
                <path d="M12 14c1.5-1.5 2.5-3 2-4.5s-2-1.5-3 .5c-.5.8-1 2-1 2" />
                <path d="M5 13.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M7 11.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M9 9.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              </svg>
              <span className="steps-brand-name">Working Steps</span>
              <svg className="steps-hand-svg steps-hands-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15c2 3.5 6 5.5 10 4.5a8 8 0 0 0 6.5-6.5" />
                <path d="M12 14c1.5-1.5 2.5-3 2-4.5s-2-1.5-3 .5c-.5.8-1 2-1 2" />
                <path d="M5 13.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M7 11.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
                <path d="M9 9.5c1.5-2.5 3.5-4 5-3s1 2.5 0 4" />
              </svg>
            </div>
            <h2 className="steps-heading-main">Your Roadmap to Building the Home of Your Dreams</h2>
            <div className="steps-heading-divider"></div>
          </div>

          <div className="steps-tabs">
            {[1,2,3,4,5,6].map((num) => {
              const labels = [
                "Lets Get Started",
                "Design Specification",
                "Client Agreement",
                "Construction & Updates",
                "Site Visits",
                "Completion & Handover"
              ];
              
              // Custom vector SVG assets matching buildahome.in icons exactly
              const stepIcons = {
                1: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 32, height: 32}}>
                    <ellipse cx="32" cy="38" rx="20" ry="8" />
                    <circle cx="32" cy="18" r="5" />
                    <path d="M24 28c0-3 3-5 8-5s8 2 8 5" />
                    <circle cx="16" cy="24" r="4.5" />
                    <path d="M10 32c0-2.5 2-4 6-4s6 1.5 6 4" />
                    <circle cx="48" cy="24" r="4.5" />
                    <path d="M42 32c0-2.5 2-4 6-4s6 1.5 6 4" />
                  </svg>
                ),
                2: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 32, height: 32}}>
                    <rect x="8" y="12" width="48" height="36" rx="3" />
                    <line x1="16" y1="20" x2="48" y2="20" />
                    <line x1="16" y1="28" x2="36" y2="28" />
                    <polygon points="16,42 40,42 16,18" />
                    <line x1="44" y1="28" x2="44" y2="40" />
                    <polygon points="44,40 42,44 46,44" />
                  </svg>
                ),
                3: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 32, height: 32}}>
                    <rect x="14" y="10" width="36" height="44" rx="4" />
                    <path d="M26 10h12v4H26z" />
                    <rect x="20" y="20" width="6" height="6" rx="1" />
                    <line x1="30" y1="23" x2="44" y2="23" />
                    <rect x="20" y="32" width="6" height="6" rx="1" />
                    <line x1="30" y1="35" x2="44" y2="35" />
                    <line x1="20" y1="44" x2="36" y2="44" />
                    <path d="M38 42l4-4 2 2-4 4z" />
                  </svg>
                ),
                4: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 32, height: 32}}>
                    <line x1="6" y1="48" x2="58" y2="48" />
                    <polygon points="12,48 12,28 32,14 52,28 52,48" />
                    <line x1="12" y1="38" x2="52" y2="38" />
                    <line x1="22" y1="38" x2="22" y2="48" />
                    <line x1="42" y1="38" x2="42" y2="48" />
                    <path d="M40 8h16v12h-4" />
                    <line x1="46" y1="8" x2="46" y2="16" />
                  </svg>
                ),
                5: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 32, height: 32}}>
                    <path d="M16 48a16 16 0 0 1 32 0" />
                    <circle cx="32" cy="28" r="9" />
                    <path d="M20 23a12 12 0 0 1 24 0H20z" />
                    <path d="M16 23h32" />
                    <path d="M32 11v6" />
                  </svg>
                ),
                6: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 32, height: 32}}>
                    <circle cx="24" cy="20" r="8" />
                    <path d="M28 26l12 12h4v-4l-2-2v-2l-2-2" />
                    <circle cx="44" cy="38" r="1.5" />
                    <path d="M20 28l4 18h4l-1-4h3l-1-4" />
                  </svg>
                )
              };

              return (
                <button 
                  key={num} 
                  className={`step-tab-btn ${activeStep === num ? 'active' : ''}`}
                  onClick={() => setActiveStep(num)}
                >
                  <span className="step-tab-num">0{num}</span>
                  <div className="step-circle">
                    {stepIcons[num]}
                  </div>
                  <span className="step-tab-label">{labels[num-1]}</span>
                </button>
              );
            })}
          </div>

          <div className="step-content-display">
            <div className="step-visual">
              <img src={stepsData[activeStep].img} alt={stepsData[activeStep].title} />
            </div>
            <div className="step-text-details">
              <h3>{stepsData[activeStep].title}</h3>
              <p>{stepsData[activeStep].desc}</p>
              <ul className="step-bullet-list">
                {stepsData[activeStep].bullets.map((bullet, idx) => (
                  <li key={idx} className="step-bullet-item">
                    <i className="fa-solid fa-circle-check"></i> {bullet}
                  </li>
                ))}
              </ul>
              <button className="step-cta-btn" onClick={() => setIsModalOpen(true)}>Enquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header testimonials-header">
            <div className="section-tag testimonials-tag">
              <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
              <span className="tag-text">Testimonials</span>
              <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h2 className="section-title testimonials-title">Listen To Their Experience With Us</h2>
          </div>

          <div className="testimonials-grid-three-col">
            {/* Col 1: Navigation Tabs */}
            <div className="testi-nav-container">
              <span className="corner-bracket corner-tl"></span>
              <span className="corner-bracket corner-tr"></span>
              <span className="corner-bracket corner-bl"></span>
              <span className="corner-bracket corner-br"></span>
              <div className="testimonials-nav">
                {Object.keys(testiData).map((key) => (
                  <button 
                    key={key} 
                    className={`testi-nav-btn ${activeTesti === Number(key) ? 'active' : ''}`}
                    onClick={() => setActiveTesti(Number(key))}
                  >
                    <span>{testiData[key].tabTitle}</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Col 2: Video Box */}
            <div className="video-box-container">
              <div className="video-box" onClick={() => setIsModalOpen(true)}>
                <img src={testiData[activeTesti].img} alt="Testimonial thumbnail" />
                <div className="play-btn-circle red-play-btn"><i className="fa-solid fa-play"></i></div>
                <div className="video-info-badge">
                  <div className="badge-package">{testiData[activeTesti].packageName}</div>
                  <div className="badge-title">HOUSE TOUR</div>
                  <div className="badge-specs">
                    {testiData[activeTesti].floors} | {testiData[activeTesti].area}
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3: Testimonial details & quote */}
            <div className="testi-details-column">
              <p className="testi-desc-text">{testiData[activeTesti].quote}</p>
              
              <div className="testi-meta-grid-2x2">
                <div className="testi-meta-card">
                  <div className="meta-icon-wrapper">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div className="testi-meta-details">
                    <span>Location</span>
                    <h4>{testiData[activeTesti].location}</h4>
                  </div>
                </div>
                
                <div className="testi-meta-card">
                  <div className="meta-icon-wrapper">
                    <i className="fa-solid fa-maximize"></i>
                  </div>
                  <div className="testi-meta-details">
                    <span>Total Area</span>
                    <h4>{testiData[activeTesti].area}</h4>
                  </div>
                </div>
                
                <div className="testi-meta-card">
                  <div className="meta-icon-wrapper">
                    <i className="fa-solid fa-stairs"></i>
                  </div>
                  <div className="testi-meta-details">
                    <span>Floors</span>
                    <h4>{testiData[activeTesti].floors}</h4>
                  </div>
                </div>
                
                <div className="testi-meta-card">
                  <div className="meta-icon-wrapper">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <div className="testi-meta-details">
                    <span>Price</span>
                    <h4>{testiData[activeTesti].price}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* COMPLETED WORKS */}
      <section className="portfolio-section" id="completed-works">
        <div className="container">
          <div className="portfolio-header section-header">
            <div className="section-tag projects-tag">
              <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
              <span className="tag-text">Projects</span>
              <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h2 className="section-title projects-title">Our Completed Works</h2>
            <div className="projects-title-underline"></div>
          </div>

          <div className="portfolio-slider-wrapper-overlay">
            <button className="slider-arrow-overlay arrow-prev" onClick={handleSliderPrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <div className="portfolio-slider-container">
              <div className="portfolio-slider-flat" style={{ '--slider-offset': sliderOffset }}>
                {projectsData.map((project) => (
                  <div key={project.id} className="portfolio-slide-card" onClick={() => setLightboxImg(project.img)}>
                    <div className="slide-card-img-box">
                      <img src={project.img} alt={project.title} />
                      <div className="slide-card-overlay">
                        <div className="overlay-info">
                          <h4>{project.title}</h4>
                          <p><i className="fa-solid fa-location-dot"></i> {project.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="slider-arrow-overlay arrow-next" onClick={handleSliderNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div className="portfolio-center-btn">
            <button className="btn portfolio-btn-view-more" onClick={() => setIsModalOpen(true)}>View More</button>
          </div>
        </div>
      </section>

      {/* EXPLORE PACKAGES */}
      <section className="packages-section" id="packages">
        <div className="container">
          <div className="section-header packages-header">
            <div className="section-tag packages-tag">
              <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
              <span className="tag-text">Packages</span>
              <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h2 className="section-title packages-title">Explore Our Popular Packages Now</h2>
            <div className="packages-title-underline"></div>
          </div>

          <div className="packages-split-layout">
            <div className="packages-visual-side">
              <img src="/blueprint_model.png" alt="Blueprint house model sketch" className="packages-blueprint-image" />
            </div>

            <div className="packages-selectors-scroll-list">
              {Object.keys(packagesData).map((key) => {
                const isSelected = activePack === Number(key);
                // We render a beautiful inline wireframe house SVG for the active card
                const wireframeHouseSVG = (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width: 50, height: 50}}>
                    <path d="M32 8 L8 28 L14 28 L14 56 L50 56 L50 28 L56 28 Z" />
                    <path d="M24 38 H40 V56 H24 Z" />
                    <line x1="14" y1="28" x2="50" y2="28" />
                    <line x1="32" y1="8" x2="32" y2="56" />
                    <line x1="14" y1="42" x2="50" y2="42" />
                  </svg>
                );

                return (
                  <div 
                    key={key} 
                    className={`package-scroll-card ${isSelected ? 'active-highlight' : ''}`}
                    onClick={() => setActivePack(Number(key))}
                  >
                    {isSelected ? (
                      <>
                        <div className="active-card-icon-box">
                          {wireframeHouseSVG}
                        </div>
                        <div className="active-card-details">
                          <h3>{packagesData[key].title}</h3>
                          <p>{packagesData[key].price}</p>
                        </div>
                        <button className="active-card-know-more-btn" onClick={() => setIsModalOpen(true)}>
                          Know More
                        </button>
                      </>
                    ) : (
                      <div className="inactive-card-content">
                        <h3>{packagesData[key].title}</h3>
                        <p>{packagesData[key].price}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GREEN HOMES */}
      <section className="green-homes-redesign">
        <div className="container">
          <div className="green-homes-layout">
            <div className="green-left-col">
              <h2>Eco Friendly Green Home Construction</h2>
              <button className="green-know-more-btn" onClick={() => setIsModalOpen(true)}>Know More</button>
            </div>
            
            <div className="green-right-col">
              <div className="green-feature-item">
                <div className="green-icon-circle">
                  <i className="fa-solid fa-house-circle-check"></i>
                </div>
                <p>Have good perspective and technical knowledge of green homes.</p>
              </div>
              
              <div className="green-feature-divider"></div>
              
              <div className="green-feature-item">
                <div className="green-icon-circle">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <p>Make energy-efficient designs to minimize environmental impact.</p>
              </div>
              
              <div className="green-feature-divider"></div>
              
              <div className="green-feature-item">
                <div className="green-icon-circle">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <p>Use eco-friendly materials to reduce long-term costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATE LEAD FORM */}
      <section className="consultation-section" id="how-to-start">
        <div className="container">
          <div className="consultation-layout">
            
            {/* Left Steps Flow */}
            <div className="consultation-steps-column">
              <img src="/blueprint_model.png" alt="Blueprint backdrop" className="steps-blueprint-backdrop" />
              
              <div className="step-flow-card">
                <div className="step-flow-num">01</div>
                <div className="step-flow-text">
                  <span>Step</span>
                  <h4>Fill the form here and submit.</h4>
                </div>
              </div>
              
              <div className="step-flow-card">
                <div className="step-flow-num">02</div>
                <div className="step-flow-text">
                  <span>Step</span>
                  <h4>Our construction experts will get in touch with you.</h4>
                </div>
              </div>
              
              <div className="step-flow-card">
                <div className="step-flow-num">03</div>
                <div className="step-flow-text">
                  <span>Step</span>
                  <h4>Get the design options and price estimations.</h4>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="estimate-form-card-redesign">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group-line">
                  <label>Name*</label>
                  <input 
                    type="text" 
                    className="form-line-control" 
                    placeholder="Enter your name" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                
                <div className="form-group-line">
                  <label>Phone No*</label>
                  <div className="phone-line-wrapper">
                    <div className="phone-line-country">
                      <div className="flag-icon-india"></div>
                      <span>+91</span>
                    </div>
                    <input 
                      type="tel" 
                      className="form-line-control phone-input" 
                      placeholder="81234 56789" 
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group-line">
                  <label>Location*</label>
                  <select 
                    className="form-line-control form-line-select" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  >
                    <option value="">--Select Location--</option>
                    <option value="Jayanagar">Jayanagar, Bengaluru</option>
                    <option value="Whitefield">Whitefield, Bengaluru</option>
                    <option value="Indiranagar">Indiranagar, Bengaluru</option>
                    <option value="Kengeri">Kengeri, Bengaluru</option>
                    <option value="Malleshwaram">Malleshwaram, Bengaluru</option>
                    <option value="Mysuru">Mysuru, Karnataka</option>
                    <option value="Other">Other Parts of Karnataka</option>
                  </select>
                </div>

                <div className="form-group-line">
                  <label>Plot Size*</label>
                  <select 
                    className="form-line-control form-line-select" 
                    value={formData.plotSize}
                    onChange={(e) => setFormData({...formData, plotSize: e.target.value})}
                    required
                  >
                    <option value="">--Select Plot Size (Min Requirement 810 Sq. Ft.)--</option>
                    <option value="30x30">30x30 Ft (900 Sq. Ft.)</option>
                    <option value="30x40">30x40 Ft (1200 Sq. Ft.)</option>
                    <option value="40x40">40x40 Ft (1600 Sq. Ft.)</option>
                    <option value="40x60">40x60 Ft (2400 Sq. Ft.)</option>
                    <option value="50x80">50x80 Ft (4000 Sq. Ft.)</option>
                    <option value="custom">Other Plot Size</option>
                  </select>
                </div>

                <div className="form-group-line">
                  <label>Construction Requirements*</label>
                  <input 
                    type="text" 
                    className="form-line-control" 
                    placeholder="Enter your requirements (e.g. 3BHK Duplex)" 
                    value={formData.requirements} 
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})} 
                    required 
                  />
                </div>

                <div className="form-checkbox-line">
                  <input 
                    type="checkbox" 
                    id="authCheck" 
                    className="custom-checkbox"
                    checked={formData.authCheck}
                    onChange={(e) => setFormData({...formData, authCheck: e.target.checked})}
                    required 
                  />
                  <label htmlFor="authCheck">
                    I authorize HS Construction & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC settings.
                  </label>
                </div>

                <button type="submit" className="form-submit-btn-teal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="brands-section-redesign">
        <div className="container">
          <div className="section-header brands-header">
            <div className="section-tag brands-tag">
              <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
              <span className="tag-text">Our Brands</span>
              <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h2 className="section-title brands-title">Most Trusted & Loyal Partners</h2>
            <div className="brands-title-underline"></div>
          </div>

          <div className="brands-marquee-container">
            <div className="brands-marquee-track">
              
              {/* Brand 1: ACC */}
              <div className="brand-logo-card-styled card-acc">
                <span className="acc-text">ACC</span>
              </div>
              
              {/* Brand 2: BHUWALKA */}
              <div className="brand-logo-card-styled card-bhuwalka">
                <div className="bhuwalka-logo-box">
                  <span className="bhuwalka-text">BHUWALKA</span>
                  <span className="bhuwalka-sub">Steel of Quality</span>
                </div>
              </div>
              
              {/* Brand 3: ULTRATECH */}
              <div className="brand-logo-card-styled card-ultratech">
                <div className="ultratech-logo-box">
                  <span className="ultra-title">UltraTech</span>
                  <span className="ultra-sub">CEMENT</span>
                </div>
              </div>
              
              {/* Brand 4: ASIAN PAINTS */}
              <div className="brand-logo-card-styled card-asianpaints">
                <div className="ap-logo-box">
                  <div className="ap-icon-flower"></div>
                  <span className="ap-text">asianpaints</span>
                </div>
              </div>

              {/* DUPLICATE SET FOR SEAMLESS LOOP */}
              
              {/* Brand 1: ACC */}
              <div className="brand-logo-card-styled card-acc">
                <span className="acc-text">ACC</span>
              </div>
              
              {/* Brand 2: BHUWALKA */}
              <div className="brand-logo-card-styled card-bhuwalka">
                <div className="bhuwalka-logo-box">
                  <span className="bhuwalka-text">BHUWALKA</span>
                  <span className="bhuwalka-sub">Steel of Quality</span>
                </div>
              </div>
              
              {/* Brand 3: ULTRATECH */}
              <div className="brand-logo-card-styled card-ultratech">
                <div className="ultratech-logo-box">
                  <span className="ultra-title">UltraTech</span>
                  <span className="ultra-sub">CEMENT</span>
                </div>
              </div>
              
              {/* Brand 4: ASIAN PAINTS */}
              <div className="brand-logo-card-styled card-asianpaints">
                <div className="ap-logo-box">
                  <div className="ap-icon-flower"></div>
                  <span className="ap-text">asianpaints</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="faq-section" id="faqs">
        <div className="container">
          <div className="section-header faq-section-header">
            <div className="section-tag faq-tag">
              <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
              <span className="tag-text">FAQs</span>
              <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h2 className="section-title faq-title">Related to Costing</h2>
            <div className="faq-title-underline"></div>
          </div>

          <div className="faq-grid-redesign">
            {/* Left FAQ list */}
            <div className="faq-list-col">
              <div className="faq-accordion">
                {[
                  {
                    q: "What is the cost per square foot for building a house?",
                    a: "HS Construction offers construction packages from ₹1,620 to ₹3,000 per sq. ft., based on design, materials, and client requirements."
                  },
                  {
                    q: "Is the costing final?",
                    a: "Yes, once the specifications and contract are signed, the cost remains locked unless there are changes in layouts or additions requested by the client."
                  },
                  {
                    q: "What costs are included?",
                    a: "Our turnkey packages include architecture design, floor planning, structural engineering, raw materials, civil labor, plumbing, electrification, flooring, painting, and basic fixtures."
                  },
                  {
                    q: "Does HS Construction charge taxes?",
                    a: "Yes, applicable GST is charged as per government regulations and is documented transparently in our billing sheets."
                  },
                  {
                    q: "Any other additional charges?",
                    a: "There are no hidden charges. External approvals, municipal water connection, and electrical board deposits are paid directly to government agencies by the client, with full assistance from our team."
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`faq-item-redesign ${openFaq === idx + 1 ? 'open' : ''}`}>
                    <div className="faq-header-redesign" onClick={() => setOpenFaq(openFaq === idx + 1 ? 0 : idx + 1)}>
                      <span>{item.q}</span>
                      <div className="faq-icon-indicator-redesign">
                        <i className={`fa-solid ${openFaq === idx + 1 ? 'fa-minus' : 'fa-plus'}`}></i>
                      </div>
                    </div>
                    <div className="faq-body-redesign">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="faq-view-more-btn" onClick={() => setIsModalOpen(true)}>View More</button>
            </div>

            {/* Right Illustration side */}
            <div className="faq-visual-side-redesign">
              <img src="/faq_house_design.png" alt="FAQ House blueprint visual sketch" className="faq-visual-image" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-addresses">
              <div className="address-box">
                <i className="fa-solid fa-location-dot"></i>
                <div className="address-details">
                  <h4>Knowledge Centre</h4>
                  <p>Dollars Colony, JP Nagar Main Rd, Bengaluru, Karnataka 560078</p>
                </div>
              </div>
              <div className="address-box">
                <i className="fa-solid fa-building"></i>
                <div className="address-details">
                  <h4>Design Office</h4>
                  <p>Kasturba Road, Opp. Cubbon Park, Bengaluru, Karnataka 560001</p>
                </div>
              </div>
              <div className="address-box">
                <i className="fa-solid fa-compass"></i>
                <div className="address-details">
                  <h4>Experience Center</h4>
                  <p>Jayanagar 4th Block, Near Metro Station, Bengaluru, Karnataka 56011</p>
                </div>
              </div>
              <div className="address-box">
                <i className="fa-solid fa-map"></i>
                <div className="address-details">
                  <h4>Mysuru Hub</h4>
                  <p>Kuvempu Nagara, Double Road, Mysuru, Karnataka 570023</p>
                </div>
              </div>
            </div>

            <div className="footer-logo-col">
              <img src="/logo.jpeg" alt="HS Construction" />
              <p>
                Crafting structures, creating lifelong value. Dedicated to bringing top-tier architectural integrity, eco-friendly green systems, and absolute transparency to Bengaluru homes.
              </p>
              <div style={{display: 'flex', gap: '14px', marginTop: '20px'}}>
                <a href="#" className="open-modal-trigger" style={{width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '16px'}}><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="open-modal-trigger" style={{width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '16px'}}><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="open-modal-trigger" style={{width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '16px'}}><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-links-col">
              <ul className="footer-links-list">
                <li><a href="#about">Our Homes</a></li>
                <li><a href="#about">Green Homes</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#packages">Popular Packages</a></li>
              </ul>
              <ul className="footer-links-list">
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#completed-works">Completed Projects</a></li>
                <li><a href="#" onClick={() => setIsModalOpen(true)}>Privacy & Policy</a></li>
                <li><a href="#" onClick={() => setIsModalOpen(true)}>Contact Swaragh</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>Copyrights &copy; 2026 HS Construction & Builders Pvt Ltd. All Rights Reserved.</div>
            <div className="footer-bottom-links">
              <a href="#" onClick={() => setIsModalOpen(true)}>Terms & Conditions</a>
              <span>|</span>
              <a href="#" onClick={() => setIsModalOpen(true)}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="floating-action-buttons">
        <a href="https://wa.me/917090005600" target="_blank" rel="noreferrer" className="float-btn float-whatsapp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <div className="float-btn float-quote" onClick={() => setIsModalOpen(true)}>
          <i className="fa-solid fa-headset"></i>
        </div>
      </div>

      {/* GENERAL MODAL POPUP */}
      {isModalOpen && (
        <div className="modal-overlay open" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <h3>Get Free Construction Consultation</h3>
            <p>Our senior civil engineer will call you to plan your dimensions, structure layout, and complete estimate schedule.</p>
            <form onSubmit={handleModalSubmit}>
              <div className="form-group" style={{marginBottom: '16px'}}>
                <label>Full Name *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter name" 
                  value={modalData.name}
                  onChange={(e) => setModalData({...modalData, name: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group" style={{marginBottom: '16px'}}>
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="10-digit number" 
                  pattern="[0-9]{10}"
                  value={modalData.phone}
                  onChange={(e) => setModalData({...modalData, phone: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group" style={{marginBottom: '24px'}}>
                <label>Preferred Callback Time *</label>
                <select 
                  className="form-control form-select" 
                  value={modalData.time}
                  onChange={(e) => setModalData({...modalData, time: e.target.value})}
                  required
                >
                  <option value="immediate">Immediate (Next 15 minutes)</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-secondary" style={{width: '100%'}}>Schedule Free Call</button>
            </form>
          </div>
        </div>
      )}

      {/* PORTFOLIO LIGHTBOX */}
      {lightboxImg && (
        <div className="lightbox-overlay open" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={() => setLightboxImg(null)}><i className="fa-solid fa-xmark"></i></span>
            <img src={lightboxImg} alt="Portfolio Large Image" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}
