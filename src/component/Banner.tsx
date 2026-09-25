import BannerImage from "../assets/banner-stack.png"

function Banner() {
  return (
    <section className="flex items-center justify-between gap-8 container mx-18 px-4 my-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-black">Build Your Ideal <br /><span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>

        <p>
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div>
          <button>Explore Technologies</button>
          <button>Learn More</button>
        </div>
      </div>

      <div>
        <img src={BannerImage} alt="Development Stack Illustration" />
      </div>
    </section>
  )
}

export default Banner;