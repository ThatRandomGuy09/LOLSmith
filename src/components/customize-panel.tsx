import { FileObject } from "imagekit/dist/libs/interfaces";
export function CustomizePanel({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name" | "fileId">;
}) {}
