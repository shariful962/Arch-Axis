import Link from 'next/link';
import Image from 'next/image';
import img1 from '../../assets/projects/img1.png';
import img2 from '../../assets/projects/img2.png';
import img3 from '../../assets/projects/img3.png';
import img4 from '../../assets/projects/img4.png';
import img5 from '../../assets/projects/img5.png';
import img6 from '../../assets/projects/img6.png';
import bgImage from '../../assets/bg.png';

const Projects = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20 relative">
      <h1 className="text-center bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent font-bold mb-4">
        Projects
      </h1>

      {/* Filter Buttons */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="bg-white border border-main rounded-full px-7 py-4 flex gap-x-2">
          {["All", "Interior", "Architecture", "Landscape", "Exibition Booths"].map((cat, i) => (
            <Link
              key={i}
              href="/"
              className="px-7 py-3 rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white transition-all duration-500"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="imgContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 wrapper px-4 sm:px-6 mt-12">
        {[img1, img2, img3, img4, img5, img6].map((img, i) => (
          <div key={i} className="flex flex-col gap-y-1 group relative p-2 border border-black/40 rounded-md">
            <Image className="rounded-2xl" src={img} alt={`Project ${i + 1}`} />
            <div className="mt-3 flex justify-between items-center">
              <p>{["Aman Mosque", "Rohima Monjil", "Star Palles", "Taskin Villa", "RRP Restaurant", "RRP Restaurant"][i]}</p>
              <button className="cursor-pointer px-7 py-3 rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F] text-white opacity-0 group-hover:opacity-100 transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Projects Button */}
      <div className="mt-12 flex justify-center items-center">
        <button className="cursor-pointer px-7 py-3 border border-main rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:border-none hover:text-white transition-all duration-500 text-main">
          Show All Projects
        </button>
      </div>

      {/* Background Decoration */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[250px] bg-no-repeat bg-cover bg-left z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      />
    </div>
  );
};

export default Projects;
