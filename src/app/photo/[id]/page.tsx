import React from "react";
import photos, { Photo } from "@/lib/photo";
import Link from "next/link";
import PhotoCard from "@/components/intercerpt/card";
import { Button } from "@/components/ui/button";
const SinglePhotoPage = ({ params }: { params: { id: string } }) => {
  const photoId = params.id;
  const photo: Photo | undefined = photos.find((p) => p.id === photoId);
  return (
    <div className="  flex flex-col gap-8 justify-center items-center  ">
      <Link href={"/photo"}>
        {" "}
        <Button className="mt-10 flex justify-start">
          Go back to Photo Gallary
        </Button>
      </Link>
      {photo && <PhotoCard photo={photo} />}
    </div>
  );
};

export default SinglePhotoPage;
