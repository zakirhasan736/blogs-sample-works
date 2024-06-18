// utils/email.js

import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_emailjs_service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'your_emailjs_template_id'; // Replace with your EmailJS template ID
const USER_ID = 'your_emailjs_user_id'; // Replace with your EmailJS user ID

const sendEmailToAdmin = async (userData) => {
    try {
        const { name, email, number, plan, packageTitle, orderSummary } = userData;

        const templateParams = {
            name,
            email,
            number,
            plan,
            packageTitle,
            orderSummary,
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

        console.log('Email successfully sent to admin!');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};

export default sendEmailToAdmin;
