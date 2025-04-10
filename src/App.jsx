import { useState } from 'react';

const dogs = [
  { id: 1, name: 'Bolt', breed: 'Husky', image: 'https://placedog.net/500/400?id=1' },
  { id: 2, name: 'Luna', breed: 'Labrador', image: 'https://placedog.net/500/400?id=2' },
  { id: 3, name: 'Max', breed: 'Pug', image: 'https://placedog.net/500/400?id=3' },
  { id: 4, name: 'Nina', breed: 'Golden Retriever', image: 'https://placedog.net/500/400?id=4' },
  { id: 5, name: 'Thor', breed: 'Pastor Alemão', image: 'https://placedog.net/500/400?id=5' },
  { id: 6, name: 'Bella', breed: 'Shih-tzu', image: 'https://placedog.net/500/400?id=6' },
];

export default function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [search, setSearch] = useState('');

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase()) ||
    dog.breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-20 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Galeria de Doguinhos 🐶</h1>

      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar por nome ou raça..."
          className="w-full p-3 rounded-lg text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredDogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition"
            onClick={() => setSelectedDog(dog)}
          >
            <img src={dog.image} alt={dog.name} className="w-full h-60 object-cover" />
            <div className="p-4 text-black">
              <h2 className="text-xl font-semibold">{dog.name}</h2>
              <p className="text-sm text-gray-600">{dog.breed}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedDog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-6 w-11/12 max-w-md relative">
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-red-500"
              onClick={() => setSelectedDog(null)}
            >
              &times;
            </button>
            <img src={selectedDog.image} alt={selectedDog.name} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedDog.name}</h2>
            <p className="text-lg text-gray-700">{selectedDog.breed}</p>
          </div>
        </div>
      )}
    </div>
  );
}
