import { imagekit } from "@/lib/image-kit";
import { unstable_noStore } from "next/cache";

export default async function CustomizePage({
  params,
}: {
  params: { fileId: string };
}) {
  unstable_noStore();

  const file = await imagekit.getFileDetails(params.fileId);
  console.log(file);
  return <div className="container mx-auto space-y-8 py-8 px-4"></div>;
}
