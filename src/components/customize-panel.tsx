"use client";
import { urlEndpoint } from "@/providers/providers";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Slider } from "./ui/slider";
import { TextOverlay } from "./text-overlay";
export function CustomizePanel({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name" | "fileId">;
}) {
  const [textTransformation, setTextTransformations] = useState<
    Record<string, { raw: string }>
  >({});
  return (
    <div className="grid grid-cols-2 gap-8">
      <form className="space-y-4">
        <TextOverlay file={file} />
      </form>
      <IKImage path={file.filePath} alt={file.name} urlEndpoint={urlEndpoint} />
    </div>
  );
}
