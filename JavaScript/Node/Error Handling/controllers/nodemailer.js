const nodemailer = require('nodemailer');

class SendMailService {
    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
				host: account.smtp.host,
				port: account.smtp.port,
				secure: account.smtp.secure,
				auth: {
					user: account.user, // generated ethereal user
					pass: account.pass // generated ethereal password
				}
            });

            this.client = transporter
        });
    }

    async execute(to, subject, body) {
        const message = await this.client.sendMail({
            to,
            subject,
            html: body,
            from: "Risum <noreplay@risum.com.br>"
        })

        console.log(`Message sent: ${message.messageId}`);
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(message)}`)
    }
}

module.exports = new SendMailService();
