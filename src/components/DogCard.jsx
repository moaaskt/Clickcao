export default function DogCard({ dog, onClick }) {
    return (
      <div
        className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition"
        onClick={() => onClick(dog)}
      >
        <img src={dog.image} alt={dog.name} className="w-full h-60 object-cover" />
        <div className="p-4 text-black">
          <h2 className="text-xl font-semibold">{dog.name}</h2>
          <p className="text-sm text-gray-600">{dog.breed}</p>
        </div>
      </div>
    );
  }
  