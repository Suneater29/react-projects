import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Suneater29')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    const data=useLoaderData()
  return (
    <div className="bg-gray-600 text-white m-4 p-4 text-3xl text-center">
      Github followers :{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/Suneater29');
  return response.json()
}
