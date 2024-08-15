import Footer from "../components/footer";


const Team = () => {
  return (
    <div>
 <section className="team bg-white py-20 text-black">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Team</h1>
          {/* Our Team Overview Section */}
          <div className="team-overview bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg mt-8 md:mt-12 justify-center">
            <div className="text-center justify-center mb-6">
              <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
                <b><i>Our team consists of talented individuals with a shared passion for
                innovation, technology, and making a difference in the world. Get to
                know the people behind the brand and discover how we bring our vision
                to life.</i></b>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center text-center">
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
          </div>
          {/* Our Team Overview Section */}
          <div className="team-overview bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg mt-8 md:mt-12 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center text-center">
              {[
                {
                  name: "Mark Hobbs",
                  role: "System Administrator",
                  img: "/admin.jpg",
                },
                {
                  name: "Petri Laukkanen",
                  role: "QA Engineer",
                  img: "/QA.jpg",
                },
                {
                  name: "Eunji Lee",
                  role: "Data Analyst",
                  img: "/data.jpg",
                },
                {
                  name: "John Mangus",
                  role: "Apple Sales Manager",
                  img: "/sales.jpg",
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
          </div>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
