import React from 'react';

function Footer() {
	return (
		<footer
			className='footer'
			style={styles.footer}
		>
			<p
				className='footer-info'
				style={styles.footerText}
			>
				Built and designed by{' '}
				<a
					href='https://github.com/xavinanegron'
					target='_blank'
					rel='noopener noreferrer'
					style={styles.link}
				>
					Xavina Negron ©
				</a>
			</p>
		</footer>
	);
}

const styles = {
	footer: {
		backgroundColor: 'white',
		padding: '2rem',
		textAlign: 'center',
	},
	footerText: {
		fontFamily: 'Paytone One, sans-serif',
		fontSize: '20px',
		color: '#333333',
	},
	link: {
		fontFamily: 'Paytone One, sans-serif',
		textDecoration: 'none',
		color: '#ef4b4b',
	},
};

export default Footer;
