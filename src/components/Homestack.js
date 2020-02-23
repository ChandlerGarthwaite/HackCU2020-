import  {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import login from './login'
import menu from './assassin'
import radar from './radar'

const screens = {
  login: {
    screen: login
  },
  menu: {
    screen: menu
  },
  radar: {
	screen: radar
  }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);