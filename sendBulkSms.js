function sendBulkSms() {
  // Replace these with your Twilio Account SID and Auth Token
  var twilioAccountSid = 'YOUR_TWILIO_SID_HERE';
  var twilioAuthToken = 'YOUR_TWILIO_AUTH_TOKEN_HERE';

  // Replace this with your Twilio phone number
  var fromPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER_HERE';

  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Get all the data in the sheet (assuming phone numbers are in column A, messages in column B, and status in column C)
  var data = sheet.getDataRange().getValues();

  // Loop through the rows and send SMS messages
  for (var i = 1; i < data.length; i++) {
    var phoneNumber = data[i][0]; // Assuming phone numbers are in column A
    var message = data[i][1]; // Assuming messages are in column B

    // Twilio API endpoint
    var twilioEndpoint = 'https://api.twilio.com/2010-04-01/Accounts/' + twilioAccountSid + '/Messages.json';

    // Create the payload for Twilio
    var payload = {
      'method': 'post',
      'headers': {
        'Authorization': 'Basic ' + Utilities.base64Encode(twilioAccountSid + ':' + twilioAuthToken),
      },
      'payload': {
        'To': phoneNumber,
        'From': fromPhoneNumber,
        'Body': message,
      },
    };

    // Send the SMS using Twilio
    var response = UrlFetchApp.fetch(twilioEndpoint, payload);

    // Log the response from Twilio (optional)
    Logger.log(response.getContentText());

    // Update the status in the Google Sheet
    if (response.getResponseCode() === 201) {
      // SMS sent successfully
      sheet.getRange(i + 1, 3).setValue('Sent');
      Logger.log('SMS sent to ' + phoneNumber + ' successfully');
    } else {
      // SMS not sent, log the error and update status
      sheet.getRange(i + 1, 3).setValue('Error');
      Logger.log('Error sending SMS to ' + phoneNumber + ': ' + response.getContentText());
    }

    // Pause for a few seconds (Twilio may have rate limits)
    Utilities.sleep(5000); // 5 seconds
  }
}
