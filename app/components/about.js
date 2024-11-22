export default function About() {
  return (
    <>
      <div className="w-full py-6">
        <div className="font-fira px-8 flex flex-col text-center items-center justify-center">
          <h1 className="text-2xl ">About Us</h1>
          <h1 className="text-[35px] leading-[40px] font-bold py-4">
            We provide best service for you customers
          </h1>
          <div className="h-[6px] w-[150px] bg-blue-300"></div>
          <h1 className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
        <div className=" p-4 px-8 border-[2px] space-y-4">
          <h1 className="text-[35px] leading-[40px] font-bold">
            We are branding strategy service from 2001 for our customers.
          </h1>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <ul className="list-disc">
            <li>Creative Deaign</li>
            <li>Creative Deaign</li>
            <li>Creative Deaign</li>
            <li>Creative Deaign</li>
            <li>Creative Deaign</li>
          </ul>
        </div>
      </div>
    </>
  );
}
