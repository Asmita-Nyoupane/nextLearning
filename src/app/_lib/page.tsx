import React from "react";

const privateFolder = () => {
  return (
    <div>
      <h2>You can't access it from browser</h2>
      <p>
        %5F is encoded to underscroe on url , you can use _infront of foldername
        for private folder
      </p>
    </div>
  );
};

export default privateFolder;
