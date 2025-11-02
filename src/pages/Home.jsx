import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import ExpertCard from "../components/ExpertCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const experts = [
    { name: "Alice Green", specialization: "Indoor Plants", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Bob Leaf", specialization: "Air Purifiers", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Cathy Root", specialization: "Eco Decor", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const tips = [
    { title: "Watering", desc: "Water your plants 2-3 times a week depending on plant type." },
    { title: "Sunlight", desc: "Place near windows with indirect sunlight for healthy growth." },
    { title: "Fertilizing", desc: "Use organic fertilizer once a month for better growth." }
];

const Home = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/plants.json")
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);

    return (
        <div className="">
            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                loop={plants.length > 3}
                autoplay={{ delay: 3000, disableOnInteraction: false, }}
                modules={[Autoplay]}
                className="w-full">
                {plants.slice(0, 3).map((plant) => (
                    <SwiperSlide key={plant.plantId}>
                        <div className="bg-gradient-to-r from-sky-100 to-green-300 p-4 md:p-10 flex flex-col justify-center items-center transition hover:scale-105 duration-500">
                            <img
                                src={plant.image}
                                alt={plant.plantName}
                                className="w-full h-40 md:h-80 object-cover rounded-xl mb-3 shadow-md" />
                            <h2 className="text-3xl font-bold text-green-900 mb-2"> {plant.plantName} </h2>
                            <p className="text-green-800 text-center text-md max-w-xl"> {plant.description} </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mx-6 md:mx-12 lg:mx-14">
                {/* Top Rated Plants */}
                <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">Top Rated Plants</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {plants.map(plant => <PlantCard key={plant.plantId} plant={plant} />)}
                </div>

                {/* Plant Care Tips */}
                <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">Plant Care Tips</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {tips.map((tip, i) => (
                        <div key={i} className="p-4 rounded shadow-md bg-amber-300 hover:scale-105 transition hover:text-gray-200 hover:bg-cyan-400">
                            <h3 className="font-bold">{tip.title}</h3>
                            <p>{tip.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Experts */}
                <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">Meet Our Green Experts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {experts.map((expert, i) => <ExpertCard key={i} expert={expert} />)}
                </div>

                {/* Eco Decor */}
                <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">Eco Decor Ideas</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {plants.slice(0, 3).map(plant => (
                        <div key={plant.plantId} className="border border-gray-100 p-2.5 rounded-md shadow-xl bg-linear-to-bl from-violet-200 to-green-200 hover:scale-105 transform-3d transition">
                            <img src={plant.image} alt={plant.plantName} className="w-full h-48 object-cover rounded mb-2" />
                            <h3 className="font-bold text-xl">{plant.plantName}</h3>
                            <p className="text-gray-500 font-semibold">Decor inspiration with indoor plants.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
