import React from "react";
import team1 from "../assets/my (1).jpg";
import team2 from "../assets/my (2).jpg";
import team3 from "../assets/my (3).jpg";
import comp from "../assets/company.jpg";

const AboutUs = () => {
    const teamMembers = [
        { img: team1, name: "Md Shamim Hossain", role: "Founder & CEO" },
        { img: team2, name: "Md Shurujjaman", role: "Head of Operations" },
        { img: team3, name: "Jane Doe", role: "Marketing Lead" },
    ];

    return (
        <div className="min-h-screen bg-green-50 py-16 px-4">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
                    About GreenNest
                </h1>
                <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                    At GreenNest, our mission is to bring the beauty and benefits of indoor plants to every home.
                    We believe in creating a greener, healthier, and happier environment for everyone through quality plants, expert guidance, and care.
                </p>
            </div>

            {/* Our Story & Mission Section */}
            <div className="flex flex-col md:flex-row gap-12 mb-24 items-center max-w-6xl mx-auto">
                <div className="w-full md:w-4/5 flex justify-center">
                    <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={comp}
                            alt="Our Story"
                            className="w-full h-80 md:h-[420px] lg:h-[480px] object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>


                {/* Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-green-800">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        GreenNest was founded with a vision to connect people with nature through indoor plants.
                        Starting as a small home garden project, we have grown into a passionate community promoting indoor greenery.
                    </p>

                    <h2 className="text-2xl font-semibold text-green-800">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        To provide high-quality plants, expert tips, and a seamless experience for plant enthusiasts everywhere.
                        We aim to make indoor gardening accessible and enjoyable for everyone.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-24 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-green-800 mb-12">Meet Our Team</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-2xl p-6 w-64 hover:scale-105 transition-transform duration-300" >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-green-200"
                            />
                            <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-green-800 mb-4">Join Us Today!</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                    Explore the joy of indoor plants and transform your living space with GreenNest.
                    Connect with us and start your green journey today.
                </p>
                <a href="/contact" className="bg-green-800 text-white font-bold py-3 px-10 rounded-xl hover:bg-green-900 transition transform hover:-translate-y-1 shadow-lg" >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default AboutUs;
