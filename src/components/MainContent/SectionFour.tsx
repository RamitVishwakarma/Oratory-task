import srcImg from "../../assets/images/srcImg.png";

export const SectionFour = () => {
  return (
    <div className="mt-[2.4rem]">
      {/* Atlasion with follow button */}
      <div className="flex items-center gap-3.5">
        <div className="p-[0.62rem] pl-0 flex  items-center gap-3">
          <img src={srcImg} className="w-10 h-10 rounded-md" />
          <span className="text-xl text-text-3">Atlassian</span>
        </div>

        <div className="text-[#003788] py-[0.28rem] px-[0.94rem] bg-[#E0EBF9] rounded-lg font-bold shadow-follow text-[0.6875rem]">
          Follow
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-4 w-[46rem]">
        <div className="grid grid-rows-3 gap-6">
          {/* 1st column */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-text-1">Company size</span>
            <span className="text-text-5">1k-2k Employees</span>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="text-sm text-text-1">Sector</span>
            <span className="text-text-5">
              Information Technology, Infrastructure
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-text-1">Founded In</span>
            <span className="text-text-5">2019</span>
          </div>
        </div>
        {/* 2nd column */}
        <div className="grid grid-rows-3 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-text-1">Type</span>
            <span className="text-text-5">Private</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-text-1">Funding</span>
            <span className="text-text-5">Bootstrapped</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-text-1">Founded By</span>
            <span className="text-text-5">
              <a
                target="_blank"
                className="appearance-none"
                href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw">
                Scott Farquhar,{" "}
              </a>

              <a
                target="_blank"
                className="appearance-none"
                href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA">
                Mike Cannon-Brookes
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* Report Listing */}
      <div className="mt-[1.44rem] mb-4">
        <a className="underline text-xs text-light-gray" href="#">
          Report this listing
        </a>
      </div>
    </div>
  );
};
