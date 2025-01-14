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

const Skateholder = () => {
    const stakeholderData = {
        headers: ['Stakeholder', 'Influence', 'Influenced', 'Interest', 'Analysis'],
        data: [
            {
                stakeholder: "Owners",
                influence: "High",
                influenced: "High",
                interest: "High",
                analysis: "Both the owners wish to improve business profitability and scale by continuing to attract new customers as the project's only internal stakeholder and user. Therefore, requirements and underlying knowledge exist, which leads to strong influence and interest. Simultaneously they would be a core player that has a lot of influence on the results. In general, staff can be regarded as stakeholders who have a key influence on operators, but since there is no employed staff at this stage, they can be set as stakeholders again in the HR system exclusively for employees to be developed later."
            },
            {
                stakeholder: "Local customers",
                influence: "Low",
                influenced: "Medium",
                interest: "High",
                analysis: "Local customers are justifiable to be interested in all infrastructure and facilities in the region; they are also very interested in food culture in their area, including this restaurant. Local people with the unique value and culture of the part can add atmosphere, vitality, and value to the restaurant (Pezenka I., Weismayer C., 2020, p. 2796). In addition, it can be an important source of revenue that can be responsible for restaurants' profits during the off-season of tourism. Finally, tourists can also be regarded as one of the critical external stakeholders because they can benefit from locals in various ways. This Local customer group has a low overall influence on the project, but it can affect the outcome."
            },
            {
                stakeholder: "Tourists",
                influence: "Low",
                influenced: "High",
                interest: "High",
                analysis: "Not all stakeholders may have equal authority and interest this restaurant; however, exposure to publicity in Tourists groups can increase direct web traffic, thereby enabling traditional marketing that increases brand awareness and generates word of mouth (Mustafa, 2021). In addition, tourists spend money; they can create continuous profitability by making experiences positive through the promotion and reservation functions of websites to be developed and re-promoting them through word of mouth and social media sharing (Armenski, Dragičević, Pejović, Lukić & Djurdjev, 2011). Therefore, travellers, including business travellers and visitors to tourist attractions, attractions, and attractions, are probably the most important stakeholders. As end-users, they are mainly interested in what, safety and how to spend money (Sengel, Karagoz & Cetin, 2015). So, they have a high level of interest in restaurants that can be booked that handle local specialities, and although they do not influence this website, they are affected by a high level of results."
            },
            {
                stakeholder: "Tourists companies",
                influence: "Low",
                influenced: "Medium",
                interest: "High",
                analysis: "Many Tourism companies have maintained mutual cooperation with local restaurants to develop and revitalize tourism products. Just as Boston&#39;s Kings Dining & Entertainment cited maintaining an outdated introduction program with a local hotel concierge as the core of marketing (The chef, 2018). Moreover, even within New Zealand, which is geographically disadvantageous, being a small city can be disadvantageous in competition; it is vital to work with others using various approaches to overcome this (Fathimath, 2015, pp. 175-177). Tourists companies show a high level of interest for this reason and can be appropriately influenced by the results. However, it does not control the direction of the website development."
            },
        ]
    };
    const skateholderHeaders = stakeholderData.headers.map((item) => {
        return <TableCell align="center" width="12%" key={item}>{item}</TableCell>;
    });

    const skateholderLists = stakeholderData.data.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="12%" key="stakeholderCell">{item.stakeholder}</TableCell>
                <TableCell align="center" width="12%" key="influenceCell">{item.influence}</TableCell>
                <TableCell align="center" width="12%" key="influencedCell">{item.influenced}</TableCell>
                <TableCell align="center" width="12%" key="interestCell">{item.interest}</TableCell>
                <TableCell align="left" width="52%" key="analysisCell">{item.analysis}</TableCell>
            </TableRow>
        );
    });

    const goal1Data = {
        specific: "Create a web application to introduce a menu. And build an online reservation system as responsive web.",
        measurable: "Even if a phone reservation service is not provided, the reservation status through the web will be maintained or increased as before.",
        achievable: "It may vary depending on the appropriate development and hosting options, which will be introduced later.",
        relevant: "You can check the consequence of allowing customers to reserve seats on the web.",
        timebound: "You’ve been given a target date to achieve this goal by the 3rd of February 2022."
    };

    const goal2Data = {
        specific: "Rise the valid direct traffic to the web application through printed posters distribution, and web banners display in office and website of local tourists companies.",
        measurable: "A specific target of increasing and maintaining more than ten individual customers a day compared to the previous one.",
        achievable: "Market research and regulation studies are demanded to support the producing promotional materials and adverts.",
        relevant: "You can check the consequence of attracting reservations.",
        timebound: "You’ve been given a target date to achieve this goal by the 31st of May 2022."
    };

    const requirementsData = [
            {
                number: 1,
                types: "Functional",
                requirements: "Develop as a responsive web and allow access to various devices such as mobile devices.",
            },
            {
                number: 2,
                types: "Functional",
                requirements: "Check the availability of the restaurant is open or fully booked.",
            },
            {
                number: 3,
                types: "Functional",
                requirements: "Allow bookings and regular bookings online and purchasing of gift vouchers online and accept payments via Paypal.",
            },
            {
                number: 4,
                types: "Non-Functional",
                requirements: "View the opening hours, the dinner and drinks menus and information about bookings online.",
            },
            {
                number: 5,
                types: "Non-Functional",
                requirements: "Provide local information and sources related to the restaurant like details of traditional recipes, educational material, audiovisual elements and background information.",
            },
        ];

    const requirementsLists = requirementsData.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="10%" key={`number + ${i}`}>{item.number}</TableCell>
                <TableCell align="center" width="20%" key={`types ${i}`}>{item.types}</TableCell>
                <TableCell align="left" width="70%" key={`requirements + ${i}`}>{item.requirements}</TableCell>
            </TableRow>
        );
    });

    const criteriaData = [
        {
            items: "Functionality",
            considerations: ["Normal table reservation", "Regular table reservations", "Voucher purchasing", "Responsive web"],
            complexity: "Medium (Specific and general)",
        },
        {
            items: "Integration",
            considerations: ["Collect social reviews", "Paypal payment", "Web analysis tool", "Check staff rosters (later)"],
            complexity: "High",
        },
        {
            items: "Content",
            considerations: ["Traditional recipes", "Educational material", "Audiovisual elements", "Background information", "Local information"],
            complexity: "Low",
        },
        {
            items: "Customisation",
            considerations: ["Standard platform"],
            complexity: "Low",
        },
        {
            items: "Scalability",
            considerations: ["High possibility of adding requirements", "High possibility of increasing the number of users", "High possibility of content expansion"],
            complexity: "Medium",
        },
        {
            items: "Security",
            considerations: ["A high level of security is required due to the establishment of reservation and payment functions"],
            complexity: "High",
        },
        {
            items: "Cost",
            considerations: ["Considering that it is a web application in the beginning stage, additional costs can be paid for function addition and expansion"],
            complexity: "Low",
        }
    ];

    const criteriaLists = criteriaData.map((item, i) => {
        return (
            <TableRow key={i}>
                <TableCell align="center" width="20%" key={`items + ${i}`}>{item.items}</TableCell>
                <TableCell align="left" width="60%" key={`considerations + ${i}`}>{item.considerations}</TableCell>
                <TableCell align="center" width="20%" key={`complexity + ${i}`}>{item.complexity}</TableCell>
            </TableRow>
        );
    });

    return (
        <Card>
            <h2>Part 1. Stakeholder Interaction and Feasibility Study </h2>
            <div>
                <h3> a) Requirements and Objectives</h3>
                <p className={classes.container}>The goals are to attract more customers and increase productivity for staff.<br />
                    Possible features include:<br />
                    • view the dinner and drinks menus online<br />
                    • provide educational material about culture and kai<br />
                    • audiovisual elements in the presentation<br />
                    • be accessible for mobile devices<br />
                    • provide information about bookings<br />
                    • allow bookings to be submitted online<br />
                    • allow purchase of gift vouchers online<br />
                    • check if the restaurant is open or fully booked<br />
                    • provide roster information for staff (in the future when more staff are hired)<br />
                    • access details of traditional recipes<br />
                    • find the location of the restaurant<br />
                    • background information about the owners.</p>
            </div><br />
            <div>
                <h3> b) Stakeholder Analysis</h3>
                <div className={classes.container}>
                </div>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="Skateholder Analysis table">
                        <TableHead>
                            <TableRow key="skateholderHeaders">
                                {skateholderHeaders}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {skateholderLists}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><br /><br />
            </div>
            <div>
                <h3> c) Goals and Type of Requirements</h3>
                <h4>&nbsp;&nbsp;&nbsp; • SMART goals for the Haukai web application project<br /></h4><br />
                <div className={classes.container}>
                    <h5>- Goal 1:</h5>
                    <p>Create a web application that shows the menu by the 3rd of February 2022<br />
                        and create an online reservation system to replace phone orders and reduce telephone labour wage of $20.20.</p>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="Smart Goal two table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" component="th" width="20%" key="specific">Specific</TableCell>
                                    <TableCell align='left' component="td" key="specificCell">{goal1Data.specific}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="measurable">Measurable</TableCell>
                                    <TableCell align='left' component="td" key="measurableCell">{goal1Data.measurable}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="achievable">Achievable</TableCell>
                                    <TableCell align='left' component="td" key="achievableCell">{goal1Data.achievable}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="relevant">Relevant</TableCell>
                                    <TableCell align='left' component="td" key="relevantCell">{goal1Data.relevant}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="timebound">Time-bound</TableCell>
                                    <TableCell align='left' component="td" key="timeboundCell">{goal1Data.timebound}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <br /><br />
                <div className={classes.container}>
                    <h5>• Goal 2:</h5>
                    <p> In connection with local tourists companies, print posters and make web banners including QR codes and distribute for promoting the restaurant web applications. <br />
                        The goal is to increase the valid direct traffic to the web application and increase the valid reservation by more than ten individual customers per day and keep it until the 31st of May 2022.
                    </p>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="Smart Goal one table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" component="th" width="20%" key="specific2">Specific</TableCell>
                                    <TableCell align='left' component="td" key="specificCell2">{goal2Data.specific}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="measurable2">Measurable</TableCell>
                                    <TableCell align='left' component="td" key="measurableCell2">{goal2Data.measurable}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="achievable2">Achievable</TableCell>
                                    <TableCell align='left' component="td" key="achievableCell2">{goal2Data.achievable}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="relevant2">Relevant</TableCell>
                                    <TableCell align='left' component="td" key="relevantCell2">{goal2Data.relevant}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" key="timebound2">Time-bound</TableCell>
                                    <TableCell align='left' component="td" key="timeboundCell2">{goal2Data.timebound}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <br /><br />
                <h4>&nbsp;&nbsp;&nbsp; • Types of Requirements for the Haukai web application project<br /></h4><br />
                <div className={classes.container}>
                    <TableContainer component={Paper}>
                            <Table size="small" aria-label="Types of Requirements table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" width="10%" key="no">No.</TableCell>
                                        <TableCell align="center" width="20%" key="types">Types</TableCell>
                                        <TableCell align="center" width="70%" key="requirements">Requirements</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {requirementsLists}
                                </TableBody>
                            </Table>
                    </TableContainer>
                </div>
                <br /><br /><br />
            </div>
            <div>
                <h3> d) Feasibility Study</h3><br />
                <div className={classes.container}>
                    <h4> • Project Description</h4>
                    <p> Haukai Restaurant is an offline restaurant dedicated to exploring and developing Maori cooking technology and ingredients,
                        playing a leading role in maintaining Maori food culture using New Zealand traditional ingredients and challenging new sophisticated expansion by the two owner chefs.
                        This Restaurant is actively making reservations with the excellent evaluation of existing locals and tourist customers,
                        but repeated reservations and information work occur due to phone and visit-oriented reservation patterns,
                        resulting in lower work efficiency and satisfaction.
                    </p>
                    <p> Accordingly, a feasibility study is conducted to define goals, requirements, and development options for designing and building responsive websites and to acquaint recommendation options. </p>
                    <p> The website focuses on providing convenience to users by enabling straightforward navigation of Haukai Restaurant menus,
                        supporting reservation functions and availability on any device.
                        For this reason, Haukai Restaurant can expect additional promotional effects due to the influx of new customers visiting the site as well as the effect of reducing human costs.
                    </p>
                </div>
                <br />
                <div className={classes.container}>
                    <h4> • A List of Evaluation Criteria</h4>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="Evaluation Criteria list">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" width="20%" key="items">Items</TableCell>
                                    <TableCell align="center" width="60%" key="considerations">Considerations</TableCell>
                                    <TableCell align="center" width="20%" key="complexity">Complexity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {criteriaLists}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
                <br />
            </div>
        </Card>
    );
};

export default Skateholder;