import Marquee from "react-fast-marquee";
import Footer from "../components/footer";


const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <section className="hero bg-white py-20 md:py-20 text-black w-full">
        <div className="container mx-auto text-center px-4 w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to the iPhone Website
          </h1>
          <p className="text-base md:text-lg lg:text-2xl mb-6 md:mb-8">
            Discover the best iPhone products here
          </p>

          {/* Video or Image based on device responsiveness */}
          <div className="video-container flex mx-auto mb-6 md:mb-8 w-full max-w-screen-lg">
            <video
              className="w-full h-auto object-cover"
              preload="auto"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/iphone.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <noscript>
              <img src="/iphone.jpg" alt="iPhone" className="w-full h-auto" />
            </noscript>
          </div>

 {/* Our Team Overview Section */}
 <div className="team-overview bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg mt-8 md:mt-12">
  <div className="text-center justify-center mb-6">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
      Meet Our Team
    </h2>
    <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
      Our team consists of talented individuals with a shared passion for
      innovation, technology, and making a difference in the world. Get to
      know the people behind the brand and discover how we bring our vision
      to life.
    </p>
  </div>
  
  {/* Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
    {[
      {
        name: "Steve Jobs",
        role: "CEO & Founder",
        img: "/ceo.jpg",
      },
      {
        name: "Tim Cook's",
        role: "CTO",
        img: "/cto.jpg",
      },
      {
        name: "Abyan M.F",
        role: "Lead Designer",
        img: "/ganteng.jpg",
      },
      {
        name: "Ricky Strauss",
        role: "Head of Marketing",
        img: "/marketing.jpg",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4 object-cover"
        />
        <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
        <p className="text-sm md:text-base text-gray-600">
          {member.role}
        </p>
      </div>
    ))}
  </div>
  
  {/* Centered Button Section */}
  <div className="flex justify-center mt-8">
    <a
      href="./ourTeam"
      className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700"
    >
      Join Our Team
    </a>
  </div>
</div>
<br />
<br />
<br />
 {/* Testimonials Section */}
 <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
            What Our Users Say
          </h2>
           <Marquee>
          <div className="grid grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-6 md:gap-8">
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-base md:text-lg">"The best iPhone I've ever used!"</p>
              <p className="font-bold mt-4">- John Doe</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-base md:text-lg">"Amazing performance and design."</p>
              <p className="font-bold mt-4">- Jane Smith</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-base md:text-lg">"A must-have for every tech lover."</p>
              <p className="font-bold mt-4">- Alice Johnson</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-base md:text-lg">"Great user experience, highly recommended!"</p>
              <p className="font-bold mt-4">- Michael Brown</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-base md:text-lg">"The camera quality is out of this world!"</p>
              <p className="font-bold mt-4">- Sarah Davis</p>
            </div>
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-base md:text-lg">"Best battery life I've ever had in a phone."</p>
              <p className="font-bold mt-4">- Kevin White</p>
            </div>
          </div>
          </Marquee>
<br />
<br />
<br />
          {/* Products Section */}
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Get to know iPhone more deeply.
            </h2>
            <div className="flex overflow-x-auto space-x-4 px-2 py-4 -mx-2">
              {[
                {
                  src: "/p1.png",
                  title: "Advanced Camera",
                  desc: "From selfie to making movie. Anything is possible.",
                },
                {
                  src: "/p2.png",
                  title: "Chips designed by Apple",
                  desc: "Speed you can feel. Soo smoothly.",
                },
                {
                  src: "/p3.png",
                  title: "Battery",
                  desc: "The greatness of incredible battery power.",
                },
                {
                  src: "/p4.png",
                  title: "Innovation",
                  desc: "Charming and tough in every corner.",
                },
                {
                  src: "/p5.png",
                  title: "Personalize your iPhone",
                  desc: "Make it yours. All of it. By yourself.",
                },
                {
                  src: "/p6.png",
                  title: "Peace of Heart and Mind",
                  desc: "Security features that help you. Be careful.",
                },
                {
                  src: "/p7.png",
                  title: "Privacy",
                  desc: "Your data. Where you want it. And when you want it.",
                },
                {
                  src: "/p8.png",
                  title: "Environment",
                  desc: "Recycling. Reusing. Repeating.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-black flex-shrink-0 w-48 md:w-64 rounded-lg overflow-hidden shadow-lg mx-auto"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-sm md:text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-xs md:text-base">{item.desc}</p>
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-xs md:text-base">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
<br />
<br />
<br />
{/* Company Overview Section */}
<div
  className="company-overview bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg mb-8 md:mb-12"
  style={{ backgroundImage: "url('/inc.jpg')" }}
>
  <div className="bg-white bg-opacity-80 p-6 rounded-lg">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="text-left mb-6 md:mb-0 md:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Apple Inc.
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
          Apple Inc. is an American multinational technology <b><i>company
          headquartered in Cupertino, California, that designs, develops,
          and sells consumer electronics, computer software, and online
          services.</i></b> The company's best-known hardware products include the
          iPhone, iPad, Mac, Apple Watch, and Apple TV.
        </p>
        <a
          href="./aboutUs"
          className="rounded-lg bg-black px-5 py-2.5 text-center text-xs md:text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
          Learn More
        </a>
        </div>
      <div className="text-center md:w-1/2 lg:pl-10">
        <img
          src="/inca.jpg"
          alt="Additional Image"
          className="w-full h-auto md:w-[200px] md:h-[150px] lg:w-[350px] lg:h-[400px] rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
</div>
<br />

          {/* Collaboration Section */}
          <h2 className="text-2xl md:text-4xl font-bold mt-8 md:mt-12 mb-6 md:mb-8">
            Our Company Collaborates With
          </h2>
          <Marquee>
            <div className="grid grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-4">
              {[
                "/bbc.png",
                "/dell.png",
                "/usArmy.png",
                "/usNavy.png",
                "/nasa.png",
                "/cisco.png",
                "/mit.png",
                "/download.png",
                "/princeton.png",
                "/microsoft.png",
              ].map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                  <br />
                  <img
                    src={logo}
                    alt={`Company Logo ${index + 1}`}
                    className="max-w-full h-12 md:h-16 lg:h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
<br />
          {/* Tagline Section */}
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mt-8 md:mt-12 mb-4 text-black italic">
            Empower Your World, In Every Way,<br />With Apple Here, Every Day.
          </h2>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
