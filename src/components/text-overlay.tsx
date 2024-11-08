"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FileObject } from "imagekit/dist/libs/interfaces";

export function TextOverlay({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name" | "fileId">;
}) {
  const [textOverlay, setTextOverlay] = useState("");
  const [textOverlayXPosition, setTextOverlayXPosition] = useState(0);
  const [textOverlayYPosition, setTextOverlayYPosition] = useState(0);
  const xPositionDecimal = textOverlayXPosition / 100;
  const yPositionDecimal = textOverlayYPosition / 100;
  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between gap-8">
        <div className="flex-grow">
          <Input
            onChange={(e) => {
              setTextOverlay(e.target.value);
            }}
            value={textOverlay}
          />
        </div>
        <div className="flex items-center space-x-2 flex-col space-y-4">
          <div className="flex gap-4">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Apply Text Background
            </label>
          </div>
        </div>
      </div>
      <div>
        <Slider
          value={[textOverlayXPosition]}
          onValueChange={([v]) => {
            setTextOverlayXPosition(v);
          }}
        />
      </div>
      <div>
        <Slider
          value={[textOverlayYPosition]}
          onValueChange={([v]) => {
            setTextOverlayYPosition(v);
          }}
        />
      </div>
    </Card>
  );
}
