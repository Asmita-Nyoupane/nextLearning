import React from "react";
import photos, { Photo } from "@/lib/photo";
import Link from "next/link";
import PhotoCard from "@/components/intercerpt/card";
import { Button } from "@/components/ui/button";
import Modal from "@/components/intercerpt/modal";
const SinglePhotoPage = ({ params }: { params: { id: string } }) => {
  const photoId = params.id;

  const photo: Photo | undefined = photos.find((p) => p.id === photoId);
  return (
    <div className="  flex flex-col gap-8 justify-center items-center  ">
      <Modal>{photo && <PhotoCard photo={photo} />}</Modal>
    </div>
  );
};

export default SinglePhotoPage;
