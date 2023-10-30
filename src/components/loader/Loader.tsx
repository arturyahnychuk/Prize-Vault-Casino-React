import SpinnerGif from "@/assets/images/spinner.gif"

const loader = () => {
  return (
    <div className="w-full bg-mainLinear z-[999999] fixed top-0 left-0 h-screen flex items-center justify-center">
      <img src={SpinnerGif} alt="" width={80} className="rounded-full"/>
    </div>
  )
}

export default loader