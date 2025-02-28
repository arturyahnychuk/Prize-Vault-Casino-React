import {useEffect} from "react"
// Components
import WinnerTitle from "@/components/ui/winnerTitle";
// images
import AustinImage from "@/assets/images/austin.svg"
import { useNavigate } from "react-router-dom";

const Winner = () => {
  const navigate = useNavigate()
  useEffect(()=> {
    setTimeout(()=> {
      navigate("/info")
    }, 5000)
  }, [])
  return (
    <>
    <div className="pulsate ">
      <WinnerTitle />
    </div>

      <div className="pulsate  flex flex-col items-center w-full bg-white rounded-[11px] border-[8px] border-orange pt-[32px] px-[12px]">
        <p className="font-amikoBold text-[31px] text-dark tracking-[-1.55px] text-center">PitBoss Austin XL Grill</p>
        <img src={AustinImage} className="w-full" alt="Pitboss austin xl grill" />
      </div>
    </>
  );
};

export default Winner;
