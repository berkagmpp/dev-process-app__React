import Card from '../component/ui/Card'

import classes from '../styles/content.module.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn, } from 'react-bootstrap-table';

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

    return (
        <Card>
            <h2>Part 2. User Experience, Usability, Accessibility </h2>
            <div>
                <h3> a) Personas</h3>
                <br />
                <div className={classes.center}>
                    <div className={classes['img-shadow']}>
                        <img src={persona1} alt="Persona one" />
                    </div><br />
                    <div className={classes['img-shadow']}>
                        <img src={persona2} alt="Persona twe" />
                    </div><br />
                    <div className={classes['img-shadow']}>
                        <img src={persona3} alt="Persona three" />
                    </div><br />
                    <div className={classes['img-shadow']}>
                        <img src={persona4} alt="Persona four" />
                    </div><br />
                    <div className={classes['img-shadow']}>
                        <img src={persona5} alt="Persona five" />
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div>
                <h3> b) Scenarios</h3>
                <br />
                <div className={classes.container}>
                    <h4> • Scenarios 1</h4>
                    <BootstrapTable data={persona2Data}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField="user"
                            width="15%" height="auto">User</TableHeaderColumn>
                        <TableHeaderColumn dataField="persona"
                            width="85%" height="auto">Persona 2 - Reon Park (Tourists group)</TableHeaderColumn>
                    </BootstrapTable><br /><br />
                    <h4> • Scenarios 2</h4>
                    <BootstrapTable data={persona5Data}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField="user"
                            width="15%" height="auto">User</TableHeaderColumn>
                        <TableHeaderColumn dataField="persona"
                            width="85%" height="auto">Persona 5 - Emma Watt (Locals group, a staff of tour company)</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
            <br /><br /><br />
            <div>
                <h3> c) Use Cases Description and Flow Chart</h3>
                <br />
                <div className={classes.container}>
                    <h4> • Scenario 1 Use Cases Description</h4><br />
                    <div className={classes.container}>
                        <BootstrapTable data={sn1Case1Data}
                            className={classes['bootstrap-table']}>
                            <TableHeaderColumn isKey
                                dataField="usecase"
                                width="15%" height="auto">Use case 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="action"
                                width="85%" height="auto">Check the menu</TableHeaderColumn>
                        </BootstrapTable>
                    </div><br /><br /><br />
                    <div className={classes.container}>
                        <BootstrapTable data={sn1Case2Data}
                            className={classes['bootstrap-table']}>
                            <TableHeaderColumn isKey
                                dataField="usecase"
                                width="15%" height="auto">Use case 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="action"
                                width="85%" height="auto">Book the table</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div><br /><br />
                <div className={classes.container}>
                    <h4> • Scenario 2 Use Cases Description</h4><br />
                    <div className={classes.container}>
                        <BootstrapTable data={sn2Case1Data}
                            className={classes['bootstrap-table']}>
                            <TableHeaderColumn isKey
                                dataField="usecase"
                                width="15%" height="auto">Use case 3</TableHeaderColumn>
                            <TableHeaderColumn dataField="action"
                                width="85%" height="auto">View content</TableHeaderColumn>
                        </BootstrapTable>
                    </div><br /><br /><br />
                    <div className={classes.container}>
                        <BootstrapTable data={sn2Case2Data}
                            className={classes['bootstrap-table']}>
                            <TableHeaderColumn isKey
                                dataField="usecase"
                                width="15%" height="auto">Use case 4</TableHeaderColumn>
                            <TableHeaderColumn dataField="action"
                                width="85%" height="auto">Purchase gift vouchers</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div><br /><br /><br />
                <div className={classes.container}>
                    <h4> • Use Cases 1 and 2 Flow Chart</h4>
                    <div className={classes.center}>
                        <img src={flowchart1} alt="Flow chart one" />
                    </div><br /><br /><br />
                    <h4> • Use Cases 3 and 4 Flow Chart</h4>
                    <div className={classes.center}>
                        <img src={flowchart2} alt="Flow chart two" />
                    </div><br /><br />

                </div>
            </div>
        </Card>
    );
};

export default UxUsabilityAccessibility;

