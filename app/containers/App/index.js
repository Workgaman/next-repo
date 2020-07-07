import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Application from './Application';
import LandingCorporate from './Landing';
import 'antd/dist/antd.css';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

const { confirm } = Modal;
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  componentDidMount(){
    window.confirm=this.showConfirm;
  }
  showConfirm=async (title)=>{
return new Promise((resolve,reject)=>{
      confirm({
     title: "Are You Sure you want to Delete?",
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
    onOk() { 
      resolve(true);
    },
    onCancel() {
      resolve(false)
    },
    });
})
  }


  
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              <Route path="/" exact component={LandingCorporate} />
              <Route
                path="/app"
                render={(props) => <Application {...props} changeMode={changeMode} />}
              />
              <Route component={Auth} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
