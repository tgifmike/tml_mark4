import { User } from '@prisma/client';
import { AvatarProps } from '@radix-ui/react-avatar';

import Image from 'next/image';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { UserRound } from 'lucide-react';

interface UserAvatarProps extends AvatarProps {
	user: Pick<User, 'image' | 'name'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
	return (
		<Avatar {...props}>
			{user.image ? (
				<div className="relative aspect-square h-full w-full">
					<Image
						fill
						src={user.image}
						alt="profile picture"
						referrerPolicy="no-referrer"
					/>
				</div>
			) : (
				<AvatarFallback>
					<span className="sr-only">{user?.name}</span>
					<div>
						<UserRound />
					</div>
				</AvatarFallback>
			)}
		</Avatar>
	);
}
