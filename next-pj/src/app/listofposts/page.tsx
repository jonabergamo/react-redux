import React from "react";
import Image from "next/image";


const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  return res.json();
};

export default async function ListOfPosts() {
  const dog = await getDogData();

  return (
    <div>
      <Image src={dog.message} alt="dog" width={300} height={300} />
    </div>
  );
}
