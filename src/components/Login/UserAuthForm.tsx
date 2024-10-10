'use client';

import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
	const { toast } = useToast();
    const [isLoadingGoogle, setIsLoadingGoogle] =
			React.useState<boolean>(false);
    const [isLoadingTwitter, setIsLoadingTwitter] =
			React.useState<boolean>(false);
    const [isLoadingGitHub, setIsLoadingGitHub] =
			React.useState<boolean>(false);
     const [isLoadingLinkedin, setIsLoadingLinkedin] =
				React.useState<boolean>(false);
     


	const loginWithGoogle = async () => {
		setIsLoadingGoogle(true);

		try {
			await signIn('google');
		} catch (error) {
			toast({
				title: 'Error',
				description: 'There was an error logging in with Google',
				variant: 'destructive',
			});
		} finally {
			setIsLoadingGoogle(false);
		}
    };
    
    const loginWithTwitter = async () => {
			setIsLoadingTwitter(true);

			try {
				await signIn('twitter');
			} catch (error) {
				toast({
					title: 'Error',
					description: 'There was an error logging in with X',
					variant: 'destructive',
				});
			} finally {
				setIsLoadingTwitter(false);
			}
    };
    
     const loginWithLinkedIn = async () => {
				setIsLoadingLinkedin(true);

				try {
					await signIn('linkedin');
				} catch (error) {
					toast({
						title: 'Error',
						description: 'There was an error logging in with Linkedin',
						variant: 'destructive',
					});
				} finally {
					setIsLoadingLinkedin(false);
				}
     };
    
    const loginWithGithub = async () => {
			setIsLoadingGitHub(true);

			try {
				await signIn('github');
			} catch (error) {
				toast({
					title: 'Error',
					description: 'There was an error logging in with Github',
					variant: 'destructive',
				});
			} finally {
				setIsLoadingGitHub(false);
			}
		};


    return (
			<main className="h-full p-8">
				{' '}
				<div className={cn('flex justify-center py-2', className)} {...props}>
					<Button
						isLoading={isLoadingGoogle}
						type="button"
						size="sm"
						className="w-3/4 text-lg"
						onClick={loginWithGoogle}
						disabled={isLoadingGoogle}
					>
						{isLoadingGoogle ? null : <FcGoogle className="h-6 w-6 mr-2" />}
						Sign in with Google
					</Button>
				</div>
				<div className={cn('flex justify-center py-2', className)} {...props}>
					<Button
						isLoading={isLoadingTwitter}
						type="button"
						size="sm"
						className="w-3/4 text-lg"
						onClick={loginWithTwitter}
						disabled={isLoadingTwitter}
					>
						{isLoadingTwitter ? null : <FaXTwitter className="h-6 w-6 mr-2" />} Sign in
						with X
					</Button>
				</div>
				<div className={cn('flex justify-center py-2', className)} {...props}>
					<Button
						isLoading={isLoadingLinkedin}
						type="button"
						size="sm"
						className="w-3/4 text-lg"
						onClick={loginWithLinkedIn}
						disabled={isLoadingLinkedin}
					>
						{isLoadingLinkedin ? null : (
							<SlSocialLinkedin className="h-6 w-6 mr-2 text-blue-600" />
						)}{' '}
						Sign in with Linkedin
					</Button>
				</div>
				<div className={cn('flex justify-center py-2', className)} {...props}>
					<Button
						isLoading={isLoadingGitHub}
						type="button"
						size="sm"
						className="w-3/4 text-lg"
						onClick={loginWithGithub}
						disabled={isLoadingGitHub}
					>
						{isLoadingGitHub ? null : (
							<VscGithub className="h-6 w-6 mr-2 " />
						)}{' '}
						Sign in with Github
					</Button>
				</div>
			</main>
		);
};

export default UserAuthForm;
