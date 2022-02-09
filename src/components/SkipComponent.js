import React, { Component } from 'react';
 
class SkipComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <ul id="skip">
                    <li><a href="#header">메뉴바로가기</a></li>
                    <li><a href="#main">콘텐츠바로가기</a></li>
                    <li><a href="#footer">푸터바로가기</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default SkipComponent;