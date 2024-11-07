import { CustomizePanel } from "@/components/customize-panel";
import { imagekit } from "@/lib/image-kit";
import { unstable_noStore } from "next/cache";

export default async function CustomizePage({
  params,
}: {
  params: { fileId: string };
}) {
  unstable_noStore();

  const file = await imagekit.getFileDetails(params.fileId);

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <CustomizePanel
        file={{
          filePath: file.filePath,
          name: file.name,
          fileId: file.fileId,
        }}
      />
    </div>
  );
}
