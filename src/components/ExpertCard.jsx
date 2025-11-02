const ExpertCard = ({ expert }) => (
    <div className="p-4 rounded-lg shadow-xl text-center bg-linear-to-bl from-violet-500 to-fuchsia-500">
        <img src={expert.image} alt={expert.name} className="w-36 h-36 hover:scale-110 transition object-cover rounded-full mx-auto mb-2" />
        <h3 className="font-bold text-xl italic">{expert.name}</h3>
        <p className="text-md font-semibold text-gray-600">{expert.specialization}</p>
    </div>
);

export default ExpertCard;
