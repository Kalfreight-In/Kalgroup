import React from 'react';
// import BrandComponent from '../../Components/BrandsComponent/BrandComponent';
// import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';
import HeroSection from '../../Components/HeaderHome';
import Roadservice from '../../Components/RoadServiceComponent/Roadservice';
// import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import { ContactFormContainer } from '../../Container/ContactFormContainer';
// import Contact from '../../Components/Contactsection/Contact';
import Abouthome from '../../Components/Abouthomecomponent/Abouthome';
import { Slideshow } from '../../Components/Slider/slideshow';
// import OurBusinessVerticles from '../../Container/OurBusinessVerticles';
import { MapConatiner } from '../../Container/MapContainer';
import './Home.scss';
import { BrandCompnentBrands } from '../../data';
import Business from '../../Components/BusinessComponent/Business';
import NewsAndEvents from '../../Container/NewsAndEvents';
import HeaderCustomSlider from '../../Components/HeaderCustomSlider';
import SocialMediaContainer from '../../Container/SocialMediaContainer';
import OurCoreValues from '../../Components/OurCoreValues';
import BrandWeOffer from '../../Components/BrandWeOffer/BrandWeOffer';

function Home() {
  return (
    <>
      <HeaderCustomSlider></HeaderCustomSlider>
      {/* <HeroSection></HeroSection> */}
      <Business />
      <NewsAndEvents></NewsAndEvents>
      <SocialMediaContainer></SocialMediaContainer>
      {/* <OurBusinessVerticles></OurBusinessVerticles> */}
      {/* <Abouthome /> */}
      {/* <GroupWebsitesSection /> */}
      <Roadservice />

      {/* <BrandComponent></BrandComponent> */}
      {/* <ServicesSection /> */}
      <OurCoreValues></OurCoreValues>
      <BrandWeOffer></BrandWeOffer>
      <MapConatiner></MapConatiner>
      <Slideshow data={BrandCompnentBrands}></Slideshow>
      <ContactFormContainer></ContactFormContainer>

      {/* <Contact /> */}
      {/* <ContactFormContainer></ContactFormContainer> */}
    </>
  );
}
export default Home;
