'use client';

import { useRouter } from 'next/navigation';
import { GrClose } from 'react-icons/gr';

const CloseModal = () => {
	const router = useRouter();

	return (
		<button className="h-10 w-10 p-0 rounded-md" onClick={() => router.back()}>
			<GrClose aria-label="close modal" className="h-8 w-8 text-2xl" />
		</button>
	);
};

export default CloseModal;
