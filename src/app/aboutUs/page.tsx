import Footer from "../components/footer";



const About = () => {
  return (
    <div>
<section className="about bg-white py-20 text-black">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Us</h2>
    <p className="text-lg md:text-xl mb-12 text-center">
    Apple Inc. is an American multinational technology company headquartered in Cupertino, California. <b><i>We are passionate about innovating and delivering world-class technology products that transform the way people live, work, and connect. With a commitment to quality and excellence.</i></b> our diverse team collaborates to create devices and services that are simple, powerful, and elegant.
    </p>

     {/* Our Culture Section */}
     <div className="our-culture bg-gray-900 text-white p-6 md:p-10 rounded-lg shadow-lg mb-12 text-justify justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Our Culture</h2>
            <p className="text-lg mb-6 text-center">
              <b>At Apple, we believe that our culture is the heart of our success.</b> Our environment is collaborative and dynamic, encouraging team members to think boldly and creatively. We embrace diversity and inclusion, knowing that varied perspectives lead to better ideas and stronger solutions. <b>Everyone at Apple is driven by a shared passion for making a positive impact on the world through technology.</b>
            </p>
            <p className="text-lg mb-6 text-center">
              We foster a culture where innovation thrives, where the freedom to challenge the status quo is celebrated, and where employees are empowered to reach their full potential. <b>Our commitment to sustainability and ethical practices guides everything we do, ensuring that our impact on the world is positive and lasting.</b>
            </p>
            <p className="text-lg mb-6 text-center">
              <i>Join us, and be part of a team that is dedicated to pushing the boundaries of what's possible, creating products that enrich lives, and making a difference in the world.</i>
            </p>
          </div>

    {/* Company History Section */}
    <div className="company-history">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our History</h3>
      <div className="relative border-l border-gray-200 dark:border-gray-700 ml-8">
       
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">1984</time>
      <div className="text-lg font-black">First Macintosh computer</div>
      The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
      personal computer. It played a pivotal role in establishing desktop publishing as a general
      office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
      in a beige case with integrated carrying handle; it came with a keyboard and single-button
      mouse.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">1998</time>
      <div className="text-lg font-black">iMac</div>
      iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
      been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
      and has evolved through seven distinct forms
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2001</time>
      <div className="text-lg font-black">iPod</div>
      The iPod is a discontinued series of portable media players and multi-purpose mobile devices
      designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
      8 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
      million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
      over 20 years, the iPod brand is the oldest to be discontinued by Apple
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2007</time>
      <div className="text-lg font-black">iPhone</div>
      iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
      operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
      January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
      of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
      accounts for 15.6% of global smartphone market share
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2015</time>
      <div className="text-lg font-black">Apple Watch</div>
      The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
      tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
      iOS and other Apple products and services
    </div>
  </li>
</ul>
</div>
</div>
     {/* Our Team Overview Section */}
<div className="team-overview bg-gray-900 text-white p-6 md:p-10 rounded-lg shadow-lg mb-12">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 text-left mb-6 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
      <p className="text-lg mb-6">
        Our team is composed of passionate and skilled professionals dedicated to bringing you the best experience with Apple products. From innovative engineers to creative designers, every member plays a crucial role in our success.
      </p>
      <a
        href="./ourTeam"
        className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        Click Here
      </a>
    </div>
    <div className="md:w-1/2 text-center">
      <img
        src="/ourTeam.png"
        alt="Our Team"
        className="w-48 h-48 mx-auto md:w-64 md:h-64"
      />
    </div>
  </div>
  </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default About;
