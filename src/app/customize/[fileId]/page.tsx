import { CustomizePanel } from "@/components/customize-panel";
import { imagekit } from "@/lib/image-kit";
import { unstable_noStore } from "next/cache";
import { getFavoriteMeme } from "./loader";
import { auth } from "@/auth";

export default async function CustomizePage({
  params,
}: {
  params: { fileId: string };
}) {
  unstable_noStore();

  const session = await auth();

  const file = await imagekit.getFileDetails(params.fileId);
  const isFavorited = session ? await getFavoriteMeme(params.fileId) : false;

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <CustomizePanel
        isAuthenticated={!!session}
        file={{
          filePath: file.filePath,
          name: file.name,
          fileId: file.fileId,
        }}
        isFavorited={isFavorited}
      />
    </div>
  );
}
