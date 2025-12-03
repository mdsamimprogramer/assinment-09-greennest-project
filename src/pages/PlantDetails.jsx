import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FourSquare } from "react-loading-indicators";

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("/plants.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.plantId === parseInt(id));
                setPlant(found);
            });
    }, [id]);

    const handleBook = (e) => {
        e.preventDefault();
        toast.success(`Consultation booked for ${name}!`);
        setName("");
        setEmail("");
    };

    if (!plant) return <p className="text-center items-center max-h-screen"><FourSquare color="#32cd32" size="medium" text="" textColor="" /></p>;

    return (
        <div className="p-4 max-w-4xl rounded-xl mx-auto bg-green-100 mt-6">
            <img src={plant.image} alt={plant.plantName} className="w-full h-48 object-cover rounded mb-3" />
            <h2 className="text-2xl font-bold">{plant.plantName}</h2>
            <p className=""><span>{plant.description}</span></p>
            <p className="font-bold mt-2">Price : $ {plant.price}</p>
            <p className="font-semibold">Rating : <span>{plant.rating}</span></p>
            <p className="font-semibold">Stock : {plant.availableStock}</p>
            <p className="font-semibold">Care Level : {plant.careLevel}</p>
            <p className="font-semibold">Provider : {plant.providerName}</p>

            <form onSubmit={handleBook} className="mt-4">
                <h3 className="font-bold mb-2">Book Consultation</h3>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full border border-fuchsia-300 p-2 bg-gray-50 mb-2 rounded" required/>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-fuchsia-300 bg-gray-50 p-2 mb-2 rounded" required/>
                <button type="submit" className="w-full bg-green-700 hover:bg-green-800 transition font-semibold text-white p-2 rounded">Book Now</button>
            </form>
        </div>
    );
};

export default PlantDetails;
