import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AIChat_Screen from './Screens/AIChat_Screen';
import ChatList_Screen from './Screens/ChatList_Screen';
import Contacts_Screen from './Screens/Contacts_Screen';
import FriendChat_Screen from './Screens/FriendChat_Screen';
import Setting_Screen from './Screens/Setting_Screen';

const Stack = createNativeStackNavigator();

export default function App(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName = 'Chats' > 
<Stack.Screen name = 'AIChat' component = {AIChat_Screen}/>
<Stack.Screen name = 'Chats' component = {ChatList_Screen}/>
<Stack.Screen name = 'Contacts' component = {Contacts_Screen}/>
<Stack.Screen name = 'Setting' component = {Setting_Screen}/>
<Stack.Screen name = 'FriendChats' component = {FriendChat_Screen}/>

</Stack.Navigator>


</NavigationContainer>
);

}
