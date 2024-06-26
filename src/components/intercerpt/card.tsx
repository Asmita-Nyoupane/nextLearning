import Image from "next/image";
import { Photo } from "@/lib/photo";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt={photo.name}
        src={photo.imageSrc}
        height={400}
        width={400}
        className=" aspect-square  object-cover"
      />

      <div className=" bg-white  -mt-4 px-4">
        <h3 className="font-serif text-xl font-medium">{photo.name}</h3>
        <p className="text-sm text-gray-500">Taken by {photo.username}</p>
      </div>
    </>
  );
}
