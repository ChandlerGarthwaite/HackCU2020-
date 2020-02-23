import  {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import login from './login';
import menu from './assassin';
import radar from './radar';
import con from './con';
import create from './create';
import joingame from './joingame';
import gamecode from './gamecode';

const screens = {
  login: {
    screen: login
  },
  menu: {
    screen: menu
  },
  radar: {
	screen: radar
  },
  con: {
  screen: con
  },
  create: {
  screen: create
},
joingame: {
screen: joingame
},
gamecode: {
screen: gamecode
}

}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);