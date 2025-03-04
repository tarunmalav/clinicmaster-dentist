import CountUp from "react-countup"
import { IMAGES, SVGICONS } from "./theme"
// header menu data 
export const menudata = [
    {
        title: "Home",
        classChange: "has-mega-menu",
        content: [
            { title: "01 Skin Care", to: "/", image: IMAGES.demohome3, },
            { title: "02 Dentist", to: "/", image: IMAGES.demohome2, },
            { title: "03 Medical", to: "/", image: IMAGES.demohome1, },
        ],
    },
    {
        title: "Pages",
        classChange: "sub-menu-down",
        content: [
            { title: "About Us", to: "/about-us" },
            { title: "About Us 2", to: "/about-us-2" },
            { title: "Appointment", to: "/appointment" },
            { title: "Pricing Table", to: "/pricing-table" },
            { title: "Testimonial", to: "/testimonial" },
            { title: "Faq's", to: "/faqs" },
            { title: "Error 404", to: "/error-404" },
        ],
    },
    {
        title: "Team",
        classChange: "sub-menu-down",
        content: [
            { title: "Team", to: "/team" },
            { title: "Team Detail", to: "/team-detail" },
        ],
    },
    {
        title: "Services",
        classChange: "sub-menu-down",
        content: [
            { title: "Services", to: "/services" },
            { title: "Services 2", to: "/services-2" },
            { title: "Service Detail", to: "/service-detail" },
            { title: "Service Detail 2", to: "/service-detail-2" },
        ],
    },
    {
        title: "Blogs",
        classChange: "sub-menu-down",
        content: [
            { title: "Blog Grid", to: "/blog-grid" },
            { title: "Blog List Sidebar", to: "/blog-list-sidebar" },
            { title: "Blog Details", to: "/blog-details" },
        ],
    },
    { title: "Contact Us", to: "/contact-us", },
]
// component data
// clientswiper  
export const clientswiperdata = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// compareswiper 
export const compareswiperdata = [
    { image: IMAGES.comparemiddle1, delay: '0.1s', },
    { image: IMAGES.comparemiddle2, delay: '0.2s', },
    { image: IMAGES.comparemiddle3, delay: '0.3s', },
    { image: IMAGES.comparemiddle4, delay: '0.4s', },
    { image: IMAGES.comparemiddle5, delay: '0.5s', },
    { image: IMAGES.comparemiddle1, delay: '0.6s', },
    { image: IMAGES.comparemiddle2, delay: '0.7s', },
    { image: IMAGES.comparemiddle3, delay: '0.8s', },
]
// contactmap 
export const mapdata = [
    { delay: '0.6s', title: 'United States', flag: IMAGES.unitedstate, },
    { delay: '0.8s', title: 'Canada', flag: IMAGES.cananda, },
]
// highlyteam 
export const swiperteamdata = [
    { id: 1, image: IMAGES.teamsmall1, image2: IMAGES.teamlarge1, },
    { id: 2, image: IMAGES.teamsmall2, image2: IMAGES.teamlarge2, },
    { id: 3, image: IMAGES.teamsmall3, image2: IMAGES.teamlarge3, },
    { id: 4, image: IMAGES.teamsmall4, image2: IMAGES.teamlarge4, },
    { id: 5, image: IMAGES.teamsmall5, image2: IMAGES.teamlarge5, },
    { id: 6, image: IMAGES.teamsmall1, image2: IMAGES.teamlarge1, },
    { id: 7, image: IMAGES.teamsmall2, image2: IMAGES.teamlarge2, },
    { id: 8, image: IMAGES.teamsmall3, image2: IMAGES.teamlarge3, },
]
// newsupdat 
export const newsdata = [
    { image: IMAGES.bloggrid1, delay: '0.6s', },
    { image: IMAGES.bloggrid2, delay: '0.8s', },
    { image: IMAGES.bloggrid3, delay: '1.0s', },
]
// question  
export const accordiondata2 = [
    { key: "0", title: 'How much do you charge for pedicure ?' },
    { key: "1", title: 'What types of treatments do you offer?' },
    { key: "2", title: 'How do i book my appointment ?' },
    { key: "3", title: 'Can i cancel my appointment' },
]
export const accordionnavdata = [
    { i: 1, id: 'pills-tab1', target: '#pills-target-tabs1', title: 'Dental Care', },
    { i: 2, id: 'pills-tab2', target: '#pills-target-tabs2', title: 'Cosmetic Dentistry', },
    { i: 3, id: 'pills-tab3', target: '#pills-target-tabs3', title: 'Dental Technology', },
    { i: 4, id: 'pills-tab4', target: '#pills-target-tabs4', title: 'Smile Care', },
    { i: 5, id: 'pills-tab5', target: '#pills-target-tabs5', title: 'Teeth Whitening', },
]
// servicedata 
export const servicedata = [
    { id: 1, title: 'Dental Implants', svg: SVGICONS.teeth1, image: IMAGES.service1, delay: '0.2s', },
    { id: 2, title: 'Orthodontics', svg: SVGICONS.teeth2, image: IMAGES.service2, delay: '0.4s', },
    { id: 3, title: 'Pediatric Dentistry', svg: SVGICONS.teeth3, image: IMAGES.service3, delay: '0.6s', },
    { id: 4, title: 'Root Canals', svg: SVGICONS.teeth4, image: IMAGES.service4, delay: '0.8s', },
]
// sidebar 
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
export const sidebarpostdata = [
    { image: IMAGES.blogsmall1, },
    { image: IMAGES.blogsmall2, },
    { image: IMAGES.blogsmall3, },
]
// testimonialswiper 
export const testiswiperdata = [
    { image: IMAGES.testimonial1, delay: '0.6', },
    { image: IMAGES.testimonial2, delay: '0.8', },
    { image: IMAGES.testimonial1, delay: '1.0', },
]
// wecare 
export const counterdata = [
    { title: "Happy Patients", count: <CountUp end={45} duration={5} />, span: 'k', columnstand1: 'bg-color1', columnstand2: 'text-orange', delay: '0.6s', },
    { title: "Specialists", count: <CountUp end={200} duration={5} />, span: '+', columnstand1: 'bg-color2', columnstand2: 'text-green', delay: '0.8s', },
    { title: "Winning Awards", count: <CountUp end={150} duration={5} />, span: '+', columnstand1: 'bg-color3', columnstand2: 'text-primary', delay: '1.0s', },
]
// wecare2 
export const wecaredata2 = [
    { id: 1, title: 'Medical Service', delay: '0.2s', icon: <i className="flaticon-medical-symbol" />, },
    { id: 2, title: '24/7 Medicines', delay: '0.4s', icon: <i className="flaticon-drugs" />, },
    { id: 3, title: 'Best Doctor', delay: '0.6s', icon: <i className="flaticon-doctor" />, },
]
// whychoose 
export const accordiondata = [
    { key: "0", image: IMAGES.blogsmall1, delay: '0.4s', title: 'Expertise in Dental Industry', },
    { key: "1", image: IMAGES.blogsmall2, delay: '0.6s', title: 'Patient-Centered Care', },
    { key: "2", image: IMAGES.blogsmall3, delay: '0.8s', title: 'Flexible Appointment Scheduling', },
]
// faqdata 
export const pricingplandata = [
    {
        vertical: 'PROFESSIONAL', image: IMAGES.pricetable1, title: 'Maintenance Package', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Dental cleaning</li>
            <li>Polishing</li>
            <li>Filling</li>
            <li>Gum care</li>
            <li>Flossing</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.pricetable2, title: 'Cosmetic Surgeriess', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Root canal treatment</li>
            <li>Braces</li>
            <li>Implants</li>
            <li>Bridges</li>
            <li>Crown</li>
        </ul>,
    },
    {
        vertical: 'PROFESSIONAL', image: IMAGES.pricetable3, title: 'Restorative Procedures', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Missing teeth</li>
            <li>Bridges</li>
            <li>Tooth bonding</li>
            <li>Porcelain veneers</li>
            <li>Invisalign</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.pricetable4, title: 'Offered Services', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Dental cleanings</li>
            <li>Dental examinations</li>
            <li>X-rays</li>
            <li>Fluoride treatments</li>
            <li>Dental sealants</li>
        </ul>,
    },
]
// pages 
// aboutus2 
export const aboutus2data = [
    { id: 1, delay: '0.2s', title: 'Mission', },
    { id: 2, delay: '0.4s', title: 'Vision', },
]
// testimoniol 
export const testidata = [
    { image: IMAGES.testimonial1, classChange: 'testimonial-media', },
    { image: IMAGES.smallavatar3, classChange: 'testimonial-detail', },
    { image: IMAGES.testimonial2, classChange: 'testimonial-media', },
    { image: IMAGES.smallavatar3, classChange: 'testimonial-detail', },
    { image: IMAGES.testimonial2, classChange: 'testimonial-media', },
    { image: IMAGES.smallavatar3, classChange: 'testimonial-detail', },
]
// bloggrid 
export const blogdata = [
    { image: IMAGES.bloggrid1, dealy: '0.2s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.bloggrid2, dealy: '0.4s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.bloggrid3, dealy: '0.6s', title: 'Brilliant skin blog your dermatology care resource', },
    { image: IMAGES.bloggrid4, dealy: '0.8s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.bloggrid5, dealy: '1.0s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.bloggrid6, dealy: '1.2s', title: 'Brilliant skin blog your dermatology care resource', },
]
// serivece details 2 
export const accordiondata3 = [
    { key: "0", title: 'Improved Stability and Comfort:', },
    { key: "1", title: 'Enhanced Chewing and Speaking Ability', },
    { key: "2", title: 'Better aesthetics and higher self-confidence', },
    { key: "3", title: 'Long-Term Durability', },
]
// service 2
export const service2data = [
    { image: IMAGES.service1, number: '01', title: 'Dental Implants', },
    { image: IMAGES.service2, number: '02', title: 'Orthodontics', columnstand: 'right', },
    { image: IMAGES.service3, number: '03', title: 'Pediatric Dentistry', },
    { image: IMAGES.service4, number: '04', title: 'Root Canals', columnstand: 'right', },
]
// footer 
export const footerdata = [
    {
        title: 'Our Services', span1: 'Emergency Care', span2: 'Operation Theater', span3: 'Medical Checkup', span4: 'Diagnostic Center', span5: 'Outdoor Checkup',
        link1: '/service-detail', link2: '/service-detail', link3: '/service-detail', link4: '/service-detail', link5: '/service-detail',
    },
    {
        title: 'Useful Links', span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Contact Us', span4: 'Latest News', span5: 'Our Sitemap',
        link1: '#', link2: '#', link3: '/contact-us', link4: '/blog-grid', link5: '#',
    },
    {
        title: 'Our Stores', span1: 'New York', span2: 'London SF', span3: 'Edinburgh', span4: 'Los Angeles', span5: 'Las Vegas',
        link1: '#', link2: '#', link3: '#', link4: '#', link5: '#',
    },
    {
        title: 'Quick Links', span1: 'About Us', span2: 'Our Services', span3: 'Our Team', span4: 'Appointments', span5: 'Contact Us',
        link1: '/about-us', link2: '/services', link3: '/team', link4: '/appointment', link5: '/contact-us',
    },
]
