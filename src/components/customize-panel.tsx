"use client";
import { urlEndpoint } from "@/providers/providers";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
export function CustomizePanel({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name" | "fileId">;
}) {
  const [textOverlay1, setTextOverlay1] = useState("");
  const transformations = [];
  if (textOverlay1) {
    transformations.push({ raw: `l-text,i-${textOverlay1},fs-50 l-end` });
    console.log(transformations);
  }
  return (
    <div className="grid grid-cols-2 gap-8">
      <form>
        <Label>Text Overlay</Label>
        <Input
          type="textOverlay1"
          onChange={(e) => setTextOverlay1(e.target.value)}
          value={textOverlay1}
        />
      </form>
      <IKImage
        path={file.filePath}
        alt={file.name}
        urlEndpoint={urlEndpoint}
        width={300}
        height={300}
        transformation={transformations}
      />
    </div>
  );
}
