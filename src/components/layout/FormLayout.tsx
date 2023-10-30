import { ReactNode, FormEvent } from "react"

interface FormLayoutProps {
  children: ReactNode,
  formTitle: string,
  onSubmit: () => void
}

const FormLayout = ({children, formTitle, onSubmit}: FormLayoutProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="relative w-full bg-white rounded-[11px] border border-blue p-5">
      <div className="w-full pb-3 border-b-[0.25px] border-b-gray-400 mb-[27px]">
        <p className="font-amikoBold text-lg text-black tracking-[-1.1px] text-center capitalize">
          {formTitle}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[17px]">
        {children}
      </form>
    </div>
  )
}

export default FormLayout