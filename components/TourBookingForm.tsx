import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

type Props = {
  basePrice: number
  schedules: string[]
}

const Booking = ({ basePrice, schedules }: Props) => {
  const [selectedDate, setSelectedDate] = useState(schedules[0])
  const [adults, setAdults] = useState(0)
  const [child610, setChild610] = useState(0)
  const [child25, setChild25] = useState(0)
  const [infants, setInfants] = useState(0)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const totalPrice =
    basePrice * adults +
    basePrice * 0.75 * child610 +
    basePrice * 0.5 * child25

  const renderCounter = (label: string, value: number, onChange: (val: number) => void) => (
    <View style={styles.row}>
      <Text>{label}</Text>
      <View style={styles.counter}>
        <TouchableOpacity onPress={() => onChange(Math.max(0, value - 1))}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>
        <Text>{value}</Text>
        <TouchableOpacity onPress={() => onChange(value + 1)}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const handleBooking = () => {
    if (!fullName || !email || !phone) {
      alert('Please enter all customer information!')
      return
    }

    // Submit booking data or navigate
    alert(`Booking successful!\nName: ${fullName}\nDate: ${selectedDate}\nTotal: ${totalPrice.toLocaleString()}₫`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.heading}>Schedule & Tour Price</Text>

      <View style={styles.scheduleRow}>
        {schedules.map((date) => (
          <TouchableOpacity
            key={date}
            onPress={() => setSelectedDate(date)}
            style={[
              styles.scheduleBtn,
              selectedDate === date && styles.selectedBtn,
            ]}
          >
            <Text>{date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderCounter(`Adults (>10 years) x ${basePrice.toLocaleString()}₫`, adults, setAdults)}
      {renderCounter('Children (6–10 years)', child610, setChild610)}
      {renderCounter('Children (2–5 years)', child25, setChild25)}
      {renderCounter('Infants (<2 years)', infants, setInfants)}

      <Text style={styles.total}>Total Price: {totalPrice.toLocaleString()}₫</Text>

      <TouchableOpacity style={styles.bookBtn} onPress={handleBooking}>
        <Text style={styles.bookBtnText}>Request Booking</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FDEBD0',
    borderRadius: 10,
    marginVertical: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#2C3E50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  scheduleRow: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 8,
    flexWrap: 'wrap',
  },
  scheduleBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ECF0F1',
  },
  selectedBtn: {
    backgroundColor: '#85C1E9',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  btn: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#2980B9',
  },
  total: {
    fontWeight: 'bold',
    marginTop: 16,
    fontSize: 16,
    color: '#D35400',
  },
  bookBtn: {
    marginTop: 10,
    backgroundColor: '#F39C12',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
