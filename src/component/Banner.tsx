import BannerImage from "../assets/banner-stack.png"

function Banner() {
  return (
    <section className="flex items-center justify-between gap-8 max-w-6xl mx-auto my-1 px-4">
      <div className=" flex-1 space-y-4">
        <h1 className="text-4xl font-extrabold text-black">Build Your Ideal <br /><span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>

        <p className="text-gray-600">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex items-center gap-4">
          <button className="text-sm text-white font-semibold px-4 py-1.5 bg-gradient-to-r from-[#FF5722] to-[#D81B7E] rounded-md">Explore Technologies</button>
          <button className=" bg-white text-gray-500 font-semibold px-6 py-1  border border-gray-300 rounded-md">Learn More</button>
        </div>
      </div>

      <div className="flex-1">
        <img src={BannerImage} alt="Development Stack Illustration" />
      </div>
    </section>
  )
}

export default Banner;