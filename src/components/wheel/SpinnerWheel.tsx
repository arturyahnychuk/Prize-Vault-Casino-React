import { useState } from "react";
// Components
import Btn from "../ui/Btn";

import SpinnerWheelImage from "@/assets/images/wheel.svg";
import ArrowImage from "@/assets/images/arrow.svg";
// Gift Images
import WheelGift1 from "@/assets/images/wheelGift1.svg";
import WheelGift3 from "@/assets/images/wheelGift3.svg";
import WheelGift5 from "@/assets/images/wheelGift5.svg";
import WheelGift7 from "@/assets/images/wheelGift7.svg";

interface GiftsArr {
  name: string;
  image?: string | null;
  text?: string | null;
  classNames: string;
  rotate: number | null;
}
const SpinerWheel = () => {
  const [giftsArr] = useState<GiftsArr[]>([
    {
      name: "gift-1",
      image: WheelGift1,
      text: null,
      rotate: null,
      classNames:
        "w-[15vw] max-w-[60px] absolute top-[15%] left-[50.5%] translate-x-[-50%]",
    },
    {
      name: "spin",
      image: null,
      text: "+1 Spin",
      rotate: 46.91,
      classNames: "absolute top-[25%]  right-[19%]",
    },
    {
      name: "helicopter",
      image: WheelGift3,
      text: null,
      rotate: null,
      classNames:
        "w-[15vw] max-w-[40px] absolute top-[50%] right-[15%] translate-y-[-50%]",
    },
    {
      name: "lose",
      image: null,
      text: "You Lose!",
      rotate: 136,
      classNames: "absolute bottom-[22%] right-[19%]",
    },
    {
      name: "headphone",
      image: WheelGift5,
      text: null,
      rotate: null,
      classNames:
        "w-[15vw] max-w-[40px] absolute left-[50%] bottom-[15%] translate-x-[-50%]",
    },
    {
      name: "lose",
      image: null,
      text: "You Lose!",
      rotate: -135,
      classNames: "absolute bottom-[23%] left-[19%]",
    },
    {
      name: "bear",
      image: WheelGift7,
      text: null,
      rotate: null,
      classNames:
        "w-[15vw] max-w-[60px] absolute top-[50%] left-[11%] rotate-[-13deg] translate-y-[-50%]",
    },
    {
      name: "lose",
      image: null,
      text: "You Lose!",
      rotate: -45,
      classNames: "absolute left-[17%] top-[22%]",
    },
  ]);
  

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <p className="font-angkor text-xl text-yellow leading-normal tracking-[-1.25px] text-shadow uppercase">
          spins
        </p>
        <div className="flex items-center justify-center w-[55px] h-[30px] rounded-[3px] bg-white border-2 mb-1 border-darkBorder">
          <p className="font-gurajada text-5xl text-yellow text-stroke-orange leading-[45px] tracking-[-2.25px] mb-1 ">
            2
          </p>
        </div>
      </div>
      <div className="my-[30px] w-full w-[371px] bg-yellow rounded-full shadow-orange-md">
        <div className="relative w-full">
          <img
            src={ArrowImage}
            className="absolute z-[999] w-[45px] bottom-[calc(100%-50px)] left-[50%] translate-x-[-50%]"
            alt="spiner wheel arrow"
          />

          <div
            className="w-full rounded-full wheel"            
          >
            <img
              src={SpinnerWheelImage}
              className="w-full"
              alt="spiner wheel"
            />

            <div className="absolute left-0 top-0 w-full h-full rounded-full">
              {giftsArr.map((gift, index) => (
                <div key={index}>
                  {gift.image ? (
                    <img
                      src={gift.image}
                      className={gift.classNames}
                      alt={gift.name}
                    />
                  ) : (
                    <p
                      style={{ transform: `rotate(${gift.rotate}deg)` }}
                      className={` ${gift.classNames} font-angkor max-w-[70px] text-center leading-[22px] text-md text-white text-shadow`}
                      key={index} // Add the key prop here
                    >
                      {gift.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 mx-auto w-max">
        <Btn label="PLAY" />
      </div>
    </>
  );
};

export default SpinerWheel;
