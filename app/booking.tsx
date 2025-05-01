import { useLocalSearchParams } from 'expo-router'
import { ScrollView, Text } from 'react-native'
import TourBookingForm from '@/components/TourBookingForm'
import destinations from '@/data/booking.json'


export default function BookingPage() {
  const { id } = useLocalSearchParams()
  const tour = destinations.find((t) => t.id === Number(id))

  if (!tour) return <Text>No found Tour !!!</Text>

  return (
    <ScrollView>
      <TourBookingForm basePrice={tour.price} schedules={tour.schedules} />
    </ScrollView>
  )
}
