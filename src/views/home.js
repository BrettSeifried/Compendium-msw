import React, { useEffect, useState } from 'react';
import DisplayData from '../component/card';
import { cardData } from '../services/route';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await cardData();
      setData(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <DisplayData data={data} />
    </div>
  );
}
