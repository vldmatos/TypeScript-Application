interface IEmailTo
{
    name: string;
    email: string;
}

interface IEmailMessage
{
    subject: string;
    body: string;
    attachment?: string[]; 
}

interface IEmail
{
    to: IEmailTo;
    message: IEmailMessage
}

class EmailService 
{
    sendMail({ to, message }: IEmail) 
    {
        return `E-mail enviado - Para: ${to.name} - Assunto: ${message.subject} - Mensagem: ${message.body}`;
    }
}

export default EmailService;