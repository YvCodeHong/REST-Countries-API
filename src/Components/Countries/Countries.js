import React from 'react';
import './Countries.css';


const countries = {
    imageSrc: './greatBritain.png',
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
                   <img src='./greatBritain.png' alt="great britain" />
                </div>
                <h2>{countries.country}</h2>
                <div className="Countries-information" >
                    <div className="Country-information">
                        <p>{countries.population}</p>
                        <p>{countries.region}</p>
                        <p>{countries.capital}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Countries;


