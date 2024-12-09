import { PiClockClockwise } from "react-icons/pi";


export default function AboutFooter() {
  return (
    <div className='w-[300px]'>
      <h3 className="text-xl font-bold mb-8">About Us.</h3>
      <p className="mb-6 text-[18px] leading-[26px]">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
      </p>
      <div className="flex items-start">
        <div className="bg-customYellow rounded mr-4 w-[77px] h-[70px] flex items-center justify-center">
          <PiClockClockwise  className="text-white text-5xl" />
        </div>
        <div>
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="text-sm mt-1">Mon - Sat (8.00 - 6.00)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}