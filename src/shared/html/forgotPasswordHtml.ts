import { style } from '../style/style';

export const forgotPasswordHtml = (title: string, otp: number) => {
 return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      ${style}
    </style>
  </head>
  <body>
    <div class="preheader">
      Nulstilling af adgangskode for din Engrosbasen konto.
    </div>

    <div class="email-container">
      <!-- Header -->
      <div class="email-header">
        <img 
          src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/05/Solutions-website-logo-png.png" 
          alt="Engrosbasen Logo" 
        />
        <h1>Nulstilling af adgangskode</h1>
      </div>

      <!-- Content -->
      <div class="email-content">
        <p>Hej,</p>

        <p>
          Vi har modtaget en anmodning om at nulstille adgangskoden til din konto på 
          <strong>Engrosbasen</strong>.
        </p>

        <p>
          For at fortsætte skal du indtaste følgende engangskode (OTP):
        </p>

        <span class="otp-code">${otp}</span>

        <p>
          Koden er gyldig i en begrænset periode.
        </p>

        <p>
          Hvis du ikke selv har anmodet om at nulstille din adgangskode, kan du trygt ignorere denne e-mail – din konto forbliver sikker.
        </p>

        <p>
          Har du spørgsmål, kan du kontakte os på 
          <a href="mailto:info@engrosbasen.dk">info@engrosbasen.dk</a>.
        </p>

        <p>
          Med venlig hilsen<br />
          <strong>Engrosbasen</strong><br />
          www.engrosbasen.dk
        </p>
      </div>

      <!-- Footer -->
      <div class="email-footer">
        &copy; ${new Date().getFullYear()} Engrosbasen. Alle rettigheder forbeholdes.
      </div>
    </div>
  </body>
</html>
`;
};
