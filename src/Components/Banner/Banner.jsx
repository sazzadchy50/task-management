import { Link } from "react-router-dom";
import bannerImg from "../../assets/Untitled design.png";
import { Button } from "flowbite-react";
const Banner = () => {
  return (
    <div className="container mx-auto w-full flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen gap-8 ">
      <div className="p-5 ">
        <h3 className="text-4xl md:text-7xl  font-bold leading-normal">
          Welcome To <br />
          Task Management
        </h3>

        <Link to="/dashboard">
          <Button
            outline
            gradientDuoTone="purpleToPink"
            size="lg"
            className="mt-10"
          >
            Let&rsquo;s Explore
          </Button>
        </Link>
      </div>
      <div className="w-2/3">
        {/* <img className="w-96" src={bannerImg} alt="" /> */}
        <img className="" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
