import dayjs from "dayjs";
import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import Listheading from "@/components/Listheading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/lib/utils";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      {/* show name and avatar for adding new subscription */}
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />

          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>

        <View className="rounded-full border border-black/20 p-3">
          <Image source={icons.add} className="size-7" />
        </View>
      </View>

      {/* show balance and next renewal date */}
      <View className="home-balance-card">
        <Text className="text-xl font-sans-semibold text-white/80">
          Balance
        </Text>

        <View className="home-balance-row">
          <Text className="home-balance-amount">
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>
          <Text className="home-balance-date">
            {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
          </Text>
        </View>
      </View>

      {/* show upcoming subscriptions */}
      <View>
        <Listheading title="Upcoming" />
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="text-center text-lg font-sans-medium text-foreground">
              No upcoming renewals yet.
            </Text>
          }
        />
      </View>

      <View>
        <Listheading title="All Subscriptions" />
      </View>
    </SafeAreaView>
  );
}
