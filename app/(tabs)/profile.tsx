import React, { useState } from 'react';
import { TextInput, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('account');
  const [userInfo, setUserInfo] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
  });
  

  return (
    <ScrollView style={styles.container}>
      {/* <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>← Quay lại</Text>
      </TouchableOpacity> */}

      <Text style={styles.title}>Your Account</Text>

      <View style={styles.content}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
        <View style={styles.profileBox}>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>
      {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : 'U'}
    </Text>
  </View>
  <View>
    <Text style={styles.name}>{userInfo.name || 'Not logged in'}</Text>
    <Text style={styles.email}>{userInfo.email || 'example@email.com'}</Text>
  </View>
</View>


          <View style={styles.menu}>
          <TouchableOpacity onPress={() => setActiveTab('personal')}>
              <Text style={activeTab === 'account' ? styles.menuItemActive : styles.menuItem}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('personal')}>
              <Text style={activeTab === 'personal' ? styles.menuItemActive : styles.menuItem}>Personal Information</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('password')}>
              <Text style={activeTab === 'password' ? styles.menuItemActive : styles.menuItem}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('logout')}>
              <Text style={activeTab === 'logout' ? styles.menuItemActive : styles.menuItem}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('delete')}>
              <Text style={activeTab === 'delete' ? styles.menuItemActive : styles.menuItem}>Request Account Deletion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('bookings')}>
              <Text style={activeTab === 'bookings' ? styles.menuItemActive : styles.menuItem}>Bookings</Text>
            </TouchableOpacity>
            
          </View>
        </View>

              {/* Dynamic Info Box */}
              <View style={styles.infoBox}>
                  {activeTab === 'account' && (
                      <>
                          <Text style={styles.sectionTitle}>Account</Text>
                          <Text style={styles.note}>Main account page</Text>
                      </>
                  )}

{activeTab === 'personal' && (
            <>
              <Text style={styles.sectionTitle}>Personal Information</Text>
              <Text style={styles.note}>
                Update your information and learn how we use it.
              </Text>

              <View style={styles.row}>
                <Text style={styles.label}>Full name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter full name"
                  value={userInfo.name}
                  onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
                />
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Gender:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Male/Female"
                  value={userInfo.gender}
                  onChangeText={(text) => setUserInfo({ ...userInfo, gender: text })}
                />
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Date of birth:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="dd/mm/yyyy"
                  value={userInfo.dob}
                  onChangeText={(text) => setUserInfo({ ...userInfo, dob: text })}
                />
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email"
                  keyboardType="email-address"
                  value={userInfo.email}
                  onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
                />
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Phone number:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter phone number"
                  keyboardType="phone-pad"
                  value={userInfo.phone}
                  onChangeText={(text) => setUserInfo({ ...userInfo, phone: text })}
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={() => console.log('Save info:', userInfo)}>
                <Text style={styles.buttonText}>Save changes</Text>
              </TouchableOpacity>
            </>
          )}


{activeTab === 'password' && (
            <>
              <Text style={styles.sectionTitle}>Change Password</Text>
              <Text style={styles.note}>Please enter your current and new password to change it.</Text>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Current password</Text>
                <TextInput secureTextEntry style={styles.input} placeholder="Enter current password" />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>New password</Text>
                <TextInput secureTextEntry style={styles.input} placeholder="Enter new password" />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Confirm new password</Text>
                <TextInput secureTextEntry style={styles.input} placeholder="Re-enter new password" />
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save changes</Text>
              </TouchableOpacity>
            </>
          )}

          {activeTab === 'logout' && (
            <>
              <Text style={styles.sectionTitle}>Log out</Text>
              <Text style={styles.note}>Are you sure you want to log out?</Text>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#ef4444' }]}>
                <Text style={styles.buttonText}>Log out</Text>
              </TouchableOpacity>
            </>
          )}

          {activeTab === 'delete' && (
            <>
              <Text style={styles.sectionTitle}>Request Account Deletion</Text>
              <Text style={styles.note}>This will send a request to the system to delete your account. We will contact you to confirm.</Text>
              <TextInput
                style={[styles.input, { height: 80 }]}
                multiline
                placeholder="Please state your reason for deleting your account..."
              />
              <TouchableOpacity style={[styles.button, { backgroundColor: '#dc2626' }]}>
                <Text style={styles.buttonText}>Send Deletion Request</Text>
              </TouchableOpacity>
            </>
          )}

          {activeTab === 'bookings' && (
            <>
              <Text style={styles.sectionTitle}>Bookings</Text>
              <Text style={styles.note}>Your recent tour bookings will be shown here.</Text>
              <View style={styles.card}>
                <Text style={styles.label}>Tour: Da Lat 3D2N</Text>
                <Text style={styles.label}>Start date: 10/06/2025</Text>
                <Text style={styles.label}>Status: Confirmed</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.label}>Tour: Phu Quoc 4D3N</Text>
                <Text style={styles.label}>Start date: 15/07/2025</Text>
                <Text style={styles.label}>Status: Pending</Text>
              </View>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    backText: {
      fontSize: 16,
      color: '#2e6cf6',
      marginBottom: 12,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
    },
    content: {
      gap: 20,
    },
  
    sidebar: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      padding: 12,
    },
    profileBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      gap: 12,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#9333ea',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    name: {
      fontWeight: 'bold',
    },
    email: {
      color: '#888',
      fontSize: 12,
    },
  
    menu: {
      gap: 8,
    },
    menuItem: {
      fontSize: 14,
      color: '#555',
    },
    menuItemActive: {
      fontSize: 14,
      color: 'red',
      fontWeight: 'bold',
    },
  
    infoBox: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      padding: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    note: {
      fontSize: 12,
      color: '#666',
      marginBottom: 12,
    },
  
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    label: {
      fontWeight: 'bold',
      width: '40%',
    },
    value: {
      width: '55%',
    },
  
    formGroup: {
      marginBottom: 12,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      padding: 8,
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#F39C12',
      padding: 12,
      borderRadius: 6,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  
    card: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#e5e7eb',
    },
  });
  