// import files
import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import Quiz from "../../assets/images/Quiz.jpg";
import TB from "../../assets/images/TB.jpg";
import ET from "../../assets/images/ET.jpg";
import EC from "../../assets/images/EC.jpg";
import GS from "../../assets/images/GS.jpg";
import gracehopper from "../../assets/images/gracehopper.jpg";

// portfolio function
function Portfolio() {
    return (
        <Container id="Projects">
            <div>
                <h1 id="PF1">Portfolio</h1>
            </div>
                <CardGroup>
                    <div className="bg-light border">
                        <Card style={{ 
                            width: '18rem', 
                            outline: '1px solid white',
                            marginRight:'208px',
                            padding: '14px',
                            position: 'absolute',
                            color: 'white',
                            marginBottom: '-74px',
                            left: '362px'
                            }}>
                            <a href="https://candre02.github.io/Fundamental-Quiz/" >
                                <Card.Img variant="top" src={Quiz} />
                            </a>
                            <Card.Body>
                                <Card.Title id="pf2">Fundamental Quiz</Card.Title>
                                <Card.Text>
                                Quiz on javascript fundamentals, included Q/A's, timer is deducted when answers are wrong, 
                                presented applicants initials and there total score. 
                                Check out Fundamental Quiz by clicking on the image or Github repository click{" "}
                                <a className="link" href="https://github.com/candre02/Fundamental-Quiz.git"> {" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="bg-light border">
                    <Card style={{ 
                        width: '18rem',
                        outline: '1px solid white',
                        marginLeft: '1250px',
                        padding: '14px',
                        position: 'absolute',
                        top: '415px',
                        color: 'white',
                        left: '-2px'
                        }}>
                            <a href="https://watch.screencastify.com/v/Lny525iGpoOosjfPO8op">
                                <Card.Img variant="top" src={TB} />
                            </a>
                            <Card.Body>
                                <Card.Title id="pf2">Profile Building</Card.Title>
                                <Card.Text>
                                    This is a Object-Oriented Programming (OOP) Project, that prompts infomation about each team member employed.
                                    Check out Profile Building by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/Profile-Building.git">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="bg-light border">
                    <Card style={{ 
                        width: '18rem',
                        outline: '1px solid white',
                        marginLeft: '410px',
                        padding: '14px',
                        bottom: '10px',
                        color: 'white',
                        }}>
                            <a href="https://watch.screencastify.com/v/mhqj9GJXkGskw8XO43cE">
                                <Card.Img variant="top" src={ET} />
                            </a>
                            <Card.Body>
                                <Card.Title id="pf2">Employee Guide</Card.Title>
                                <Card.Text>
                                    This is a SQL Project, allows the user to track employees by using there department's, role's, title's, saleries and manage their manager status.
                                    Check out Profile Building by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/Employee-Guide.git">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ 
                        width: '18rem',
                        outline: '1px solid white',
                        padding: '14px',
                        marginTop: '68px',
                        top: '36px',
                        marginLeft: '410px',
                        color: 'white',
                        }}>
                            <a href="https://watch.screencastify.com/v/Js08zswfmwA32TKiPWFe">
                                <Card.Img variant="top" src={EC} />
                            </a>
                            <Card.Body>
                                <Card.Title id="pf2">digital-TradeBEnd</Card.Title>
                                <Card.Text>
                                    This is a Object-Relational Mapping (ORM) Project, allows the user to create, read, update, and delete (CRUD) on the related material routes.
                                    Check out digital-TradeBEnd by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/digital-TradeBEnd.git">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ 
                        width: '18rem',
                        outline: '1px solid white',
                        padding: '14px',
                        marginRight: '30%',
                        marginLeft: '-39px',
                        marginBottom: '320px',
                        marginTop: '-545px',
                        color: 'white',
                        
                        
                        }}>
                            <a href="https://secret-forest-66148.herokuapp.com/">
                                <Card.Img variant="top" src={GS} />
                            </a>
                            <Card.Body>
                                <Card.Title id="pf2">Git-Stuff</Card.Title>
                                <Card.Text>
                                An online database in which products are stored. The user creates a listing, sets a price and gives a short description of the product. 
                                Users emails are displayed so that other users can contact them in regards to the product.
                                Check out Git Stuff by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/chase-risinger/15-git-stuff">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{
                            width: '18rem',
                            outline: '1px solid white',
                            padding: '14px',
                            marginLeft: '847px',
                            marginTop: '-975px',
                            marginBottom: '1020px',
                            top: '55px',
                            color: 'white',
                        }}>
                            <a href="https://programher2.herokuapp.com/">
                                <Card.Img variant="top" src={gracehopper} />
                            </a>
                            <Card.Body>
                                <Card.Title id="pf2">Program-Her</Card.Title>
                                <Card.Text>
                                Program-Her was a MERN stack single-page application. It was designed for women across Texas to learn how to code. 
                                Along with coding, Program-Her offers networking, and support for women in all walks of life. On our services page, links for networking, job-searching & resources can be found. 
                                Program-Her was designed for women supporting women. 
                                Check out Program-Her by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/Program-Her.git">{" "} here</a>  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </CardGroup>
        </Container>
    );
}

// export portfolio
export default Portfolio;