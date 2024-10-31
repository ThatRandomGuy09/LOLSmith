"use client";
import { urlEndpoint } from "@/providers/providers";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useState } from "react";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export default function Home() {
  const [filePath, setFilePath] = useState("");
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      {filePath && (
        <IKImage path={filePath} width={300} height={500} alt="Alt text" />
      )}
      <div>
        <h2>File upload</h2>
        <IKUpload
          fileName="test-upload.png"
          onError={(error) => {
            console.log(error);
          }}
          onSuccess={(response) => {
            console.log(response);
            setFilePath(response.filePath);
          }}
        />
      </div>
    </ImageKitProvider>
  );
}
