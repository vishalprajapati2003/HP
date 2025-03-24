// import React from "react";
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
// import download from "downloadjs";
// import image from "../assets/header.jpg";
// import { Download } from "lucide-react";
// const DownloadReceipt = ({ tour }) => {
//   const generateReceipt = async () => {
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 800]);
//     const { width, height } = page.getSize();

//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     let y = height - 50;
//     const jpgImageBytes = await fetch(image).then((res) => res.arrayBuffer());
//     const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
//     const jpgDims = jpgImage.scale(0.5);

//     page.drawImage(jpgImage, {
//       x: 50,
//       y: y - 50,
//       width: jpgDims.width,
//       height: jpgDims.height,
//     });

//     page.drawText("Booking Confirmation", {
//       x: width / 2 - 120,
//       y,
//       size: 24,
//       font: boldFont,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 30;

//     page.drawLine({
//       start: { x: 50, y },
//       end: { x: width - 50, y },
//       thickness: 1,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 20;

//     page.drawText(`Booking ID: ${tour.bookingId}`, {
//       x: 50,
//       y,
//       size: 18,
//       font: boldFont,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 20;

//     page.drawText(
//       `Departure: ${new Date(tour.travelDate).toLocaleDateString()}`,
//       {
//         x: 50,
//         y,
//         size: 12,
//         font,
//         color: rgb(0, 0, 0),
//       }
//     );
//     page.drawText(`Return: ${new Date(tour.returnDate).toLocaleDateString()}`, {
//       x: 300,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     y -= 20;

//     page.drawText(`Travelers: ${tour.numberOfTravelers}`, {
//       x: 50,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     page.drawText(
//       `Total: $${(tour.price * tour.numberOfTravelers).toLocaleString()}`,
//       {
//         x: 300,
//         y,
//         size: 12,
//         font: boldFont,
//         color: rgb(0, 0.6, 0),
//       }
//     );
//     y -= 40;

//     page.drawText("Tour Information", {
//       x: 50,
//       y,
//       size: 14,
//       font: boldFont,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 20;

//     page.drawText(`Location: ${tour.location}`, {
//       x: 50,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     y -= 20;

//     page.drawText(`Duration: ${tour.duration}`, {
//       x: 50,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     y -= 20;

//     page.drawText("Thank you for choosing Holiday Travels!", {
//       x: width / 2 - 120,
//       y: 50,
//       size: 10,
//       font: font,
//       color: rgb(0.6, 0.6, 0.6),
//     });

//     const pdfBytes = await pdfDoc.save();
//     download(pdfBytes, `Receipt_${tour.bookingId}.pdf`, "application/pdf");
//   };

//   return (
//     <button
//       className="text-gray-700 hover:text-gray-800 cursor-pointer flex items-center gap-1"
//       onClick={generateReceipt}
//     >
//       <Download size={16} />
//       Download Receipt
//     </button>
//   );
// };

// export default DownloadReceipt;
import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";
import { Download } from "lucide-react";
import image from "../assets/header.jpg";
const DownloadReceipt = ({ tour }) => {
  const generateReceipt = async () => {
    if (!tour) {
      console.error("Tour data is missing.");
      return;
    }

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    let y = height;

    // *** Invoice Title ***
    page.drawText("Booking Confirmation", {
      x: width / 2 - 120,
      y: y - 35,
      size: 24,
      font: boldFont,
      color: rgb(0, 0.2, 0.4),
    });
    y -= 45;

    page.drawLine({
      start: { x: 50, y },
      end: { x: width - 30, y },
      thickness: 1,
      color: rgb(0, 0.2, 0.4),
    });
    y -= 5;

    // *** Header Image ***
    const jpgImageBytes = await fetch(image).then((res) => res.arrayBuffer());
    const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);

    page.drawImage(jpgImage, {
      x: 0,
      y: y - 100,
      width: width,
      height: 100,
    });
    y -= 120;

    // *** Booking Details ***
    page.drawText("Booking Details", {
      x: 50,
      y,
      size: 14,
      font: boldFont,
      color: rgb(0, 0.2, 0.4),
    });
    y -= 20;

    page.drawText(`Booking ID: ${tour.bookingId}`, {
      x: 50,
      y,
      size: 12,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(
      `Booking Date: ${new Date(tour.bookingDate).toLocaleDateString()}`,
      {
        x: width - 200,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      }
    );
    y -= 20;

    page.drawText(
      `Travel Date: ${new Date(tour.travelDate).toLocaleDateString()}`,
      {
        x: 50,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText(
      `Return Date: ${new Date(tour.returnDate).toLocaleDateString()}`,
      {
        x: width - 200,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      }
    );
    y -= 40;

    // *** Tour Details ***
    page.drawText("Tour Information", {
      x: 50,
      y,
      size: 14,
      font: boldFont,
      color: rgb(0, 0.2, 0.4),
    });
    y -= 20;

    page.drawText(`Location: ${tour.location}`, {
      x: 50,
      y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Duration: ${tour.duration}`, {
      x: width - 200,
      y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });
    y -= 20;

    page.drawText(`Number of Travelers: ${tour.numberOfTravelers}`, {
      x: 50,
      y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });
    y -= 40;

    // *** Payment Details ***
    page.drawText("Payment Summary", {
      x: 50,
      y,
      size: 14,
      font: boldFont,
      color: rgb(0, 0.2, 0.4),
    });
    y -= 20;

    page.drawText(`Total Amount: $${tour.totalPrice.toLocaleString()}`, {
      x: 50,
      y,
      size: 12,
      font: boldFont,
      color: rgb(0, 0.6, 0),
    });
    y -= 40;

    // *** Footer ***
    page.drawText("Thank you for choosing Travio!", {
      x: width / 2 - 100,
      y: 50,
      size: 10,
      font: font,
      color: rgb(0.6, 0.6, 0.6),
    });
    // Generate PDF
    const pdfBytes = await pdfDoc.save();
    // const blob = new Blob([pdfBytes], { type: "application/pdf" });
    // const url = URL.createObjectURL(blob);
    // window.open(url, "_blank");
    download(pdfBytes, `Receipt_${tour.bookingId}.pdf`, "application/pdf");
  };

  return (
   
    <button
      className="text-gray-700 hover:text-gray-800 cursor-pointer flex items-center gap-1 md:gap-1sm:gap-2 text-xs xs:text-sm sm:text-base"
      onClick={generateReceipt}
    >
      <Download size={16} className="md:size-5 xs:size-4 sm:size-5" />
      <span className="hidden md:text-xs md:inline text-xs xs:text-sm sm:text-base">
        Download Receipt
      </span>
    </button>
  );
};

export default DownloadReceipt;
