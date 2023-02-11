import Button from "./Button";

const Home = () => {
  return (
    <div className="h-screen flex justify-center pt-24 text-white">
      <div className="w-[60%]">
        <p className="text-[#5ae7c8] text-[1.4rem]">Hi, my name is</p>
        <div className="text-[4.5rem] leading-tight font-semibold mb-5">
          <p className="text-[#ccd6f6]">Samuel Bandeira.</p>
          <p className="text-[#8892b0]">I build things for the web.</p>
        </div>
        <p className="w-[50%] text-[#8892b0] mb-14">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <Button title="Check out my course!" />
      </div>
    </div>
  );
};

export default Home;
