import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x086bC4180939daC707208E40B784Daf3b719842C");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "stableindex",
        description: "This NFT will give you access to indexDAO!",
        image: readFileSync("scripts/assets/4crypto.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();