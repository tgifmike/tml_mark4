

import Link from 'next/link';
import UserAuthForm from './UserAuthForm';
import Logo from '../NavBar/Logo';

const SignIn = () => {
	return (
		<div className="container mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[400px]">
			<div className="flex flex-col space-y-2 text-center items-center">
                {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
              
				<h1 className="text-2xl font-semibold tracking-tight">
					Choose Your Login Method:
				</h1>
				
			</div>
			<UserAuthForm />
			<p className="text-sm max-w-md mx-auto italic">
					*By continuing, you are setting up a The Manager Life account and agree to our
					User Agreement and Privacy Policy.
				</p>
		</div>
	);
};

export default SignIn;
