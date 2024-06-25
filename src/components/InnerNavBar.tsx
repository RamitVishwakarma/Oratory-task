import Layout from "./Layout";

const InnerNavBar = () => {
  return (
    <>
      <Layout>
        <div className="border-t border-b border-neutral-gray bg-white h-[4.46rem] flex items-center text-xl text-neutral-gray-4">
          <div className=" flex gap-[4.5rem] ml-[6.25rem]">
            <div className="relative cursor-pointer">
              <div className="text-dark-orange">Job preview</div>
              <div className="border-b border-[0.133px] border-dark-orange absolute w-[4.0625rem] top-[2.95rem] left-6"></div>
            </div>
            <div className="cursor-pointer">Applicants</div>
            <div className="cursor-pointer">Match</div>
            <div className="cursor-pointer"> Messages</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InnerNavBar;
