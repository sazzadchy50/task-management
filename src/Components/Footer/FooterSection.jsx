import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import logo from "../../assets/logo.png";
const FooterSection = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={logo}
            alt="Task Manager Logo"
            name="Task Manager"
          />

          <Footer.LinkGroup>
            <Footer.Icon href="#" icon={BsLinkedin} />

            <Footer.Icon href="#" icon={BsGithub} />
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="TaskManger™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;
