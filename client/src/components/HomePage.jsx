import React, { Component } from 'react';
import axios from 'axios';
import ShowCreaturePage from './ShowCreaturePage'
import styled from 'styled-components'


const GetCreatureContainer = styled.div `
    display: flex;
    justify-content: space-around;
`

class HomePage extends Component {
    state = {
        creatures: [],
        creatureOne: {},
        creatureTwo: {},
        fightingCreatures: [],
        showCreature: false
    }

    async componentWillMount() {
        await this.getAllCreatures()
    }

    getAllCreatures = async () => {
        const res = await axios.get('/api/creatures')
        this.setState({ creatures: res.data })
    }

    getRandomCreature = () => {
        let creature = this.state.creatures[Math.floor(Math.random() * this.state.creatures.length)];
        this.state.fightingCreatures.push(creature)
        this.setState({
            // fightingCreatures: this.state.fightingCreatures,
            showCreature: true,
            creatureOne: this.state.fightingCreatures[0],
            creatureTwo: this.state.fightingCreatures[1]

        })
        console.log(creature)
 
    }


    render() {
        return (
            <div>
                <GetCreatureContainer>
                    <button onClick={this.getRandomCreature}>Get Creature</button>

                    <button onClick={this.getRandomCreature}>Get Creature</button>
                </GetCreatureContainer>
                {
                    this.state.showCreature ? <ShowCreaturePage
                        creatureOne={this.state.creatureOne}
                        creatureTwo={this.state.creatureTwo}
                    /> : null
                }

            </div>
        );
    }
}

export default HomePage;