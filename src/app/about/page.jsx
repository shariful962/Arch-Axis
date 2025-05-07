

import React from "react";
import Image from "next/image";
import aboutImg from "../../assets/aboutImg.png";
import bgImage from "../../assets/bg.png";

const AboutUs = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20 relative overflow-hidden">
      <div className="aboutContainer wrapper px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent font-bold mb-4">
            About ArchiAxis
          </h1>

          <p className="text-justify text-[#000000]">
            <span className="font-bold">ArchiAxis</span> is an architectural
            consultancy dedicated to creating meaningful spaces that seamlessly
            integrate context, climate, and culture. We believe that
            architecture is not just about designing structures but about
            shaping experiences that resonate with people and their
            surroundings. Our approach is rooted in a deep understanding of
            spatial dynamics, materiality, and functionality, ensuring that each
            project responds thoughtfully to its environment.
            <br />
            <br />
            In a rapidly transforming urban and rural landscape, we strive to
            balance modern architectural innovations with the timeless essence
            of regional traditions. Our designs are informed by the rich
            cultural heritage of Bangladesh while embracing contemporary
            technologies and methodologies. Every project is an opportunity to
            bridge the past and the future, creating spaces that feel both
            authentic and forward-thinking. <br />
            <br />
            At <span className="font-bold">ArchiAxis</span>, we see design as an
            evolving process—an ongoing dialogue between site, space, and
            society. We listen to the land, study its nuances, and respond with
            solutions that enhance both aesthetics and usability. Our projects
            are shaped by rigorous exploration, hands-on experimentation, and a
            commitment to sustainability. By working closely with craftsmen,
            engineers, and stakeholders, we ensure that our designs are not just
            visually compelling but also practical,
            <br />
            efficient, and deeply contextual. <br />
            <br />
            From residential and commercial spaces to interiors and urban
            interventions, <span className="font-bold">ArchiAxis</span> is
            dedicated to reimagining architecture in a way that is innovative
            yet respectful of its roots. We believe that every site has a story
            to tell, and through our work, we strive to translate that narrative
            into built form—creating spaces that inspire, endure, and evolve
            with time. <br />
            <br />
            Our philosophy is guided by a commitment to craftsmanship,
            sustainability, and the evolving needs of modern life. We embrace
            imperfections as opportunities for creative expression, exploring
            the balance between tradition and transformation. By adapting to the
            challenges of material availability, construction practices, and
            changing urban dynamics, we craft spaces that are not only
            aesthetically engaging but also contextually intelligent. <br />
            <br />
            <span className="font-bold">ArchiAxis</span> envisions architecture
            as a continuous journey of learning and adaptation. We challenge
            conventions, embrace the complexities of design, and seek to create
            environments that enrich lives. Our work is a testament to our
            belief that architecture should be as dynamic and diverse as the
            people it serves, evolving with time while staying rooted in its
            essence
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
          <Image
            src={aboutImg}
            alt="Two house picture"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Background Image Bottom Left */}
      <div className="absolute bottom-0 left-2 w-[500px] h-[250px] z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt="background decoration"
          fill
          className="object-cover object-left"
        />
      </div>
    </div>
  );
};

export default AboutUs;
