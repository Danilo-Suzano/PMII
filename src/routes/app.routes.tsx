import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";
import { Search } from "../pages/Search";

type AppRoutes = {
    dashboard: undefined;
    list: undefined;
    search: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes () {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: true,
            tabBarLabelPosition: 'beside-icon',
            tabBarInactiveBackgroundColor: 'white',
            tabBarStyle: {
                backgroundColor: 'lightgrey',
                height: 50,
            }
            }}>
            <Screen 
            name="dashboard" 
            component={Dashboard}
            options={{
                tabBarLabel: 'Add',
                tabBarIcon: ({ size, color }) => 
                    <FontAwesome6 
                     name="add" 
                     size={26} 
                    /> 
            }}
            />
            <Screen 
            name="list" 
            component={List}
            options={{
                tabBarLabel: 'List',
                tabBarIcon: ({ size, color }) => 
                    <FontAwesome 
                     name="list-ul" 
                     size={26} 
                    /> 
                    
            }}
            />
            <Screen 
            name="search" 
            component={Search}
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ size, color }) => 
                    <FontAwesome 
                     name="search" 
                     size={26} 
                    /> 
                    
            }}
            />
        </Navigator>
    )
}