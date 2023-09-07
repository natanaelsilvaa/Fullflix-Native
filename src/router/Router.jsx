import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../view/login/Login";
import { HomeList } from "../view/homelist/HomeList";
import { Register } from "../view/register/Register";
import { Detail } from "../view/detail/Detail";

const Stack = createNativeStackNavigator();

export const Router = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name='Login'
               component={Login}
               options={{
                   headerShown: false,
               }}
            />
               <Stack.Screen
                  name='HomeList'
                  component={HomeList}
                  options={{
                      headerShown: false,
                  }}
               />
            <Stack.Screen
               name='Register'
               component={Register}
               options={{
                   headerShown: false,
               }}
            />
            <Stack.Screen
               name='Detail'
               component={Detail}
               options={{
                   headerShown: false,
               }}
            />

         </Stack.Navigator>
      </NavigationContainer>
   );
};