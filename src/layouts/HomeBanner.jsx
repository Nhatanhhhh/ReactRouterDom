import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function HomeBanner() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="https://media.licdn.com/dms/image/v2/C511BAQF8F2Wry9GTXQ/company-background_10000/company-background_10000/0/1584269093982/reactofficial_cover?e=2147483647&v=beta&t=3mfjb2WF_yZsYJc8Fx8AWPh31q9BhDYA8XzTTGVbWeI" height={650} width={'100%'} text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.ronin.consulting/wp-content/uploads/2020/03/AngularBuildAnalyzer.png" width={'100%'} height={650} text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.webqam.fr/wp-content/uploads/2024/09/vuejs-banner.jpg" width={'100%'} height={650} text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomeBanner