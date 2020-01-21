import React from 'react';
import './Countries.css';


class Countries extends React.Component {
    render() {
        const { countries } = this.props;
        return (
            <div className="Countries">
                <div class="image-container">
                   <img src='./greatBritain.png' alt="great britain" />
                </div>
                <h2>{countries.nation}</h2>
                <div className="Countries-information" >
                    <div className="Country-information">
                        <p>Population:{countries.population}</p>
                        <p>Region: {countries.region}</p>
                        <p>Capital: {countries.capital}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Countries;


