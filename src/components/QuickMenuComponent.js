import React, { Component } from 'react';


class QuickMenuComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="quick-menu">
                    <a href="#" class="quick-menu-btn" title="스타벅스현대카드">
                        <img src={"." + process.env.PUBLIC_URL + "/images/lIpY1G_20211130084912188.png"} alt="퀵메뉴 스타벅스 현대카드"/>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default QuickMenuComponent;