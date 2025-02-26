import Image from 'next/image';

const AppProject = ({ project }) => (
  <div className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center overflow-hidden">
    <div className="mb-3">
      <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-primary">
        {project.name}
      </h3>
      <p className="text-gray text-s pt-2">{project.stack}</p>
      <div className="flex space-x-8 justify-center pt-2">
        <a href={project.google} target="_blank" rel="noopener noreferrer">
          <h5 className="text-gray text-base lg:text-ms font-semibold transition duration-300 hover:text-primary">
            Google Play
          </h5>
        </a>
        <a href={project.app} target="_blank" rel="noopener noreferrer">
          <h5 className="text-gray text-base lg:text-ms font-semibold transition duration-300 hover:text-primary">
            App Store
          </h5>
        </a>
      </div>
    </div>
    <div className="shadow-xl">
      <Image
        src={project.image}
        alt={project.name}
        layout="responsive"
        width={100}
        height={60}
        quality={100}
        placeholder="blur"
        blurDataURL={project.image}
        className="transition duration-200 transform translate-y-1 hover:translate-y-0 "
      />
    </div>
  </div>
);

export default AppProject;
