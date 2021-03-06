const { asset } = require('./tools');

module.exports = {
    en: {
        default: {
            termsAndConditions: '',

            smsPersanolizedNurseBookingConfirmedCA:
                'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersanolizedNurseBookingConfirmedCAName:
                'Nurse booking confirmed',
            smsDepersonalizedNurseBookingConfirmedCA:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNurseBookingConfirmedCAName:
                'Nurse booking confirmed',
            emailPersonalizedNurseBookingConfirmedCASubject:
                'Booking was confirmed',
            emailPersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedNurseBookingConfirmedCASubject:
                'Booking was confirmed',
            emailDepersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            smsPersanolizedDoctorBookingConfirmedCA:
                'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersanolizedDoctorBookingConfirmedCAName:
                'Doctor booking confirmed',
            smsDepersonalizedDoctorBookingConfirmedCA:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingConfirmedCAName:
                'Doctor booking confirmed',
            emailPersonalizedDoctorBookingConfirmedCASubject:
                'Booking was confirmed',
            emailPersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedDoctorBookingConfirmedCASubject:
                'Booking was confirmed',
            emailDepersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            smsPersonalizedPatientMustConfirmBooking:
                'You have received a call from {{careunitName}} and we therefore ask you to log into our portal {{appUrl}} using BankID to confirm the visit. Please contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedPatientMustConfirmBookingName:
                'Booking confirmation required',
            smsPersonalizedBookingCanceled:
                'Your time at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} is now canceled. Please contact {{careunitName}} if you would like to book a new appointment. For more information, please see {{marketingUrl}}.',
            smsPersonalizedBookingCanceledName: 'Booking canceled',
            smsPersonalizedBookingConfirmed:
                'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedBookingConfirmedName: 'Booking confirmed',
            smsPersonalizedBookingReminderTomorrow:
                'We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedBookingReminderTomorrowName:
                "Tomorrow's booking reminder",
            smsPersonalizedBookingReminderToday:
                'We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedBookingReminderTodayName: "Today's booking reminder",
            smsShcNarPersonalizedBookingReminderTomorrow:
                'We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsShcNarPersonalizedBookingReminderTomorrowName:
                "Tomorrow's booking reminder",
            smsShcNarPersonalizedBookingReminderToday:
                'We would like to remind you of your booking today at {{careunitName}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsShcNarPersonalizedBookingReminderTodayName:
                "Today's booking reminder",

            smsPersonalizedNurseBookingReminder1CA:
                'We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedNurseBookingReminder1CAName:
                'Nurse booking reminder',
            smsPersonalizedNurseBookingReminder2CA:
                'We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedNurseBookingReminder2CAName:
                'Nurse booking reminder',
            smsPersonalizedDoctorBookingReminder1CA:
                'We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedDoctorBookingReminder1CAName:
                'Doctor booking reminder',

            smsPersonalizedReturnNarEquipment:
                'Please log in to {{careunitName}} portal {{appUrl}} with BankID to answer a final question. We also remind you to return the equipment today. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedReturnNarEquipmentName:
                'NAR equipment returnal reminder',
            smsPersonalizedNarQuestionnaire:
                'You received a call from {{careunitName}}. Please log in to {{appUrl}} (mobile BankID required) to answer any questions. A time for visits will be sent separately. Please contact us if you are unable to login, see {{marketingUrl}}.',
            smsPersonalizedNarQuestionnaireName:
                'NAR equipment experience questionnaire',
            smsPersonalizedNarRetest:
                'You have been given time to pick up NAR equipment at {{careunitName}}. Log in here: {{appUrl}} for more information. For more information, see {{marketingUrl}}.',
            smsPersonalizedNarRetestName: 'NAR equipment pick up reminder',
            smsPersonalizedAas12Months:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedAas12MonthsName: 'AAS (12 months)',

            smsPersonalizedCpap1Month:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedCpap1MonthName: 'CPAP (1 month)',
            smsPersonalizedCpap4Months:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedCpap4MonthsName: 'CPAP (4 months)',
            smsPersonalizedCpap12Months:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedCpap12MonthsName: 'CPAP (12 months)',

            smsDepersonalizedPatientMustConfirmBooking:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedPatientMustConfirmBookingName:
                'Booking confirmation required',
            smsDepersonalizedBookingCanceled:
                'Your booking at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} has been canceled. For more information, please see {{marketingUrl}}. Please log in to {{appUrl}} to confirm your mobile number to receive messages from {{careunitName}}.',
            smsDepersonalizedBookingCanceledName: 'Booking canceled',
            smsDepersonalizedBookingConfirmed:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedBookingConfirmedName: 'Booking confirmed',
            smsDepersonalizedBookingReminderTomorrow:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedBookingReminderTomorrowName:
                "Tomorrow's booking reminder",
            smsDepersonalizedBookingReminderToday:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedBookingReminderTodayName:
                "Today's booking reminder",

            smsDepersonalizedNurseBookingReminder1CA:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNurseBookingReminder1CAName:
                'Nurse booking reminder',
            smsDepersonalizedNurseBookingReminder2CA:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNurseBookingReminder2CAName:
                'Nurse booking reminder',
            smsDepersonalizedDoctorBookingReminder1CA:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingReminder1CAName:
                'Doctor booking reminder',

            smsDepersonalizedReturnNarEquipment:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedReturnNarEquipmentName:
                'NAR equipment returnal reminder',
            smsDepersonalizedNarQuestionnaire:
                'You are registered with {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and fill out a form. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNarQuestionnaireName:
                'NAR equipment experience questionnaire',
            smsDepersonalizedNarRetest:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNarRetestName: 'NAR equipment pick up reminder',
            smsDepersonalizedAas12Months:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedAas12MonthsName: 'AAS (12 months)',

            smsDepersonalizedCpap1Month:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedCpap1MonthName: 'CPAP (1 month)',
            smsDepersonalizedCpap4Months:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedCpap4MonthsName: 'CPAP (4 months)',
            smsDepersonalizedCpap12Months:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedCpap12MonthsName: 'CPAP (12 months)',

            smsVerification: 'Your verification code is {{verificationCode}}.',
            smsVerificationName: 'Phone number verification',

            emailLayout: `<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="image" width="174px" align="center"></mj-class>
      <mj-class name="title" font-size="20px" color="black" font-family="helvetica" line-height="25px" align="center"></mj-class>
      <mj-class name="button" font-family="Helvetica" background-color="#0052CC" color="white" height="32px" width="184px" font-size="20px" border-radius="10px" align="center"></mj-class>
      <mj-class name="subtitle" color="black" font-family="helvetica" line-height="20px" align="center"></mj-class>
      <mj-class name="divider" width="100%" border-width="2px" border-color="#EBEDF1"></mj-class>
      <mj-class name="footerText" font-size="12px" color="black" font-family="helvetica" line-height="15px" align="center"></mj-class>
    </mj-attributes>
  </mj-head>
  <mj-body background-color="white">
    <mj-section>
      <mj-column width="100%">
        <mj-image mj-class="image" src="cid:ic-illustration-3.png" padding-top="24px" padding-bottom="12px"></mj-image>
        {{emailBody}}
        <mj-button mj-class="button" href="{{appUrl}}" padding="0px" padding-bottom="0px">
          Log In
        </mj-button>
        <mj-text mj-class="subtitle" padding="24px" font-size="16px">
          For more information, please see
          <a style="color:#0052CC" href="{{marketingUrl}}">
            {{marketingUrl}}
          </a>
        </mj-text>
        <mj-divider mj-class="divider" padding-top="0px" padding-bottom="24px"></mj-divider>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">Copyright ?? *2020* *{{tenantName}}*, All rights reserved.</mj-text>
        <mj-text mj-class="footerText" font-weight="700" padding-top="0px" padding-bottom="0px">Want to change how you receive these emails?</mj-text>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">You can
          <a style="color:#0052CC" href="{{appUrl}}">
            update your preferences
          </a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

            emailPersonalizedPatientMustConfirmBookingSubject:
                'Waiting for booking confirmation',
            emailPersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a call from {{careunitName}} and we therefore ask you to log into our portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> using BankID to confirm the visit. Please contact us if you are unable to login.</mj-text>',

            emailPersonalizedBookingCanceledSubject: 'Booking was canceled',
            emailPersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Your time at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} is now canceled. Please contact {{careunitName}} if you would like to book a new appointment.</mj-text>',

            emailPersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            emailPersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTomorrowSubject: "Tomorrow's visit",
            emailPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTodaySubject: "Today's visit",
            emailPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailShcNarPersonalizedBookingReminderTomorrowSubject:
                "Tomorrow's visit",
            emailShcNarPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.</mj-text>',

            emailShcNarPersonalizedBookingReminderTodaySubject: "Today's visit",
            emailShcNarPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking today at {{careunitName}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.</mj-text>',

            emailPersonalizedNurseBookingReminder1CASubject: "Tomorrow's visit",
            emailPersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedNurseBookingReminder2CASubject: "Today's visit",
            emailPersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedDoctorBookingReminder1CASubject: "Today's visit",
            emailPersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedReturnNarEquipmentSubject: 'NAR equipment',
            emailPersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to answer a final question. We also remind you to return the equipment today. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedNarQuestionnaireSubject: 'NAR questions',
            emailPersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You received a call from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> (mobile BankID required) to answer any questions. A time for visits will be sent separately. Please contact us if you are unable to login.</mj-text>',

            emailPersonalizedNarRetestSubject: 'NAR retesting',
            emailPersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have been given time to pick up NAR equipment at {{careunitName}}. Log in here: <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> for more information.</mj-text>',

            emailPersonalizedAas12MonthsSubject: 'AAS questions',
            emailPersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedCpap1MonthSubject: 'CPAP questions',
            emailPersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedCpap4MonthsSubject: 'CPAP questions',
            emailPersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedCpap12MonthsSubject: 'CPAP questions',
            emailPersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedPatientMustConfirmBookingSubject:
                'Waiting for booking confirmation',
            emailDepersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedBookingCanceledSubject: 'Booking was canceled',
            emailDepersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Your booking at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} has been canceled. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number to receive messages from {{careunitName}}.</mj-text>',

            emailDepersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            emailDepersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedBookingReminderTomorrowSubject:
                "Tomorrow's visit",
            emailDepersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedBookingReminderTodaySubject: "Today's visit",
            emailDepersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedNurseBookingReminder1CASubject:
                "Tomorrow's visit",
            emailDepersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedNurseBookingReminder2CASubject: "Today's visit",
            emailDepersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedDoctorBookingReminder1CASubject: "Today's visit",
            emailDepersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedReturnNarEquipmentSubject: 'NAR equipment',
            emailDepersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedNarQuestionnaireSubject: 'NAR questions',
            emailDepersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You are registered with {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and fill out a form.</mj-text>',

            emailDepersonalizedNarRetestSubject: 'NAR retesting',
            emailDepersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedAas12MonthsSubject: 'AAS questions',
            emailDepersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedCpap1MonthSubject: 'CPAP questions',
            emailDepersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedCpap4MonthsSubject: 'CPAP questions',
            emailDepersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedCpap12MonthsSubject: 'CPAP questions',
            emailDepersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailVerificationSubject: 'Email verification',
            emailVerificationBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Your verification code is {{verificationCode}}.</mj-text>',

            postalLayout: asset('postalLayout.sv.html'),

            postalPersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            postalPersonalizedBookingConfirmedBody: asset(
                'postalPersonalizedBookingConfirmedBody.sv.html'
            ),

            einboxLayout: asset('einboxLayout.sv.html'),

            einboxPersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            einboxPersonalizedBookingConfirmedBody: asset(
                'einboxPersonalizedBookingConfirmedBody.sv.html'
            ),

            processSimpleAppointmentName: 'Create appointment',
            processSimpleAppointmentDescription: 'Create appointment process',
            taskSimpleAppointmentBookingName: 'Appointment booking',
            taskInvestigationNarSimpleAppointmentBookingName:
                'Appointment booking',
            taskInvestigationDoctorVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskAasNarFirstSimpleAppointmentBookingName: 'Appointment booking',
            taskAasNarSecondSimpleAppointmentBookingName: 'Appointment booking',
            taskCpapVisitSimpleAppointmentBookingName: 'Appointment booking',
            taskCpapCtpBmaVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskCpapCtpDoctorVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskCpapAnalysisBmaVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskCpapAnalysisDoctorVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskSimpleAppointmentConfirmationName: 'Appointment confirmation',
            taskInvestigationNarSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskInvestigationDoctorVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskAasNarFirstSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskAasNarSecondSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapCtpBmaVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapCtpDoctorVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapAnalysisBmaVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapAnalysisDoctorVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskSimpleAppointmentReminderName: 'Appointment reminder',
            taskSimpleAppointmentReminderBody: 'Confirm an appointment?',
            taskSimpleAppointmentCancelationName: 'Appointment cancelation',
            taskSimpleAppointmentReminderTimerName: 'Activate reminder',
            taskSimpleAppointmentCancelingTimerName: 'Start canceling',
            taskSimpleAppointmentCompleteTimerName:
                'Complete appointment process',
            taskSimpleAppointmentEkopostManualName:
                'Postal notification letter',
            taskSimpleAppointmentEkopostManualBody:
                'Send postal notification letter?',
            taskSimpleAppointmentEkopostSubprocessName:
                'Postal notification letter',

            processDoctorVisitName: 'Doctor visits',
            processDoctorVisitDescription: 'Doctor visit process',
            taskDoctorVisitBookingName: 'Doctor visit booking',
            taskDoctorVisitFormFillingName: 'Visit form filling',
            taskDoctorVisitFormTransformingName: 'Visit form transforming',
            taskDoctorVisitFormReviewingName: 'Visit form reviewing',
            taskDoctorVisitFormSendingName: 'Visit form sending',
            taskDoctorVisitTomorrowTimerName: 'Inform about visit tomorrow',
            taskDoctorVisitTodayTimerName: 'Inform about visit today',

            processNarName: 'NAR',
            processNarDescription: 'NAR process',
            taskNarBookingName: 'NAR booking',
            taskNarEssFormName: 'ESS questionnaire filling',
            taskNarHandingOutFormName: 'Equipment handing out',
            taskNarSleepFormName: 'Feedback filling',
            taskNarTakingBackFormName: 'Equipment taking back',
            taskNarBmaFormFillingName: 'NAR results filling for BMA',
            taskNarBmaFormTransformingName: 'NAR results transforming for BMA',
            taskNarBmaFormReviewingName: 'NAR results reviewing for BMA',
            taskNarBmaFormSendingName: 'NAR results sending for BMA',
            taskNarDoctorFormFillingName: 'NAR results filling for doctor',
            taskNarDoctorFormTransformingName:
                'NAR results transforming for doctor',
            taskNarDoctorFormReviewingName: 'NAR results reviewing for doctor',
            taskNarDoctorFormSendingName: 'NAR results sending for doctor',
            taskNarEssFormTimerName: 'Remind to fill in ESS patient form',
            taskNarTakingBackTimerName: 'Remind to take back equipment',

            taskNarTomorrowTimerName: 'Inform about visit tomorrow',
            taskNarTodayTimerName: 'Inform about visit today',

            processInvestigationName: 'Investigation',
            processInvestigationDescription:
                'Investigation process (SHC episode 1)',
            taskInvestigationRefDetailsFormName: 'Referral details filling',
            taskInvestigationNarName: 'NAR',
            taskInvestigationRefReplyName: 'Referral reply',
            taskInvestigationRefReplyBody: 'Please make referral reply',
            taskInvestigationTreatmentPlanName: 'Treatment plan',
            taskInvestigationTreatmentPlanBody: 'What next?',
            taskInvestigationDoctorVisitName: 'Clinical assessment',
            taskInvestigationSesarFormName: 'SESAR report filling',
            taskInvestigationCountyReportName: 'County report',
            taskInvestigationCountyReportBody: 'County report',

            processAasName: 'AAS',
            processAasDescription: 'AAS process (SHC episode 2)',
            taskAasRefDentistFormName: 'Referral to dentist filling',
            taskAasDentistFormFillingName: 'Answer from dentist filling',
            taskAasCpapTreatmentName: 'CPAP treatment?',
            taskAasCpapTreatmentBody: 'CPAP treatment?',
            taskAasDentistFormTransformingName: 'Dentist form transforming',
            taskAasDentistFormReviewingName: 'Dentist form reviewing',
            taskAasDentistFormSendingName:
                'Automatic dentist form sending to Takecare',
            taskAasFollowUp7WeeksTimerName: 'Waiting for 7 weeks',
            taskAasFollowUp12MonthsTimerName: 'Waiting for 12 months',
            taskAasProceedName: 'Proceed with patient',
            taskAasProceedBody: 'Proceed with patient',
            taskAasPatientAlertFormName: 'AAS problem report',
            taskAasPatient12MonthsFormName: 'AAS questionnaire 12 months',
            taskAasQ12MonthsTimerName:
                'Reminder to fill in AAS 12 months patient form',
            taskAasSesarFirstFormName: 'SESAR first report filling',
            taskAasCountyReportName: 'County report',
            taskAasCountyReportBody: 'County report',

            taskAasAnalysis7wFormFillingName:
                'AAS usage analysis after 7 weeks',
            taskAasAnalysis12mFormFillingName:
                'AAS usage analysis after 12 months',
            taskAasAnalysisAlertFormFillingName:
                'AAS usage analysis after problem report',
            taskAasAnalysisNarFormFillingName: 'AAS usage analysis after NAR',
            taskAasAnalysis7wFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysis12mFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysisAlertFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysisNarFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysis7wFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysis12mFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysisAlertFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysisNarFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysis7wFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',
            taskAasAnalysis12mFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',
            taskAasAnalysisAlertFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',
            taskAasAnalysisNarFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',

            taskAasRefAdjustmentFormName: 'Referral to split adjustment',
            taskAasSplitAdjustmentFormName:
                'Split adjustment: answer from dentist',
            taskAasSesarSecondFormName: 'SESAR final report filling',
            taskAasNarFirstName: 'NAR',
            taskAasNarSecondName: 'NAR',

            processCpapName: 'CPAP',
            processCpapDescription: 'CPAP process (SHC episode 3)',
            taskCpapVisitName: 'CPAP visit',
            taskCpapSesarFirstFormName: 'SESAR first report filling',
            taskCpapCountyReportName: 'County report',
            taskCpapCountyReportBody: 'County report',

            taskCpapCtpWhatNextManualName: 'What next?',
            taskCpapCtpWhatNextManualBody: 'What next?',

            taskCpapCtpStartFormName: 'Start form of control testing period',
            taskCpapCtpStartManualName:
                'Send control testing period start result to EMR?',
            taskCpapCtpStartManualBody:
                'Send control testing period start result to EMR?',
            taskCpapCtpStartTransformName:
                'Control testing period start form transforming',
            taskCpapCtpStartReviewName:
                'Control testing period start form reviewing',
            taskCpapCtpStartSendName:
                'Control testing period start form sending to Takecare',

            taskCpapCtpExtraFormName: 'Extra form of control testing period',
            taskCpapCtpExtraManualName:
                'Send control testing period extra result to EMR?',
            taskCpapCtpExtraManualBody:
                'Send control testing period extra result to EMR?',
            taskCpapCtpExtraTransformName:
                'Control testing period extra form transforming',
            taskCpapCtpExtraReviewName:
                'Control testing period extra form reviewing',
            taskCpapCtpExtraSendName:
                'Control testing period extra form sending to Takecare',

            taskCpapFollowUp1WeekTimerName: 'Waiting for 1 week',

            taskCpapFollowUp1MonthTimerName: 'Waiting for 1 month',
            taskCpapFollowUp4MonthsTimerName: 'Waiting for 4 months',
            taskCpapFollowUp12MonthsTimerName: 'Waiting for 12 months',
            taskCpapAlertName: 'CPAP monitoring alert',
            taskCpapAlertBody: 'Proceed with patient',
            taskCpapPatientProblemFormName: 'CPAP problem report',
            taskCpap1MonthFormName: 'CPAP questionnaire 1 month',
            taskCpap4MonthsFormName: 'CPAP questionnaire 4 months',
            taskCpap12MonthsFormName: 'CPAP questionnaire 12 months',
            taskCpapSesarSecondFormName: 'SESAR second report',

            taskCpapAnalysisWhatNextManualName: 'What next?',
            taskCpapAnalysisWhatNextManualBody: 'What next?',

            taskCpapAnalysis1mFormName: 'CPAP 1 month usage analysis',
            taskCpapAnalysis1mManualName:
                'Send CPAP 1 month usage analysis result to EMR?',
            taskCpapAnalysis1mManualBody:
                'Send CPAP 1 month usage analysis result to EMR?',
            taskCpapAnalysis1mTransformName:
                'CPAP 1 month usage analysis form transforming',
            taskCpapAnalysis1mReviewName:
                'CPAP 1 month usage analysis form reviewing',
            taskCpapAnalysis1mSendName:
                'CPAP 1 month usage analysis form sending to Takecare',

            taskCpapAnalysis4mFormName: 'CPAP 4 months usage analysis',
            taskCpapAnalysis4mManualName:
                'Send CPAP 4 months usage analysis result to EMR?',
            taskCpapAnalysis4mManualBody:
                'Send CPAP 4 months usage analysis result to EMR?',
            taskCpapAnalysis4mTransformName:
                'CPAP 4 months usage analysis form transforming',
            taskCpapAnalysis4mReviewName:
                'CPAP 4 months usage analysis form reviewing',
            taskCpapAnalysis4mSendName:
                'CPAP 4 months usage analysis form sending to Takecare',

            taskCpapAnalysis12mFormName: 'CPAP 12 months usage analysis',
            taskCpapAnalysis12mManualName:
                'Send CPAP 12 months usage analysis result to EMR?',
            taskCpapAnalysis12mManualBody:
                'Send CPAP 12 months usage analysis result to EMR?',
            taskCpapAnalysis12mTransformName:
                'CPAP 12 months usage analysis form transforming',
            taskCpapAnalysis12mReviewName:
                'CPAP 12 months usage analysis form reviewing',
            taskCpapAnalysis12mSendName:
                'CPAP 12 months usage analysis form sending to Takecare',

            taskCpapAnalysisAlertFormName: 'CPAP alert usage analysis',
            taskCpapAnalysisAlertManualName:
                'Send CPAP alert usage analysis result to EMR?',
            taskCpapAnalysisAlertManualBody:
                'Send CPAP alert usage analysis result to EMR?',
            taskCpapAnalysisAlertTransformName:
                'CPAP alert usage analysis form transforming',
            taskCpapAnalysisAlertReviewName:
                'CPAP alert usage analysis form reviewing',
            taskCpapAnalysisAlertSendName:
                'CPAP alert usage analysis form sending to Takecare',

            taskCpapAnalysisProblemFormName:
                'CPAP patient problem usage analysis',
            taskCpapAnalysisProblemManualName:
                'Send CPAP patient problem usage analysis result to EMR?',
            taskCpapAnalysisProblemManualBody:
                'Send CPAP patient problem usage analysis result to EMR?',
            taskCpapAnalysisProblemTransformName:
                'CPAP patient problem usage analysis form transforming',
            taskCpapAnalysisProblemReviewName:
                'CPAP patient problem usage analysis form reviewing',
            taskCpapAnalysisProblemSendName:
                'CPAP patient problem usage analysis form sending to Takecare',

            taskCpapAnalysisFollowFormName: 'CPAP follow up usage analysis',
            taskCpapAnalysisFollowManualName:
                'Send CPAP follow up usage analysis result to EMR?',
            taskCpapAnalysisFollowManualBody:
                'Send CPAP follow up usage analysis result to EMR?',
            taskCpapAnalysisFollowTransformName:
                'CPAP follow up usage analysis form transforming',
            taskCpapAnalysisFollowReviewName:
                'CPAP follow up usage analysis form reviewing',
            taskCpapAnalysisFollowSendName:
                'CPAP follow up usage analysis form sending to Takecare',

            taskCpapSesarThirdFormName: 'SESAR final report filling',
            taskCpapCtpBmaVisitName: 'BMA visit',
            taskCpapCtpDoctorVisitName: 'Doctor visit',
            taskCpapAnalysisBmaVisitName: 'BMA visit',
            taskCpapAnalysisDoctorVisitName: 'Doctor visit',

            taskCpapQ1MonthTimerName:
                'Reminder to fill in CPAP 1 month patient form',
            taskCpapQ4MonthsTimerName:
                'Reminder to fill in CPAP 4 months patient form',
            taskCpapQ12MonthsTimerName:
                'Reminder to fill in CPAP 12 months patient form',
            taskCpapFollowUpTimerName:
                'Waiting to activate analysis CPAP usage form',

            taskCpapVisitFormFillingName: 'Fill in CPAP start form',
            taskCpapCtpBmaVisitFormFillingName: 'Fill in CPAP BMA form',
            taskCpapCtpDoctorVisitFormFillingName: 'Fill in CPAP doctor form',
            taskCpapAnalysisBmaVisitFormFillingName: 'Fill in CPAP BMA form',
            taskCpapAnalysisDoctorVisitFormFillingName:
                'Fill in CPAP doctor form',

            taskCpapVisitFormReviewingName: 'Review CPAP visit form',
            taskCpapCtpBmaVisitFormReviewingName: 'Review BMA visit form',
            taskCpapCtpDoctorVisitFormReviewingName:
                'Reviewing doctor visit form',
            taskCpapAnalysisBmaVisitFormReviewingName: 'Review BMA visit form',
            taskCpapAnalysisDoctorVisitFormReviewingName:
                'Reviewing doctor visit form',

            processPatientAppointmentName: 'Make appointment',
            processPatientAppointmentDescription: 'Make appointment',
            taskPatientAppointmentBookingName: 'Appointment booking',
            taskNurseAppointmentBookingName: 'Appointment booking',
            taskPatientAppointmentConfirmationName: 'Appointment rescheduling',
            taskNurseAppointmentConfirmationName: 'Appointment rescheduling',
            taskDoctorSimpleAppointmentBookingName: 'Appointment booking',
            taskDoctorSimpleAppointmentConfirmationName:
                'Appointment confirmation',

            processDoctorAppointmentName: 'Make appointment',
            processDoctorAppointmentDescription: 'Make appointment',
            taskDoctorAppointmentBookingName: 'Appointment booking',
            taskDoctorAppointmentReschedulingName: 'Appointment rescheduling',
            taskDoctorAppointmentCancelingName:
                'Canceling appointment by patient',

            processCaMainName: 'City Akuten process',
            processCaMainDescription: 'City Akuten process',
            taskCaMainFirstBulletinName: 'Skapa f??rsta patientbulletin',
            taskCaMainSecondBulletinName: 'Skapa andra patientbulletin',
            taskCaMainNurseAppointmentName: 'Nurse visit appointment',
            taskCaMainNurseFirstTimerName: 'Nurse visit first timer',
            taskCaMainNurseSecondTimerName: 'Nurse visit second timer',
            taskCaMainHealthRefFormName: 'Patient data of nurse visit',
            taskCaMainHealthDeclarationFormName: 'Patient data of nurse visit',
            taskCaMainHealthDeclarationTransformName:
                'Conversion of patient data',
            taskCaMainHealthDeclarationReviewName: 'Review of patient data',
            taskCaMainHealthDeclarationSendName: 'Sending to EMR patient data',
            taskCaMainNurseAckManualName:
                'Acknowledgement of patient data (nurse visit)',
            taskCaMainNurseAckManualBody:
                'Acknowledgement of patient data (nurse visit)',
            taskCaMainDoctorAppointmentName: 'Doctor visit appointment',
            taskCaMainDoctorFirstTimerName: 'Doctor visit timer',
            taskCaMainDoctorAckManualName:
                'Acknowledgement of patient data (doctor visit)',
            taskCaMainDoctorAckManualBody:
                'Acknowledgement of patient data (doctor visit)',

            processShcFollowUpName: 'Follow up',
            processShcFollowUpDescription: 'Follow up process',
            taskShcFollowUpReqVisitFormName: 'Ask for visit',
            taskShcFollowUpAnalysisFormName: 'Follow up analysis',
            taskShcFollowUpAnalysisManualName: 'Journal notes',
            taskShcFollowUpAnalysisManualBody:
                'Do you want to send journal notes?',
            taskShcFollowUpAnalysisTransformName: 'Converting journal notes',
            taskShcFollowUpAnalysisReviewName: 'Reviewing journal notes',
            taskShcFollowUpAnalysisSendName: 'Sending journal notes',
            taskShcFollowUpDentistManualName: 'Referral to dentist',
            taskShcFollowUpDentistManualBody: 'Referral to dentist',
            taskShcFollowUpSendCardManualName: 'Process card and send back',
            taskShcFollowUpSendCardManualBody: 'Process card and send back',
            taskShcFollowUpNurseVisitSubprocessName: 'Book nurse visit',
            taskShcFollowUpDoctorVisitSubprocessName: 'Book doctor visit',
            taskShcFollowUpDropInVisitSubprocessName: 'Drop in visit',
            taskShcFollowUpCountyReportManualName: 'County report',
            taskShcFollowUpCountyReportManualBody: 'County report',
            taskShcFollowUpSesarFormName: 'SESAR report',

            processEkopostName: 'Send a postal letter',
            processEkopostDescription: 'Send a postal letter process',
            taskEkopostEinboxName: 'Looking for e-inbox',
            taskEkopostEinboxErrorName: 'E-inbox error',
            taskEkopostEinboxErrorBody: 'Should we retry?',
            taskEkopostSparName: 'Looking for address in SPAR',
            taskEkopostSparErrorName: 'SPAR error',
            taskEkopostSparErrorBody: 'Should we retry?',
            taskEkopostEinboxPdfGeneratingName: 'Preparing a PDF',
            taskEkopostEinboxPdfReviewingName: 'Approving a PDF',
            taskEkopostPostalPdfGeneratingName: 'Preparing a PDF',
            taskEkopostPostalPdfReviewingName: 'Approving a PDF',
            taskEkopostPdfSendingName: 'Sending a postal letter',
            taskEkopostPdfSendingErrorName: 'Sending error',
            taskEkopostPdfSendingErrorBody: 'Should we retry?',

            auditCareprofForbidden: 'Unauthorized API usage attempt',
            auditProcessActivated: 'Process started',
            auditProcessCareunitStateChanged: 'Process state changed',
            auditProcessPatientStateChanged: 'Process state changed (patient)',
            auditProcessSettingsChanged:
                'Process Setting (runtime variables) changed',
            auditProcessCompleted: 'Process ended',
            auditProcessTerminated: 'Process forced to teminate',
            auditTaskActivated: 'Start of task',
            auditTaskErrorThrown: 'Task throws error',
            auditTaskTerminated: 'Task forced to terminate',
            auditTaskTimerTriggered: 'Process timer triggered',
            auditTaskCompleted: 'Task completed',
            auditAdminStaticalBulletinCreate:
                'Tenant admin creates a statical bulletin',
            auditAdminStaticalBulletinUpdate:
                'Tenant admin updates a statical bulletin',
            auditAdminStaticalBulletinDelete:
                'Tenant admin deletes a statical bulletin',
            auditAdminDynamicalBulletinTemplateCreate:
                'Tenant admin creates a dynamical bulletin template',
            auditAdminDynamicalBulletinTemplateUpdate:
                'Tenant admin updates a dynamical bulletin template',
            auditAdminDynamicalBulletinTemplateDelete:
                'Tenant admin deletes a dynamical bulletin template',
            auditSuperadminEmailUnblacklist:
                'Super admin unblacklists an email',
            auditAdminMappingCreate: 'Tenant admin creates a mapping',
            auditAdminMappingUpdate: 'Tenant admin updates a mapping',
            auditAdminMappingDelete: 'Tenant admin deletes a mapping',
            auditAdminTemplateCreate: 'Tenant admin creates a template',
            auditAdminTemplateUpdate: 'Tenant admin updates a template',
            auditAdminTemplateDelete: 'Tenant admin deletes a template',
            auditCareprofAuthStart: 'Doctor authentication starts',
            auditCareprofAuthComplete: 'Doctor logged in',
            auditCareprofSessionProlong: 'Doctor prolong his session',
            auditCareprofLogout: 'Doctor logged out',
            auditPatientAuthStart: 'Patient authentication starts',
            auditPatientAuthComplete: 'Patient logged in',
            auditPatientSessionProlong: 'Patient prolong his session',
            auditPatientLogout: 'Patient logged out',
            auditAdminAuthComplete: 'Tenant admin logged in',
            auditAdminSessionProlong: 'Tenant admin prolong his session',
            auditAdminLogout: 'Tenant admin logged out',
            auditArtefactVisibilityStateChange: 'Artefact was chilled',
            auditArtefactCreated: 'Artefact was created',
            auditArtefactOpenedByUser: 'Artefact was opened by user',
            auditPatientEmailConsent:
                'Patient provided consent to receive emails',
            auditPatientSmsConsent: 'Patient provided consent to receive SMS',
            auditPatientEmailVerification: 'Patient confirmed email',
            auditPatientPhoneVerification: 'Patient confirmed phone',
            auditPatientEmailVerificationRequest:
                'Patient requests email verification',
            auditPatientPhoneVerificationRequest:
                'Patient requests phone verification',
            auditPatientEmailNotification: 'Email was sent to patient',
            auditPatientSmsNotification: 'SMS was sent to patient',
            auditAdminCareunitCreate: 'Tenant admin creates a careunit',
            auditAdminCareunitUpdate: 'Tenant admin updates a careunit',
            auditAdminCareunitDelete: 'Tenant admin deletes a careunit',
            auditAdminCareprofCreate: 'Tenant admin creates a careprof',
            auditAdminCareprofUpdate: 'Tenant admin updates a careprof',
            auditAdminCareprofDelete: 'Tenant admin deletes a careprof',
            auditAdminPatientCreate: 'Tenant admin creates a patient',
            auditAdminPatientUpdate: 'Tenant admin updates a patient',
            auditAdminPatientDelete: 'Tenant admin deletes a patient',
            auditSuperadminAuthComplete: 'Super admin logged in',
            auditSuperadminLogout: 'Super admin logged out',
            auditSuperadminMicroserviceCreate:
                'Super admin creates a microservice',
            auditSuperadminMicroserviceUpdate:
                'Super admin updates a microservice',
            auditSuperadminMicroserviceDelete:
                'Super admin deletes a microservice',
            auditSuperadminTenantCreate: 'Super admin creates a tenant',
            auditSuperadminTenantUpdate: 'Super admin updates a tenant',
            auditSuperadminTenantDelete: 'Super admin deletes a tenant',
            auditSuperadminAdminCreate: 'Super admin creates a tenant admin',
            auditSuperadminAdminUpdate: 'Super admin updates a tenant admin',
            auditSuperadminAdminDelete: 'Super admin deletes a tenant admin',
            auditSuperadminMaintenanceSchedule:
                'Super admin schedules a maintenance',
            auditSuperadminMaintenanceUnschedule:
                'Super admin unschedules a maintenance',

            taskTypeSimpleTimer: 'Delay',
            taskTypeNotificationTimer: 'Delayed notification',
            taskTypeManual: 'Manual choose',
            taskTypeManualTrigger: 'Optional flow',
            taskTypeAssessment: 'Fill an assessment',
            taskTypeTakecareBooking: 'Book a doctor',
            taskTypeTakecareTerms: 'Manual edit of converted assessment',
            taskTypeSubprocess: 'Subprocess',
            taskTypeTakecareConversion:
                'Convert an assessment into TakeCare format',
            taskTypeTakecareXchangeSending:
                'Send converted assessment to TakeCare',
            taskTypeTakecareBookingCanceling: 'Cancel doctor booking',
            taskTypeBulletinStatical: 'Assign prefilled bulletin to a patient',
            taskTypeBulletinDynamical:
                'Assign individual bulletin to a patient',
            taskTypeMiniqResult: 'MiniQ result',
            taskTypeMiniqQuery: 'MiniQ query',
            taskTypeMiniqMedications: 'MiniQ medications',
            taskTypeZoomMeeting: 'Zoom meeting',

            artefactTypeAssessment: 'Assessment',
            artefactTypeTakecareBooking: 'Doctor booking',
            artefactTypeTakecareTerms: 'Converted assessment',
            artefactTypeBulletinStatical: "Patient's prefilled bulletin",
            artefactTypeBulletinDynamical: "Patient's individual bulletin",

            artefactCodeMiniqFinalFormAssessment: 'MiniQ final form',
            artefactCodeRegularPatientReportingAssessment:
                'Regular patient reporting',
            artefactCodeDrVisitPhase20QuestionsFormAssessment:
                'Doctor visit "Phase 20" form',
            artefactCodeCpapCf1CareStartAssessment: 'CPAP care start form',
            artefactCode00SampleTemplateTakecareTerms: 'Sample template',
            artefactCode0ReferralNoteAssessment: 'Referral note',
            artefactCodeAasDentistResponseAssessment: 'AAS dentist response',
            artefactCodeAasDentistReferralAssessment: 'AAS referral response',
            artefactCodeDailyForm: 'Daily form',
            artefactCode00SampleTemplateAssessment: 'Sample template',
            artefactCodeAsihDetailsFormAssessment: 'ASIH details form',
            artefactCode3HowWellDidYouSleepAssessment:
                'NAR: how well did you sleep',
            artefactCode2EquipmentHandingOutFormAssessment:
                'NAR: equipment handing out',
            artefactCode1QuestionaireEssAssessment: 'ESS questionaire',
            artefactCode4EquipmentTakeBackFormAssessment:
                'NAR: equipment take back',
            artefactCodeSESARInvestigationFlowAssessment: 'SESAR form',
            artefactCode5NarAssesmentEssQuestionaireAssessment:
                'NAR: ESS questionaire',
            artefactCodeDoctorVisitAAssessment: 'Doctor visit',
            artefactCodeInfoBulletin: "Patient's individual bulletin",

            processCareunitStateVisitCanceled: 'Visit canceled',
            processCareunitStateBooking: 'Booking',
            processCareunitStateVisitScheduled: 'Visit scheduled',
            processCareunitStateJournalNotes: 'Journal notes',
            processCareunitStateSignToTakecare: 'Sign to Takecare',
            processCareunitStateSignedToTakecare: 'Signed to Takecare',
            processCareunitStateNurseBoking: 'Nurse booking',
            processCareunitStateHealthSurvey: 'Health survey',
            processCareunitStateNurseVisit: 'Nurse visit',
            processCareunitStateDoctorBooking: 'Doctor booking',
            processCareunitStateDoctorVisit: 'Doctor visit',
            processCareunitStateVisitsComplete: 'Visits complete',
            processCareunitStateStarted: 'Started',
            processCareunitStateDentist: 'Dentist',
            processCareunitStateAasStarted: 'AAS started',
            processCareunitStateCpapPickUp: 'CPAP pick up',
            processCareunitStateCpapInUse: 'CPAP in use',
            processCareunitStateFinished: 'Finished',
            processCareunitStateReferral: 'Referral',
            processCareunitStateNarProcess: 'NAR process',
            processCareunitStateClinicalAssessment: 'Clinical assessment',
            processCareunitStateReporting: 'Reporting',
            processCareunitStatePickUpNar: 'Pick up NAR',
            processCareunitStateUsingNar: 'Using NAR',
            processCareunitStateNarAnalysis: 'NAR analysis',
            processCareunitStateConfirmed: 'Confirmed',
            processCareunitStateSelfAssessment: 'Fill in self-assessment',
            processCareunitStateHandleSelfAssessment: 'Manage self-assessment',
            processCareunitStateCanceled: 'Canceled',
            processCareunitStateReady: 'Ready',
            processCareunitStateInProgress: 'In progress',

            processPatientStateVisitCanceled: 'Visit canceled',
            processPatientStateVisitScheduled: 'Visit scheduled',
            processPatientStateBooking: 'Booking',
            processPatientStateJournalNotes: 'Journal notes',
            processPatientStateNurseBoking: 'Nurse booking',
            processPatientStateHealthSurvey: 'Health survey',
            processPatientStateNurseVisit: 'Nurse visit',
            processPatientStateDoctorBooking: 'Doctor booking',
            processPatientStateDoctorVisit: 'Doctor visit',
            processPatientStateVisitsComplete: 'Visits complete',
            processPatientStateStarted: 'Started',
            processPatientStateDentist: 'Dentist',
            processPatientStateAasStarted: 'AAS started',
            processPatientStateCpapPickUp: 'CPAP pick up',
            processPatientStateCpapInUse: 'CPAP in use',
            processPatientStateFinished: 'Finished',
            processPatientStateWaitingForBookingConfirmation:
                'Waiting for booking confirmation',
            processPatientStateNarEquipmentTest: 'NAR testing',
            processPatientStateReturnNar: 'NAR returning',
            processPatientStateConfirmed: 'Confirmed',
            processPatientStateSelfAssessment: 'Fill in self-assessment',
            processPatientStateHandleSelfAssessment: 'Manage self-assessment',
            processPatientStateSignedToTakeCare: 'Signed to Takecare',
            processPatientStateCanceled: 'Canceled',
            processPatientStateReady: 'Ready',
            processPatientStateInProgress: 'In progress',

            httpErrorTenantDataIsAbsent: '',
            httpErrorTenantDataMismatch: '',
            httpErrorIncorrectToken: '',
            httpErrorInsufficientPermissions: '',
            httpErrorMaintenance: '',
            httpErrorSchemaValidationError: '',
            httpErrorCareunitInconsistent: '',
            httpErrorCareprofInconsistent: '',
            httpErrorCanNotFindComar: '',
            httpErrorCanNotFindStatical: '',
            httpErrorStaticalCodeExists: '',
            httpErrorCanNotFindTemplate: '',
            httpErrorTemplateCodeExists: '',
            httpErrorCanNotFindMapping: '',
            httpErrorCanNotFindMappingById: '',
            httpErrorMappingCodeExists: '',
            httpErrorCanNotFindReport: '',
            httpErrorCanNotDeleteReport: '',
            httpErrorCanNotFindTemplateMetadata: '',
            httpErrorTemplateDataAbsent: '',
            httpErrorResourceFilesAreMissed: '',
            httpErrorCanNotFindTemplateToUpdate: '',
            httpErrorCanNotFindTemplateToPatch: '',
            httpErrorCanNotFindTemplateToDelete: '',
            httpErrorIncorrectTenantOrCredentials: '',
            httpErrorIncorrectCredentials: '',
            httpErrorWrongUserType: '',
            httpErrorIncorrectTenant: '',
            httpErrorGrandidErrorUsernameMissing: '',
            httpErrorCanNotFindArtefact: '',
            httpErrorCanNotUpdateArtefactState: '',
            httpErrorPdfIsMissingOrCorrupted: '',
            httpErrorCanNotFindProcessInstance: '',
            httpErrorCanNotFindTaskInstance: '',
            httpErrorCanNotFindCareprof: '',
            httpErrorCareprofNotExists: '',
            httpErrorCareprofUsernameExists: '',
            httpErrorCareprofPersonalNumberExists: '',
            httpErrorCareprofHsaidExists: '',
            httpErrorPasswordAuthNotAllowed: '',
            httpErrorLabelNameAlreadyExists: '',
            httpErrorCanNotFindLabel: '',
            httpErrorCanNotFindCareunit: '',
            httpErrorCareunitCodeExists: '',
            httpErrorCareunitHsaidExists: '',
            httpErrorCareunitNotExists: '',
            httpErrorCanNotFindPatient: '',
            httpErrorPatientPersonalNumberExists: '',
            httpErrorInvalidEmailVerificationCode: '',
            httpErrorInvalidSmsVerificationCode: '',
            httpErrorPatientNotExists: '',
            httpErrorLabelIdAlreadyAdded: '',
            httpErrorCanNotFindProcessConfig: '',
            httpErrorCorrespondingProcessConfigExists: '',
            httpErrorPsdKeyExists: '',
            httpErrorPsdMetaDoesNotExists: '',
            httpErrorPsdKeyCanNotBeChanged: '',
            httpErrorCanNotFindItem: '',
            httpErrorCanNotFindPsdMeta: '',
            httpErrorIncorrectDataValueType: '',
            httpErrorInconsistentCareunitCode: '',
            httpErrorCanNotFindMicroservice: '',
            httpErrorBaseMsCanNotHaveTasks: '',
            httpErrorProcessMsShoudHaveTasks: '',
            httpErrorMsidExists: '',
            httpErrorCanNotFindTenantAdmin: '',
            httpErrorTenantDoesNotExists: '',
            httpErrorAdminUsernameExists: '',
            httpErrorAdminUsernameCouldNotBeChanged: '',
            httpErrorCanNotFindAdmin: '',
            httpErrorCanNotFindTenant: '',
            httpErrorTenantCodeExists: '',
            httpErrorSomeMsDoesNotExists: '',
            httpErrorItIsNotYourProcessInstance: '',
            httpErrorProcessInstanceIsNotActive: '',
            httpErrorTaskInstanceIsNotActive: '',
            httpErrorPatientDataAbsent: '',
            httpErrorCareunitDataAbsent: '',
            httpErrorTenantDataAbsent: '',
            httpErrorCanNotFindCareunitProcessConfig: '',
            httpErrorIncorrectProcessConfig: '',
            httpErrorProcessIsNotActive: '',
            httpErrorProcessIsNotStandalone: '',
            httpErrorForbiddenTemplateCode: '',
            httpErrorTemplateChargingIsAbsent: '',
            httpErrorAssessmentIsAlreadyCreated: '',
            httpErrorIncorrectPatient: '',
            httpErrorAssessmentIsNotCreated: '',
            httpErrorTemplateCodeCanNotBeChanged: '',
            httpErrorBookingIsAlreadyCreated: '',
            httpErrorSlotIsNotAvailable: '',
            httpErrorCanNotFindCorrespondingBooking: '',
            httpErrorBulletinIsNotCreated: '',
            httpErrorBulletinIsAlreadyCreated: '',
            httpErrorIncorrectCompleteOption: '',
            httpErrorCanNotFindInnerConfigOfTask: '',
            httpErrorTaskDataIsNotCreated: '',
            httpErrorMedicationsIsNotSavedLocally: '',
            httpErrorMiniqFullResultIsNotSaved: '',
            httpErrorMiniqFullResultIsNotFound: '',
            httpErrorPdfIsNotCreated: '',
            httpErrorTakecareDataIsAbsent: '',
            httpErrorTakecareDocIsNotCreated: '',
            httpErrorListOfTermsCanNotBeEmpty: '',

            httpErrorUnexpecteDatabaseError: '',
            httpErrorEmrRequestTimeout: '',
            httpErrorUnexpectedTakecareResponse: '',
            httpErrorUnexpectedError: ''
        },
        tenant1: {}
    },
    sv: {
        default: {
            termsAndConditions: '',

            smsPersanolizedNurseBookingConfirmedCA:
                'Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsDepersonalizedNurseBookingConfirmedCA:
                'Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            emailPersonalizedNurseBookingConfirmedCASubject:
                'Bokningen bekr??ftades',
            emailPersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedNurseBookingConfirmedCASubject:
                'Bokningen bekr??ftades',
            emailDepersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            smsPersanolizedDoctorBookingConfirmedCA:
                'Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingConfirmedCA:
                'Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            emailPersonalizedDoctorBookingConfirmedCASubject:
                'Bokningen bekr??ftades',
            emailPersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedDoctorBookingConfirmedCASubject:
                'Bokningen bekr??ftades',
            emailDepersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            smsPersonalizedPatientMustConfirmBooking:
                'Du har f??tt en kallelse fr??n {{careunitName}} och vi ber vi d??rf??r dig logga in i v??r portal {{appUrl}} med hj??lp av BankID f??r att bekr??fta bes??ket. V??nligen kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedBookingCanceled:
                'Din tid hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} ??r nu avbokad. V??nligen kontakta {{careunitName}} om du ??nskar boka en ny tid. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsPersonalizedBookingConfirmed:
                'Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedBookingReminderTomorrow:
                'Vi vill p??minna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedBookingReminderToday:
                'Vi vill p??minna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsShcNarPersonalizedBookingReminderTomorrow:
                'Hej, vi vill p??minna dig om att h??mta din s??mnutrustning hos {{careunitName}} den {{visitDate}}. Det ??r en drop-in tid, v??nligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. F??r mer information, se {{marketingUrl}}. V??lkommen!',
            smsShcNarPersonalizedBookingReminderToday:
                'Hej, vi vill p??minna dig om att h??mta din s??mnutrustning idag hos {{careunitName}}. Det ??r en drop-in tid, v??nligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. F??r mer information, se {{marketingUrl}}. V??lkommen!',

            smsPersonalizedNurseBookingReminder1CA:
                'Vi vill p??minna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedNurseBookingReminder2CA:
                'Vi vill p??minna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedDoctorBookingReminder1CA:
                'Vi vill p??minna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}. F??r mer information, se {{marketingUrl}}.',

            smsPersonalizedReturnNarEquipment:
                'V??nligen logga in i {{careunitName}} portal {{appUrl}} med BankID f??r att svara p?? en sista fr??ga. Vi p??minner ??ven om att l??mna tillbaka utrustningen idag. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedNarQuestionnaire:
                'Du har f??tt en kallelse fr??n {{careunitName}}. V??nligen logga in p?? {{appUrl}} (mobilt BankID kr??vs) f??r att svara p?? n??gra fr??gor. En tid f??r bes??k kommer skickas separat. V??nligen kontakta oss om du inte har m??jlighet att logga in, se {{marketingUrl}}.',
            smsPersonalizedNarRetest:
                'Du har f??tt en tid f??r att h??mta upp NAR-utrustning hos {{careunitName}}. Logga in h??r: {{appUrl}} f??r mer information. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedAas12Months:
                'V??nligen logga in i {{careunitName}} portal {{appUrl}} med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',

            smsPersonalizedCpap1Month:
                'V??nligen logga in i {{careunitName}} portal {{appUrl}} med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedCpap4Months:
                'V??nligen logga in i {{careunitName}} portal {{appUrl}} med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',
            smsPersonalizedCpap12Months:
                'V??nligen logga in i {{careunitName}} portal {{appUrl}} med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',

            smsDepersonalizedPatientMustConfirmBooking:
                'Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedBookingCanceled:
                'Din bokning hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} har avbokats. F??r mer information, v??nligen se {{marketingUrl}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer f??r att f?? meddelanden fr??n {{careunitName}}.',
            smsDepersonalizedBookingConfirmed:
                'Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedBookingReminderTomorrow:
                'Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedBookingReminderToday:
                'Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',

            smsDepersonalizedNurseBookingReminder1CA:
                'Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedNurseBookingReminder2CA:
                'Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingReminder1CA:
                'Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',

            smsDepersonalizedReturnNarEquipment:
                'Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedNarQuestionnaire:
                'Du har registrerats hos {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och fylla i ett formul??r. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedNarRetest:
                'Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? {{appUrl}} f??r att konfirmera ditt mobilnummer och l??sa meddelandet. F??r mer information, v??nligen se {{marketingUrl}}.',
            smsDepersonalizedAas12Months:
                'Du har f??tt ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID f??r att l??sa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',

            smsDepersonalizedCpap1Month:
                'Du har f??tt ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID f??r att l??sa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',
            smsDepersonalizedCpap4Months:
                'Du har f??tt ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID f??r att l??sa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',
            smsDepersonalizedCpap12Months:
                'Du har f??tt ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID f??r att l??sa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har m??jlighet att logga in. F??r mer information, se {{marketingUrl}}.',

            smsVerification: 'Din verifieringskod ??r {{verificationCode}}.',

            emailLayout: `<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="image" width="174px" align="center"></mj-class>
      <mj-class name="title" font-size="20px" color="black" font-family="helvetica" line-height="25px" align="center"></mj-class>
      <mj-class name="button" font-family="Helvetica" background-color="#0052CC" color="white" height="32px" width="184px" font-size="20px" border-radius="10px" align="center"></mj-class>
      <mj-class name="subtitle" color="black" font-family="helvetica" line-height="20px" align="center"></mj-class>
      <mj-class name="divider" width="100%" border-width="2px" border-color="#EBEDF1"></mj-class>
      <mj-class name="footerText" font-size="12px" color="black" font-family="helvetica" line-height="15px" align="center"></mj-class>
    </mj-attributes>
  </mj-head>
  <mj-body background-color="white">
    <mj-section>
      <mj-column width="100%">
        <mj-image mj-class="image" src="cid:ic-illustration-3.png" padding-top="24px" padding-bottom="12px"></mj-image>
        {{emailBody}}
        <mj-button mj-class="button" href="{{appUrl}}" padding="0px" padding-bottom="0px">
          Logga in
        </mj-button>
        <mj-text mj-class="subtitle" padding="24px" font-size="16px">
          F??r mer information, v??nligen se
          <a style="color:#0052CC" href="{{marketingUrl}}">
            {{marketingUrl}}
          </a>
        </mj-text>
        <mj-divider mj-class="divider" padding-top="0px" padding-bottom="24px"></mj-divider>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">Copyright ?? * 2020 * *{{tenantName}}*, Alla r??ttigheter f??rbeh??llna.</mj-text>
        <mj-text mj-class="footerText" font-weight="700" padding-top="0px" padding-bottom="0px">Vill du ??ndra hur du f??r dessa e-postmeddelanden?</mj-text>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">Du kan
          <a style="color:#0052CC" href="{{appUrl}}">
            uppdatera dina inst??llningar
          </a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

            emailPersonalizedPatientMustConfirmBookingSubject:
                'V??ntar p?? bokningsbekr??ftelsen',
            emailPersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en kallelse fr??n {{careunitName}} och vi ber vi d??rf??r dig logga in i v??r portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med hj??lp av BankID f??r att bekr??fta bes??ket. V??nligen kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailPersonalizedBookingCanceledSubject: 'Bokningen avbr??ts',
            emailPersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Din tid hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} ??r nu avbokad. V??nligen kontakta {{careunitName}} om du ??nskar boka en ny tid.</mj-text>',

            emailPersonalizedBookingConfirmedSubject: 'Bokningen bekr??ftades',
            emailPersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTomorrowSubject:
                'Morgondagens bes??k',
            emailPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill p??minna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTodaySubject: 'Dagens bes??k',
            emailPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill p??minna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailShcNarPersonalizedBookingReminderTomorrowSubject:
                'Morgondagens bes??k',
            emailShcNarPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Hej, vi vill p??minna dig om att h??mta din s??mnutrustning hos {{careunitName}} den {{visitDate}}. Det ??r en drop-in tid, v??nligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. F??r mer information, se {{marketingUrl}}. V??lkommen!</mj-text>',

            emailShcNarPersonalizedBookingReminderTodaySubject: 'Dagens bes??k',
            emailShcNarPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Hej, vi vill p??minna dig om att h??mta din s??mnutrustning idag hos {{careunitName}}. Det ??r en drop-in tid, v??nligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. F??r mer information, se {{marketingUrl}}. V??lkommen!</mj-text>',

            emailPersonalizedNurseBookingReminder1CASubject:
                'Morgondagens bes??k',
            emailPersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill p??minna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedNurseBookingReminder2CASubject: 'Dagens bes??k',
            emailPersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill p??minna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedDoctorBookingReminder1CASubject: 'Dagens bes??k',
            emailPersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill p??minna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedReturnNarEquipmentSubject: 'NAR-utrustning',
            emailPersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">V??nligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID f??r att svara p?? en sista fr??ga. Vi p??minner ??ven om att l??mna tillbaka utrustningen idag. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailPersonalizedNarQuestionnaireSubject: 'NAR fr??gor',
            emailPersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en kallelse fr??n {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> (mobilt BankID kr??vs) f??r att svara p?? n??gra fr??gor. En tid f??r bes??k kommer skickas separat. V??nligen kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailPersonalizedNarRetestSubject: 'NAR testar om',
            emailPersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en tid f??r att h??mta upp NAR-utrustning hos {{careunitName}}. Logga in h??r: <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r mer information.</mj-text>',

            emailPersonalizedAas12MonthsSubject: 'AAS fr??gor',
            emailPersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">V??nligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailPersonalizedCpap1MonthSubject: 'CPAP fr??gor',
            emailPersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">V??nligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailPersonalizedCpap4MonthsSubject: 'CPAP fr??gor',
            emailPersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">V??nligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailPersonalizedCpap12MonthsSubject: 'CPAP fr??gor',
            emailPersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">V??nligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID f??r att fylla i ett formul??r. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailDepersonalizedPatientMustConfirmBookingSubject:
                'V??ntar p?? bokningsbekr??ftelsen',
            emailDepersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedBookingCanceledSubject: 'Bokningen avbr??ts',
            emailDepersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Din bokning hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} har avbokats. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer f??r att f?? meddelanden fr??n {{careunitName}}.</mj-text>',

            emailDepersonalizedBookingConfirmedSubject: 'Bokningen bekr??ftades',
            emailDepersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedBookingReminderTomorrowSubject:
                'Morgondagens bes??k',
            emailDepersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedBookingReminderTodaySubject: 'Dagens bes??k',
            emailDepersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedNurseBookingReminder1CASubject:
                'Morgondagens bes??k',
            emailDepersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedNurseBookingReminder2CASubject: 'Dagens bes??k',
            emailDepersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedDoctorBookingReminder1CASubject: 'Dagens bes??k',
            emailDepersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt en p??minnelse av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedReturnNarEquipmentSubject: 'NAR-utrustning',
            emailDepersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedNarQuestionnaireSubject: 'NAR fr??gor',
            emailDepersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har registrerats hos {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och fylla i ett formul??r.</mj-text>',

            emailDepersonalizedNarRetestSubject: 'NAR testar om',
            emailDepersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande av {{careunitName}}. V??nligen logga in p?? <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> f??r att konfirmera ditt mobilnummer och l??sa meddelandet.</mj-text>',

            emailDepersonalizedAas12MonthsSubject: 'AAS fr??gor',
            emailDepersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID f??r att l??sa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailDepersonalizedCpap1MonthSubject: 'CPAP fr??gor',
            emailDepersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID f??r att l??sa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailDepersonalizedCpap4MonthsSubject: 'CPAP fr??gor',
            emailDepersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID f??r att l??sa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailDepersonalizedCpap12MonthsSubject: 'CPAP fr??gor',
            emailDepersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har f??tt ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID f??r att l??sa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har m??jlighet att logga in.</mj-text>',

            emailVerificationSubject: 'Mejl verifikation',
            emailVerificationBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Din verifieringskod ??r {{verificationCode}}.</mj-text>',

            postalLayout: asset('postalLayout.sv.html'),

            postalPersonalizedBookingConfirmedSubject: 'Bokningen bekr??ftades',
            postalPersonalizedBookingConfirmedBody: asset(
                'postalPersonalizedBookingConfirmedBody.sv.html'
            ),

            einboxLayout: asset('einboxLayout.sv.html'),

            einboxPersonalizedBookingConfirmedSubject: 'Bokningen bekr??ftades',
            einboxPersonalizedBookingConfirmedBody: asset(
                'einboxPersonalizedBookingConfirmedBody.sv.html'
            ),

            processSimpleAppointmentName: 'Skapa m??te',
            processSimpleAppointmentDescription: 'Skapa m??ten',
            taskSimpleAppointmentBookingName: 'Bokning av m??ten',
            taskInvestigationNarSimpleAppointmentBookingName:
                'Bokning av m??ten',
            taskInvestigationDoctorVisitSimpleAppointmentBookingName:
                'Bokning av m??ten',
            taskAasNarFirstSimpleAppointmentBookingName: 'Bokning av m??ten',
            taskAasNarSecondSimpleAppointmentBookingName: 'Bokning av m??ten',
            taskCpapVisitSimpleAppointmentBookingName: 'Bokning av m??ten',
            taskCpapCtpBmaVisitSimpleAppointmentBookingName: 'Bokning av m??ten',
            taskCpapCtpDoctorVisitSimpleAppointmentBookingName:
                'Bokning av m??ten',
            taskCpapAnalysisBmaVisitSimpleAppointmentBookingName:
                'Bokning av m??ten',
            taskCpapAnalysisDoctorVisitSimpleAppointmentBookingName:
                'Bokning av m??ten',
            taskSimpleAppointmentConfirmationName: 'Bekr??ftelse av utn??mningen',
            taskInvestigationNarSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskInvestigationDoctorVisitSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskAasNarFirstSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskAasNarSecondSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskCpapVisitSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskCpapCtpBmaVisitSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskCpapCtpDoctorVisitSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskCpapAnalysisBmaVisitSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskCpapAnalysisDoctorVisitSimpleAppointmentConfirmationName:
                'Bekr??ftelse av utn??mningen',
            taskSimpleAppointmentReminderName: 'P??minnelse om utn??mning',
            taskSimpleAppointmentReminderBody: 'Bekr??fta en tid?',
            taskSimpleAppointmentCancelationName: 'Avbokning av m??ten',
            taskSimpleAppointmentReminderTimerName: 'Aktivera p??minnelse',
            taskSimpleAppointmentCancelingTimerName: 'B??rja avbryta',
            taskSimpleAppointmentCompleteTimerName: 'Komplett m??ten',
            taskSimpleAppointmentEkopostManualName: 'Postaviseringsbrev',
            taskSimpleAppointmentEkopostManualBody:
                'Skicka postaviseringsbrev?',
            taskSimpleAppointmentEkopostSubprocessName: 'Postaviseringsbrev',

            processDoctorVisitName: 'L??karbes??k',
            processDoctorVisitDescription: 'L??karbes??k',
            taskDoctorVisitBookingName: 'L??kare bes??k bokning',
            taskDoctorVisitFormFillingName: 'Bes??k formul??rets fyllning',
            taskDoctorVisitFormTransformingName: 'Bes??k formul??romvandling',
            taskDoctorVisitFormReviewingName: 'Bes??k formul??rgranskning',
            taskDoctorVisitFormSendingName: 'Bes??k skicka formul??ret',
            taskDoctorVisitTomorrowTimerName: 'Informera om bes??k i morgon',
            taskDoctorVisitTodayTimerName: 'Informera om bes??k idag',

            processNarName: 'NAR',
            processNarDescription: 'NAR-process',
            taskNarBookingName: 'NAR-bokning',
            taskNarEssFormName: 'ESS-fr??geformul??r',
            taskNarHandingOutFormName: 'Utdelning av utrustning',
            taskNarSleepFormName: 'Feedbackfyllning',
            taskNarTakingBackFormName: 'Utrustning tar tillbaka',
            taskNarBmaFormFillingName: 'NAR-resultat fyller f??r BMA',
            taskNarBmaFormTransformingName:
                'NAR-resultat transformeras f??r BMA',
            taskNarBmaFormReviewingName: 'NAR-resultat granskade f??r BMA',
            taskNarBmaFormSendingName: 'NAR-resultat skickas f??r BMA',
            taskNarDoctorFormFillingName: 'NAR-resultat fylls f??r l??kare',
            taskNarDoctorFormTransformingName:
                'NAR-resultat f??rvandlas f??r l??kare',
            taskNarDoctorFormReviewingName:
                'NAR-resultat granskning f??r l??kare',
            taskNarDoctorFormSendingName: 'NAR-resultat skickas till l??kare',
            taskNarEssFormTimerName:
                'P??minn om att fylla i ESS-patientformul??r',
            taskNarTakingBackTimerName: 'P??minn om att ta tillbaka utrustning',

            taskNarTomorrowTimerName: 'Informera om bes??k i morgon',
            taskNarTodayTimerName: 'Informera om bes??k idag',

            processInvestigationName: 'Unders??kning',
            processInvestigationDescription:
                'Utredningsprocess (SHC avsnitt 1)',
            taskInvestigationRefDetailsFormName: 'Fyll i referensinformation',
            taskInvestigationNarName: 'NAR',
            taskInvestigationRefReplyName: 'Referens svar',
            taskInvestigationRefReplyBody: 'V??nligen meddela svaret',
            taskInvestigationTreatmentPlanName: 'Behandlingsplan',
            taskInvestigationTreatmentPlanBody: 'Vad h??nder nu?',
            taskInvestigationDoctorVisitName: 'Klinisk bed??mning',
            taskInvestigationSesarFormName: 'SESAR-rapport fyller',
            taskInvestigationCountyReportName: 'L??nsrapport',
            taskInvestigationCountyReportBody: 'L??nsrapport',

            processAasName: 'AAS',
            processAasDescription: 'AAS-process (SHC avsnitt 2)',
            taskAasRefDentistFormName: 'H??nvisning till fyllning av tandl??kare',
            taskAasDentistFormFillingName: 'Svar fr??n tandl??karens fyllning',
            taskAasCpapTreatmentName: 'CPAP-behandling?',
            taskAasCpapTreatmentBody: 'CPAP-behandling?',
            taskAasDentistFormTransformingName: 'Tandl??kare formomvandling',
            taskAasDentistFormReviewingName: 'Tandl??kare form granskning',
            taskAasDentistFormSendingName:
                'Automatisk tandl??karformul??r som skickas till Take Care',
            taskAasFollowUp7WeeksTimerName: 'V??ntar i 7 veckor',
            taskAasFollowUp12MonthsTimerName: 'V??ntar i 12 m??nader',
            taskAasProceedName: 'Forts??tt med patienten',
            taskAasProceedBody: 'Forts??tt med patienten',
            taskAasPatientAlertFormName: 'AAS-problemrapport',
            taskAasPatient12MonthsFormName: 'AAS-fr??geformul??r 12 m??nader',
            taskAasQ12MonthsTimerName:
                'P??minnelse om att fylla i AAS 12 m??naders patientformul??r',
            taskAasSesarFirstFormName: 'SESAR f??rsta rapport fyllning',
            taskAasCountyReportName: 'L??nsrapport',
            taskAasCountyReportBody: 'L??nsrapport',

            taskAasAnalysis7wFormFillingName:
                'AAS anv??ndningsanalys efter 7 veckor',
            taskAasAnalysis12mFormFillingName:
                'AAS anv??ndningsanalys efter 12 m??nader',
            taskAasAnalysisAlertFormFillingName:
                'AAS anv??ndningsanalys efter problemrapport',
            taskAasAnalysisNarFormFillingName:
                'AAS anv??ndningsanalys efter NAR',
            taskAasAnalysis7wFormTransformingName:
                'AAS anv??ndningsanalysform transformera',
            taskAasAnalysis12mFormTransformingName:
                'AAS anv??ndningsanalysform transformera',
            taskAasAnalysisAlertFormTransformingName:
                'AAS anv??ndningsanalysform transformera',
            taskAasAnalysisNarFormTransformingName:
                'AAS anv??ndningsanalysform transformera',
            taskAasAnalysis7wFormReviewingName:
                'AAS anv??ndningsanalysformul??r granskning',
            taskAasAnalysis12mFormReviewingName:
                'AAS anv??ndningsanalysformul??r granskning',
            taskAasAnalysisAlertFormReviewingName:
                'AAS anv??ndningsanalysformul??r granskning',
            taskAasAnalysisNarFormReviewingName:
                'AAS anv??ndningsanalysformul??r granskning',
            taskAasAnalysis7wFormSendingName:
                'Automatisk AAS-anv??ndningsanalysformul??r skickas till Takecare',
            taskAasAnalysis12mFormSendingName:
                'Automatisk AAS-anv??ndningsanalysformul??r skickas till Takecare',
            taskAasAnalysisAlertFormSendingName:
                'Automatisk AAS-anv??ndningsanalysformul??r skickas till Takecare',
            taskAasAnalysisNarFormSendingName:
                'Automatisk AAS-anv??ndningsanalysformul??r skickas till Takecare',

            taskAasRefAdjustmentFormName: 'H??nvisning till delad justering',
            taskAasSplitAdjustmentFormName:
                'Delad justering: svar fr??n tandl??kare',
            taskAasSesarSecondFormName: 'SESAR slutrapport fyllning',
            taskAasNarFirstName: 'NAR',
            taskAasNarSecondName: 'NAR',

            processCpapName: 'CPAP',
            processCpapDescription: 'CPAP-process (SHC avsnitt 3)',
            taskCpapVisitName: 'CPAP-bes??k',
            taskCpapSesarFirstFormName: 'SESAR f??rsta rapport fyllning',
            taskCpapCountyReportName: 'L??nsrapport',
            taskCpapCountyReportBody: 'L??nsrapport',

            taskCpapCtpWhatNextManualName: 'Vad h??nder nu?',
            taskCpapCtpWhatNextManualBody: 'Vad h??nder nu?',

            taskCpapCtpStartFormName: 'Start form av kontrolltestperiod',
            taskCpapCtpStartManualName:
                'Skicka startresultat f??r kontrolltestperiod till EMR?',
            taskCpapCtpStartManualBody:
                'Skicka startresultat f??r kontrolltestperiod till EMR?',
            taskCpapCtpStartTransformName:
                'Kontrolltestperiod startformformning',
            taskCpapCtpStartReviewName:
                'Kontrolltestperiod startformul??rgranskning',
            taskCpapCtpStartSendName:
                'Kontrolltestperiod startformul??r s??ndning till Takecare',

            taskCpapCtpExtraFormName: 'Extra form av kontrolltestperiod',
            taskCpapCtpExtraManualName:
                'Skicka kontrolltestperiod extra resultat till EMR?',
            taskCpapCtpExtraManualBody:
                'Skicka kontrolltestperiod extra resultat till EMR?',
            taskCpapCtpExtraTransformName:
                'Kontrolltestperiod extra formtransformering',
            taskCpapCtpExtraReviewName:
                'Kontrolltestperiod extra formul??rgranskning',
            taskCpapCtpExtraSendName:
                'Kontrolltestperiod extra formul??rs??ndning till Takecare',

            taskCpapFollowUp1WeekTimerName: 'V??ntar p?? en vecka',

            taskCpapFollowUp1MonthTimerName: 'V??ntar i en m??nad',
            taskCpapFollowUp4MonthsTimerName: 'V??ntar i 4 m??nader',
            taskCpapFollowUp12MonthsTimerName: 'V??ntar i 12 m??nader',
            taskCpapAlertName: 'CPAP-??vervakningsvarning',
            taskCpapAlertBody: 'Forts??tt med patienten',
            taskCpapPatientProblemFormName: 'CPAP-problemrapport',
            taskCpap1MonthFormName: 'CPAP-enk??t 1 m??nad',
            taskCpap4MonthsFormName: 'CPAP-fr??geformul??r 4 m??nader',
            taskCpap12MonthsFormName: 'CPAP-fr??geformul??r 12 m??nader',
            taskCpapSesarSecondFormName: 'SESAR andra rapport',

            taskCpapAnalysisWhatNextManualName: 'Vad h??nder nu?',
            taskCpapAnalysisWhatNextManualBody: 'Vad n??sta?',

            taskCpapAnalysis1mFormName: 'CPAP 1 m??nads analys',
            taskCpapAnalysis1mManualName:
                'Skicka CPAP 1 m??nads anv??ndningsanalysresultat till EMR?',
            taskCpapAnalysis1mManualBody:
                'Skicka CPAP 1 m??nads anv??ndningsanalysresultat till EMR?',
            taskCpapAnalysis1mTransformName:
                'CPAP 1 m??nad anv??ndningsanalys form transformation',
            taskCpapAnalysis1mReviewName:
                'CPAP 1 m??nads analysanalysformul??r granskning',
            taskCpapAnalysis1mSendName:
                'CPAP 1 m??nad anv??ndningsanalysformul??r skickas till Takecare',

            taskCpapAnalysis4mFormName: 'CPAP 4-m??nadersanalys',
            taskCpapAnalysis4mManualName:
                'Skicka CPAP 4 m??naders anv??ndningsanalysresultat till EMR?',
            taskCpapAnalysis4mManualBody:
                'Skicka CPAP 4 m??naders anv??ndningsanalysresultat till EMR?',
            taskCpapAnalysis4mTransformName:
                'CPAP 4 m??naders anv??ndningsanalysform transformering',
            taskCpapAnalysis4mReviewName:
                'CPAP 4 m??naders analys av analysanalysformul??r',
            taskCpapAnalysis4mSendName:
                'CPAP 4 m??naders analysanalysformul??r skickas till Takecare',

            taskCpapAnalysis12mFormName: 'CPAP 12-m??nadersanalys',
            taskCpapAnalysis12mManualName:
                'Skicka CPAP 12 m??naders anv??ndningsanalysresultat till EMR?',
            taskCpapAnalysis12mManualBody:
                'Skicka CPAP 12 m??naders anv??ndningsanalysresultat till EMR?',
            taskCpapAnalysis12mTransformName:
                'CPAP 12 m??naders anv??ndningsanalysform transformering',
            taskCpapAnalysis12mReviewName:
                'CPAP 12 m??naders analys av analysanalysformul??r',
            taskCpapAnalysis12mSendName:
                'CPAP 12 m??naders analysanalysformul??r skickas till Takecare',

            taskCpapAnalysisAlertFormName: 'CPAP alert usage analysis',
            taskCpapAnalysisAlertManualName:
                'Skicka CPAP-varningsanalysresultat till EMR?',
            taskCpapAnalysisAlertManualBody:
                'Skicka CPAP-varningsanalysresultat till EMR?',
            taskCpapAnalysisAlertTransformName:
                'CPAP alert use analysis form transformation',
            taskCpapAnalysisAlertReviewName:
                'CPAP alert analys analys formul??r granskning',
            taskCpapAnalysisAlertSendName:
                'CPAP alertanalysformul??r skickas till Takecare',

            taskCpapAnalysisProblemFormName: 'CPAP patientanalysanalys',
            taskCpapAnalysisProblemManualName:
                'Skicka CPAP patientanv??ndningsanalysresultat till EMR?',
            taskCpapAnalysisProblemManualBody:
                'Skicka CPAP-patientanv??ndningsanalysresultat till EMR?',
            taskCpapAnalysisProblemTransformName:
                'CPAP patientanv??ndning analysanalys form transformation',
            taskCpapAnalysisProblemReviewName:
                'CPAP patientanv??ndning analysanalys formul??r granskning',
            taskCpapAnalysisProblemSendName:
                'CPAP patientanv??ndningsanalysformul??r skickas till Takecare',

            taskCpapAnalysisFollowFormName: 'CPAP-uppf??ljningsanalys',
            taskCpapAnalysisFollowManualName:
                'Skicka CPAP-resultat f??r uppf??ljningsanalys till EMR?',
            taskCpapAnalysisFollowManualBody:
                'Skicka CPAP-uppf??ljningsanalysresultat till EMR?',
            taskCpapAnalysisFollowTransformName:
                'CPAP uppf??ljning av anv??ndningsanalysformtransformering',
            taskCpapAnalysisFollowReviewName:
                'CPAP uppf??ljning av analysanalys f??r formul??rgranskning',
            taskCpapAnalysisFollowSendName:
                'CPAP-uppf??ljningsanalysformul??r skickas till Takecare',

            taskCpapSesarThirdFormName: 'SESAR slutrapport fyllning',
            taskCpapCtpBmaVisitName: 'BMA-bes??k',
            taskCpapCtpDoctorVisitName: 'L??karbes??k',
            taskCpapAnalysisBmaVisitName: 'BMA-bes??k',
            taskCpapAnalysisDoctorVisitName: 'L??karbes??k',

            taskCpapQ1MonthTimerName:
                'P??minnelse om att fylla i CPAP 1 m??nad patientformul??r',
            taskCpapQ4MonthsTimerName:
                'P??minnelse om att fylla i CPAP 4 m??naders patientformul??r',
            taskCpapQ12MonthsTimerName:
                'P??minnelse om att fylla i CPAP 12 m??naders patientformul??r',
            taskCpapFollowUpTimerName:
                'V??ntar p?? att aktivera analys CPAP-anv??ndningsformul??r',

            taskCpapVisitFormFillingName: 'Fyll i CPAP-startformul??ret',
            taskCpapCtpBmaVisitFormFillingName: 'Fyll i CPAP BMA-formul??r',
            taskCpapCtpDoctorVisitFormFillingName: 'Fyll i CPAP-l??kareformul??r',
            taskCpapAnalysisBmaVisitFormFillingName: 'Fyll i CPAP BMA-formul??r',
            taskCpapAnalysisDoctorVisitFormFillingName:
                'Fyll i CPAP-l??kareformul??r',

            taskCpapVisitFormReviewingName:
                'Granskning CPAP start bes??ksformul??r',
            taskCpapCtpBmaVisitFormReviewingName:
                'Granskning CPAP BMA  bes??ksformul??r',
            taskCpapCtpDoctorVisitFormReviewingName:
                'Granskning CPAP l??kare  bes??ksformul??r',
            taskCpapAnalysisBmaVisitFormReviewingName:
                'Granskning CPAP BMA  bes??ksformul??r',
            taskCpapAnalysisDoctorVisitFormReviewingName:
                'Granskning CPAP l??kare  bes??ksformul??r',

            processPatientAppointmentName: 'Skapa m??te',
            processPatientAppointmentDescription: 'Skapa m??ten',
            taskPatientAppointmentBookingName: 'Bokning av m??ten',
            taskNurseAppointmentBookingName: 'Bokning av m??ten',
            taskPatientAppointmentConfirmationName:
                'Omst??llning av utn??mningen',
            taskNurseAppointmentConfirmationName: 'Omst??llning av utn??mningen',
            taskDoctorSimpleAppointmentBookingName: 'Bokning av m??ten',
            taskDoctorSimpleAppointmentConfirmationName:
                'Tillsammans bekr??ftelse',

            processDoctorAppointmentName: 'Skapa m??te',
            processDoctorAppointmentDescription: 'Skapa m??te',
            taskDoctorAppointmentBookingName: 'Bokning av m??ten',
            taskDoctorAppointmentReschedulingName: 'Omst??llning av utn??mningen',
            taskDoctorAppointmentCancelingName: 'Avbryter m??te av patient',

            processCaMainName: 'Halsokontroll',
            processCaMainDescription: 'Halsokontroll',
            taskCaMainFirstBulletinName: 'Create first patient bulletin',
            taskCaMainSecondBulletinName: 'Create second patient bulletin',
            taskCaMainNurseAppointmentName: 'Nurse visit utn??mning',
            taskCaMainNurseFirstTimerName: 'Nurse visit first timer',
            taskCaMainNurseSecondTimerName: 'Nurse visit second timer',
            taskCaMainHealthRefFormName: 'Patientdata f??r sjuksk??terskebes??ket',
            taskCaMainHealthDeclarationFormName:
                'Patientdata f??r sjuksk??terskebes??ket',
            taskCaMainHealthDeklarationTransformName:
                'Konvertering av patientdata',
            taskCaMainHealthDeclarationReviewName: 'Granskning av patientdata',
            taskCaMainHealthDeclarationSendName: 'Skicka till EMR-patientdata',
            taskCaMainNurseAckManualName:
                'Bekr??ftelse av patientdata (sjuksk??terskebes??k)',
            taskCaMainNurseAckManualBody:
                'Bekr??ftelse av patientdata (sjuksk??terskebes??k)',
            taskCaMainDoctorAppointmentName: 'Doktorbes??k',
            taskCaMainDoctorFirstTimerName: 'Doctor visit timer',
            taskCaMainDoctorAckManualName:
                'Bekr??ftelse av patientdata (l??karbes??k)',
            taskCaMainDoctorAckManualBody:
                'Bekr??ftelse av patientdata (l??karbes??k)',

            processShcFollowUpName: 'Uppf??ljning',
            processShcFollowUpDescription: 'Uppf??ljningsprocess',
            taskShcFollowUpReqVisitFormName: 'Be om bes??k',
            taskShcFollowUpAnalysisFormName: 'Uppf??ljningsanalys',
            taskShcFollowUpAnalysisManualName: 'Journalanteckningar',
            taskShcFollowUpAnalysisManualBody:
                'Vill du skicka anteckningar f??r dagb??cker?',
            taskShcFollowUpAnalysisTransformName:
                'Konvertera journalnoteringar',
            taskShcFollowUpAnalysisReviewName: 'Granskning av anteckningar',
            taskShcFollowUpAnalysisSendName: 'Skicka anteckningar',
            taskShcFollowUpDentistManualName: 'H??nvisning till tandl??kare',
            taskShcFollowUpDentistManualBody: 'H??nvisning till tandl??kare',
            taskShcFollowUpSendCardManualName:
                'Behandla kortet och skicka tillbaka',
            taskShcFollowUpSendCardManualBody:
                'Behandla kortet och skicka tillbaka',
            taskShcFollowUpNurseVisitSubprocessName: 'Boka sjuksk??terska bes??k',
            taskShcFollowUpDoctorVisitSubprocessName: 'Boka l??karbes??k',
            taskShcFollowUpDropInVisitSubprocessName: 'Sl??pp in bes??k',
            taskShcFollowUpCountyReportManualName: 'L??nsrapport',
            taskShcFollowUpCountyReportManualBody: 'L??nsrapport',
            taskShcFollowUpSesarFormName: 'SESAR-rapport',

            processEkopostName: 'Skicka ett postbrev',
            processEkopostDescription: 'Skicka ett postbrevprocess',
            taskEkopostEinboxName: 'Letar efter e-inkorg',
            taskEkopostEinboxErrorName: 'E-inkorg fel',
            taskEkopostEinboxErrorBody: 'Ska vi f??rs??ka igen?',
            taskEkopostSparName: 'S??ker adress i SPAR',
            taskEkopostSparErrorName: 'SPAR-fel',
            taskEkopostSparErrorBody: 'Ska vi f??rs??ka igen?',
            taskEkopostEinboxPdfGeneratingName: 'F??rbereder en PDF',
            taskEkopostEinboxPdfReviewingName: 'Godk??nner en PDF',
            taskEkopostPostalPdfGeneratingName: 'F??rbereder en PDF',
            taskEkopostPostalPdfReviewingName: 'Godk??nner en PDF',
            taskEkopostPdfSendingName: 'Skickar ett postbrev',
            taskEkopostPdfSendingErrorName: 'Skickade fel',
            taskEkopostPdfSendingErrorBody: 'Ska vi f??rs??ka igen?',

            httpErrorTenantDataIsAbsent: '',
            httpErrorTenantDataMismatch: '',
            httpErrorIncorrectToken: '',
            httpErrorInsufficientPermissions: '',
            httpErrorMaintenance: '',
            httpErrorSchemaValidationError: '',
            httpErrorCareunitInconsistent: '',
            httpErrorCareprofInconsistent: '',
            httpErrorCanNotFindComar: '',
            httpErrorCanNotFindStatical: '',
            httpErrorStaticalCodeExists: '',
            httpErrorCanNotFindTemplate: '',
            httpErrorTemplateCodeExists: '',
            httpErrorCanNotFindMapping: '',
            httpErrorCanNotFindMappingById: '',
            httpErrorMappingCodeExists: '',
            httpErrorCanNotFindReport: '',
            httpErrorCanNotDeleteReport: '',
            httpErrorCanNotFindTemplateMetadata: '',
            httpErrorTemplateDataAbsent: '',
            httpErrorResourceFilesAreMissed: '',
            httpErrorCanNotFindTemplateToUpdate: '',
            httpErrorCanNotFindTemplateToPatch: '',
            httpErrorCanNotFindTemplateToDelete: '',
            httpErrorIncorrectTenantOrCredentials: '',
            httpErrorIncorrectCredentials: '',
            httpErrorWrongUserType: '',
            httpErrorIncorrectTenant: '',
            httpErrorGrandidErrorUsernameMissing: '',
            httpErrorCanNotFindArtefact: '',
            httpErrorCanNotUpdateArtefactState: '',
            httpErrorPdfIsMissingOrCorrupted: '',
            httpErrorCanNotFindProcessInstance: '',
            httpErrorCanNotFindTaskInstance: '',
            httpErrorCanNotFindCareprof: '',
            httpErrorCareprofNotExists: '',
            httpErrorCareprofUsernameExists: '',
            httpErrorCareprofPersonalNumberExists: '',
            httpErrorCareprofHsaidExists: '',
            httpErrorPasswordAuthNotAllowed: '',
            httpErrorLabelNameAlreadyExists: '',
            httpErrorCanNotFindLabel: '',
            httpErrorCanNotFindCareunit: '',
            httpErrorCareunitCodeExists: '',
            httpErrorCareunitHsaidExists: '',
            httpErrorCareunitNotExists: '',
            httpErrorCanNotFindPatient: '',
            httpErrorPatientPersonalNumberExists: '',
            httpErrorInvalidEmailVerificationCode: '',
            httpErrorInvalidSmsVerificationCode: '',
            httpErrorPatientNotExists: '',
            httpErrorLabelIdAlreadyAdded: '',
            httpErrorCanNotFindProcessConfig: '',
            httpErrorCorrespondingProcessConfigExists: '',
            httpErrorPsdKeyExists: '',
            httpErrorPsdMetaDoesNotExists: '',
            httpErrorPsdKeyCanNotBeChanged: '',
            httpErrorCanNotFindItem: '',
            httpErrorCanNotFindPsdMeta: '',
            httpErrorIncorrectDataValueType: '',
            httpErrorInconsistentCareunitCode: '',
            httpErrorCanNotFindMicroservice: '',
            httpErrorBaseMsCanNotHaveTasks: '',
            httpErrorProcessMsShoudHaveTasks: '',
            httpErrorMsidExists: '',
            httpErrorCanNotFindTenantAdmin: '',
            httpErrorTenantDoesNotExists: '',
            httpErrorAdminUsernameExists: '',
            httpErrorAdminUsernameCouldNotBeChanged: '',
            httpErrorCanNotFindAdmin: '',
            httpErrorCanNotFindTenant: '',
            httpErrorTenantCodeExists: '',
            httpErrorSomeMsDoesNotExists: '',
            httpErrorItIsNotYourProcessInstance: '',
            httpErrorProcessInstanceIsNotActive: '',
            httpErrorTaskInstanceIsNotActive: '',
            httpErrorPatientDataAbsent: '',
            httpErrorCareunitDataAbsent: '',
            httpErrorTenantDataAbsent: '',
            httpErrorCanNotFindCareunitProcessConfig: '',
            httpErrorIncorrectProcessConfig: '',
            httpErrorProcessIsNotActive: '',
            httpErrorProcessIsNotStandalone: '',
            httpErrorForbiddenTemplateCode: '',
            httpErrorTemplateChargingIsAbsent: '',
            httpErrorAssessmentIsAlreadyCreated: '',
            httpErrorIncorrectPatient: '',
            httpErrorAssessmentIsNotCreated: '',
            httpErrorTemplateCodeCanNotBeChanged: '',
            httpErrorBookingIsAlreadyCreated: '',
            httpErrorSlotIsNotAvailable: '',
            httpErrorCanNotFindCorrespondingBooking: '',
            httpErrorBulletinIsNotCreated: '',
            httpErrorBulletinIsAlreadyCreated: '',
            httpErrorIncorrectCompleteOption: '',
            httpErrorCanNotFindInnerConfigOfTask: '',
            httpErrorTaskDataIsNotCreated: '',
            httpErrorMedicationsIsNotSavedLocally: '',
            httpErrorMiniqFullResultIsNotSaved: '',
            httpErrorMiniqFullResultIsNotFound: '',
            httpErrorPdfIsNotCreated: '',
            httpErrorTakecareDataIsAbsent: '',
            httpErrorTakecareDocIsNotCreated: '',
            httpErrorListOfTermsCanNotBeEmpty: ''
        },
        tenant1: {}
    }
};
