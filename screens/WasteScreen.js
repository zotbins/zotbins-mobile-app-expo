import React, { Component, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ZotBinColors from '../constants/ZotBinColors';
import CalculateDiversionRate from "../api/CalculateDiversionRate";
import { Ionicons } from "@expo/vector-icons";

export default function WasteScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                      <View>
                        <Text>{"Banana doesn't belong in Recycling. Please dispose in Compost next time!"}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            setModalVisible(!modalVisible);
                          }}>
                          <Text>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                <TouchableOpacity style={{backgroundColor: ZotBinColors.lightGrayColor, paddingTop: 10, paddingBottom: 10}} onPress={() => { setModalVisible(true); }}>
                    <Text style={{fontSize: 15}}>
                    <Ionicons name={"md-alert"} size={15} color={ZotBinColors.errorBackground}/>
                    Disposed <Text style={{textDecorationLine: "underline"}}>{"Banana"}</Text>
                    in <Text style={{textDecorationLine: "underline"}}>{"Recycling"}</Text>
                    at <Text style={{textDecorationLine: "underline"}}>{"2:13pm"}</Text>
                    in <Text style={{textDecorationLine: "underline"}}>{"DBH Second Floor"}</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

WasteScreen.navigationOptions = {
    title: "Waste Activity Logs",
};
