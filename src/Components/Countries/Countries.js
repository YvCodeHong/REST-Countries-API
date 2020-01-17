import React from 'react';
import './Countries.css';


const countries = {
    imageSrc: '',
    country: 'United Kingdom',
    population: "600,000",
    region: "Europe",
    capital: "London"
};

class Countries extends React.Component {
    render() {
        return (
            <div className="Countries">
                <div class="image-container">
                
                </div>
                <h2>{countries.country}</h2>
                <div className="Countries-information" >
                    </div>
                    <div className={countries.population}>
                    <div className={countries.region}>
                        <div className={countries.capital}>
                        </div>
                    </div>  
                </div>
                </div>
        )
    }
}

export default Countries;