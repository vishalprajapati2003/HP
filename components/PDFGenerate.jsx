// import React from "react";
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
// import image from "../assets/header.jpg";
// const ViewInvoice = ({ invoiceData }) => {
//   const generatePdf = async () => {
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 800]);
//     const { width, height } = page.getSize();

//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     let y = height - 50;

//     // *** Header Section ***
//     page.drawText("Invoice", {
//       x: width / 2 - 40,
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

//     const jpgImageBytes = await fetch(image).then((res) => res.arrayBuffer());
//     const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
//     const jpgDims = jpgImage.scale(0.5);

//     page.drawImage(jpgImage, {
//       x: 50,
//       y: y - 50,
//       width: jpgDims.width,
//       height: jpgDims.height,
//     });

//     // *** Invoice Details ***
//     page.drawText(`Invoice ID: ${invoiceData.bookingId}`, {
//       x: 50,
//       y,
//       size: 18,
//       font: boldFont,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 20;

//     page.drawText(
//       `Booking Date: ${new Date(invoiceData.bookingDate).toLocaleDateString()}`,
//       {
//         x: 50,
//         y,
//         size: 12,
//         font,
//         color: rgb(0, 0, 0),
//       }
//     );
//     y -= 20;

//     page.drawText(
//       `Travel Date: ${new Date(invoiceData.travelDate).toLocaleDateString()}`,
//       {
//         x: 50,
//         y,
//         size: 12,
//         font,
//         color: rgb(0, 0, 0),
//       }
//     );
//     y -= 20;

//     page.drawText(
//       `Return Date: ${new Date(invoiceData.returnDate).toLocaleDateString()}`,
//       {
//         x: 50,
//         y,
//         size: 12,
//         font,
//         color: rgb(0, 0, 0),
//       }
//     );
//     y -= 40;

//     // *** Tour Details ***
//     page.drawText("Tour Information", {
//       x: 50,
//       y,
//       size: 14,
//       font: boldFont,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 20;

//     page.drawText(`Location: ${invoiceData.location}`, {
//       x: 50,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     y -= 20;

//     page.drawText(`Duration: ${invoiceData.duration}`, {
//       x: 50,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     y -= 20;

//     page.drawText(`Travelers: ${invoiceData.numberOfTravelers}`, {
//       x: 50,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     });
//     y -= 40;

//     // *** Payment Details ***
//     page.drawText("Payment Summary", {
//       x: 50,
//       y,
//       size: 14,
//       font: boldFont,
//       color: rgb(0, 0.2, 0.4),
//     });
//     y -= 20;

//     page.drawText(`Total Amount: $${invoiceData.totalPrice.toLocaleString()}`, {
//       x: 50,
//       y,
//       size: 12,
//       font: boldFont,
//       color: rgb(0, 0.6, 0),
//     });
//     y -= 40;

//     // *** Footer ***
//     page.drawText("Thank you for your booking!", {
//       x: width / 2 - 80,
//       y: 50,
//       size: 10,
//       font: font,
//       color: rgb(0.6, 0.6, 0.6),
//     });

//     // Generate and open the PDF in a new tab
//     const pdfBytes = await pdfDoc.save();
//     const blob = new Blob([pdfBytes], { type: "application/pdf" });
//     const url = URL.createObjectURL(blob);
//     window.open(url, "_blank");
//   };

//   return (
//     <button
//       className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm font-medium hover:underline"
//       onClick={generatePdf}
//     >
//       View Invoice
//     </button>
//   );
// };

// export default ViewInvoice;

import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import image from "../assets/header.jpg";

const ViewInvoice = ({ invoiceData }) => {
  const generatePdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    let y = height;

    // *** Invoice Title ***
    page.drawText("Invoice", {
      x: width / 2 - 40,
      y: y - 35, // Move title down slightly
      size: 24,
      font: boldFont,
      color: rgb(0, 0.2, 0.4),
    });
    y -= 50;

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

    page.drawText(`Booking ID: ${invoiceData.bookingId}`, {
      x: 50,
      y,
      size: 12,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(
      `Booking Date: ${new Date(invoiceData.bookingDate).toLocaleDateString()}`,
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
      `Travel Date: ${new Date(invoiceData.travelDate).toLocaleDateString()}`,
      {
        x: 50,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText(
      `Return Date: ${new Date(invoiceData.returnDate).toLocaleDateString()}`,
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

    page.drawText(`Location: ${invoiceData.location}`, {
      x: 50,
      y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Duration: ${invoiceData.duration}`, {
      x: width - 200,
      y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });
    y -= 20;

    page.drawText(`Number of Travelers: ${invoiceData.numberOfTravelers}`, {
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

    page.drawText(`Total Amount: $${invoiceData.totalPrice.toLocaleString()}`, {
      x: 50,
      y,
      size: 12,
      font: boldFont,
      color: rgb(0, 0.6, 0),
    });
    y -= 40;

    // *** Footer ***
    page.drawText("Thank you for choosing Travio!", {
      x: width / 2 - 60,
      y: 50,
      size: 10,
      font: font,
      color: rgb(0.6, 0.6, 0.6),
    });

    // Generate and open the PDF in a new tab
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <button
      className="text-blue-600 cursor-pointer hover:text-blue-800 md:text-sm text-xs  sm:text-xs font-medium hover:underline"
      onClick={generatePdf}
    >
      View Invoice
    </button>
  );
};

export default ViewInvoice;
  