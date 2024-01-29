"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

export default function Home() {
  const [joke, setJoke] = useState();
  const [showJoke, setShowJoke] = useState("");
  const [image, setImage] = useState("")


  useEffect(() => {
    async function fetchJoke() {
      try {
        const response = await fetch("http://localhost:3001/joke");
        if (!response.ok) {
          throw new Error("fetch hatası");
        }
        const data = await response.json();
        
        if (data && data.length > 0) {
          const initialJoke = data[0].text;
          setShowJoke(initialJoke);
          setImage(initialJoke);
        }

console.log(image)
      } catch (error) {
        console.error(error);
      }
    }
    fetchJoke();
  }, []);
 

  const getRandomJoke = () => {
    if (joke && joke.length > 0) {
      const randomIndex = Math.floor(Math.random() * joke.length);
      const selectedJoke = joke[randomIndex];
      const jokeText = selectedJoke.text;
      const jokeImage = selectedJoke.image;

      setShowJoke(jokeText);
      setImage(jokeImage);


    }
  }

  return (



    <><div className="relative bg-purple-400">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

      </div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">

        <div className="max-w-full mx-auto p-8 bg-blue-600 rounded-lg text-center ">
          <h2 className="text-4xl font-bold mb-8 text-zinc-100">
            Elf's Jokes
          </h2>
          <div className="max-w-lg mx-auto p-8 bg-blue-600 text-zinc-100 rounded-lg text-center">
            <h4 className="text-lg text-zinc-100">{showJoke}</h4>
            {/* <Image className="text-xl font-bold mt-4 text-zinc-100" src={image} width={300}
              height={300}
              alt="jokephoto"></Image> */}
          </div>
        </div>
        <div className="max-w-full mx-auto p-8 bg-amber-400 rounded-lg text-center mt-5">
          <button onClick={getRandomJoke} > Şaka bas</button>
        </div>
      </div>
    </div>



    </>
  );
}



