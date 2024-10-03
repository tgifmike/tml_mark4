import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';


sgMail.setApiKey('process.env.SENDGRID_API_KEY');

export async function POST(req: Request) {
	console.log('Data', req.body);

	//const { name, email, message } = await req.json();
	const { values } = await req.json();
	const { name, email, message } = values;

	const msg = {
		to: 'admin@themanagerlife.com', // Change to your recipient
		from: 'Contact Form <admin@themanagerlife.com>', // Change to your verified sender
		subject: 'New Contact Form!',
		text: `Hello,
    
    You have a new form entry from: ${name}, ${email}, 
    
    
    ${message}`,
	};

	try {
		const emailResponse = await sgMail.send(msg).then((res) => {
			console.log(res[0].statusCode);
			console.log(res[0].headers);
		});
		return NextResponse.json({ emailResponse }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: `Couldn't submit email`, error });
	}
}
