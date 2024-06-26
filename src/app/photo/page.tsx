import React from "react";
import Link from "next/link";
import photos from "@/lib/photo";
import Image from "next/image";
const PhotoPage = () => {
  return (
    <div className=" flex  flex-col gap-8 items-center justify-center mt-10 px-20">
      <h2 className="text-3xl font-semibold text-center">Photo Gallery</h2>
      <div className="grid grid-cols-4 gap-6">
        {photos.map((data) => (
          <Link href={`/photo/${data.id}`} key={data.id}>
            <Image
              src={data.imageSrc}
              alt={data.name}
              height={250}
              width={250}
              className=" aspect-square rounded-md shadow-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
