import { Bell } from "../assets/svgs/Bell";
import Briefcase from "../assets/svgs/Briefcase";
import { ChevronDown } from "../assets/svgs/ChevronDown";
import { Dot } from "../assets/svgs/Dot";
import Payments from "../assets/svgs/Payments";
import { Textbox } from "../assets/svgs/Textbox";
import logoImage from "../assets/images/srcImg.png";
import Layout from "./Layout";
import { TwoPeople } from "../assets/svgs/TwoPeople";

const Navbar = () => {
  return (
    <Layout>
      <div className="h-[7.2588rem] flex items-center justify-between bg-white shadow-navbar">
        {/* Logo */}
        <div className="w-[6.25rem] h-[3.81rem] bg-neutral-gray flex items-center justify-center ml-10">
          <span className="text-dark-orange font-bold text-xl">Logo</span>
        </div>
        {/* 2nd section */}
        <div className="rounded-full flex items-center gap-[1.2rem] bg-white h-[4.625rem] ">
          {/* Jobs page */}
          <div className="bg-dark-orange rounded-full text-white border-2 border-light-orange flex items-center gap-2 px-4 py-3.5 h-[3.62rem] shadow-jobs cursor-pointer">
            <Briefcase />
            <span className="text-xl ">Jobs</span>
          </div>
          {/* 2nd Part */}
          <div className=" flex items-center gap-2 rounded-full shadow-inside shadow-neutral-gray h-[4.625rem]  border-[0.5px] border-neutral-gray">
            {/* Messages page */}
            <div className=" flex gap-2 relative ml-[2.88rem] mr-[4.69rem] cursor-pointer">
              <span className="absolute left-5 top-4.5">
                <Dot />
              </span>
              <Textbox />
              <span className="text-xl text-light-gray ">Messages</span>
            </div>
            {/* Payments page */}
            <div className="flex gap-2 mr-[2.47rem] cursor-pointer">
              <Payments />
              <span className="text-light-gray text-xl ">Payments</span>
            </div>
            {/* Application page */}
            <div className="flex gap-2 mr-[1.91rem] cursor-pointer">
              <TwoPeople />
              <span className="text-light-gray text-xl ">Applications</span>
            </div>
          </div>
        </div>
        {/* 3rd section */}
        <div className="flex gap-4 items-center mr-6 p-2.5">
          <div className="flex items-center cursor-pointer">
            <div className="relative">
              <Bell />
              <span className="absolute left-[1.4rem] bottom-[1.55rem] ">
                <Dot />
              </span>
            </div>
          </div>
          <div className="flex gap-[6px]">
            <img className="w-10 h-10 rounded-full " src={logoImage} />
            <div className="flex items-center cursor-pointer">
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Navbar;
