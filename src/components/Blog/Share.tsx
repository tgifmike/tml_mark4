'use client';

import React, { FC } from 'react';
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	XIcon,
} from 'react-share';

interface ShareProps {
	slug: string | undefined;
	title: string | undefined;
}

const Share: FC<ShareProps> = ({ slug, title }) => {
	return (
		<div className="flex flex-row items-center p-2">
			<p className='text-lg italic pr-2'>Share it...</p>
			<div className="flex flex-row">
				<div className="p-1">
					<FacebookShareButton
						url={`https://www.themanagerlife.com/blogs/${slug}`}
						hashtag={title}
					>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
				</div>
				<div className="p-1">
					<TwitterShareButton
						url={`https://www.themanagerlife.com/blogs/${slug}`}
						title={title}
					>
						<XIcon size={32} round={true} />
					</TwitterShareButton>
				</div>
				<div className="p-1">
					<LinkedinShareButton
						url={`https://www.themanagerlife.com/blogs/${slug}`}
						title={title}
					>
						<LinkedinIcon size={32} round={true} />
					</LinkedinShareButton>
				</div>
			</div>
		</div>
	);
};

export default Share;
