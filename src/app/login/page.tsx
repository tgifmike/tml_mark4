import SignIn from "@/components/Auth/SignIn";


const LoginPage = () => {
	return (
		<div className="w-full h-full mx-auto">
			<div className="flex flex-col items-center justify-center">
				<SignIn />
			</div>
		</div>
	);
};

export default LoginPage;
