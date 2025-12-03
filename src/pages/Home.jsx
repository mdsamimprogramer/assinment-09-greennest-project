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
                loop={plants.length > 4}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full">

                {plants.slice(0, 3).map((plant) => (
                    <SwiperSlide key={plant.plantId}>
                        <div className="relative mx-5 md:mx-10 lg:mx-14 transition hover:scale-105 duration-500 my-5">

                            <img
                                src={plant.image}
                                alt={plant.plantName}
                                className="w-full h-50 md:h-100 object-cover rounded-xl shadow-md"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 rounded-xl">
                                <h2 className="text-3xl font-bold text-white mb-2"> {plant.plantName} </h2>
                                <p className="text-white text-md max-w-xl"> {plant.description} </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mx-5 md:mx-10 lg:mx-14">
                {/* Top Rated Plants */}
                <h2 className="text-xl md:text-2xl text-center font-bold mt-10 mb-5">Top Rated Plants</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {plants.slice(0, 4).map(plant => <PlantCard key={plant.plantId} plant={plant} />)}
                </div>

                {/* Plant Care Tips */}
                <h2 className="text-xl md:text-2xl font-bold mt-10 md:mt-12 mb-5">Plant Care Tips</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {tips.map((tip, i) => (
                        <div key={i} className="p-4 rounded shadow-md bg-amber-300 hover:scale-105 transition hover:text-gray-200 hover:bg-cyan-400">
                            <h3 className="font-bold">{tip.title}</h3>
                            <p>{tip.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Experts */}
                <h2 className="text-xl md:text-2xl text-center font-bold mt-10 md:mt-12 mb-5">Meet Our Green Experts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {experts.map((expert, i) => <ExpertCard key={i} expert={expert} />)}
                </div>

                {/* Eco Decor */}
                <h2 className="text-xl md:text-2xl text-center font-bold mt-10 md:mt-12 mb-5">Eco Decor Ideas</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {plants.slice(0, 4).map(plant => (
                        <div key={plant.plantId} className="relative overflow-hidden rounded-xl shadow-2xl transform transition-transform hover:scale-105" >
                            <img
                                src={plant.image}
                                alt={plant.plantName}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                <h3 className="text-2xl font-bold drop-shadow-lg">{plant.plantName}</h3>
                                <p className="text-sm font-medium drop-shadow-md">
                                    Decor inspiration with indoor plants.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
