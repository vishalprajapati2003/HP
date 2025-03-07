import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";

const downloadReceipt = async (tour) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let y = height - 50;

  // *** Header Section ***
  page.drawText("Booking Confirmation", {
    x: width / 2 - 120,
    y,
    size: 24,
    font: boldFont,
    color: rgb(0, 0.2, 0.4),
  });
  y -= 30;

  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: rgb(0, 0.2, 0.4),
  });
  y -= 20;

  // *** Booking Summary ***
  page.drawText(`Booking ID: ${tour.bookingId}`, {
    x: 50,
    y,
    size: 18,
    font: boldFont,
    color: rgb(0, 0.2, 0.4),
  });
  y -= 20;

  page.drawText(`Departure: ${new Date(tour.travelDate).toLocaleDateString()}`, {
    x: 50,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  page.drawText(`Return: ${new Date(tour.returnDate).toLocaleDateString()}`, {
    x: 300,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  page.drawText(`Travelers: ${tour.numberOfTravelers}`, {
    x: 50,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  page.drawText(`Total: $${(tour.price * tour.numberOfTravelers).toLocaleString()}`, {
    x: 300,
    y,
    size: 12,
    font: boldFont,
    color: rgb(0, 0.6, 0),
  });
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
  y -= 20;

  page.drawText(`Duration: ${tour.duration}`, {
    x: 50,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  page.drawText(`Rating: ${tour.rating || "4.8/5"}`, {
    x: 50,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  y -= 40;

  // *** Payment Details ***
  page.drawText("Payment Details", {
    x: 50,
    y,
    size: 14,
    font: boldFont,
    color: rgb(0, 0.2, 0.4),
  });
  y -= 20;

  page.drawText(`Status: ${tour.paymentStatus}`, {
    x: 50,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  page.drawText(`Method: ${tour.paymentMethod}`, {
    x: 50,
    y,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  page.drawText(`Amount: $${tour.price.toLocaleString()}`, {
    x: 50,
    y,
    size: 12,
    font: boldFont,
    color: rgb(0, 0.6, 0),
  });
  y -= 40;

  // *** Footer ***
  page.drawText("Thank you for choosing Holiday Travels!", {
    x: width / 2 - 120,
    y: 50,
    size: 10,
    font: font,
    color: rgb(0.6, 0.6, 0.6),
  });

  page.drawText("Contact: support@holidaytravels.com | +1 (800) 123-4567", {
    x: width / 2 - 140,
    y: 30,
    size: 10,
    font: font,
    color: rgb(0.6, 0.6, 0.6),
  });

  // *** Save the PDF ***
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, `Receipt_${tour.bookingId}.pdf`, "application/pdf");
};

export default downloadReceipt;
