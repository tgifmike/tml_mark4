'use client';

import { FC, useCallback, useState } from 'react';
import { buttonVariants } from '../ui/button';

interface GoodReadExtenderProps {
	text: string;
}

const GoodReadExtender: FC<GoodReadExtenderProps> = ({ text }) => {
	const [shouldTruncate, setShouldTruncate] = useState<boolean>(false);
	const [readMore, setReadMore] = useState<boolean>(false);

	const measuredRef = useCallback(
		(node: any) => {
			// Before the component mounts the node ref will be null
			if (node?.parentElement) {
				// Calculate the number of lines based on height
				const elHeight = node.offsetHeight;
				const styles = window.getComputedStyle(node);
				const lineHeight = styles
					.getPropertyValue('line-height')
					.replace('px', '');
				const elLineCount = elHeight / parseInt(lineHeight, 10);

				setShouldTruncate(elLineCount > 3);
			}
		},
		[text]
	);

	const shouldClamp = shouldTruncate && !readMore;

	// Our toggle for expanding or hiding truncated text
	let toggle;
	if (readMore) {
		toggle = <span onClick={() => setReadMore(false)}>Show less</span>;
	} else {
		toggle = <span onClick={() => setReadMore(true)}>Read more</span>;
	}

	return (
		<div className="italic">
			<p
				ref={measuredRef}
				className={`${shouldClamp ? 'line-clamp-3' : 'line-clamp-none'}`}
			>
				{text}
			</p>
			{/* <div className={buttonVariants({ variant: 'outline' })}>{toggle}</div> */}
			<div
				className={
					shouldClamp
						? buttonVariants({ variant: 'outline' })
						: 'hidden'
				}
			>
				{toggle}
			</div>
		</div>
	);
};

export default GoodReadExtender;
