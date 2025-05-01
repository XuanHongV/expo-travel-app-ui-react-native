import CategoryButtons from '@/components/CategoryButtons'
import GroupListings from '@/components/GroupListings'
import Listings from '@/components/Listings'
import Colors from '@/constants/Colors'
import listingData from '@/data/destinations.json'
import groupData from '@/data/groups.json'
import { Ionicons } from '@expo/vector-icons'
import { useHeaderHeight } from '@react-navigation/elements'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const Page = () => {
  const headerHeight = useHeaderHeight()
  const [category, setCategory] = useState('All')
  const [isChatVisible, setIsChatVisible] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<string[]>([])

  const onCatChanged = (category: string) => {
    setCategory(category)
  }

  const handleSendMessage = () => {
    if (chatInput.trim() === '') return
    setChatMessages([...chatMessages, chatInput])
    setChatInput('')
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: 'https://xsgames.co/randomusers/avatar.php?g=male',
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5 }}
                color={Colors.black}
              />
              <TextInput placeholder="Search..." />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <CategoryButtons onCagtegoryChanged={onCatChanged} />
          <Listings listings={listingData} category={category} />
          <GroupListings listings={groupData} />
        </ScrollView>
      </View>

      {/* Nút bong bóng chat */}
      <TouchableOpacity style={styles.chatBubble} onPress={() => setIsChatVisible(!isChatVisible)}>
        <Ionicons name="chatbubbles" size={24} color="white" />
      </TouchableOpacity>

      {/* Hộp chat nổi góc dưới */}
      {isChatVisible && (
        <View style={styles.floatingChatBox}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatTitle}>Chatting</Text>
            <TouchableOpacity onPress={() => setIsChatVisible(false)}>
              <Ionicons name="close" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.chatMessages}>
            {chatMessages.map((msg, index) => (
              <View key={index} style={styles.messageBubble}>
                <Text>{msg}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.chatInputWrapper}>
            <TextInput
              placeholder="Texting..."
              style={styles.chatInput}
              value={chatInput}
              onChangeText={setChatInput}
            />
            <TouchableOpacity onPress={handleSendMessage}>
              <Ionicons name="send" size={20} color={Colors.primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  chatBubble: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.primaryColor,
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  floatingChatBox: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: 280,
    height: 300,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 20,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 6,
    marginBottom: 6,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  chatMessages: {
    flex: 1,
    marginBottom: 6,
  },
  messageBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#f1f1f1',
    padding: 6,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: '80%',
  },
  chatInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 6,
    marginRight: 6,
  },
})
