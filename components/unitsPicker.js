import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
// import { Container, Header, Content, Icon, Form } from "native-base";
import { Picker } from '@react-native-community/picker';

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={ styles.unitsSystem }>
      <Picker selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)} mode='dropdown'>
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />

      </Picker>
    </View>

    // <Container>
    //     <Header />
    //     <Content>
    //       <Form>
    //         <Picker
    //           mode="dropdown"
    //           iosIcon={<Icon name="arrow-down" />}
    //           placeholder="Select your SIM"
    //           placeholderStyle={{ color: "#bfc6ea" }}
    //           placeholderIconColor="#007aff"
    //           style={{ width: undefined }}
    //           selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)}
    //         >
    //            <Picker.Item label="C°" value="metric" />
    //            <Picker.Item label="F°" value="imperial" />
    //         </Picker>
    //       </Form>
    //     </Content>
    //   </Container>
  )
}

const styles = StyleSheet.create ({
  unitsSystem: {
    // backgroundColor: '#add8e6',
    position: 'absolute',
    top: 20,
    left: 15,
    ...Platform.select({
      ios: {
        top: 20
      },
      android: {

      }
    }),
    height: 60,
    width: 50
  }
})