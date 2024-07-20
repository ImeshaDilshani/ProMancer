import React from 'react'
import { useParams } from 'react-router-dom';

const DetailProject = () => {

    //catch id use params
    const{id} = useParams();
  return (
    <div>
        DetailProject by id :{id}

    </div>
  )
}

export default DetailProject