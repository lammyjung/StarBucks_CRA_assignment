import React, { Component } from 'react';


class GoTopComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="go-top">
                    <a href="#" class="go-top-btn">
                        {/* environment */}
                        <img src={ "." + process.env.PUBLIC_URL + "/images/btn_prom_up.png"} alt="go Top 버튼"/>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default GoTopComponent;