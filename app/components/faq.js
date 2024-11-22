export default function Faq() {
  return (
    <>
      <div className="w-full py-8">
        <div className="font-fira px-8 flex flex-col text-center items-center justify-center">
          <h1 className="text-2xl ">FAQ</h1>
          <h1 className="text-[35px] leading-[40px] font-bold py-4">
            Frequently Asked Question
          </h1>
          <div className="h-[6px] w-[150px] bg-[#1989CE]"></div>
          <h1 className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
        <div className="p-4 space-y-2 px-8">
          <div className="collapse collapse-arrow bg-base-200 group">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-white rounded-xl font-medium bg-[#1989CE] group-hover:bg-[#183883]">
              Click to open this one and close others
            </div>
            <div className="collapse-content rounded-full">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 group">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-white rounded-xl font-medium bg-[#1989CE] group-hover:bg-[#183883]">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 group">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-white rounded-xl font-medium bg-[#1989CE] group-hover:bg-[#183883]">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
