import React, { useState, useEffect } from 'react';

// Roadmap Steps Data (10 Steps matching buildahome.in)
const howItWorksData = [
  {
    num: "01",
    title: "Enquiry & Consultation",
    subTitle: "Initiating Your Journey with Experts",
    desc: "Enquire and schedule a detailed appointment with our structural experts to discuss your spatial requirements. Through virtual and physical sessions, our technical engineers ensure that no detail is overlooked, creating an initial high-fidelity blueprint.",
    img: "/project_house1.png",
    bullets: [
      "Understanding construction and budget goals.",
      "Scheduling site visit and consultation."
    ],
    iconClass: "fa-solid fa-phone"
  },
  {
    num: "02",
    title: "Professional Site Inspection",
    subTitle: "Rigorous Evaluation of Your Plot",
    desc: "We conduct a thorough physical survey of your plot, evaluating soil bearing capacity, level measurements, and neighborhood boundaries to plan structural loads accurately.",
    img: "/project_house2.png",
    bullets: [
      "Comprehensive soil testing and topography mapping.",
      "Water source and power availability check."
    ],
    iconClass: "fa-solid fa-map-location-dot"
  },
  {
    num: "03",
    title: "Design and Planning",
    subTitle: "Shaping Your Vision into a Solid Plan",
    desc: "Once the advance is made, we begin the design phase where our team conceptualizes your specific requirements and translates them into a virtual blueprint. This includes both the floor plan and the elevation, tailored to your preferences and Vaastu compliance. Our design team will also present you with various design options, ensuring that the final plan meets your expectations.",
    img: "/completed_project_1.png",
    bullets: [
      "Provide comprehensive 3D architectural floor plan and elevation designs.",
      "A key priority is ensuring the design is Vaastu compliant."
    ],
    iconClass: "fa-solid fa-pen-ruler"
  },
  {
    num: "04",
    title: "Proposal and Quotation",
    subTitle: "High time to wrap up the paperwork and confirm the timeline",
    desc: "Once the design is finalized, we provide a transparent, fixed-cost quote with no hidden fees. Following detailed discussions, we finalize the house construction cost, and further confirm the schedule and work plan, ensuring full transparency from day one. Our commitment to clear pricing and a detailed timeline guarantees confidence.",
    img: "/completed_project_2.png",
    bullets: [
      "Comprehensive Proposal with a Fixed Quotation.",
      "Transparent Pricing with a Fixed Timeline."
    ],
    iconClass: "fa-solid fa-calculator"
  },
  {
    num: "05",
    title: "Agreement and Contract",
    subTitle: "Navigating Agreements and Contracts with Confidence",
    desc: "Once the design is approved and the costing is finalized, we move forward with completing the necessary paperwork and signing the construction agreement. This agreement will lock in the fixed cost and ensure that no subcontracting takes place at any stage of the project. Upon signing, our team will provide a detailed agenda outlining the work plan and finalizing the project schedule.",
    img: "/completed_project_3.png",
    bullets: [
      "Clear Agreement and No Subcontracting Business.",
      "Detailed outline of the agenda and project schedule."
    ],
    iconClass: "fa-solid fa-file-signature"
  },
  {
    num: "06",
    title: "Pre-Construction Preparation",
    subTitle: "Your Roadmap to a Successful Construction Start",
    desc: "As part of our standard practice, our team of architects, structural and MEP designers, and the executive team will guide you through every step of this process, ensuring you make informed decisions to bring the agreed-upon house construction plan to life. At this stage, we initiate all essential backend work, including material procurement and organizing the labor team.",
    img: "/completed_project_4.png",
    bullets: [
      "Meticulous Planning and Clear Project Tracking.",
      "Work Schedule and On-Time Start."
    ],
    iconClass: "fa-solid fa-clipboard-list"
  },
  {
    num: "07",
    title: "Excavation & Foundation",
    subTitle: "Laying a Strong Foundation for Your Home",
    desc: "We start civil excavation at the site, followed by laying the reinforcement steel and casting footings. A strong foundation ensures the structural longevity of your building, keeping it safe from shifting soil and water absorption.",
    img: "/project_house1.png",
    bullets: [
      "Precise excavation according to structural plans.",
      "Anti-termite soil treatment and PCC layering."
    ],
    iconClass: "fa-solid fa-trowel"
  },
  {
    num: "08",
    title: "Structure & Column Casting",
    subTitle: "Erecting the Backbone of the House",
    desc: "Our engineers supervise the beam and roof slab casting, conducting strict concrete slump and cube compression tests to verify the quality. The columns and frame form the robust structural skeleton of your home.",
    img: "/project_house2.png",
    bullets: [
      "High-grade RCC column and beam casting.",
      "Roof slab reinforcement and quality casting checks."
    ],
    iconClass: "fa-solid fa-trowel-bricks"
  },
  {
    num: "09",
    title: "Brickwork & Plastering",
    subTitle: "Shaping the Rooms and Spaces",
    desc: "We build internal partition walls to define room dimensions. Our masons apply double-layer plastering to guarantee smooth walls, perfect alignments, and excellent water-resistant properties before painting.",
    img: "/project_house1.png",
    bullets: [
      "Solid cement block masonry for walls.",
      "Dual-layer internal and external plastering."
    ],
    iconClass: "fa-solid fa-paint-roller"
  },
  {
    num: "10",
    title: "Project Handover",
    subTitle: "Handing Over the Keys to Your New Home with Care",
    desc: "The ultimate project handover marks the successful completion of your home construction journey with us and is ready for the transition of the fully finished property to your joy. This final phase includes an exhaustive final inspection to ensure that every feature meets the agreed specifications. It is time to hand over all necessary documentation, featuring warranties and maintenance guides, to ensure you are totally satisfied before officially handing over the keys.",
    img: "/project_house2.png",
    bullets: [
      "Complete Final Inspection and handover kit is given.",
      "Ongoing Support and Satisfaction Assurance."
    ],
    iconClass: "fa-solid fa-key"
  }
];

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

// Our Homes Data
const ourHomesData = [
  {
    id: 1,
    name: "Vipul's Dream Home",
    package: "Premium",
    location: "Shivaramkaranth Nagar",
    area: "3,735 sqft",
    floors: "G+2.5",
    price: "₹74 Lakhs",
    duration: "12 Months",
    coverImg: "/completed_project_1.png",
    phases: [
      { label: "Foundation & Slab", img: "/completed_project_1.png" },
      { label: "Structure & Columns", img: "/completed_project_2.png" },
      { label: "Brickwork & Plaster", img: "/completed_project_3.png" },
      { label: "Electrical & Plumbing", img: "/completed_project_4.png" },
      { label: "Tiling & Finishing", img: "/completed_project_1.png" },
      { label: "Final Handover", img: "/completed_project_2.png" }
    ]
  },
  {
    id: 2,
    name: "Guru Raghavendra's Dream Home",
    package: "Essential",
    location: "Kengeri, Bengaluru",
    area: "2,400 sqft",
    floors: "G+1.5",
    price: "₹45 Lakhs",
    duration: "9 Months",
    coverImg: "/completed_project_2.png",
    phases: [
      { label: "Foundation & Slab", img: "/completed_project_2.png" },
      { label: "Structure & Columns", img: "/completed_project_3.png" },
      { label: "Brickwork & Plaster", img: "/completed_project_4.png" },
      { label: "Electrical & Plumbing", img: "/completed_project_1.png" },
      { label: "Tiling & Finishing", img: "/completed_project_2.png" },
      { label: "Final Handover", img: "/completed_project_3.png" }
    ]
  },
  {
    id: 3,
    name: "Kalakar's Dream Home",
    package: "Premium",
    location: "Whitefield, Bengaluru",
    area: "3,100 sqft",
    floors: "G+2",
    price: "₹62 Lakhs",
    duration: "11 Months",
    coverImg: "/completed_project_3.png",
    phases: [
      { label: "Foundation & Slab", img: "/completed_project_3.png" },
      { label: "Structure & Columns", img: "/completed_project_4.png" },
      { label: "Brickwork & Plaster", img: "/completed_project_1.png" },
      { label: "Electrical & Plumbing", img: "/completed_project_2.png" },
      { label: "Tiling & Finishing", img: "/completed_project_3.png" },
      { label: "Final Handover", img: "/completed_project_4.png" }
    ]
  },
  {
    id: 4,
    name: "Aditya's Dream Home",
    package: "Luxury",
    location: "Jayanagar, Bengaluru",
    area: "4,500 sqft",
    floors: "G+3",
    price: "₹1.1 Crores",
    duration: "14 Months",
    coverImg: "/completed_project_4.png",
    phases: [
      { label: "Foundation & Slab", img: "/completed_project_4.png" },
      { label: "Structure & Columns", img: "/completed_project_1.png" },
      { label: "Brickwork & Plaster", img: "/completed_project_2.png" },
      { label: "Electrical & Plumbing", img: "/completed_project_3.png" },
      { label: "Tiling & Finishing", img: "/completed_project_4.png" },
      { label: "Final Handover", img: "/completed_project_1.png" }
    ]
  }
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

const standardSectionDetails = {
  "Civil Construction": [
    "High-grade standard concrete casting with strict slump testing.",
    "First-class red clay brick/solid block masonry.",
    "Internal and external plastering with rich cement mortar mix."
  ],
  "Architectural Design": [
    "Bespoke spatial design planning by senior architects.",
    "Detailed room layouts and furniture positioning drawings.",
    "Cross-section and structural alignment reviews."
  ],
  "Interior Design": [
    "2D furniture layout and space zoning plans.",
    "Color scheme curation and material selection guides.",
    "Basic styling suggestions and lighting placement guidelines."
  ],
  "Structural Designing": [
    "Structural loading and load-distribution calculations.",
    "RCC framing, column, and beam structural drawing sets.",
    "Foundation engineering designs certified by structural consultants."
  ],
  "MEP Designing": [
    "Electrical conduit piping and distribution board layouts.",
    "Plumbing waterline routing and pressure reviews.",
    "Sanitary drainage, rainwater harvesting, and septic tank layouts."
  ],
  "Government Liaison Assistance": [
    "Building plan approval documentation and guidance.",
    "Liaison assistance for temporary and permanent electrical connection.",
    "Liaison assistance for water supply and sewage board approvals."
  ],
  "Flooring Wall tiling": [
    "Premium vitrified tiles for living, dining, and bedroom floors.",
    "Antiskid ceramic tiles for bathroom flooring.",
    "Premium glazed ceramic tiles for bathroom wall dadoing up to 7 feet."
  ],
  "Painting": [
    "Double coat premium wall putty and primer for interior walls.",
    "Two coats of premium interior emulsion paint.",
    "Weatherproof exterior emulsion paint for exterior walls."
  ],
  "Electrical": [
    "Fire-resistant concealed copper wires of reputed brands.",
    "Modular switches and sockets with metallic board backing.",
    "Inverter wiring provision and split AC points in bedrooms."
  ],
  "Plumbing": [
    "CPVC pipes for hot and cold internal waterline setups.",
    "PVC pipelines for internal and external soil and waste lines.",
    "Reputed brand sanitary fittings and overhead water tank setup."
  ],
  "Fixtures": [
    "Teal/Chrome branded brass plumbing fixtures.",
    "Wall-mounted or floor-mounted ceramic toilet closets.",
    "Premium design washbasins in dining and bathrooms."
  ],
  "Doors": [
    "Teakwood main door frame and premium shutter design.",
    "Hardwood frames with skin shutters for internal doors.",
    "Waterproof PVC doors for restrooms."
  ],
  "Windows": [
    "Concealed slide UPVC or high-end aluminium window systems.",
    "Safety grills manufactured with mild steel rods.",
    "Toughened float glass panels for window frame shuttering."
  ],
  "Fabrication": [
    "Mild steel railings for staircase and balcony safety.",
    "Main gate fabrication matching the compound wall design.",
    "Safety grills for utility areas."
  ],
  "Compound Wall": [
    "Brick compound wall up to 5 feet height from ground level.",
    "Plastering with cement mortar on both sides.",
    "Weatherproof painting matching the main elevation."
  ],
  "Elevation": [
    "Premium aesthetic elevation design with plastering grooves.",
    "Glass balcony railings or CNC metal designs where specified.",
    "Highlight elevation wall painting."
  ],
  "Exclusions & Incidentals": [
    "Temporary power connection deposits and consumption charges paid by client.",
    "Road cutting approvals, municipal water connection deposits.",
    "Site cleanup, borewell setup, and excavation rock removal."
  ],
  "Payment Structure": [
    "Milestone-based stage-wise payment structure (Booking, Foundation, Slabs, Plastering, Handover)."
  ],
  "Warranty and Guarantee": [
    "10-Year structural concrete framework warranty.",
    "1-Year general plumbing, electrical, and waterproofing warranty."
  ],
  "Sustainable Consultation": [
    "Eco-friendly bricks/blocks review and green rating optimization.",
    "Solar panel wiring and rainwater harvesting consulting.",
    "Natural light and ventilation maximization review."
  ]
};

const detailedPackagesData = [
  {
    name: "Essential",
    price: "Rs.1680/*- Sq Ft",
    icon: "fa-solid fa-wheat-awn",
    color: "#06b6d4",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Design Development – A maximum of 3 drawing revisions"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Premium",
    price: "Rs.1899/*- Sq Ft",
    icon: "fa-solid fa-award",
    color: "#3b82f6",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Design Development – A maximum of 3 of drawing revisions per drawing",
        "Basic Internal Isometric Views of the floor plan",
        "Visual site survey & drawing on the basis of measurement provided by client"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Premium +",
    price: "Rs.2099/*- Sq Ft",
    icon: "fa-solid fa-gem",
    color: "#1d4ed8",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Design Development – A maximum of 3 drawing revisions",
        "Internal Isometric views all rooms, open areas etc.",
        "Visual site survey & drawing on the basis of measurement provided by client",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "Basic VR of the 3D model"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Luxury",
    price: "Rs.2370/*- Sq Ft",
    icon: "fa-solid fa-crown",
    color: "#8b5cf6",
    sections: {
      "Design and Drawings": [
        "Premium 2D & 3D – Floor Plans",
        "Luxury 3D Elevation Designs of all views",
        "Design Development – A maximum of 40 drawing revisions",
        "Internal Isometric Views all rooms, open areas etc & detailed renders for each segment of the home for better understanding of the design",
        "Detailed Landscaping design",
        "3D Walkthrough of the home along with internal & external walkthrough",
        "Hands on isometric 3D model of the home with separate floors",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "VR for the 3D Walkthrough of the home along with internal & external walkthrough"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Luxury +",
    price: "Rs.2550/*- Sq Ft",
    icon: "fa-solid fa-chess-king",
    color: "#6d28d9",
    sections: {
      "Design and Drawings": [
        "Premium 2D & 3D – Floor Plans",
        "Luxury 3D Elevation Designs of all views",
        "Design Development – A maximum of 40 drawing revisions",
        "Internal Isometric Views all rooms, open areas etc & detailed renders for each segment of the home for better understanding of the design",
        "Detailed Landscaping design",
        "3D Walkthrough of the home along with internal & external walkthrough",
        "Hands on isometric 3D model of the home with separate floors",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "VR for the 3D Walkthrough of the home along with internal & external walkthrough including interior renders"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Freedom",
    price: "Rs.2220/*- Sq Ft",
    icon: "fa-solid fa-dove",
    color: "#f59e0b",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Design Development – A maximum of 3 drawing revisions per drawing",
        "Internal Isometric Views all rooms, open areas etc.",
        "Visual site survey & drawing on the basis of measurement provided by client"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Freedom +",
    price: "Rs.2349/*- Sq Ft",
    icon: "fa-solid fa-scale-balanced",
    color: "#d97706",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Design Development – A maximum of 3 drawing revisions",
        "Internal Isometric Views all rooms, open areas etc.",
        "Visual site survey & drawing on the basis of measurement provided by client",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "Basic VR of the 3D model"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "The one +",
    price: "Rs.3099/*- Sq Ft",
    icon: "fa-solid fa-star",
    color: "#ec4899",
    sections: {
      "Design and Drawings": [
        "Premium 2D & 3D – Floor Plans",
        "Luxury 3D Elevation Designs of all views",
        "Technical & detailed Presentation of floor plans, multiple home visits from the design team to help finalize all designs",
        "Sketching & interactive sessions of all aspects",
        "Internal Isometric Views of rooms, open areas etc & detailed renders for better understanding of the design",
        "Detailed Landscaping design",
        "3D Walkthrough of the home along with internal & external walkthrough",
        "Hands on isometric 3D model of the home with separate floors",
        "Site survey by surveyor with instruments & drawing on the basis of survey",
        "Curated VR models will include interior elements & furniture post designing (if interior executed by Company). Get 5 more changes for the VR model"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Ecofriendly",
    price: "Rs.1900/*- Sq Ft",
    icon: "fa-solid fa-leaf",
    color: "#10b981",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Internal Isometric Views to understand eco friendly design better",
        "Design Development – A maximum of 3 of drawing revisions per drawing",
        "Visual site survey & drawing on the basis of measurement provided by client"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": [],
      "Sustainable Consultation": []
    }
  },
  {
    name: "Ecofriendly +",
    price: "Rs.2099/*- Sq Ft",
    icon: "fa-solid fa-tree",
    color: "#047857",
    sections: {
      "Design and Drawings": [
        "2D – Floor Plans",
        "3D Elevation Designs",
        "Internal Isometric Views to understand eco friendly design better",
        "Design Development – A maximum of 3 of drawing revisions per drawing",
        "Visual site survey & drawing on the basis of measurement provided by client",
        "Site survey by surveyor with instruments & drawing on the basis of survey"
      ],
      "Civil Construction": [],
      "Architectural Design": [],
      "Interior Design": [],
      "Structural Designing": [],
      "MEP Designing": [],
      "Government Liaison Assistance": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Payment Structure": [],
      "Warranty and Guarantee": [],
      "Sustainable Consultation": []
    }
  },
  {
    name: "Shell and Core",
    price: "Rs.1245/*- Sq Ft",
    icon: "fa-solid fa-trowel-bricks",
    color: "#64748b",
    sections: {
      "Design and Drawings": [
        "2D Floor Plans & 3D Elevation Design",
        "Internal isometric views – All rooms, open areas etc.",
        "Architectural Design – All necessary Working Drawings, schedule of openings, section, elevation & Detailed portfolio of the home post handover",
        "Design Development – A maximum of 3 of drawing revisions per drawing",
        "Interior Design - 2D furniture layout, assistance in material procurement, 3D interior designs if executed by bAh",
        "Structural Design – Structural Design & GFC Drawings, Soil test report, Design Analysis Report & Overlapped Structural, Architectural & MEP Drawings MEP Design - Electrical layout, Plumbing Waterline layout Plumbing Drainage layout.",
        "buildAhome will provide liaison assistance with different government agencies (Plan approval, Electrical, Water & Sewage Connection)",
        "Visual site survey & drawing on the basis of measurement provided by clients & site survey by surveyor with instruments & drawing on the basis of survey"
      ],
      "Civil Construction": [],
      "MEP Designing": [],
      "Electrical": [],
      "Doors": [],
      "Windows": [],
      "Compound Wall": [],
      "Elevation": [],
      "Exclusions & Incidentals": [],
      "Warranty and Guarantee": []
    }
  },
  {
    name: "Pure",
    price: "Rs.1199/*- Sq Ft",
    icon: "fa-solid fa-droplet",
    color: "#0ea5e9",
    sections: {
      "Design and Drawings": [
        "One set of architectural floor plan, elevation, basic structural design and basic MEP layout with a few working drawings are provided as a value added service free of cost."
      ],
      "Civil Construction": [],
      "Structural Designing": [],
      "Flooring Wall tiling": [],
      "Painting": [],
      "Electrical": [],
      "Plumbing": [],
      "Fixtures": [],
      "Doors": [],
      "Windows": [],
      "Fabrication": [],
      "Elevation": [],
      "Exclusions & Incidentals": []
    }
  }
];

export default function App() {
  // State variables for interactive widgets
  const [activeTesti, setActiveTesti] = useState(1);
  const [activePack, setActivePack] = useState(1);
  const [openFaq, setOpenFaq] = useState(1);
  const [aboutSlide, setAboutSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [sliderOffset, setSliderOffset] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  // Our Homes state
  const [selectedHomeId, setSelectedHomeId] = useState(1);
  const [phasesOffset, setPhasesOffset] = useState(0);
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);
  const [expandedSecIndex, setExpandedSecIndex] = useState(0);
  const [whyActiveTab, setWhyActiveTab] = useState(0);
  const [hireFormData, setHireFormData] = useState({
    name: '',
    phone: '',
    location: '',
    constructionType: '',
    plotSize: '',
    floors: '',
    budget: '',
    requirements: '',
    authCheck: true
  });

  const handleNavigation = (tabId, elementId) => {
    setCurrentTab(tabId);
    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  // Contact Us Form State
  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    location: '',
    plotSize: '',
    requirements: '',
    authCheck: true
  });

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${contactFormData.name}! Your request has been received. Our construction experts will contact you shortly on +91 ${contactFormData.phone} for your project at ${contactFormData.location}.`);
    setContactFormData({
      name: '',
      phone: '',
      location: '',
      plotSize: '',
      requirements: '',
      authCheck: true
    });
  };

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

  // Auto scroll Phases carousel
  useEffect(() => {
    setPhasesOffset(0);
  }, [selectedHomeId]);

  useEffect(() => {
    const selectedHome = ourHomesData.find(h => h.id === selectedHomeId);
    if (!selectedHome) return;
    const maxOffset = selectedHome.phases.length - 3;
    if (maxOffset <= 0) return;
    const timer = setInterval(() => {
      setPhasesOffset(prev => (prev >= maxOffset ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedHomeId]);

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

  const handleHireFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${hireFormData.name}! We have received your detailed request for a ${hireFormData.constructionType} construction on a ${hireFormData.plotSize} plot (${hireFormData.floors}) in ${hireFormData.location}. Budget: ${hireFormData.budget}. Our senior engineer will contact you shortly.`);
    setHireFormData({
      name: '',
      phone: '',
      location: '',
      constructionType: '',
      plotSize: '',
      floors: '',
      budget: '',
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
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
              <img src="/logo.jpeg" alt="HS Construction & Builders" className="logo-img" />
            </a>
          </div>
          
          <ul className="nav-menu">
            <li><a href="#our-homes" className={`nav-link ${currentTab === 'our-homes' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigation('our-homes'); }}>Our Homes</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('home', 'about'); }}>Green Homes</a></li>
            <li><a href="#how-it-works" className={`nav-link ${currentTab === 'how-it-works' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigation('how-it-works'); }}>How It Works</a></li>
            <li><a href="#packages" className={`nav-link ${currentTab === 'packages' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigation('packages'); }}>Packages</a></li>
            <li><a href="#contact" className={`nav-link ${currentTab === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>Contact Us</a></li>
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

      {currentTab === 'home' && (
        <>
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
          <div className="section-header why-header">
            <div className="section-tag why-tag">
              <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
              <span className="tag-text">Why Us</span>
              <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <h2 className="section-title why-title">Why HS Construction Is Best for Turnkey Home Constructions?</h2>
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
        <div className="section-header about-header">
          <div className="section-tag about-tag">
            <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
            </svg>
            <span className="tag-text">About Us</span>
            <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
            </svg>
          </div>
          <h2 className="section-title about-title">One-Stop Solution for Your Dream Home Construction</h2>
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

      {/* HOW IT WORKS Timeline section has been moved to its own page view conditional rendering */}

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
          </>
        )}

      {currentTab === 'our-homes' && (
        <>
          {/* OUR HOMES SECTION */}
          {(() => {
            const selectedHome = ourHomesData.find(h => h.id === selectedHomeId);
            const maxPhasesOffset = selectedHome ? Math.max(0, selectedHome.phases.length - 3) : 0;
            const pkgColor = { Premium: '#40b2b2', Essential: '#f59e0b', Luxury: '#8b5cf6' };
            return (
              <section className="our-homes-section" id="our-homes">
                <div className="container">
                  {/* Heading */}
                  <div className="section-header our-homes-header">
                    <div className="section-tag">
                      <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none">
                        <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                      </svg>
                      <span className="tag-text">Our Homes</span>
                      <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none">
                        <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                      </svg>
                    </div>
                    <h2 className="section-title">Delivering the Highest Quality in Turnkey Home Construction Services</h2>
                  </div>

                  {/* 4 Project Cards Grid */}
                  <div className="oh-cards-grid">
                    {ourHomesData.map(home => (
                      <div
                        key={home.id}
                        className={`oh-card${selectedHomeId === home.id ? ' oh-card-active' : ''}`}
                        onClick={() => setSelectedHomeId(home.id)}
                      >
                        {/* Cover Image */}
                        <div className="oh-card-img-wrap">
                          <img src={home.coverImg} alt={home.name} className="oh-card-img" />
                          {/* Package badge */}
                          <span className="oh-pkg-badge" style={{ background: pkgColor[home.package] || '#40b2b2' }}>
                            {home.package}
                          </span>
                          {/* Hover info overlay */}
                          <div className="oh-hover-overlay">
                            <div className="oh-hover-row">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="oh-hover-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                              <span>{home.location}</span>
                            </div>
                            <div className="oh-hover-row">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="oh-hover-icon"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                              <span>{home.area}</span>
                            </div>
                            <div className="oh-hover-row">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="oh-hover-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                              <span>{home.floors}</span>
                            </div>
                            <div className="oh-hover-row">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="oh-hover-icon"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                              <span>{home.price}</span>
                            </div>
                          </div>
                        </div>
                        {/* Title */}
                        <div className="oh-card-title">{home.name}</div>
                      </div>
                    ))}
                  </div>

                  {/* Selected Home Details Panel */}
                  {selectedHome && (
                    <div className="oh-detail-panel">
                      {/* 6 Spec Items */}
                      <div className="oh-spec-grid">
                        {/* Location */}
                        <div className="oh-spec-item">
                          <div className="oh-spec-icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          </div>
                          <div>
                            <div className="oh-spec-label">Location</div>
                            <div className="oh-spec-value">{selectedHome.location}</div>
                          </div>
                        </div>
                        {/* Total Area */}
                        <div className="oh-spec-item">
                          <div className="oh-spec-icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                          </div>
                          <div>
                            <div className="oh-spec-label">Total Area</div>
                            <div className="oh-spec-value">{selectedHome.area}</div>
                          </div>
                        </div>
                        {/* Floors */}
                        <div className="oh-spec-item">
                          <div className="oh-spec-icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="15" width="20" height="4" rx="1"/><rect x="2" y="9" width="20" height="4" rx="1"/><rect x="2" y="3" width="20" height="4" rx="1"/></svg>
                          </div>
                          <div>
                            <div className="oh-spec-label">Floors</div>
                            <div className="oh-spec-value">{selectedHome.floors}</div>
                          </div>
                        </div>
                        {/* Price */}
                        <div className="oh-spec-item">
                          <div className="oh-spec-icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          </div>
                          <div>
                            <div className="oh-spec-label">Price</div>
                            <div className="oh-spec-value">{selectedHome.price}</div>
                          </div>
                        </div>
                        {/* Package */}
                        <div className="oh-spec-item">
                          <div className="oh-spec-icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                          </div>
                          <div>
                            <div className="oh-spec-label">Package</div>
                            <div className="oh-spec-value">{selectedHome.package}</div>
                          </div>
                        </div>
                        {/* Duration */}
                        <div className="oh-spec-item">
                          <div className="oh-spec-icon-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          </div>
                          <div>
                            <div className="oh-spec-label">Duration</div>
                            <div className="oh-spec-value">{selectedHome.duration}</div>
                          </div>
                        </div>
                      </div>

                      {/* Development Phases Carousel */}
                      <div className="oh-phases-wrap">
                        <div className="section-header" style={{ marginBottom: '28px' }}>
                          <div className="section-tag">
                            <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none">
                              <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                            </svg>
                            <span className="tag-text">Development Phases</span>
                            <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none">
                              <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                            </svg>
                          </div>
                          <h3 className="oh-phases-title">See the Different Phases of Development</h3>
                        </div>

                        <div className="oh-phases-carousel-wrap">
                          {/* Prev arrow */}
                          <button
                            className="oh-phases-arrow oh-phases-arrow-left"
                            type="button"
                            onClick={() => setPhasesOffset(p => Math.max(0, p - 1))}
                            disabled={phasesOffset === 0}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="15 18 9 12 15 6"/></svg>
                          </button>

                          {/* Slides */}
                          <div className="oh-phases-overflow">
                            <div
                              className="oh-phases-track"
                              style={{ transform: `translateX(calc(-${phasesOffset} * (33.333% + 12px)))` }}
                            >
                              {selectedHome.phases.map((phase, idx) => (
                                <div
                                  key={idx}
                                  className="oh-phase-card"
                                  onClick={() => setLightboxImg(phase.img)}
                                >
                                  <div className="oh-phase-img-wrap">
                                    <img src={phase.img} alt={phase.label} className="oh-phase-img" />
                                    <div className="oh-phase-zoom">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                                    </div>
                                  </div>
                                  <div className="oh-phase-label">{phase.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Next arrow */}
                          <button
                            className="oh-phases-arrow oh-phases-arrow-right"
                            type="button"
                            onClick={() => setPhasesOffset(p => Math.min(maxPhasesOffset, p + 1))}
                            disabled={phasesOffset >= maxPhasesOffset}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg>
                          </button>
                        </div>

                        {/* Dots */}
                        <div className="oh-phases-dots">
                          {Array.from({ length: maxPhasesOffset + 1 }).map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              className={`oh-phases-dot${phasesOffset === i ? ' active' : ''}`}
                              onClick={() => setPhasesOffset(i)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })()}
        </>
      )}

      {currentTab === 'how-it-works' && (
        <>
          <section className="steps-section" id="how-it-works" style={{ paddingTop: '140px', paddingBottom: '90px' }}>
          <div className="container">
            {/* Heading - matches buildahome style exactly */}
            <div className="section-header steps-header">
              <div className="section-tag steps-tag">
                <svg className="tag-bracket tag-bracket-left" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C6 8 4 12 4 12C4 12 6 16 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 6C9 9 7 12 7 12C7 12 9 15 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                </svg>
                <span className="tag-text">How It Works</span>
                <svg className="tag-bracket tag-bracket-right" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4C10 8 12 12 12 12C12 12 10 16 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M2 6C7 9 9 12 9 12C9 12 7 15 2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                </svg>
              </div>
              <h2 className="section-title steps-title">Your Roadmap to Building the Home of Your Dreams</h2>
            </div>

            <div className="timeline-container">
              {howItWorksData.map((step, index) => (
                <div key={index} className="timeline-item">
                  
                  {/* Node column */}
                  <div className="timeline-node">
                    <span className="timeline-number">{step.num}</span>
                    <div className="timeline-circle">
                      <i className={step.iconClass}></i>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="timeline-content">
                    <h3 className="timeline-step-title">{step.title}</h3>
                    <div className="timeline-columns">
                      {/* Image Column */}
                      <div className="timeline-image-col">
                        <img src={step.img} alt={step.title} />
                      </div>

                      {/* Text Column */}
                      <div className="timeline-text-col">
                        <h4 className="timeline-subheading">{step.subTitle}</h4>
                        <ul className="timeline-bullets">
                          {step.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="timeline-bullet-item">
                              <i className="fa-solid fa-circle-check timeline-bullet-icon"></i>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="timeline-desc">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIRE THE BEST CONSTRUCTION SERVICE */}
        <section className="hire-section">
          <div className="container">
            <h2 className="hire-main-title">Hire the Best Construction Service</h2>
            <div className="hire-layout">
              {/* Left Box: Info panel with blue overlay */}
              <div className="hire-info-card" style={{ backgroundImage: 'url(/hero_house_bg.png)' }}>
                <div className="hire-info-overlay">
                  <ul className="hire-info-list">
                    <li>
                      <span className="hire-info-icon"><i className="fa-solid fa-clock"></i></span>
                      <span className="hire-info-text">Timely Delivery</span>
                    </li>
                    <li>
                      <span className="hire-info-icon"><i className="fa-solid fa-shield-halved"></i></span>
                      <span className="hire-info-text">Construction Guarantee</span>
                    </li>
                    <li>
                      <span className="hire-info-icon"><i className="fa-solid fa-wallet"></i></span>
                      <span className="hire-info-text">No Hidden Charges</span>
                    </li>
                    <li>
                      <span className="hire-info-icon"><i className="fa-solid fa-users"></i></span>
                      <span className="hire-info-text">No Subcontracting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Box: Form panel */}
              <div className="hire-form-card">
                <form onSubmit={handleHireFormSubmit}>
                  <div className="hire-form-group">
                    <label>Name*</label>
                    <input
                      type="text"
                      className="hire-form-control"
                      placeholder="Enter your name"
                      value={hireFormData.name}
                      onChange={(e) => setHireFormData({ ...hireFormData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="hire-form-group">
                    <label>Phone No*</label>
                    <div className="hire-phone-wrapper">
                      <div className="hire-phone-prefix">
                        <div className="flag-icon-india"></div>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        className="hire-form-control hire-phone-input"
                        placeholder="81234 56789"
                        pattern="[0-9]{10}"
                        value={hireFormData.phone}
                        onChange={(e) => setHireFormData({ ...hireFormData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="hire-form-group">
                    <label>Location*</label>
                    <select
                      className="hire-form-control"
                      value={hireFormData.location}
                      onChange={(e) => setHireFormData({ ...hireFormData, location: e.target.value })}
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

                  <div className="hire-form-group">
                    <label>Construction Type*</label>
                    <select
                      className="hire-form-control"
                      value={hireFormData.constructionType}
                      onChange={(e) => setHireFormData({ ...hireFormData, constructionType: e.target.value })}
                      required
                    >
                      <option value="">--Select Construction Type--</option>
                      <option value="Duplex House">Duplex House</option>
                      <option value="Simplex House">Simplex House</option>
                      <option value="Villa / Mansion">Luxury Villa</option>
                      <option value="Apartment Building">Apartment Building</option>
                      <option value="Commercial Complex">Commercial Space</option>
                    </select>
                  </div>

                  <div className="hire-form-group">
                    <label>Plot Size*</label>
                    <select
                      className="hire-form-control"
                      value={hireFormData.plotSize}
                      onChange={(e) => setHireFormData({ ...hireFormData, plotSize: e.target.value })}
                      required
                    >
                      <option value="">--Select Plot Size--</option>
                      <option value="30x30 Ft (900 Sq. Ft.)">30x30 Ft (900 Sq. Ft.)</option>
                      <option value="30x40 Ft (1200 Sq. Ft.)">30x40 Ft (1200 Sq. Ft.)</option>
                      <option value="40x40 Ft (1600 Sq. Ft.)">40x40 Ft (1600 Sq. Ft.)</option>
                      <option value="40x60 Ft (2400 Sq. Ft.)">40x60 Ft (2400 Sq. Ft.)</option>
                      <option value="50x80 Ft (4000 Sq. Ft.)">50x80 Ft (4000 Sq. Ft.)</option>
                      <option value="Custom Plot Size">Other Plot Size</option>
                    </select>
                  </div>

                  <div className="hire-form-group">
                    <label>Number of Floors*</label>
                    <select
                      className="hire-form-control"
                      value={hireFormData.floors}
                      onChange={(e) => setHireFormData({ ...hireFormData, floors: e.target.value })}
                      required
                    >
                      <option value="">--Select Number of Floors--</option>
                      <option value="Ground Floor Only">Ground Floor Only</option>
                      <option value="G + 1 Floor">G + 1 Floor</option>
                      <option value="G + 2 Floors">G + 2 Floors</option>
                      <option value="G + 3 Floors">G + 3 Floors</option>
                      <option value="G + 4 Floors">G + 4 Floors</option>
                    </select>
                  </div>

                  <div className="hire-form-group">
                    <label>Approximate Budget*</label>
                    <select
                      className="hire-form-control"
                      value={hireFormData.budget}
                      onChange={(e) => setHireFormData({ ...hireFormData, budget: e.target.value })}
                      required
                    >
                      <option value="">--Select Approximate Budget--</option>
                      <option value="Under ₹40 Lakhs">Under ₹40 Lakhs</option>
                      <option value="₹40 Lakhs - ₹60 Lakhs">₹40 Lakhs - ₹60 Lakhs</option>
                      <option value="₹60 Lakhs - ₹90 Lakhs">₹60 Lakhs - ₹90 Lakhs</option>
                      <option value="₹90 Lakhs - ₹1.5 Crores">₹90 Lakhs - ₹1.5 Crores</option>
                      <option value="Above ₹1.5 Crores">Above ₹1.5 Crores</option>
                    </select>
                  </div>

                  <div className="hire-form-group hire-full-width">
                    <label>Construction Requirements*</label>
                    <textarea
                      className="hire-form-control"
                      placeholder="Enter key details (e.g. 4BHK duplex with Vaastu, modular kitchen, parking for 2 cars)"
                      rows="2"
                      value={hireFormData.requirements}
                      onChange={(e) => setHireFormData({ ...hireFormData, requirements: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <div className="hire-checkbox-group hire-full-width">
                    <input
                      type="checkbox"
                      id="hireAuthCheck"
                      checked={hireFormData.authCheck}
                      onChange={(e) => setHireFormData({ ...hireFormData, authCheck: e.target.checked })}
                      required
                    />
                    <label htmlFor="hireAuthCheck">
                      I authorize HS Construction & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC settings.
                    </label>
                  </div>

                  <button type="submit" className="hire-submit-btn hire-full-width">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE HS CONSTRUCTION ACCORDION */}
        <section className="why-choose-section">
          <div className="container">
            
            {/* Section Header */}
            <div className="why-choose-header">
              <span className="why-choose-house-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </span>
              <h2 className="why-choose-title">Why Choose HS Construction?</h2>
            </div>

            <div className="why-choose-layout">
              {/* Left side: Beautiful image with a border offset */}
              <div className="why-choose-image-col">
                <div className="why-choose-image-offset">
                  <img src="/completed_project_2.png" alt="Modern classic turnkey villa" />
                </div>
              </div>

              {/* Right side: Accordion */}
              <div className="why-choose-accordion">
                {[
                  {
                    title: "Why Families Choose HS Construction for Quality and Dependability",
                    content: "At HS Construction, we emphatically declare without an iota of doubt that we have successfully delivered over 750 homes across 18 cities, making a strong presence in Bengaluru, Kengeri, Mysuru, and Jayanagar. This has been possible due to our commitment to excellence which has allowed us to maintain a remarkable 96% handover rate, ensuring that our client's dreams are turned into reality on time and every time. From start to finish, our unwavering dedication to timely delivery sets us apart, nurturing peace of mind to customers who look for typical exuberance and dependability."
                  },
                  {
                    title: "Industry-Leading 10-Year Waterproofing Guarantee",
                    content: "We use high-fidelity, advanced polymer-modified sealing systems across structural joints, wet rooms, and terrace decks. Backed by a legally binding structural contract, our 10-year complete leak-free waterproofing warranty protects your property value and safeguards your home interior against dampness and structural corrosion."
                  },
                  {
                    title: "Construction Guarantee - An Icon of Mutual Trust",
                    content: "To build a foundation of absolute trust, we execute construction stages with strict adherence to ISO 9001 and structural codes. We provide comprehensive warranties for structural concrete columns, MEP plumbing layouts, and external window frame seals. We lock in fixed pricing with no escalations, ensuring absolute financial predictability."
                  },
                  {
                    title: "No Subcontracting - Direct Accountability",
                    content: "Unlike traditional agencies that outsource masonry and finishes to unverified third-party builders, HS Construction maintains direct control. From core excavation to architectural handover, every milestone is managed by our dedicated in-house engineers, project managers, and quality supervisors. This ensures direct accountability and flawless execution."
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`why-choose-item ${whyActiveTab === idx ? 'active' : ''}`}>
                    <div className="why-choose-item-header" onClick={() => setWhyActiveTab(idx)}>
                      <h3>{item.title}</h3>
                      <span className="why-choose-item-arrow">
                        <i className={`fa-solid ${whyActiveTab === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                      </span>
                    </div>
                    <div className="why-choose-item-body">
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    )}

      {currentTab === 'packages' && (
        <section className="pkg-page-section">
          <div className="container">
            {/* Breadcrumbs */}
            <div className="pkg-breadcrumbs">
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a>
              <span>/</span>
              <span className="active">Packages</span>
            </div>

            {/* Main header */}
            <div className="pkg-header">
              <h1 className="pkg-main-title">Packages</h1>
              <div className="pkg-city-select">
                <span>Currently Showing for</span>
                <div className="pkg-dropdown-wrap">
                  <i className="fa-solid fa-location-dot pkg-pin"></i>
                  <select defaultValue="Bengaluru">
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mysuru">Mysuru</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pkg-city-banner">
              <h2>Bengaluru</h2>
            </div>

            {/* Grid of 12 Package Cards */}
            <div className="pkg-grid">
              {detailedPackagesData.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`pkg-card ${selectedPkgIndex === idx ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedPkgIndex(idx);
                    setExpandedSecIndex(0); // expand first section by default
                  }}
                >
                  <div className="pkg-card-icon" style={{ backgroundColor: pkg.color }}>
                    <i className={pkg.icon}></i>
                  </div>
                  <div className="pkg-card-info">
                    <h3>{pkg.name}</h3>
                    <p>{pkg.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner Callout */}
            <div className="pkg-banner-callout" style={{ backgroundImage: 'url(/hero_house_bg.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
              <div className="pkg-banner-overlay">
                <div className="pkg-banner-left">
                  <h3>Looking for a personalized home construction?</h3>
                </div>
                <div className="pkg-banner-right">
                  <button className="pkg-contact-btn" onClick={() => setIsModalOpen(true)}>Contact Us</button>
                </div>
              </div>
            </div>

            {/* Package Details Accordions (Dynamic for Selected Package) */}
            <div className="pkg-details-section">
              <div className="pkg-details-header">
                <h2>{detailedPackagesData[selectedPkgIndex].name} Package Details</h2>
                <span className="pkg-details-price">{detailedPackagesData[selectedPkgIndex].price}</span>
              </div>

              <div className="pkg-details-accordion">
                {Object.entries(detailedPackagesData[selectedPkgIndex].sections).map(([secTitle, secBullets], secIdx) => {
                  const isExpanded = expandedSecIndex === secIdx;
                  return (
                    <div key={secIdx} className={`pkg-detail-row ${isExpanded ? 'expanded' : ''}`}>
                      <div className="pkg-detail-row-header" onClick={() => setExpandedSecIndex(isExpanded ? null : secIdx)}>
                        <span>{secTitle}</span>
                        <div className="pkg-detail-arrow">
                          <i className={`fa-solid ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                        </div>
                      </div>
                      <div className="pkg-detail-row-body">
                        {secBullets.length > 0 ? (
                          <ul className="pkg-bullets-list">
                            {secBullets.map((bullet, bIdx) => (
                              <li key={bIdx}>
                                <i className="fa-solid fa-circle-check bullet-icon"></i>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="pkg-bullets-list">
                            {standardSectionDetails[secTitle]?.map((bullet, bIdx) => (
                              <li key={bIdx}>
                                <i className="fa-solid fa-circle-check bullet-icon"></i>
                                <span>{bullet}</span>
                              </li>
                            )) || (
                              <li>
                                <i className="fa-solid fa-circle-check bullet-icon"></i>
                                <span>Premium materials and specifications as per turnkey standards.</span>
                              </li>
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      )}

      {currentTab === 'contact' && (
        <section className="contact-page-section">
          <div className="container">
            {/* Breadcrumbs */}
            <div className="pkg-breadcrumbs" style={{ marginBottom: '30px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a>
              <span>/</span>
              <span className="active">Contact Us</span>
            </div>

            {/* Grid Container */}
            <div className="contact-grid">
              {/* Card 1: Couple Overlooking sunset/house image */}
              <div
                className="contact-img-card"
                style={{
                  backgroundImage: 'url(/contact_couple.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Card 2: Get In Touch details */}
              <div className="contact-details-card">
                <div className="contact-teal-label">Get In Touch</div>
                <div className="contact-title-row">
                  <span className="contact-house-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="45" height="45">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                  <h2>We'll Craft Your Perfect Dream Home</h2>
                </div>
                <div className="contact-text-divider"></div>
                <p>At buildAhome, we're here to turn your dream house construction into reality.</p>
                <p>For personalized consultations, expert advice, or any inquires, please reach out to our dedicated team. Your dream home starts with us.</p>
                <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Contact us today!</h4>
              </div>

              {/* Card 3: Lets Talk Form */}
              <div className="contact-form-card">
                <h2>Lets Talk</h2>
                <form onSubmit={handleContactFormSubmit}>
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">Name*</label>
                    <input
                      type="text"
                      id="contact-name"
                      className="contact-form-control"
                      placeholder="Enter your name"
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-phone">Phone No*</label>
                    <div className="contact-phone-wrap">
                      <div className="contact-phone-prefix">
                        <span style={{ fontSize: '16px' }}>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        id="contact-phone"
                        className="contact-form-control contact-phone-input"
                        placeholder="81234 56789"
                        pattern="[0-9]{10}"
                        value={contactFormData.phone}
                        onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-location">Location*</label>
                    <select
                      id="contact-location"
                      className="contact-form-control"
                      value={contactFormData.location}
                      onChange={(e) => setContactFormData({ ...contactFormData, location: e.target.value })}
                      required
                    >
                      <option value="">--Select Location--</option>
                      <option value="Jayanagar">Jayanagar, Bengaluru</option>
                      <option value="Whitefield">Whitefield, Bengaluru</option>
                      <option value="Indiranagar">Indiranagar, Bengaluru</option>
                      <option value="Kengeri">Kengeri, Bengaluru</option>
                      <option value="Malleshwaram">Malleshwaram, Bengaluru</option>
                      <option value="Mysuru">Mysuru, Karnataka</option>
                      <option value="Other">Other Parts of Karnataka / Tamilnadu</option>
                    </select>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-plot-size">Plot Size*</label>
                    <select
                      id="contact-plot-size"
                      className="contact-form-control"
                      value={contactFormData.plotSize}
                      onChange={(e) => setContactFormData({ ...contactFormData, plotSize: e.target.value })}
                      required
                    >
                      <option value="">--Select Plot Size--</option>
                      <option value="30x30 Ft (900 Sq. Ft.)">30x30 Ft (900 Sq. Ft.)</option>
                      <option value="30x40 Ft (1200 Sq. Ft.)">30x40 Ft (1200 Sq. Ft.)</option>
                      <option value="40x40 Ft (1600 Sq. Ft.)">40x40 Ft (1600 Sq. Ft.)</option>
                      <option value="40x60 Ft (2400 Sq. Ft.)">40x60 Ft (2400 Sq. Ft.)</option>
                      <option value="50x80 Ft (4000 Sq. Ft.)">50x80 Ft (4000 Sq. Ft.)</option>
                      <option value="Custom Plot Size">Other Plot Size</option>
                    </select>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-requirements">Construction Requirements*</label>
                    <input
                      type="text"
                      id="contact-requirements"
                      className="contact-form-control"
                      placeholder="Minimum 3 Characters"
                      minLength="3"
                      value={contactFormData.requirements}
                      onChange={(e) => setContactFormData({ ...contactFormData, requirements: e.target.value })}
                      required
                    />
                  </div>

                  <div className="contact-check-group">
                    <input
                      type="checkbox"
                      id="contact-authCheck"
                      checked={contactFormData.authCheck}
                      onChange={(e) => setContactFormData({ ...contactFormData, authCheck: e.target.checked })}
                      required
                    />
                    <label htmlFor="contact-authCheck">
                      I authorize buildAhome & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC settings.
                    </label>
                  </div>

                  <button type="submit" className="contact-submit-btn">Submit</button>
                </form>
              </div>

              {/* Card 4: Info with construction engineer overlay */}
              <div
                className="contact-info-card"
                style={{
                  backgroundImage: 'url(/contact_engineer.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="contact-info-overlay">
                  <h3>Make your DREAM home your REAL home.</h3>
                  <span className="contact-info-sub">Get Connected</span>
                  <div className="contact-info-footer">
                    <div className="contact-info-row" style={{ marginBottom: '15px' }}>
                      <i className="fa-solid fa-phone"></i>
                      <span>Call us: 7090005600</span>
                    </div>
                    <div className="contact-info-row">
                      <i className="fa-solid fa-envelope"></i>
                      <span>Mail us at: contact@buildahome.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                <li><a href="#our-homes" onClick={(e) => { e.preventDefault(); handleNavigation('our-homes'); }}>Our Homes</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('home', 'about'); }}>Green Homes</a></li>
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleNavigation('how-it-works'); }}>How It Works</a></li>
                <li><a href="#packages" onClick={(e) => { e.preventDefault(); handleNavigation('packages'); }}>Popular Packages</a></li>
              </ul>
              <ul className="footer-links-list">
                <li><a href="#faqs" onClick={(e) => { e.preventDefault(); handleNavigation('home', 'faqs'); }}>FAQs</a></li>
                <li><a href="#completed-works" onClick={(e) => { e.preventDefault(); handleNavigation('home', 'completed-works'); }}>Completed Projects</a></li>
                <li><a href="#" onClick={() => setIsModalOpen(true)}>Privacy & Policy</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>Contact Us</a></li>
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
