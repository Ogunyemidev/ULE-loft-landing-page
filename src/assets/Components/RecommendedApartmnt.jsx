import { FaLocationDot, FaDog, FaBath, FaBed } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FrameOne from "../Images/FrameOne.png"
import FrameTwo from "../Images/AboutImageTwo.png"

const apartments = [
  {
    id: 1,
    title: "Kayes Sea View room",
    location: "Ikoyi, Lagos Nigeria",
    imageUrl: "/images/kayes-room.jpg",
    price: "₦250,000.00",
    bedrooms: 4,
    bathrooms: 4,
    petFriendly: true,
    reviewers: ["/avatars/avatar1.png", "/avatars/avatar2.png", "/avatars/avatar3.png"]
  },
  {
    id: 2,
    title: "Karen’s Home",
    location: "Ikeja, Lagos Nigeria",
    imageUrl: "/images/karens-home.jpg",
    price: "₦150,000.00",
    bedrooms: 2,
    bathrooms: 2,
    petFriendly: true,
    reviewers: ["/avatars/avatar4.png", "/avatars/avatar5.png", "/avatars/avatar6.png"]
  }
];

export default function RecommendedApartments() {
  return (
    <div className="px-6 py-12 bg-black text-white">
      <div className="flex items-center gap-2 mb-8">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-full text-sm font-medium shadow-lg">
          <svg width="20" height="20" fill="none">
            <circle cx="10" cy="10" r="10" fill="white" />
            <path d="M6 10h8M10 6v8" stroke="purple" strokeWidth="2" />
          </svg>
          Recommended Apartments
        </button>
      </div>

      <div className="flex gap-6">
        {apartments.map((apt) => (
          <div key={apt.id} className="bg-[#141414] rounded-3xl overflow-hidden shadow-lg w-full max-w-md">
            <div className="relative">
              <img src={FrameOne} alt={apt.title} className="w-full h-64 object-cover rounded-t-3xl" />
              {/* Optional image carousel dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">{apt.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaLocationDot className="text-purple-500" />
                {apt.location}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1"><FaBed /> {apt.bedrooms} Bedroom</span>
                <span className="flex items-center gap-1"><FaBath /> {apt.bathrooms} Bathroom</span>
                {apt.petFriendly && <span className="flex items-center gap-1"><FaDog /> Pet Friendly</span>}
              </div>

              <div className="text-xl font-bold text-white">{apt.price}</div>

              <button className="mt-2 w-full py-2 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition">
                Book Loft
              </button>

              <div className="flex items-center gap-2 mt-3">
                {apt.reviewers.map((src, idx) => (
                  <img
                    key={idx}
                    src={FrameTwo}
                    className="w-6 h-6 rounded-full border-2 border-black"
                    alt="reviewer"
                  />
                ))}
                <span className="text-xs text-gray-400">reviews</span>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <div className="flex flex-col justify-center items-center gap-4 ml-4">
          <button className="p-2 bg-[#141414] rounded-full text-white hover:bg-purple-700">
            <IoIosArrowBack size={20} />
          </button>
          <button className="p-2 bg-[#141414] rounded-full text-white hover:bg-purple-700">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
