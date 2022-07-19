import Card from '../component/ui/Card';
import Button from '../component/ui/Button';

import classes from '../styles/content.module.css';

import Image from 'next/image';

import siteMap from '../public/assets/sitemap.jpg'
import wireframes from '../public/assets/wireframes_g.jpg'

const ModellingProcess = () => {
    return (
        <Card>
            <h2>Part 3. Modelling the proposed website</h2>
            <div> 
                <h3>a) Site Map</h3>
                <div className={classes.center}>
                    <Image src={siteMap} alt="Site Map image"/>
                </div><br /><br /><br />
            </div>
            <div> 
                <h3> b) Wireframes</h3>
                <div className={classes.center}>
                    <Image src={wireframes} alt="Wireframes"/>
                </div>
                <div className={classes.center}>
                    <a target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/1F8ZNsNUAkankznEczO8YJMCqcByYd5es/view?usp=sharing">
                        <Button>View Details</Button></a>
                </div> 
                <br /><br /><br />
            </div>  
        </Card>
    );
};

export default ModellingProcess;