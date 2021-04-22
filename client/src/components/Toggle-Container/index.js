import { Component } from 'react';
import {
    Box,
    Flex,
} from 'rebass';
import React from 'react';
import Toggle from '../Toggle';

class ToggleContainer extends Component {
    state = { franchiseData: [{id: 1, name: "Seinfeld", logo: "text"}, {id: 2, name: "Rick and Morty", logo: "morty"}] }

    // componentDidMount() {
    //     axios.get(`https://randomuser.me/api/?results=20&nat=us`)
    //       .then(res => {
    //         this.setState({ employeeList: res.data.results });
    //         console.log(res.data.results);
    //       });
    //   }


    render() { 
        return ( 
            <Box className="toggle">
                <Flex>
                    <Box>
                        {this.state.franchiseData.map((franchise) =>
                        <Toggle key={franchise.id}
                        name={franchise.name}
                        id={franchise.id}
                        /> 
                        )}
                    </Box>
                </Flex>
            </Box>
         );
    }
}
 
export default ToggleContainer;