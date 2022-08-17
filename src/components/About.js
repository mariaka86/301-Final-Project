import React from 'react';
import Card from 'react-bootstrap/Card';
// import Header from './Header.js';
// import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/marypic.JPG';
import image1 from '../images/alliepic.jpg';
import image2 from '../images/jackpic.png';
import image3 from '../images/teresapic.jpg';
// import './About.css'


class About extends React.Component{

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Mary</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Mary graduated from Kirkwood in 2020 and has an associates in Allied Health Sciences(medical assisting). She had been working in the healthcare field for the last two years through the pandemic. But has now decided to switch careers and is now a student at the Delta V Codeschool pursuing a career in Software Development.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={image1} />
                        <Card.Title>Allie</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Allie graduated from Mount Mercy University in 2022. She has her Bachelors of Science degree with her major in psychology and her minors in Criminal Justice and Child Studies. She is now a student at Delta V Code school trying to pursue a career in Software Development
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={image2} />
                        <Card.Title>Jack</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Jack is a student at DeltaV Code School studying software development. He's making the career transition into software development because tech has always been a large part of his personal life, and he wants a career that prioritizes learning and honing his skills.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={image3} />
                        <Card.Title>Teresa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        She recently returned to the area after living the past seven years in the San Francisco Bay area. She is retired from Procter & Gamble after 22 years of service. Her most recent role with P&G was that of Analyst I (Technical and Administrative), supporting a NorCal regional sales team. Her team broke all sales records for four consecutive years. She is currently pursuing a Software Development certification through Delta V. Her hobbies include walking, biking, and gardening.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
};

export default About;
