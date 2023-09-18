# Twilio SMS Automation 🚀

Automate your SMS lead generation with Twilio and Google Sheets! 📊📱

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Status](#status)
- [Contributing](#contributing)
- [License](#license)

## Overview 📋

This automation script leverages Twilio and Google Sheets to streamline the process of generating leads via SMS messages. It retrieves necessary data from Apollo 🚀 and populates a Google Sheets spreadsheet with phone numbers 📞, message bodies ✉️, and delivery status 📈. You can easily configure and run this automation to send SMS messages to your leads, and monitor the delivery status in real-time.

## Getting Started 🚀

Follow these steps to set up and run the Twilio SMS automation:

1. **Clone the Repository**: Clone this repository to your local machine. 

   ```bash
   git clone https://github.com/your-username/twilio-sms-automation.git
   ```

2. **Google Sheets Setup**: Create a Google Sheets document with three columns: `phone` 📞, `message` ✉️, and `status` 📈. This document will be used to store lead information and delivery status.

3. **Twilio Configuration**: Obtain your Twilio Account SID, Auth Token, and Twilio phone number from the [Twilio Console](https://www.twilio.com/console). Replace the placeholders in the code with your Twilio credentials.

4. **Configure Apollo Integration**: Configure Apollo to provide the necessary data for lead generation. Ensure that the data retrieval process is set up and running.

## Usage 🚀

Once you have completed the setup, you can start using the automation:

1. **Fill Data**: Populate the Google Sheets document with phone numbers in the `phone` 📞 column and the corresponding message bodies in the `message` ✉️ column.

2. **Run the Automation**:

   - Open Google Sheets.
   - Go to `Extensions > Apps Script`.
   - Paste the JavaScript code from this repository into the script editor.
   - Save the script.
   - Click `Run > sendSMS` to start the automation.

3. **Monitor Status**: In the Google Sheets document, the `status` 📈 column will display the delivery status of each SMS. A green status indicates successful delivery ✅, while a red status indicates delivery failure or error ❌.

## Configuration ⚙️

To configure the automation, you need to replace the following placeholders in the code with your own credentials:

- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID.
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token.
- `TWILIO_PHONE_NUMBER`: Your Twilio phone number.

Ensure that you have appropriate permissions and access to the Google Sheets document.

## Status 📊

The `status` 📈 column in the Google Sheets document serves as a real-time indicator of SMS delivery status. It will turn green once an SMS is successfully delivered ✅, and it will be red if there is a delivery failure or error ❌. Be sure to review the status column to monitor the progress of your SMS campaigns.

---
To input a phone number in the spreadsheet, use the following format: `'+919999999999'`. You may also use any valid country code. In this example, '+91' has been used as an illustration, as shown in the image below:

![Screenshot 2023-09-18 200428](https://github.com/CyberWarrior743/Twilio_SendBulkSMS_Automation/assets/80274814/debdc6cb-e93d-4376-96e2-01b7d608b284)

