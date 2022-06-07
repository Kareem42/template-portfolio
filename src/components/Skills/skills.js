import React from 'react';
import { Container, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
// If you have more skills you want to add, just simply copy and paste the div.
// For the tools and knowledge sections, just add in whatever tools and knowledge your have worked with comfortably.
// Download the icons from icons8.com or use some that you have already from another site.


const renderTooltip = (props) => (
    <Tooltip id="img-tooltip" {...props}>
        React v18
    </Tooltip>
);

export default function Skills() {
    return(
        <>
        <Container className="fill d-flexbox rounded p-5 text-white">
            <div className="text-center">
                    <h1>Development/Tools</h1>
            </div> 
 
        
            <div className="text-center p-5">
                <div className="dev-img">
                <OverlayTrigger 
                    placement="top"
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}>
                        <Image src="https://img.icons8.com/color/96/000000/javascript--v1.png"/>
                        </OverlayTrigger>              
                    <Image src="https://img.icons8.com/color/96/000000/html-5--v2.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/css3.png" />
                    <Image src="https://img.icons8.com/color/96/000000/react-native.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/postgreesql.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/git.png" />
                    <Image src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v2.png" />
                </div>
            </div>
        </Container>

        <Container>
            <div className="text-center p-5">
                <div className="tools">
                    <Image src="https://img.icons8.com/color/96/000000/adobe-photoshop.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/adobe-illustrator--v1.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/codepen.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/android-studio--v2.png"/>
                    <Image src="https://img.icons8.com/color/96/000000/api-settings.png" /> 
                    <Image src="https://img.icons8.com/color/96/000000/sublime-text.png"/>
                 </div>
            </div>
       </Container>
        </>
    )
}