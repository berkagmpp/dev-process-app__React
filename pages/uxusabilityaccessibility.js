import Card from '../component/ui/Card'

import classes from '../styles/content.module.css'

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core";

import Image from 'next/image';

import persona1 from '../public/assets/1.jpg';
import persona2 from '../public/assets/2.jpg';
import persona3 from '../public/assets/3.jpg';
import persona4 from '../public/assets/4.jpg';
import persona5 from '../public/assets/5.jpg';
import flowchart1 from '../public/assets/flowchart1.jpg';
import flowchart2 from '../public/assets/flowchart2.jpg';

const UxUsabilityAccessibility = props => {
    const persona2Data = [
        {
            user: "Background 1",
            persona: "He is browsing the web to find information for a trip to the Bay of Island area with his wife next weekend for vacation. He Visits the web application of Haukai Restaurant that he founds out as a result of the search.",
        },
        {
            user: "Background 2",
            persona: "He doesn't have trouble making reservations and paying using any devices. Also, he likes to share and communicate with others about my travel experiences.",
        },
        {
            user: "Background 3",
            persona: "He has no reluctance to give personal information to web applications.",
        },
        {
            user: "Background 4",
            persona: "He has weak red-green blindness.",
        },
        {
            user: "Goal",
            persona: "He will spend about 10 minutes this evening checking Haukai Restaurant's dinner menu on his desktop and booking a table for the weekend on his mobile. Also, He is thinking of his visit review on Facebook after using the restaurant.",
        },
    ];
    
    const persona2Lists = persona2Data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`user1 + ${i}`}>{item.user}</TableCell>
                <TableCell align="left" width="80%" key={`persona2 + ${i}`}>{item.persona}</TableCell>
            </TableRow>
        );
    });

    const persona5Data = [
        {
            user: "Background 1",
            persona: "She has lived in the Bay of Island for a long time and has a job that guides tourists to this area. She hopes tourists will remember this region as unique and beautiful memories by promoting many tourism resources and facilities. She connects this web application due to the publicity campaign to figure out first before guiding her customers to Haukai Restaurant.",
        },
        {
            user: "Background 2",
            persona: "Recently, she has been using an iPad to show visitors the area stories or introduce tourist attractions and restaurants.",
        },
        {
            user: "Background 3",
            persona: "She has some hesitation in providing her personal data online.",
        },
        {
            user: "Background 4",
            persona: "She has no accessibility issues.",
        },
        {
            user: "Goal",
            persona: "She will view content with material about culture and kai and audiovisual elements that can inform tourists all day for tomorrow on an iPad. And she will purchase using Paypal some gift vouchers for offering as a prize to tourists.",
        },
    ];

    const persona5Lists = persona5Data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`user2 + ${i}`}>{item.user}</TableCell>
                <TableCell align="left" width="80%" key={`persona5 + ${i}`}>{item.persona}</TableCell>
            </TableRow>
        );
    });

    const sn1Case1Data = [
        {
            usecase: "Actor",
            action: "Persona 2 - Reon Park (Scenario 1)",
        },
        {
            usecase: "Basic flow 1",
            action: "He explores web applications.",
        },
        {
            usecase: "Basic flow 2",
            action: "He checks the menu provided on the menu page.",
        },
    ];

    const sn1Case1Lists = sn1Case1Data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`usecase1 + ${i}`}>{item.usecase}</TableCell>
                <TableCell align="center" width="80%" key={`action1 + ${i}`}>{item.action}</TableCell>
            </TableRow>
        );
    });

    const sn1Case2Data = [
        {
            usecase: "Actor",
            action: "Persona 2 - Reon Park (Scenario 1)",
        },
        {
            usecase: "Basic flow 1",
            action: "On the Reservation page, chooses the date he wants.",
        },
        {
            usecase: "Basic flow 2",
            action: "Selects a table at the desired location.",
        },
        {
            usecase: "Basic flow 3",
            action: "Application presents booking pricing information.",
        },
        {
            usecase: "Basic flow 4",
            action: "He goes to the check out.",
        },
        {
            usecase: "Basic flow 5",
            action: "He pays the booking fee through PayPal.",
        },
        {
            usecase: "Basic flow 6",
            action: "The completed reservation is sent from the application to the restaurant's internal system.",
        },
        {
            usecase: "Basic flow 7",
            action: "System sends confirming email.",
        },
        {
            usecase: "Alternative flow 1",
            action: "If he wants to cancel the reservation, find it and proceed with the cancellation.",
        },
    ];

    const sn1Case2Lists = sn1Case2Data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`usecase2 + ${i}`}>{item.usecase}</TableCell>
                <TableCell align="center" width="80%" key={`action2 + ${i}`}>{item.action}</TableCell>
            </TableRow>
        );
    });

    const sn2Case1Data = [
        {
            usecase: "Actor",
            action: "Persona 5 - Emma Watt (Scenario 2)",
        },
        {
            usecase: "Basic flow 1",
            action: "Looks for the table of contents and select the item of the desired content.",
        },
        {
            usecase: "Basic flow 2",
            action: "Views text and images.",
        },
        {
            usecase: "Basic flow 3",
            action: "Plays the video.",
        },
    ];

    const sn2Case1Lists = sn2Case1Data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`usecase3 + ${i}`}>{item.usecase}</TableCell>
                <TableCell align="center" width="80%" key={`action3 + ${i}`}>{item.action}</TableCell>
            </TableRow>
        );
    });
    
    const sn2Case2Data = [
        {
            usecase: "Actor",
            action: "Persona 5 - Emma Watt (Scenario 2)",
        },
        {
            usecase: "Basic flow 1",
            action: "She browses the purchasing gift vouchers menu.",
        },
        {
            usecase: "Basic flow 2",
            action: "Selects item and quantity to purchase.",
        },
        {
            usecase: "Basic flow 3",
            action: "System presents full pricing information.",
        },
        {
            usecase: "Basic flow 4",
            action: "She goes to the check out.",
        },
        {
            usecase: "Basic flow 5",
            action: "She fills email address to be delivered online vouchers.",
        },
        {
            usecase: "Basic flow 6",
            action: "She pays through PayPal.",
        },
        {
            usecase: "Basic flow 7",
            action: "The completed sale is sent from the application to the restaurant's internal system.",
        },
        {
            usecase: "Basic flow 8",
            action: "System sends confirming email to customer.",
        },
    ];

    const sn2Case2Lists = sn2Case2Data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`usecase4 + ${i}`}>{item.usecase}</TableCell>
                <TableCell align="center" width="80%" key={`action4 + ${i}`}>{item.action}</TableCell>
            </TableRow>
        );
    });

    return (
        <Card>
            <h2>Part 2. User Experience, Usability, Accessibility </h2>
            <div>
                <h3> a) Personas</h3>
                <br />
                <div className={classes.container}>
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={persona1} alt="Persona one" width={839} height={980} placeholder="blur" />
                        </div><br /><br />
                        <div className={classes['img-shadow']}>
                            <Image src={persona2} alt="Persona twe" width={839} height={1004} placeholder="blur"/>
                        </div><br /><br />
                        <div className={classes['img-shadow']}>
                            <Image src={persona3} alt="Persona three" width={839} height={980} placeholder="blur" />
                        </div><br /><br />
                        <div className={classes['img-shadow']}>
                            <Image src={persona4} alt="Persona four" width={839} height={1054} placeholder="blur" />
                        </div><br /><br />
                        <div className={classes['img-shadow']}>
                            <Image src={persona5} alt="Persona five" width={839} height={980} placeholder="blur" />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div>
                <h3> b) Scenarios</h3>
                <br />
                <div className={classes.container}>
                    <h4> • Scenarios 1</h4>
                    <TableContainer component={Paper}>
                            <Table size="small" aria-label="Scenarios 1 table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" width="20%" key="user1">
                                            <div className={classes.strong}>User</div>
                                        </TableCell>
                                        <TableCell align="left" width="80%" key="persona2">
                                            <div className={classes.strong}>Persona 2 - Reon Park (Tourists group)</div>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {persona2Lists}
                                </TableBody>
                            </Table>
                    </TableContainer>
                </div>
                <br /><br />
                <div className={classes.container}>
                    <h4> • Scenarios 2</h4>
                    <TableContainer component={Paper}>
                            <Table size="small" aria-label="Scenarios 2 table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" width="20%" key="user2">
                                            <div className={classes.strong}>User</div>
                                        </TableCell>
                                        <TableCell align="left" width="80%" key="persona5">
                                            <div className={classes.strong}>Persona 5 - Emma Watt (Locals group, a staff of tour company)</div>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {persona5Lists}
                                </TableBody>
                            </Table>
                    </TableContainer>
                </div>
            </div>
            <br /><br /><br />
            <div>
                <h3> c) Use Cases Description and Flow Chart</h3>
                <br />
                <div className={classes.container}>
                    <h4> • Scenario 1 Use Cases Description</h4><br />
                    <div className={classes.container}>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Scenario 1 Use Cases 1 Description table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" component="th" width="20%" key="usecase1">
                                            <div className={classes.strong}>Use case 1</div>
                                        </TableCell>
                                        <TableCell align="center" component="th" width="80%" key="checkthemenu">
                                            <div className={classes.strong}>Check the menu</div>
                                        </TableCell>
                                    </TableRow>
                                    { sn1Case1Lists }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div><br /><br /><br />
                    <div className={classes.container}>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Scenario 1 Use Cases 2 Description table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" component="th" width="20%" key="usecase2">
                                            <div className={classes.strong}>Use case 2</div>
                                        </TableCell>
                                        <TableCell align="center" component="th" width="80%" key="bookthetable">
                                            <div className={classes.strong}>Book the table</div>
                                        </TableCell>
                                    </TableRow>
                                    { sn1Case2Lists }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div><br /><br />
                <div className={classes.container}>
                    <h4> • Scenario 2 Use Cases Description</h4><br />
                    <div className={classes.container}>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Scenario 2 Use Cases 3 Description table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" component="th" width="20%" key="usecase3">
                                            <div className={classes.strong}>Use case 3</div>
                                        </TableCell>
                                        <TableCell align="center" component="th" width="80%" key="viewcontent">
                                            <div className={classes.strong}>View content</div>
                                        </TableCell>
                                    </TableRow>
                                    { sn2Case1Lists }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div><br /><br /><br />
                    <div className={classes.container}>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Scenario 2 Use Cases 4 Description table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" component="th" width="20%" key="usecase5">
                                            <div className={classes.strong}>Use case 5</div>
                                        </TableCell>
                                        <TableCell align="center" component="th" width="80%" key="purchasegiftvouchers">
                                            <div className={classes.strong}>Purchase gift vouchers</div>
                                        </TableCell>
                                    </TableRow>
                                    { sn2Case2Lists }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div><br /><br /><br />
                <div className={classes.container}>
                    <h4> • Use Cases 1 and 2 Flow Chart</h4>
                    <div className={classes.center}>
                        <Image src={flowchart1} alt="Flow chart one" />
                    </div><br /><br /><br />
                    <h4> • Use Cases 3 and 4 Flow Chart</h4>
                    <div className={classes.center}>
                        <Image src={flowchart2} alt="Flow chart two" />
                    </div><br /><br />
                </div>
            </div>
        </Card>
    );
};

export default UxUsabilityAccessibility;

