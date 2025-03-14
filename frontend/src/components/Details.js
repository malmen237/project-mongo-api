import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [listItem, setListItem] = useState([])
  const { gameId } = useParams();

  useEffect(() => {
    fetch(`https://project-mongo-api-pi3gkxc3ea-lz.a.run.app/games/${gameId}`)
      .then((data) => data.json())
      .then((json) => setListItem(json.body))
  }, [gameId])

  return (
    <section className="border-box">
      <h1>{listItem.title}</h1>
      <p>{listItem.developer}</p>
      <p>{listItem.publisher}</p>
      <p>{listItem.release_date}</p>
    </section>
  )
}
export default Details;
