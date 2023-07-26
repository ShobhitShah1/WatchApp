import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WatchDetailScreen from "./app/Watch/WatchDetailScreen";
import WatchScreen from "./app/Watch/WatchScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Watch" component={WatchScreen} />
        <Stack.Screen name="WatchDetail" component={WatchDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
