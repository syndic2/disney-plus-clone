import React from 'react';
import { Settings } from 'react-slick';

import { Carousel, Wrapper } from './styles';

const ImgSlider: React.FC = () => {
	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	};

	return (
		<Carousel {...settings}>
			<Wrapper>
				<img src="/medias/images/slider-badging.jpg" alt=""></img>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/slider-badag.jpg" alt=""></img>
			</Wrapper>
		</Carousel>
	);
};

export default ImgSlider;
