import { style } from '../style/style';

export const emailVerifyHtml = (
  title: string,
  otp: number,
  expiresIn: string = '3 minutes',
) => {
 return `<!doctype html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style type="text/css">
      ${style}
    </style>
  </head>
  <body>
    <div class="preheader">
      Bekræft din e-mailadresse for at fuldføre din registrering.
    </div>
    <div class="email-container">
      <!-- Header -->
      <div class="email-header">
        <img
          src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/05/Solutions-website-logo-png.png"
          alt="The Car Treading Logo"
        />
        <h1>E-mailbekræftelse</h1>
      </div>

      <!-- Content -->
      <div class="email-content">
        <h2>Hej!</h2>
        <p>
          Tak fordi du har tilmeldt dig The Car Treading. Bekræft venligst din
          e-mailadresse ved at bruge engangskoden (OTP) nedenfor:
        </p>

        <span class="otp-code">${otp}</span>

        <p>
          Denne OTP er gyldig i <strong>${expiresIn}</strong>. Hvis du ikke
          har anmodet om dette, kan du ignorere denne e-mail eller kontakte vores support.
        </p>

        <p style="text-align: center">
          <a href="mailto:support@thelocalmargin.com" class="btn">
            Kontakt support
          </a>
        </p>

        <p>Med venlig hilsen,<br />The Car Treading Team</p>
      </div>

      <!-- Footer -->
      <div class="email-footer">
        &copy; ${new Date().getFullYear()} The Car Treading. Alle rettigheder forbeholdes.
      </div>
    </div>
  </body>
</html>
`;
};
