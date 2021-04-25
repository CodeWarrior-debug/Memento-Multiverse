import { useState, useEffect } from 'react';
import {
    Box,
    Flex,
} from 'rebass';
import React from 'react';
import Toggle from '../Toggle';
import API from '../../utils/API';

const ToggleContainer = () => {
    // state = { franchiseData: [{id: 1, name: "Seinfeld", logo: "text"}, {id: 2, name: "Rick and Morty", logo: "morty"}] }
    const [franchiseData, setfranchiseData] = useState([]);

    useEffect(()=>{
        API.getFranchises()
        .then(franchise=>setfranchiseData(franchise.data))
    }, [])

        return ( 
            <Box className="toggle">
                <Flex>
                    <Box>
                        {franchiseData.map((franchise) =>
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
 
export default ToggleContainer;