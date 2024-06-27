import Image from "next/image";
import { Photo } from "@/lib/photo";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          alt={photo.name}
          src={photo.imageSrc}
          priority={true}
          quality={80}
          height={300}
          width={300}
          className=" aspect-square  w-full "
        />
      </div>

      <div className=" bg-white  px-4">
        <h3 className="font-serif text-xl font-medium">{photo.name}</h3>
        <p className="text-sm text-gray-500">Taken by {photo.username}</p>
      </div>
    </>
  );
}
