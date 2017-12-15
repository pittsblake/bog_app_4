import React from 'react';
import styled from 'styled-components'

const CreaturesContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const ShowCreaturePage = (props) => {
    return (
        <div>
            <CreaturesContainer>
                <div>
                    <h1>{props.creatureOne.name}</h1>
                    <h2>{props.creatureOne.description}</h2>
                    <h3>{props.creatureOne.health}</h3>
                    <h3>{props.creatureOne.attack}</h3>
                    {/* <h1>{props.creatureTwo.name}</h1> */}
                </div>
                {/* <div>
                    <h1>{props.creatureTwo.name}</h1>
                    <h2>{props.creatureTwo.description}</h2>
                    <h3>{props.creatureTwo.health}</h3>
                    <h3>{props.creatureTwo.attack}</h3>
                </div> */}
            </CreaturesContainer>
        </div>
    );
};

export default ShowCreaturePage;