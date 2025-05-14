import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGoogle
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[#111] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2">Contact Info</h4>
            <p>+2347044723118</p>
            <p>loftbyule@ng.com</p>
            <p className="mt-2">Partner with Loft</p>
          </div>
  
          <div>
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <p>About Loft</p>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
          </div>
  
          <div>
            <h4 className="text-xl font-bold mb-2">Help and Support</h4>
            <p>Live chat</p>
            <p>FAQs</p>
            <p>Terms and Condition</p>
          </div>
  
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-2">Newsletter</h4>
            <p className="mb-4">
              Don't miss out on the best rental deals! Sign up for our newsletter and
              stay informed. Don't wait. Subscribe today!
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded border border-gray-600 bg-black text-white"
              />
              <button className="bg-purple-500 text-white px-6 py-2 rounded">Submit</button>
            </div>
          </div>
        </div>
  
        <div className="flex justify-center mt-10 space-x-6 text-white text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaGoogle />
        </div>
      </footer>
    );
  }
  