export function sendGrid(
  userName,
  orderId,
  startDate,
  classTime,
  productPhoto,
  productName,
  price
) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge">
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 600px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
          <style type="text/css">
        body, p, div {
          font-family: inherit;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #1188E6;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        ul ul ul ul  {
          list-style-type: disc !important;
        }
        ol ol {
          list-style-type: lower-roman !important;
        }
        ol ol ol {
          list-style-type: lower-latin !important;
        }
        ol ol ol ol {
          list-style-type: decimal !important;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
          <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Viga&display=swap" rel="stylesheet"><style>
        body {font-family: 'Viga', sans-serif;}
    </style><!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#f0f0f0;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
                <tr>
                  <td valign="top" bgcolor="#f0f0f0" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
        <center>
        <table><tr><td width="600">
      <![endif]-->
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                          <tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p></p>
          </td>
        </tr>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4219b918-14f4-4496-a204-7ff11b69e260" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:0px 0px 0px 0px; line-height:22px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: right"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; background-color: rgb(255, 255, 255); font-family: inherit">Email not displaying correctly? </span><a href="{{Weblink}}"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; outline-color: initial; outline-style: none; outline-width: initial; color: #1188e6; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; transition-property: color; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); font-family: inherit">View</span><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; outline-color: initial; outline-style: none; outline-width: initial; color: #000000; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; transition-property: color; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); font-family: inherit"> it</span></a><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; background-color: rgb(255, 255, 255); font-family: inherit"> in your browser.</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 20px 40px 30px;" bgcolor="#77dedb" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="550" style="width:550px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b422590c-5d79-4675-8370-a10c2c76af02">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="left">
              
            </td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1995753e-0c64-4075-b4ad-321980b82dfe" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:100px 0px 18px 0px; line-height:36px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff; font-size: 40px; font-family: inherit">Thank you for your order!</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2ffbd984-f644-4c25-9a1e-ef76ac62a549" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 20px 20px 0px; line-height:24px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 24px">See you Soon!</span></div>
    <div style="font-family: inherit; text-align: inherit"><span style="font-size: 24px"></span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="69fc33ea-7c02-45ed-917a-b3b8a6866e89">
          <tbody>
            <tr>
              <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                  <tbody>
                    <tr>
                    <td align="center" bgcolor="#000000" class="inner-td" style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                      <a href="" style="background-color:#000000; border:1px solid #000000; border-color:#000000; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-size:18px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">${userName}</a>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8b5181ed-0827-471c-972b-74c77e326e3d" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:30px 20px 18px 30px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #0055ff; font-size: 24px">Order Summary</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f7373f10-9ba4-4ca7-9a2e-1a2ba700deb9">
        <tbody>
          <tr>
            <td style="padding:0px 30px 0px 30px;" role="module-content" height="100%" valign="top" bgcolor="">
              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="3px" style="line-height:3px; font-size:3px;">
                <tbody>
                  <tr>
                    <td style="padding:0px 0px 3px 0px;" bgcolor="#e7e7e7"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="264ee24b-c2b0-457c-a9c1-d465879f9935" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 20px 18px 30px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"></div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #0055ff"><strong>Order Number: ${orderId}</strong></span></div>
    <div style="font-family: inherit; text-align: inherit"><br><strong> Class Time: ${startDate}  ${classTime}</strong></div>
    <div style="font-family: inherit; text-align: inherit"></div>
    <div style="font-family: inherit; text-align: inherit"></div>
    <div style="font-family: inherit; text-align: inherit"></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:20px 20px 0px 30px;" bgcolor="#FFFFFF" data-distribution="1,1,1,1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="239f10b7-5807-4e0b-8f01-f2b8d25ec9d7">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="left">
              <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="104" alt="" data-proportionally-constrained="true" data-responsive="false" src=${productPhoto} height="104">
            </td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f404b7dc-487b-443c-bd6f-131ccde745e2" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">${productName}</div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #0055ff">$ ${price}</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"></td>
            </tr>
          </tbody>
        </table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:20px 20px 0px 30px;" bgcolor="#FFFFFF" data-distribution="1,1,1,1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="239f10b7-5807-4e0b-8f01-f2b8d25ec9d7.1">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="left">
              
            </td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f404b7dc-487b-443c-bd6f-131ccde745e2.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    </td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"></td>
            </tr>
          </tbody>
        </table><table width="137" style="width:137px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f7373f10-9ba4-4ca7-9a2e-1a2ba700deb9.1">
        <tbody>
          <tr>
            <td style="padding:20px 30px 0px 30px;" role="module-content" height="100%" valign="top" bgcolor="#FFFFFF">
              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="3px" style="line-height:3px; font-size:3px;">
                <tbody>
                  <tr>
                    <td style="padding:0px 0px 3px 0px;" bgcolor="#E7E7E7"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="264ee24b-c2b0-457c-a9c1-d465879f9935.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 20px 30px 30px; line-height:22px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div>
    
    <div style="font-family: inherit; text-align: inherit"><br>
    Grand Total</div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #0055ff; font-size: 32px; font-family: inherit">$ ${price}</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 20px 0px 20px;" bgcolor="#0055ff" data-distribution="1,1,1,1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Support</span></a></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Contact Us</span></a></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092.1.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Drivers</span></a></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9d43ffa1-8e24-438b-9484-db553cf5b092.1.1.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="http://"><span style="color: #ffffff">Legal</span></a></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#0055ff; color:#ffffff; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">ABC Baking Studio</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">304 Newbury St</span>, <span class="Unsubscribe--senderCity">Boston</span>, <span class="Unsubscribe--senderState">MA</span> <span class="Unsubscribe--senderZip">02115</span></p></div><p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="color:#77dedb;">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="color:#77dedb;">Unsubscribe Preferences</a></p></div><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="e5cea269-a730-4c6b-8691-73d2709adc62">
          <tbody>
            <tr>
              <td align="center" bgcolor="0055FF" class="outer-td" style="padding:0px 0px 20px 0px; background-color:0055FF;">
                <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                  <tbody>
                    <tr>
                    <td align="center" bgcolor="#f5f8fd" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a href="https://www.sendgrid.com/?utm_source=powered-by&utm_medium=email" style="background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank">♥ POWERED BY ABC Baking Studio</a></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table></td>
                                          </tr>
                                        </table>
                                        <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>`;
}
