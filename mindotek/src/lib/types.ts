// ==========================
// Core Data Interfaces
// ==========================

/**
 * Represents a single service offering by Mindotek.
 */
export interface Service {
    id: string;                 // unique identifier (uuid or slug)
    title: string;              // Service title, e.g. "Warehousing"
    slug: string;               // URL slug, e.g. "warehousing"
    summary: string;            // Short summary for card or meta description
    details: string;            // Full description text (HTML or markdown)
    features?: string[];        // Key features (optional)
    valueAdded?: string[];      // Extra services / benefits
    cta?: string;               // Call-to-action text
    image?: string;             // Optional image path (e.g., /img/warehouse.jpg)
  }
  
  /**
   * Represents key company information and brand identity.
   */
  export interface Company {
    name: string;               // Legal name (PT. Logamindo Teknologi Indonesia)
    tradingName: string;        // Short/brand name (Mindotek)
    group: string;              // Parent group (TPM Group)
    tagline: string;            // e.g. "Logistic & Outsourcing Partner in Indonesia"
    motto: string;              // e.g. "Quality & Safety"
    founded?: string;           // e.g. "March 2018"
    description: string;        // Company intro paragraph
    vision: string;
    mission: string[];
    address: string;
    phone: string;
    email: string;
    website?: string;
    logo?: string;
    socials?: Record<string, string>; // e.g. { linkedin: "...", instagram: "..." }
  }
  
  /**
   * Represents a customer benefit / selling point.
   */
  export interface Benefit {
    title: string;
    desc: string;
    icon?: string;              // Optional icon name for UI
  }
  
  /**
   * Represents a Key Performance Indicator.
   */
  export interface KPI {
    title: string;
    desc: string;
    value?: string | number;    // Optional value/metric (future dashboard use)
  }
  
  /**
   * Represents a single warehouse location.
   */
  export interface WarehouseLocation {
    city: string;               // e.g. "Jakarta"
    description?: string;       // Optional details (e.g., region, capacity)
    lat?: number;               // Optional: for map integration
    lng?: number;
  }
  
  /**
   * Represents a WMS (Warehouse Management System) module.
   */
  export interface WMSModule {
    title: string;
    desc: string;
  }
  
  /**
   * Represents legal documentation and company credentials.
   */
  export interface LegalInfo {
    notarialDeeds: string;
    coreBusiness: string;
    deptOfJustice: string;
    npwp: string;
    siujpt: string;
    tdp: string;
  }
  
  /**
   * Represents the site-wide SEO metadata.
   */
  export interface SeoMeta {
    title: string;
    description: string;
    url?: string;
    image?: string;
  }
  
  /**
   * Represents a navigation item in header or footer.
   */
  export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
  }
  
  /**
   * Root interface combining all static data for Mindotek.
   * (useful if you decide to aggregate JSONs into one object later)
   */
  export interface MindotekData {
    company: Company;
    services: Service[];
    benefits: Benefit[];
    kpis: KPI[];
    locations: WarehouseLocation[];
    wmsModules: WMSModule[];
    legal: LegalInfo;
    navigation: NavItem[];
  }