import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description="Order Online for TouchLess Delivery"
            backgroundImg= "model-s.jpg"
            rightBtnText="Existing Inventory" 
            leftBtnText="Custom Order"
            />
            <Section
            title="Model Y"
            description="Order Online for TouchLess Delivery"
            backgroundImg= "model-y.jpg"
            rightBtnText="Existing Inventory" 
            leftBtnText="Custom Order"
            />
            <Section
            title="Model 3"
            description="Order Online for TouchLess Delivery"
            backgroundImg= "model-3.jpg"
            rightBtnText="Existing Inventory" 
            leftBtnText="Custom Order"
            />
            <Section
            title="Model X"
            description="Order Online for TouchLess Delivery"
            backgroundImg= "model-x.jpg"
            rightBtnText="Existing Inventory" 
            leftBtnText="Custom Order"
            />
            <Section
            title="Lowest Cost Solar Panels in america"
            description="Money Back Gurantee"
            backgroundImg= "solar-panel.jpg"
            rightBtnText="Order Now " 
            leftBtnText="Learn more"
            />
            <Section
            title="Solar for New Roofs"
            description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels "
            backgroundImg= "solar-roof.jpg"
            rightBtnText="Order Now "
            leftBtnText="Learn More"
           
            />
            <Section
            title="Accessories"
            description=""
            backgroundImg= "accessories.jpg"
             
            leftBtnText="Shop Now"
           
            />
            
        </Container>
    )
}

export default Home


const Container = styled.div`
height:100vh;
z-index:10;
`