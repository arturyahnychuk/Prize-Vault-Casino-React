import TresureImage from "@/assets/images/tresure.svg";

const Header  = () => {
  return (
    <>
      <div className="flex items-center gap-[11px] w-max mx-auto pt-[21px]">
        <img
          src={TresureImage}
          width={30}
          className="w-full max-w-[30px]"
          alt="Tresure"
        />
        <p className="font-jomhuria text-yellow text-2xl leading-normal pt-2 text-shadow">
          Prize vault
        </p>
        <img
          src={TresureImage}
          width={30}
          className="w-full max-w-[30px]"
          alt="Tresure"
        />
      </div>
    </>
  )
}

export default Header