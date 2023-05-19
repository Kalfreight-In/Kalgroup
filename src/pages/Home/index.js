import React from 'react';
// import BrandComponent from '../../Components/BrandsComponent/BrandComponent';
// import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';

// import ServicesSection from '../../Components/ServicesSection/ServicesSection';
// import { ContactFormContainer } from '../../Container/ContactFormContainer';
// import Contact from '../../Components/Contactsection/Contact';

// import OurBusinessVerticles from '../../Container/OurBusinessVerticles';
import { MapConatiner } from '../../Container/MapContainer';
import './Home.scss';
import Business from '../../Components/BusinessComponent/Business';
import NewsAndEvents from '../../Container/NewsAndEvents';

import SocialMediaContainer from '../../Container/SocialMediaContainer';
import OurCoreValues from '../../Components/OurCoreValues';
import AboutUs from '../../Components/RoadServiceComponent/AboutUs';
import HeroSection from '../../Components/HeaderHome';
import { ContactFormContainer } from '../../Container/ContactFormContainer';
import BrandWeOffer from '../../Components/BrandWeOffer/BrandWeOffer';
import ChatBot from '../../Chat-Bot';

function Home() {
  return (
    <>
      {/* <HeaderCustomSlider></HeaderCustomSlider> */}
      {/* <HeroSection></HeroSection> */}
      <HeroSection></HeroSection>
      <Business />
      <NewsAndEvents></NewsAndEvents>
      <SocialMediaContainer></SocialMediaContainer>
      {/* <OurBusinessVerticles></OurBusinessVerticles> */}
      {/* <Abouthome /> */}
      {/* <GroupWebsitesSection /> */}
      <AboutUs />
      {/* <BrandComponent></BrandComponent> */}
      {/* <ServicesSection /> */}
      <OurCoreValues></OurCoreValues>
      <MapConatiner></MapConatiner>
      {/* <Slideshow data={BrandCompnentBrands}></Slideshow> */}
      <BrandWeOffer></BrandWeOffer>
      <ContactFormContainer></ContactFormContainer>
      {/* <ChatBot></ChatBot> */}
      {/* <ContactFormContainer></ContactFormContainer> */}
    </>
  );
}
export default Home;
