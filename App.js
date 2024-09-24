import { TouchableOpacity, Text, View } from 'react-native';
import * as Contacts from "expo-contacts"

export default function App() {
  function handleCreateContact() {
    Contacts.presentFormAsync(null, { "firstName": "Test" }, { cancelButtonTitle: "CANCEL!" })
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleCreateContact}>
        <Text>Create contact</Text>
        </TouchableOpacity>
    </View>
  );
}
