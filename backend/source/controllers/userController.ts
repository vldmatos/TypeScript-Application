import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = 
[
    { name: 'Jonh', email: 'jonh.ory@iajr.com', age: 32 },
    { name: 'Maria', email: 'maria.silva@iajr.com', age: 32 },
    { name: 'Robert', email: 'robert.staga@iajr.com', age: 32 },
];

export default 
{
    async index(req: Request, res: Response) 
    {
        return res.json(users);
    },

    async create(req: Request, res: Response)
    {
        const emailService = new EmailService();

        return res.send
        (
            emailService.sendMail(
                {
                    to: 
                    {
                        name: 'Oliver Tsnak', 
                        email: 'oliver.tsnak@rhac.com' 
                    }, 
                    message: 
                    {
                        subject: 'Call to Jonh',
                        body: 'Please call to jonh Ory to send contract!' 
                    }   
                })
        );
    }
}