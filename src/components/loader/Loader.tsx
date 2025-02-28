import SpinnerGif from "@/assets/images/spinner.gif";

const Loader = () => {
  return (
    <>
        <div id="loader" className="w-full bg-mainLinear z-[999999] fixed top-0 left-0 h-screen flex items-center justify-center">
          <img src={SpinnerGif} alt="" width={80} className="rounded-full" />
        </div>
    </>
  );
};

export default Loader;
