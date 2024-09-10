import express, { Request, Response, NextFunction } from "express";
import cheerio from "cheerio";
import fs from "fs";

import PptxGenJS from "pptxgenjs";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Create a browser instance

    // Step 1: Read the HTML file
    const html = fs.readFileSync(
      "/Users/yugalpariyar/Desktop/omn_auto/src/lib/resources/first_slide.html",
      "utf-8"
    );

    // Step 2: Load HTML using cheerio
    const $ = cheerio.load(html);

    // Step 3: Initialize the PPTX generation
    let pptx = new PptxGenJS();

    // Extracting text content and adding slides
    $("body")
      .children()
      .each((i, elem) => {
        let slide = pptx.addSlide();

        // Handling specific tags differently
        if (elem.tagName === "h1") {
          slide.addText($(elem).text(), {
            x: 1,
            y: 1,
            fontSize: 32,
            bold: true,
          });
        } else if (elem.tagName === "h2") {
          slide.addText($(elem).text(), {
            x: 1,
            y: 1,
            fontSize: 28,
            bold: true,
          });
        } else if (elem.tagName === "p") {
          slide.addText($(elem).text(), { x: 1, y: 1, fontSize: 18 });
        } else if (elem.tagName === "img") {
          // Assuming the images are accessible locally or online
          slide.addImage({
            path: $(elem).attr("src"),
            x: 1,
            y: 2,
            w: 6,
            h: 4, // Adjust dimensions as needed
          });
        }
      });

    // Step 4: Save the PPTX
    pptx.writeFile({ fileName: "presentation.pptx" });
    return res.send("Reports");
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

export default router;
