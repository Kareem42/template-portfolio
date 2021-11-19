import React from 'react';
import { Container, Image } from 'react-bootstrap';
// If you have more skills you want to add, just simply copy and paste the div.
// For the tools and knowledge sections, just add in whatever tools and knowledge your have worked with comfortably.


export default function Skills() {
    return(
        <>
        <Container className="fill d-flexbox rounded p-5 text-white">
            <div className="text-center">
                    <h1>Development/Tools</h1>
            </div> 

            <div className="dev-img text-center">
                <Image src="https://img.icons8.com/color/96/000000/javascript--v1.png"/>              
                <Image src="https://img.icons8.com/color/96/000000/html-5--v2.png"/>
                <Image src="https://img.icons8.com/color/96/000000/css3.png" />
                <Image src="https://img.icons8.com/color/96/000000/react-native.png"/>
                <Image src="https://img.icons8.com/color/96/000000/postgreesql.png"/>
                <Image src="https://img.icons8.com/color/96/000000/git.png" />
                <Image src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v2.png" />
            </div>
        </Container>

            <div className="tools text-center">
                <Image src="https://img.icons8.com/color/96/000000/adobe-photoshop.png"/>
                <Image src="https://img.icons8.com/color/96/000000/adobe-illustrator--v1.png"/>
                <Image src="https://img.icons8.com/color/96/000000/codepen.png"/>
                <Image src="https://img.icons8.com/color/96/000000/android-studio--v2.png"/>
                <Image src="https://img.icons8.com/color/96/000000/api-settings.png" /> 
                <Image src="https://img.icons8.com/color/96/000000/sublime-text.png"/>
                <Image src="" />
                <Image src="" />
                </div>
        </>
    )
}