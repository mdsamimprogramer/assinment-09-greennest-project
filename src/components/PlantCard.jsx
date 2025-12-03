import { Link } from "react-router";

const PlantCard = ({ plant }) => (
    <div className="bg-white border border-green-200 rounded-xl p-2 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col justify-between">

        {/* Plant Image */}
        <div className="overflow-hidden mb-3">
            <img src={plant.image} alt={plant.plantName} className="w-full rounded-md h-46 md:h-56 object-cover hover:scale-105 transition duration-500" />
        </div>

        {/* Plant Info */}
        <div className="flex flex-wrap justify-between items-center p-3">
            <div className="flex gap-1.5 md:gap-2.5 items-center">
                <h3 className="font-bold text-lg text-green-800">{plant.plantName}</h3>
                <p className="text-gray-700 font-semibold">ID: 0{plant.plantId}</p>
            </div>

            <div className="flex gap-1.5 md:gap-2.5 items-center">
                <p className="text-gray-800 font-semibold">${plant.price}</p>
                <p className="text-yellow-600 font-medium flex items-center">⭐ {plant.rating}</p>
            </div>
        </div>

        {/* Button */}
        <Link to={`/plants/${plant.plantId}`}
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full text-center font-medium transition">
            View Details
        </Link>
    </div>
);

export default PlantCard;
