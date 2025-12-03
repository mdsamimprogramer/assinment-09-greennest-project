import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";

const Plants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/plants.json")
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);

    return (
        <div className="mx-6 md:mx-12 lg:mx-14">
            <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">All Plants</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {plants.map(plant => <PlantCard key={plant.plantId} plant={plant} />)}
            </div>
        </div>
    );
};

export default Plants;
