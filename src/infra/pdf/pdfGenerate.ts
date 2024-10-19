import puppeteer from "puppeteer";

interface Props {
  htmlContent: string;
  fileName: string;
}

const pdfGenerate = async ({ htmlContent, fileName }: Props) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the content of the page to the HTML string
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  // Generate PDF and save it to the specified output path
  await page.pdf({
    path: "output.pdf",
    format: "A4",
    landscape: true,
    printBackground: true,
    margin: {
      top: "2cm",
      bottom: "0.5cm",
      left: "1cm",
      right: "1cm",
    },
  });

  // Close the browser
  await browser.close();
};

export { pdfGenerate };
