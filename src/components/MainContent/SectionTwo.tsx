import Figma from "../../assets/images/Figma.png";
import AdobeIllustrator from "../../assets/images/AdobeIlustrator.png";
import AdobeXD from "../../assets/images/AdobeXD.png";

export const SectionTwo = () => {
  return (
    <div className="grid grid-cols-4 gap-16 mt-8 h-[11.12rem] w-fit">
      {/* Col 1 */}
      <div className="flex flex-col gap-2">
        <span className="text-text-1 text-[0.875rem]">Skills Required</span>
        <div className="py-1 px-[0.38rem] inline-flex items-center justify-center gap-1 shadow-for-img border border-[#D0D5DD] rounded-md w-fit">
          <img className="w-4 h-4" src={Figma} />
          <span className="text-[#344054] text-xs">Figma</span>
        </div>
        <div className="py-1 px-[0.38rem] flex items-center justify-center gap-1 shadow-for-img border border-[#D0D5DD] rounded-md w-fit">
          <img className="w-4 h-4" src={AdobeIllustrator} />
          <span className="text-[#344054] text-xs">Adobe Illustrator</span>
        </div>
        <div className="py-1 px-[0.38rem] flex  items-center justify-center gap-1 shadow-for-img border border-[#D0D5DD] rounded-md w-fit">
          <img className="w-4 h-4" src={AdobeXD} />
          <span className="text-[#344054] text-xs">Adobe XD</span>
        </div>
      </div>
      {/* Col 2 */}
      <div className="flex flex-col ">
        <span className="text-text-1 text-[0.875rem]">Preferred Langugage</span>
        <div className="text-text-5">English</div>
      </div>
      {/* Col 3 */}
      <div className="flex flex-col ">
        <span className="text-text-1 text-[0.875rem]">Type</span>
        <div className="text-text-5">Full time</div>
      </div>
      {/* Col 4 */}
      <div className="flex flex-col ">
        <span className="text-text-1 text-[0.875rem]">Years of Experience</span>
        <div className="text-text-5">3+ Years of Experience</div>
      </div>
    </div>
  );
};
