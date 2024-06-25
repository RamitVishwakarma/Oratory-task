import { GreenDot } from "../../assets/svgs/GreenDot";
import { GrayDot } from "../../assets/svgs/GrayDot";
import { Location } from "../../assets/svgs/Location";
import { DataStack } from "../../assets/svgs/DataStack";

export const SectionOne = () => {
  return (
    <div className="flex flex-col gap-6 h-[10.38rem]">
      <div className="flex gap-3 items-center mt-9">
        <div className="font-bold text-[2.1875rem] text-text-5">
          Senior Product Designer
        </div>
        <GrayDot />
        <div className="text-dark-gray text-[0.875rem]">posted 2 days ago</div>
        <div className="flex items-center gap-1 py-[0.125rem] pl-[0.375rem] pr-2 rounded-full border bg-pale-green border-light-green">
          <GreenDot />
          <span className="text-green text-[0.75rem]">Open</span>
        </div>
      </div>
      {/* 2nd part */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <Location />
          <span className="text-xl text-text-2"> Delware, USA</span>
        </div>
        <GrayDot />
        <div className="flex items-center gap-3">
          <DataStack />
          <span className="text-xl text-text-2">$300k-$400k</span>
        </div>
      </div>
    </div>
  );
};
