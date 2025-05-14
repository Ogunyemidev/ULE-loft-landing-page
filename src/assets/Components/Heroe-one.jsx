import Hero

// HeroSection.jsx
export default function HeroSection() {
    return (
      <div className="bg-black text-white px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Perfect Stay,<br />
              Just a <span className="text-yellow-400">Loft</span> Away
            </h1>
          </div>
  
          {/* Speech Bubble */}
          <div className="flex-1">
            <div className="bg-white text-black p-6 rounded-3xl shadow-lg max-w-md text-center relative">
              <p>
                Book an apartment anywhere in Lagos in less than 5 minutes with your favourite features!
              </p>
            </div>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl relative max-w-6xl mx-auto">
          <img
            src="../Images/Hero.png"
            alt="Living Room"
            className="w-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-60 rounded-full p-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }
  