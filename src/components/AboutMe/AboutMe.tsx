import TextP from "../TextP";
import Title from "../Title";
import FancyPicture from "./FancyPicture";

const AboutMe = () => {
  return (
    <div className="text-white h-screen flex flex-col justify-center">
      <Title number={1} text="About Me" />
      <div className="flex justify-between">
        <div className="text-[#8892b0] w-[60%]">
          <TextP>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </TextP>
          <TextP>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </TextP>
          <TextP>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </TextP>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <FancyPicture />
      </div>
    </div>
  );
};

export default AboutMe;
