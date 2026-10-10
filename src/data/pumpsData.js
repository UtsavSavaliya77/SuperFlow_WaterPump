// High-precision engineering pump models and technical telemetry for Super Flow
export const PUMP_SERIES = [
  {
    id: "sf-4-borewell",
    series: "SF-4 Radial & Mixed",
    name: "4\" Stainless Steel Borewell Submersible",
    tagline: "High-head deep aquifer extraction with anti-sand floating impellers",
    category: "Borewell Submersible",
    boreSize: "100 mm (4\")",
    hpRange: "0.5 HP – 7.5 HP (0.37 kW – 5.5 kW)",
    headRange: "12 m – 380 m",
    dischargeRange: "10 LPM – 450 LPM (0.6 – 27 m³/h)",
    metallurgy: "AISI 304 / 316 Stainless Steel with Noryl / SS Impellers",
    coolingType: "Water Lubricated / High Dielectric Eco Fluid",
    sandTolerance: "Up to 150 g/m³ with tungsten carbide thrust bearings",
    efficiencyRating: "5-Star BEE Energy Certified (η > 68%)",
    idealFor: "Deep agricultural borewells, domestic high-rise boosting, farm drip systems",
    specs: {
      voltage: "220V 1-Ph / 415V 3-Ph, 50 Hz",
      rpm: "2880 RPM",
      outletSize: "32mm / 40mm / 50mm (1.25\" / 1.5\" / 2\")",
      maxWaterTemp: "45°C",
      thrustBearing: "Segmental self-aligning tilting pad (Michell type)",
      winding: "100% Dual Poly-Coated Electrolytic Copper"
    },
    features: [
      "Precision laser-welded stainless steel jacket",
      "Built-in non-return valve (NRV) preventing water hammer",
      "Splined motor shaft as per international NEMA standards",
      "Dynamic balanced rotor preventing low-frequency vibration"
    ],
    accentColor: "#D9232D"
  },
  {
    id: "sf-6-heavy-agri",
    series: "SF-6 Heavy Duty",
    name: "6\" Industrial & Agri Submersible Pump",
    tagline: "Continuous heavy irrigation with high volumetric discharge",
    category: "Borewell Submersible",
    boreSize: "150 mm (6\")",
    hpRange: "3.0 HP – 30.0 HP (2.2 kW – 22 kW)",
    headRange: "18 m – 460 m",
    dischargeRange: "60 LPM – 1,400 LPM (3.6 – 84 m³/h)",
    metallurgy: "Graded Cast Iron / SS-304 Mixed Flow Diffusers",
    coolingType: "Water-Cooled Rewindable Wet Motor",
    sandTolerance: "Up to 120 g/m³ with ceramic sand-guard sleeve",
    efficiencyRating: "Energy Class IE3 Premium Efficiency",
    idealFor: "Large-scale canal lifting, flood irrigation, municipal water supply, mining dewatering",
    specs: {
      voltage: "380V – 415V 3-Phase, 50 Hz",
      rpm: "2900 RPM",
      outletSize: "50mm / 65mm / 80mm / 100mm (2\" / 2.5\" / 3\" / 4\")",
      maxWaterTemp: "50°C",
      thrustBearing: "Heavy-duty carbon vs stainless steel hydrodynamic pads",
      winding: "High-grade waterproof polyester insulation wire"
    },
    features: [
      "Heavy cast casing with hydrodynamic guide vanes for minimum head loss",
      "Corrosion-resistant CED (Cathodic Electrodeposition) coating",
      "Hexagonal drive shaft with precision machining",
      "Overload tolerance during erratic rural grid voltage (280V – 440V)"
    ],
    accentColor: "#0284C7"
  },
  {
    id: "sf-solar-helios",
    series: "SF-Solar Helios Pro",
    name: "Solar Hybrid DC/AC Submersible System",
    tagline: "Off-grid MPPT-driven zero-electricity solar pumping",
    category: "Solar Submersible",
    boreSize: "100 mm & 150 mm (4\" & 6\")",
    hpRange: "1.0 HP – 15.0 HP (0.75 kW – 11 kW)",
    headRange: "20 m – 260 m",
    dischargeRange: "30 LPM – 850 LPM",
    metallurgy: "100% AISI 304 Full Stainless Steel",
    coolingType: "Permanent Magnet Brushless DC (BLDC) & AC Induction",
    sandTolerance: "Up to 100 g/m³ with hardened chrome sleeves",
    efficiencyRating: "Ultra-High 92% Motor Efficiency (Rare Earth Neodymium Magnets)",
    idealFor: "KUSUM Yojana solar farms, remote agricultural land, off-grid horticulture",
    specs: {
      voltage: "Wide DC Input (60V – 750V) with smart dual AC/DC controller",
      rpm: "900 – 3500 Variable Dynamic RPM",
      outletSize: "40mm / 50mm / 65mm (1.5\" / 2\" / 2.5\")",
      maxWaterTemp: "45°C",
      thrustBearing: "Ceramic / Carbon Self-lubricating assembly",
      winding: "Triple-varnished moisture-immune winding"
    },
    features: [
      "Direct drive via solar array with automatic dry-run & tank-full cut-off",
      "Intelligent MPPT algorithm yielding 25% higher water output in dawn/dusk",
      "Zero diesel or grid electricity expenditure",
      "IoT remote monitoring with real-time flow and yield analytics"
    ],
    accentColor: "#16A34A"
  },
  {
    id: "sf-openwell-horizontal",
    series: "SF-OW Horizontal & Vertical",
    name: "Submersible Openwell Monoblock",
    tagline: "Fully submerged open-well, riverbank and sump pumping without priming",
    category: "Openwell Submersible",
    boreSize: "Open Reservoir / Canal / Sump",
    hpRange: "1.0 HP – 12.5 HP (0.75 kW – 9.3 kW)",
    headRange: "8 m – 95 m",
    dischargeRange: "120 LPM – 1,800 LPM (7.2 – 108 m³/h)",
    metallurgy: "High-grade FG 200 Cast Iron & Bronze / SS Impellers",
    coolingType: "Pure Water Filled Wet Type",
    sandTolerance: "Up to 80 g/m³",
    efficiencyRating: "BEE 4-Star / 5-Star Certified",
    idealFor: "Open agricultural dug-wells, river lift schemes, hotel water sumps, fountains",
    specs: {
      voltage: "220V 1-Ph / 415V 3-Ph, 50 Hz",
      rpm: "2880 RPM",
      outletSize: "50mm / 65mm / 80mm",
      maxWaterTemp: "45°C",
      thrustBearing: "Water lubricated hydrodynamic pad assembly",
      winding: "Super-enameled copper wire with multi-layer BOPP insulation"
    },
    features: [
      "Operates completely underwater: 100% noiseless and zero priming required",
      "Immune to seasonal water table variations (rests on bottom or float)",
      "Compact footprint with vibration-free dynamic balanced impellers",
      "Low power consumption with high head-to-discharge ratio"
    ],
    accentColor: "#D9232D"
  },
  {
    id: "sf-dewaters-vortex",
    series: "SF-DW Vortex Effluent",
    name: "Stainless Dewatering & Sump Pump",
    tagline: "Solids-handling vortex impeller for industrial and municipal drainage",
    category: "Industrial Dewatering",
    boreSize: "Basement / Drainage / Pit",
    hpRange: "1.0 HP – 10.0 HP (0.75 kW – 7.5 kW)",
    headRange: "6 m – 45 m",
    dischargeRange: "150 LPM – 2,200 LPM",
    metallurgy: "AISI 316 Stainless Steel / High Chrome Cast Iron",
    coolingType: "Air-jacketed or oil-submerged double mechanical seal",
    sandTolerance: "Solid passage up to 35mm diameter spheres",
    efficiencyRating: "Continuous S1 Duty Rated",
    idealFor: "Basement stormwater dewatering, construction foundation trenches, food processing effluent",
    specs: {
      voltage: "415V 3-Phase, 50 Hz",
      rpm: "1440 / 2880 RPM",
      outletSize: "50mm / 80mm / 100mm Flanged",
      maxWaterTemp: "60°C",
      thrustBearing: "Heavy duty angular contact ball bearings",
      winding: "Class F / H insulation with thermal overload protector (TOP)"
    },
    features: [
      "Non-clog vortex impeller handles slurry, solids, and fibrous debris",
      "Dual mechanical seal (Silicon Carbide vs Silicon Carbide in oil chamber)",
      "Thermal sensor automatically cuts off power upon temperature spike",
      "Automatic float switch integration for unattended operation"
    ],
    accentColor: "#0284C7"
  },
  {
    id: "sf-8-10-municipal",
    series: "SF-8/10 Deep Aquifer",
    name: "8\" & 10\" Heavy Municipal Deepwell",
    tagline: "Engineered for high-volume urban townships, waterworks & industrial cooling",
    category: "Borewell Submersible",
    boreSize: "200 mm & 250 mm (8\" & 10\")",
    hpRange: "15 HP – 100 HP (11 kW – 75 kW)",
    headRange: "30 m – 520 m",
    dischargeRange: "200 LPM – 3,600 LPM (12 – 216 m³/h)",
    metallurgy: "Duplex SS-2205 / SS-316 / Nickel-Bronze Impellers",
    coolingType: "Rewindable wet type with Mitchell thrust pads",
    sandTolerance: "Up to 150 g/m³ with ceramic shaft sleeves",
    efficiencyRating: "IE3 / IE4 Industrial Ultra-Efficiency",
    idealFor: "State water supply boards, thermal power plants, industrial estates, large water parks",
    specs: {
      voltage: "415V / 690V 3-Phase Star-Delta / Soft-Starter",
      rpm: "2920 RPM",
      outletSize: "100mm / 125mm / 150mm (4\" / 5\" / 6\") Flanged",
      maxWaterTemp: "50°C",
      thrustBearing: "Hydrodynamic tilting pad taking up to 45 kN axial load",
      winding: "Cross-linked polyethylene insulated waterproof wire"
    },
    features: [
      "Precision CFD-optimized hydrodynamic bowl assembly",
      "Exceptional discharge volume at ultra-deep hydraulic heads",
      "High grade stainless steel intermediate bearings with rubber bushes",
      "Built for 24/7 non-stop industrial duty cycles"
    ],
    accentColor: "#16A34A"
  }
];

export const APPLICATIONS_DATA = [
  {
    id: "agriculture",
    title: "Agriculture & Micro-Irrigation",
    subtitle: "High-yield volumetric water delivery for flood, drip & sprinkler farming",
    iconName: "Plant",
    stats: "35% Lower Power Bill",
    description: "Engineered specifically for agricultural borewells where fluctuating village voltage and sandy water kill conventional pumps. Super Flow's 4\" and 6\" series maintain sustained high head even when voltage drops to 280V.",
    keyPoints: [
      "Immune to voltage drops between 280V – 440V",
      "Optimized for 16mm/20mm drip lateral pressure thresholds",
      "Sand-resistant floating impellers resist silt abrasion",
      "Delivers steady flow across seasonal summer water drops"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    recommendedModel: "SF-4 / SF-6 Agricultural Series"
  },
  {
    id: "solar-farming",
    title: "Off-Grid Solar Pumping",
    subtitle: "Zero operational fuel cost pumping for remote agricultural hectares",
    iconName: "SunDim",
    stats: "100% Green Energy",
    description: "Super Flow Solar Helios incorporates high-efficiency Brushless DC (BLDC) motors paired with intelligent MPPT frequency controllers to deliver water starting at dawn's earliest rays until dusk.",
    keyPoints: [
      "Direct compatibility with PM-KUSUM & international solar schemes",
      "Operates efficiently in low light and cloud-cover conditions",
      "Integrated dry-run sensor stops pump when borewell water depletes",
      "Zero dependence on unreliable electricity grid connections"
    ],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    recommendedModel: "SF-Solar Helios Pro (1HP – 15HP)"
  },
  {
    id: "domestic-commercial",
    title: "Domestic & High-Rise Booster",
    subtitle: "Quiet, high-pressure water delivery for residential towers & hotels",
    iconName: "Buildings",
    stats: "< 42 dB Silent Running",
    description: "Multi-stage stainless steel pumps designed for underground sumps and borewells delivering water to overhead rooftop tanks in multi-story residential and hospitality projects.",
    keyPoints: [
      "Stainless steel 304 food-grade wetted parts guarantee pure drinking water",
      "Vibration-free hydrodynamic assembly for quiet subterranean operation",
      "High head capacity capable of lifting water over 50 stories",
      "Automatic hydro-pneumatic pressure boosting compatibility"
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    recommendedModel: "SF-4 High-Head Multistage (1HP – 7.5HP)"
  },
  {
    id: "industrial-effluent",
    title: "Industrial & Dewatering",
    subtitle: "Solids handling, chemical-resistant drainage and cooling water supply",
    iconName: "Factory",
    stats: "Up to 35mm Solid Passage",
    description: "Rugged continuous S1-duty pumps built with AISI 316 stainless steel or hardened alloys to handle abrasive slurries, factory runoff, foundation dewatering, and condenser cooling loops.",
    keyPoints: [
      "Dual mechanical seals in oil reservoir for zero liquid ingress",
      "Vortex impeller avoids clogging with fibrous debris or rags",
      "Continuous run capability in warm factory discharge up to 60°C",
      "Flame-proof and explosion-resistant motor options available"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    recommendedModel: "SF-DW Vortex & SF-8 Heavy Industrial"
  }
];

export const TECHNICAL_COMPARISONS = [
  {
    metric: "Impeller Metallurgy",
    superflow: "100% Laser-Welded AISI 304/316 Stainless Steel",
    competitorStandard: "Cheap Cast Iron or unreinforced recycled plastic",
    advantage: "Zero rust, 5x longer life, hydraulic mirror finish reduces friction losses by 22%"
  },
  {
    metric: "Motor Stator Winding",
    superflow: "100% Pure Electrolytic Dual Poly-Coated Copper",
    competitorStandard: "Commercial grade copper or copper-clad aluminum",
    advantage: "Handles severe voltage fluctuations (280V – 440V) without burnout"
  },
  {
    metric: "Sand Handling Capability",
    superflow: "Up to 150 g/m³ with floating stage geometry",
    competitorStandard: "Under 50 g/m³ (seizes frequently in silt/sand borewells)",
    advantage: "Anti-sand wear rings protect impellers from premature abrasive degradation"
  },
  {
    metric: "Thrust Bearing Assembly",
    superflow: "Segmented Hydrodynamic Michell-type tilting pads",
    competitorStandard: "Fixed carbon disc with high wear rate",
    advantage: "Self-equalizing load bearing handles up to 45 kN axial hydraulic down-thrust"
  },
  {
    metric: "Hydraulic Efficiency",
    superflow: "Up to 72% peak efficiency (5-Star BEE Certified)",
    competitorStandard: "48% – 55% typical efficiency",
    advantage: "Saves ~3,500 kWh electricity annually on continuous 10 HP pumping"
  },
  {
    metric: "Shaft Coupling Standard",
    superflow: "Precision Splined NEMA International Standard",
    competitorStandard: "Proprietary keyway / non-standard dimensions",
    advantage: "Universal interchangeable fit with standard international submersible motors"
  }
];

export const COMPANY_METRICS = [
  { value: "32%", label: "Average Energy Reduction", detail: "Versus legacy cast-iron submersible units" },
  { value: "380m", label: "Maximum Dynamic Head", detail: "Capable of ultra-deep aquifer lifting" },
  { value: "100%", label: "Pressure Chamber Tested", detail: "Every unit hydrostatically tested at 1.5x rating" },
  { value: "45+", label: "Countries Export Footprint", detail: "Supplying trusted fluid machinery worldwide" }
];
