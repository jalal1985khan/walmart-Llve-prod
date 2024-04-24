import Image from "next/image";
import Banner from '../components/HomePage/Banner';
import Brands from '../components/Common/Brands';
import LearningPrograme from '../components/HomePage/LearningPrograme'
import ProgramBenefits from '../components/HomePage/ProgramBenefits'
import GrowthJourney from '../components/HomePage/GrowthJourney'
import Testimonials from '../components/HomePage/Testimonails'


export default function Home() {
  return (
    <>
    <Banner />
      <Brands />
      <LearningPrograme />
      <ProgramBenefits />
      <GrowthJourney />
      <Testimonials/>
    </>
  );
}
