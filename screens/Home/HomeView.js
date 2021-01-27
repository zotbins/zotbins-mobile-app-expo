import React from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Button,
  Card,
  CardItem,
} from 'native-base'

const HomeView = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>ZotBuddy</Title>
        </Body>
        <Right />
      </Header>
      <Content
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 40,
          paddingHorizontal: 10,
        }}
      >
        <Card>
          <CardItem>
            <Text>Test text</Text>
          </CardItem>
          <CardItem>
            <Text>Test text</Text>
          </CardItem>
        </Card>
        <Button
          dark
          block
          onPress={() => {
            console.log('donothing')
          }}
          style={{ marginTop: 40 }}
        >
          <Text>Test</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default HomeView
