import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/views/login'

console.disableYellowBox = true

const routes = createStackNavigator({
  Login: {
    screen: Login
  }
}, { headerMode: "null" })

const App = createAppContainer(routes)
export default App 