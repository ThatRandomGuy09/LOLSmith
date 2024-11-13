import { inArray } from "drizzle-orm";
import { db } from "../app/db/db";
import { favoriteCounts } from "../app/db/schema";

export async function getFavoriteCounts(fileIds: string[]) {
  const counts = await db
    .select()
    .from(favoriteCounts)
    .where(inArray(favoriteCounts.memeId, fileIds));
  return counts;
}
