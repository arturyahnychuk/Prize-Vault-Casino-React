import { useState, ChangeEvent } from "react";
// Components
import FormLayout from "@/components/layouts/formLayout";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";
import WinnerTitle from "@/components/ui/winnerTitle";
// images
import masterCardImage from "@/assets/images/mastercard.png";
import checkoutImage from "@/assets/images/checkout.png";

interface FormData {
  card_number: string;
  month: string;
  year: string;
  cvv: string;
}

const CheckoutPage = () => {
  const [formData, setFormData] = useState<FormData>({
    card_number: "",
    month: "",
    year: "",
    cvv: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert("Form Submit");
  };
  return (
    <>
      <WinnerTitle />

      <FormLayout onSubmit={handleSubmit} formTitle="Final Step">
        <label
          htmlFor="usps_ground"
          className="w-full flex  items-center rounded-[3px] gap-[11px] px-[12px] py-[10px] bg-lightGray border border-black cursor-pointer hover:opacity-80 transition-all"
        >
          <input
            type="checkbox"
            name="usps_ground"
            checked={true}
            className="peer sr-only"
            id="usps_ground"
          />
          <div className="w-[18px] h-[18px] rounded-full bg-white border-[5px] border-darkGray peer-checked:border-black transition-all"></div>
          <p className="select-none font-amikoBold text-sm leading-[15px] mt-1">
            USPS Ground (1-3 Bus Days) - $6.95
          </p>
        </label>
        <div className="relative w-full mt-10">
          <div className="absolute bg-yellow shadow-md rounded-[3px] w-full z-[1] max-w-[249px] left-[50%] bottom-[calc(100%-5px)] translate-x-[-50%] flex items-center gap-[12px] px-[14px] py-[9px]">
            <img
              src={masterCardImage}
              width={16}
              className="w-full max-w-[16px]"
              alt="mastercard"
            />
            <p className="font-amikoBold text-center mt-[3px] text-xs text-black leading-[15px]">
              50% OFF for MasterCard Customers
            </p>
            <img
              src={masterCardImage}
              width={16}
              className="w-full max-w-[16px]"
              alt="mastercard"
            />
          </div>
          <Input
            placeholder="Card Number"
            type="numbe"
            name="card_number"
            className="relative w-full z-[99]"
            value={formData.card_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full grid grid-cols-[1fr,auto] gap-[24px] border-b border-b-gray-400 pb-5">
          <div className="w-full grid grid-cols-2 gap-[14px]">
            <Input
              type="number"
              maxLength={2}
              placeholder="Month"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
            />
            <Input
              type="number"
              placeholder="Year"
              name="year"
              minLength={4}
              maxLength={4}
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <Input
            className="max-w-[100px]"
            placeholder="CVV"
            name="cvv"
            type="number"
            maxLength={5}
            value={formData.cvv}
            onChange={handleInputChange}
          />
        </div>
        <Btn
          className="!px-4 mx-auto"
          textClassName="text-xl tracking-[0.5px]"
          label="CLAIM PRIZE"
        />

        <img className="w-full" src={checkoutImage} alt="checkout_image" />
      </FormLayout>
    </>
  );
};

export default CheckoutPage;
