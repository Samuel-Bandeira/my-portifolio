import FancyPicture from "./FancyPicture";

const AboutMe = () => {
  return (
    <div className="flex justify-center h-screen text-white">
      <div className="w-[55%]">
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex space-x-2 items-center">
            <p className="text-[1.3rem] text-[#5ae7c8]">01. </p>
            <p className="text-[1.6rem] font-bold text-[#ccd6f6]">About me</p>
          </div>
          <div className="w-[300px] border border-white"></div>
        </div>
        <div className="flex space-x-10">
          <div className="space-y-8 text-[#8892b0]">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <FancyPicture />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
