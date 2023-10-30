import { useState, ChangeEvent } from "react";

import WinnerTitle from "@/components/ui/winnerTitle"

import FormLayout from "@/components/layout/FormLayout"
import Input from "@/components/ui/Input"
import Btn from "@/components/ui/Btn"

interface FormData {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
}

const Info = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert("Form Submit")
  }

  return (
    <>
      <WinnerTitle />
      <FormLayout onSubmit={handleSubmit} formTitle="Shipping Information">
        <div className="w-full grid grid-cols-2 gap-[27px]">
          <Input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <Input
          placeholder="Address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <div className="w-full grid grid-cols-3 gap-[16px] border-b border-b-gray-400 pb-5">
          <Input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Zip"
            name="zip"
            type="number"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </div>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
         <Input
          placeholder="Phone"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <div className="w-full h-[25px] opacity-0 invisible"></div>
        <Btn className="absolute bottom-[-38px] left-[50%] translate-x-[-50%]" label="CONFIRM"/>        
      </FormLayout>
    </>
  )
}

export default Info;