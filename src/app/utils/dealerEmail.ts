import { sendMail } from "./sendMail";

export const forDealerTemplate = async (dealers: any[], batchSize = 10) => {
  for (let i = 0; i < dealers.length; i += batchSize) {
    const batch = dealers.slice(i, i + batchSize);

    await Promise.allSettled(
      batch.map(dealer =>
        sendMail({
          email: dealer.email,
          subject: 'New car available',
          html: `A new car is listed. Check now.`,
        })
      )
    );
  }
};