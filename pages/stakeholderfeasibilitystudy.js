import Card from '../component/ui/Card'

import classes from '../styles/content.module.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn, } from 'react-bootstrap-table';

const Skateholder = () => {
    const stakeholderData = [
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
    ];


    const goal1Data = [
        {
            specific: "Create a web application to introduce a menu. And build an online reservation system as responsive web.",
            measurable: "Even if a phone reservation service is not provided, the reservation status through the web will be maintained or increased as before.",
            achievable: "It may vary depending on the appropriate development and hosting options, which will be introduced later.",
            relevant: "You can check the consequence of allowing customers to reserve seats on the web.",
            timebound: "You’ve been given a target date to achieve this goal by the 3rd of February 2022."
        }
    ];

    const goal2Data = [
        {
            specific: "Rise the valid direct traffic to the web application through printed posters distribution, and web banners display in office and website of local tourists companies.",
            measurable: "A specific target of increasing and maintaining more than ten individual customers a day compared to the previous one.",
            achievable: "Market research and regulation studies are demanded to support the producing promotional materials and adverts.",
            relevant: "You can check the consequence of attracting reservations.",
            timebound: "You’ve been given a target date to achieve this goal by the 31st of May 2022."
        }
    ];

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

    const devOptionsData = [
        {
            items: "Functionality",
            considerations: "Normal table reservation, Regular table reservations, Voucher purchasing, Responsive web",
            complexity: "Medium (Specific and general)",
        },
        {
            items: "Integration",
            considerations: "Collect social reviews, Paypal payment, Web analysis tool, Check staff rosters (later)",
            complexity: "High",
        },
        {
            items: "Content",
            considerations: "Traditional recipes, Educational material, Audiovisual elements, Background information, Local information",
            complexity: "Low",
        },
        {
            items: "Customisation",
            considerations: "Standard platform",
            complexity: "Low",
        },
        {
            items: "Scalability",
            considerations: "High possibility of adding requirements, High possibility of increasing the number of users, High possibility of content expansion",
            complexity: "Medium",
        },
        {
            items: "Security",
            considerations: "A high level of security is required due to the establishment of reservation and payment functions",
            complexity: "High",
        },
        {
            items: "Cost",
            considerations: "Considering that it is a web application in the beginning stage, additional costs can be paid for function addition and expansion",
            complexity: "Low",
        }
    ];

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
                    <BootstrapTable data={stakeholderData}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField="stakeholder"
                            width="12%" height="auto"> Stakeholder </TableHeaderColumn>
                        <TableHeaderColumn dataField='influence'
                            width="12%">Influence</TableHeaderColumn>
                        <TableHeaderColumn dataField='influenced'
                            width="12%">Influenced<br />by the results</TableHeaderColumn>
                        <TableHeaderColumn dataField='interest'
                            width="12%">Interest</TableHeaderColumn>
                        <TableHeaderColumn dataField='analysis'
                            width="52%" height="auto">Analysis</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <br /><br /><br />
            </div>
            <div>
                <h3> c) Goals and Type of Requirements</h3>
                <h4>&nbsp;&nbsp;&nbsp; • SMART goals for the Haukai web application project<br /></h4><br />
                <div className={classes.container}>
                    <h5>- Goal 1:</h5>
                    <p>Create a web application that shows the menu by the 3rd of February 2022<br />
                        and create an online reservation system to replace phone orders and reduce telephone labour wage of $20.20.</p>
                    <BootstrapTable data={goal1Data}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField='specific'
                            width="20%" height="auto">Specific</TableHeaderColumn>
                        <TableHeaderColumn dataField='measurable'
                            width="20%" height="auto">Measurable</TableHeaderColumn>
                        <TableHeaderColumn dataField='achievable'
                            width="20%" height="auto">Achievable</TableHeaderColumn>
                        <TableHeaderColumn dataField='relevant'
                            width="20%" height="auto">Relevant</TableHeaderColumn>
                        <TableHeaderColumn dataField='timebound'
                            width="20%" height="auto">Time-bound</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <br /><br />
                <div className={classes.container}>
                    <h5>• Goal 2:</h5>
                    <p> In connection with local tourists companies, print posters and make web banners including QR codes and distribute for promoting the restaurant web applications. <br />
                        The goal is to increase the valid direct traffic to the web application and increase the valid reservation by more than ten individual customers per day and keep it until the 31st of May 2022.
                    </p>
                    <BootstrapTable data={goal2Data}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField='specific'
                            width="20%" height="auto">Specific</TableHeaderColumn>
                        <TableHeaderColumn dataField='measurable'
                            width="20%" height="auto">Measurable</TableHeaderColumn>
                        <TableHeaderColumn dataField='achievable'
                            width="20%" height="auto">Achievable</TableHeaderColumn>
                        <TableHeaderColumn dataField='relevant'
                            width="20%" height="auto">Relevant</TableHeaderColumn>
                        <TableHeaderColumn dataField='timebound'
                            width="20%" height="auto">Time-bound</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <br /><br />
                <h4>&nbsp;&nbsp;&nbsp; • Types of Requirements for the Haukai web application project<br /></h4><br />
                <div className={classes.container}>
                    <BootstrapTable data={requirementsData}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField="number"
                            width="10%" height="auto">No.</TableHeaderColumn>
                        <TableHeaderColumn dataField="types"
                            width="20%" height="auto">Types</TableHeaderColumn>
                        <TableHeaderColumn dataField="requirements"
                            width="70%" height="auto">Requirements</TableHeaderColumn>
                    </BootstrapTable>
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
                    <p> The website focuses on providing convenience to users by enabling straightforward navigation of Haukai Restaurant's menus,
                        supporting reservation functions and availability on any device.
                        For this reason, Haukai Restaurant can expect additional promotional effects due to the influx of new customers visiting the site as well as the effect of reducing human costs.
                    </p>
                </div>
                <br />
                <div className={classes.container}>
                    <h4> • A List of Evaluation Criteria</h4>
                    <BootstrapTable data={criteriaData}
                        className={classes['bootstrap-table']}>
                        <TableHeaderColumn isKey
                            dataField="items"
                            width="20%" height="auto">Items</TableHeaderColumn>
                        <TableHeaderColumn dataField="considerations"
                            width="60%" height="auto">Considerations</TableHeaderColumn>
                        <TableHeaderColumn dataField="complexity"
                            width="20%" height="auto">Complexity</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <br />
            </div>
        </Card>
    );
};

export default Skateholder;