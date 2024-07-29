import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Byid = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const response = await axios.get(`https://6647422551e227f23ab1afe6.mockapi.io/project/${id}`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-2xl">Error: {error}</div>;
  if (!data) return null;

  return (
    <div key={data.id} className="p-8">
        <Link to={"/"}>
            <p className='text-center text-3xl mb-[50px]'>ГЛАВНАЯ</p>
        </Link>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-5xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:h-full md:w-96"
              src={data.img || 'https://via.placeholder.com/300'}
              alt={data.name}
            />
          </div>
          <div className="p-12">
            <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">{data.name}</h1>
            <p className="mt-4 text-gray-700 text-lg">{data.desc}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-5xl mt-8 p-8">
        <h2 className="text-2xl font-bold">Additional Information</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum. Nullam ut felis et nisl elementum pretium.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
      </div>
    </div>
  );
};

export default Byid;
