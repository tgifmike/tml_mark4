import React from 'react';
import { FacebookIcon } from 'react-share';

const FacebookFollowMe = () => {
	return (
		<main className="mr-2 mb-1">
			<form action="http://www.facebook.com/addfriend.php">
				<input type="hidden" name="id" value="61558173504955" />
				<button type="submit">
					<FacebookIcon size={28} round={true} />
				</button>
			</form>
		</main>
	);
};

export default FacebookFollowMe;
