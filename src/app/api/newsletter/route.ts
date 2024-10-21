import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: Request) {
	console.log('Data', req.body);

	const { values } = await req.json();
	const { email } = values;

	const msg = {
		to: 'admin@themanagerlife.com', // Change to your recipient
		from: 'Newsletter Enrollment <admin@themanagerlife.com>', // Change to your verified sender
		subject: 'New Newletter Enrollment!',
		text: `Hello,
    
    Lets add,  ${email},  to the

    newletter list!!
    
    
    `,
	};

	try {
		const emailResponse = await sgMail.send(msg).then((res: any) => {
			console.log(res[0].statusCode);
			console.log(res[0].headers);
		});
		return NextResponse.json({ emailResponse }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: `Couldn't submit email`, error });
	}
}
