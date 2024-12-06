export default function ListingCard({ name, price }) {
    return (
        <div className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">{price}</p>
        </div>
    );
  }
  