import React, { useEffect, useState } from 'react';
import DisplayData from '../component/card';
import Controls from '../component/controls';
import { cardData } from '../services/route';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await cardData();
      setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filter = data.filter(
    (obj) => obj.title.toLowerCase().includes(query) || obj.title.includes(query)
  );

  if (loading) return <p>loading...</p>;

  return (
    <div className="movies">
      <h1> Search for your Anime </h1>
      <Controls query={query} setQuery={setQuery} />
      <DisplayData data={data} filter={filter} />
    </div>
  );
}
