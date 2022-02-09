import React from 'react';
import SkipComponent from './SkipComponent'; //스킵메뉴 컴포넌트
import WrapComponent from './WrapComponent';
import MobileNavComponent from './MobileNavComponent';
import QuickMenuComponent from './QuickMenuComponent';
import GoTopComponent from './GoTopComponent';
import ValidatorComponent from './ValidatorComponent';

function App() {
  return (
    <React.Fragment>
        <SkipComponent/>
        <WrapComponent/>
        <MobileNavComponent/>
        <QuickMenuComponent/>
        <GoTopComponent/>
        <ValidatorComponent/>
    </React.Fragment>
  );
}

export default App;
