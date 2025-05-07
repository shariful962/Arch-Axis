'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '@/data/servicesData/servicesData';
import bgImg from '@/assets/bg.png';

const Services = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20 relative">
      <div className="servicesContainer wrapper px-4 sm:px-6">
        
        <h1 className="bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent font-bold mb-4">
          WHAT WE DO
        </h1>

        <p className="text-justify leading-[24px] tracking-[.5px]">
          we provide a comprehensive range of services to help our clients create the home or business of their dreams...
        </p>

        {/* Services Cards */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((service) => (
              <div key={service.id} className="flex flex-col items-center group overflow-hidden rounded-lg">
                
                {/* Image box */}
                <div className="relative w-full h-full z-10">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-md"
                    // width={800}
                    // height={500}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Link href={`/service/${service.id}`}>
                      <button className="cursor-pointer px-7 py-3 bg-transparent text-main rounded-full font-semibold border border-main hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white hover:border-none transition-all duration-300">
                        Text Here
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-main text-xl font-semibold text-center">
                  {service.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Image */}
      <div
        className="absolute bottom-0 right-2 w-[500px] h-[250px] bg-no-repeat bg-cover bg-left z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      ></div>
    </div>
  );
};

export default Services;
