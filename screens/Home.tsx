import * as React from 'react';
import { StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar'
import GridContent from '../components/GridContent';
import { View } from '../components/Themed';
export default function Home() {
  return (
    
    <SafeAreaProvider > 
        <TopBar/>
        <ScrollView >
        <GridContent/>
        </ScrollView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
