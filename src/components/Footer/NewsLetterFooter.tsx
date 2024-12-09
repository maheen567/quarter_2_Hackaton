export default function NewsletterFooter() {
  return (
<div className="w-[1100px] mx-auto text-center mb-12 flex gap-[1px]">
<div className="flex flex-col">
<h2 className="text-3xl font-bold mb-4">
        <span className="text-customYellow">Still</span> You Need Our Support ?
      </h2>
      <p className="mb-6">Dont wait make a smart and logical quote here. Its pretty easy.</p>
</div>

      <form className="w-[350px] h-[55.86px] flex max-w-2xl mx-auto">
        <input 
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-customYellow text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-customYellow px-6 py-2 rounded-r-md font-semibold hover:bg-customYellow hover:text-white transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  )
}

