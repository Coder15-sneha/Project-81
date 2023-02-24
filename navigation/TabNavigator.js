import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

 const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === 'Feed') {
                    iconName = focused
                    ? 'home-sharp':
                    'home-outline';
                }
                else if(route.name === 'CreatePost'){
                    iconName = focused
                    ? 'add-circle-sharp'
                    : 'add-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }
        })}
        tabBarOptions ={{
            activeTintColor: '#F7F700',//yellow
            inactiveTintColor: '#6F5AA4',//purple
        }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>
    );
 }

 export default BottomTabNavigator