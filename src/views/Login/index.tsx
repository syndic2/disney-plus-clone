import React from 'react';

import { Container, CTA, CTALogoOne, CTALogoTwo, SignUp, Description } from './styles';

const Login: React.FC = () => {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/medias/icons/cta-logo-one.svg" />
				<SignUp>GET ALL THERE</SignUp>
				<Description>
					Get Premier Access to Raya and the Last Dragon for with Disney+ subscription. As of 03/26/21, the price and The Disney Bundle will increase by $1.
				</Description>
				<CTALogoTwo src="/medias/icons/cta-logo-two.png" />
			</CTA>
		</Container>
	);
};

export default Login;
