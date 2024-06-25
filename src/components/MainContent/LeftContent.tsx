import { SectionFour } from "./SectionFour";
import { SectionOne } from "./SectionOne";
import { SectionThree } from "./SectionThree";
import { SectionTwo } from "./SectionTwo";

export const LeftContent = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="border-t border-b border-neutral-gray">
        <div className=" ml-[6.25rem]">
          <SectionOne />
        </div>
      </div>
      {/* section 2  */}
      <div className="border-b border-neutral-gray">
        <div className=" ml-[6.25rem]">
          <SectionTwo />
        </div>
      </div>

      <div className="border-b border-neutral-gray">
        <div className=" ml-[6.25rem]">
          <SectionThree />
        </div>
      </div>
      <div className=" ml-[6.25rem]">
        <SectionFour />
      </div>
    </>
  );
};
