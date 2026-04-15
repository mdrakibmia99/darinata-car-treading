/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendMail } from "./sendMail";

export const forDealerEmailTemplate = async (dealers: any[],emailBody:string,subject:string, batchSize = 10) => {
  for (let i = 0; i < dealers.length; i += batchSize) {
    const batch = dealers.slice(i, i + batchSize);

    await Promise.allSettled(
      batch.map(dealer =>
        sendMail({
          email: dealer.email,
          subject: subject,
          html: emailBody,
        })
      )
    );
  }
};