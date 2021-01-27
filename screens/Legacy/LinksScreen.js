import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import { Camera } from 'expo-camera' // Add camera API

export default function LinksScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}
              Flip{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              snap = async () => {
                if (this.camera) {
                  let photo = await this.camera.takePictureAsync({
                    onPictureSaved: this.onPictureSaved,
                  })
                  console.log('hello world!')
                }
              }
              onPictureSaved = (photo) => {
                console.log(photo)
              }
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}
              Pic{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

LinksScreen.navigationOptions = {
  title: 'Links',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
