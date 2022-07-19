import Card from '../component/ui/Card';

import Image from 'next/image';

import classes from '../styles/content.module.css';

import nzheraldQuery from '../public/assets/nzherald_query.jpg';
import contentArea from '../public/assets//The-content-area.jpg';
import adobeQuery from '../public/assets/adobe_query.jpg';
import nzheraldGrid from '../public/assets/nzherald_grid-with-media.jpg';
import adobeGrid from '../public/assets/adobe_grid.jpg';
import nzheraldImg from '../public/assets/nzherald_img.jpg';
import adobeImg from '../public/assets/adobe_img.jpg';
import adobeImg700 from '../public/assets/adobe_img_700vs599.jpg';

const TheResponsiveDesignCaseStudy = () => {

    return (
        <Card>
            <h2>Part 4. The Responsive Design Case Study for Applying to TheHAUKAI Project </h2>
            <div>
                <h3> a) The Elements for the Responsive Design</h3><br />
                <div className={classes.container}>
                    <h4> • Use CSS3 Media Query (@media)</h4>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        The display monitors and mobile has also diversified, and with the emergence of numerous other devices,
                        the implementation of consistent size web applications have no longer been meaningful.
                        In particular, in terms of layout, the width of the website corresponding to the mobile was developed too broad,
                        resulting in horizontal scrolling.
                        These horizontal scrolling and unadjustable width can pose problems in both usability and
                        accessibility (Nielsen, Scrolling and scrollbars, 2005; Nielsen, Top 10 web design mistakes of 2002, 2002).
                        CSS3 media queries can be used at the end of the CSS file to simplify web structures,
                        render them easy to read and resolve horizontal scroll bar problems. Thankfully,
                        media queries are supported in the latest browsers, including most mobile devices.
                        It depends on actual development, but in many cases,
                        it sets standards for breakpoints areas of 320px for mobile, 800px for Android, 980px for iOS,
                        and 1024px for desktop (Google developers, 2012).
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={nzheraldQuery} alt="NZherald&#39;s empty space shown on a widescreen (3840px)" /><br /><br />
                        </div><br />
                        <p className={classes.strong}>Figure 1</p>
                        <p>NZherald&#39;s empty space shown on a widescreen (3840px)</p>
                    </div><br />
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        NZherald (https://www.nzherald.co.nz/) sets three max-width breakpoints:
                        377px, 767px, and 922px, showing all partitioned layouts when viewed as a 24-inch or 28-inch-wide monitor,
                        but there is a lot of wasted space like Figure 1. The large screen provides a lot of space to use for more features,
                        details, or more content, so it is necessary to adjust the entire layout slightly to utilize additional space
                        like Figure 2. This layout enlargement can be applied on a large screen where the viewport is larger than 1600 pixels
                        (100EM), and values such as margins, fonts, padding, etc. of all contents are flexibly applied
                        (e.g., font size is also increased from 1em or 1rem to 1.2), providing a wider viewing distance (iA Inc, 2012).
                        The font size does not necessarily depend solely on the screen size and should be determined by the distance
                        between our eyes and the device we use. According to 2021 statistics, the most commonly used resolution is now 1920x1080,
                        so now the reactive layout and content reset on a large wide screen must be considered (Bose, 2021).
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={contentArea} alt="The content area adjustment between general and large display" width="498px" height="651px" /><br /><br />
                        </div><br />
                        <p className={classes.strong}>Figure 2</p>
                        <p>The content area adjustment between general and large display</p>
                        <p className={classes['small-italic']}>Note. From Johannes Holl (2016). The large desktop experience in responsive design [figure]. InVisionApp Inc., United States.<br />
                            https://www.invisionapp.com/inside-design/large-desktop-experience-responsive-design/</p>
                        <br />
                    </div>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        In the case of Adobe (https://www.adobe.com/), the content is expanded without changing the layout so that up to 3840px,
                        which my check limit, after 1200px breakpoints, is used without waste of space. As shown in Figure 3,
                        there is no change in the layout, but the size of the container that has each content is changed.
                        Simultaneously, the space in images also changes relatively organically for utilising the area,
                        depending on the resolution.
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={adobeQuery} alt="The content area adjustment between general and large display" /><br /><br />
                        </div><br />
                        <p className={classes.strong}>Figure 3</p>
                        <p>Using the full space shown on a widescreen (3840px) of Adobe</p>
                        <br /><br />
                    </div>

                    <h4> • Using a flexible ratio-based Grid (repeat(auto-fit/fill, minmax()))</h4>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Unlike Flexbox, which mainly designs one-dimensional layouts using content approaches, Grid,
                        which uses a pre-access to layouts, allows comprising two-dimensional structures
                        that utilise flexible widths in length units (freeCodeCamp, 2019).
                        In addition, Grid can provide fast and efficient prototyping and the advantage of having a small file size.
                        In particular, using a Grid can reduce the number of media queries required,
                        preventing maintenance and workflow complexity issues or problems of users spending more time downloading
                        and rendering correct views to their browsers that can occur when using multiple media queries (Hill, 2017).
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={nzheraldGrid} alt="Using CSS grid in NZherald" /><br /><br />
                        </div><br />
                        <p className={classes.strong}>Figure 4</p>
                        <p>Using CSS grid in NZherald</p>
                        <br /><br />
                    </div>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        As shown in Figure 4, NZherald configures CSS for the responsive web using
                        the general &#39;display: grid&#39; method parallel with media queries.
                        Most latest browsers support it and match the simple and effective two-dimensional layouts composition.
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={adobeGrid} alt="Using the AEM Grid system in Adobe " /><br /><br />
                        </div><br /> 
                            <p className={classes.strong}>Figure 5</p>
                            <p>Using the AEM Grid system in Adobe </p>
                        <br /><br /> 
                    </div>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Adobe web uses the AEM Grid system covered by patents (Figure 5).
                        This was designed to be independently constructed without affecting other breakpoints
                        using a specific custom breakpoints approach (Adobe Experience League, 2021).
                        By defining grid cells and rules, cells move flexibly according to screen size and remove fixed left and right padding.
                        The AEM Grid can be visually viewed and adjusted, and it is very flexible
                        as it can be used together with a third-party framework to create responsive layout and style components (Olejnik, 2019).
                    </p><br /><br />

                    <h4> • Control content elements: text and images</h4>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        4K monitors require larger font size and slightly different structures or layout, but on the other hand,
                        the mobile device may not have the same text size as the 4K monitor.
                        In order to apply all of these fluid resolutions, the required font size can be set to &#39;px&#39;(pixels)
                        one by one through media queries or set to &#39;vw&#39;(1% of viewport width) units.
                        In certain situations, such as mobile or large screens over 1600px,
                        specifying the font size using &#39;em&#39; and &#39;rem&#39; in media queries is the most basic
                        and most commonly used technique (Lännenmäki, 2021).
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        In the case of images, high-resolution images fit the full-size image, while they are too small or distorted on mobile.
                        To solve this problem, NZherald used a basic method of automatically adjusting the height
                        by specifying a new value in the width attribute using a relative unit such as a percentage,
                        ot an absolute unit, and determining the screen width size according to the media query rules like figure 6.
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={nzheraldImg} alt="Defining the width size with the relative unit to automatically adjust the height in NZherald" /><br /><br />
                        </div><br />
                        <p className={classes.strong}>Figure 6</p>
                        <p>Defining the width size with the relative unit to automatically adjust the height in NZherald</p>
                        <br /><br />
                    </div>
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={adobeImg} alt="The method of flexibly adjusting the space in the image using the overlaid background image in Adobe" /><br /><br />
                        </div><br />  
                        <p className={classes.strong}>Figure 7</p>
                        <p>The method of flexibly adjusting the space in the image using the overlaid background image in Adobe</p>
                        <br /><br />
                    </div>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        In the case of Adobe, a more complex method was selected, as shown in figure 7.
                        Adobe created and overlaid the background image on the original and readjusted on the new image
                        within the media query according to the minimum screen size so that the space in the image could be flexibly adjusted.
                        Figure 8 shows the images shown on the 700px and 599px screens;
                        these indicate that the size of the image and the inner margin are modulated according to the size of the screen
                        to magnify and deliver the central material of the image.
                        To implement this must use the flexible image can be expanded.
                    </p><br />
                    <div className={classes.center}>
                        <div className={classes['img-shadow']}>
                            <Image src={adobeImg700} alt="The images shown on the 700px (left) and 599px(right) screens in Adobe" /><br /><br />
                        </div><br />
                        <p className={classes.strong}>Figure 8</p>
                        <p>The images shown on the 700px (left) and 599px(right) screens in Adobe</p>
                        <br /><br />
                    </div>

                    <h4> • Control content elements: the Hamburger menu</h4>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        The Hamburger menu is much less likely for users to participate in the option
                        because it hide the navigation option and have cumbersome to click or tap the icon
                        before the user exploring options (Pernice K., Budiu R, 2016).
                        According to the actual user experience test, the search click rate increased by 74%
                        in the case of having a clear and direct search list compared to Hamburger search (Blue compass, 2020).
                        This means that Hamburger search is not a suitable solution for the desktop version.
                        However, by keeping the heading simple and clean, it is suitable for minimal design implementation,
                        and by removing the search display, it is essentially advantageous to minimise user fatigue and guide users
                        through predetermined paths on the web, so it is suitable for providing clear aim.
                        And it is possible to diminish user&#39;s memory load and increase recognition by maintaining a relatively consistent
                        heading configuration on the desktop and mobile (Nielsen, 10 Usability heuristics for user interface design, 2020).
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        NZherald uses a method of directly clicking and connecting pre-considered content
                        because the amount of content (article) is large and the valid period of each one is fast
                        due to the nature of the site called news, so they were able to exploit this merit of Hamburger search rather than list navigation.
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        In terms of the statistics of the UX, most users scan the page from left to right,
                        placing a Hamburger icon in the upper left corner of the page and allowing options
                        to open in the upper left corner when clicked (Babich, 2021).
                        NZherald also follows this principle, expanding to the left and providing a clear menu when clicking the Hamburger icon
                        in the desktop version, and offering full-size menus and X icons in the mobile version.
                        On the other hand, Adobe equally uses the upper left Hamburger menu, but above the iOS standard of 900px,
                        select the listed navigation is used to induce user navigation and make it easy to move.
                    </p><br /><br />

                    <h4> • Conclusion</h4>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        For flexible access according to the usage environment such as screen resolution, platform or direction,
                        it is basic to use media queries by grouping them into major categories through statistics on general devices
                        and designating each representative resolution as breakpoints.
                        In this Haukai project, I will also set breakpoints to be applied to the resolution of iPads and Android phones,
                        as well as the resolution of 1600px to be applied to the 1920px large and wide display used
                        by the most recently added people.
                        And I will use the CSS3 grid in parallel with the media query to form a two-dimensional layout
                        that lessens the number of media queries and responds in detail.
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Websites consist of various components, such as buttons, images, containers, and text, unless it is elementary.
                        The grid presented above only defines how the container inside works but does not tell how the rest of the elements work.
                        It is necessary to alter each elements&#39; value for completion of responsive.
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Font are selected a clean, low-decorations San-serif series that is readable at any resolution,
                        and font size settings for small and large screens are essential.
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        It is also essential to allow images to react together because non-responsive images
                        can easily break well-organised flexible layouts.
                        The Haukai project will be implemented using both a method of specifying the maximum width of images,
                        referring to all images with different resolutions, and using a background image that expands according to the layout.
                    </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Instead of navigation, a Hamburger icon will adopt at a resolution below the iPad to accommodate
                        both the effects of using users&#39; exploring with navigation on a large screen
                        and maintaining space on a small screen, as in Adobe&#39;s case.
                    </p>
                </div>
            </div><br />
        </Card>

    );
};


export default TheResponsiveDesignCaseStudy;