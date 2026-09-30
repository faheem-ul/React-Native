import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";

const tabBarHeight = components.tabBar;

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  const Tabicon = ({ focused, icon }: { focused: boolean; icon: any }) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image className="tabs-glyph" source={icon} resizeMode="contain" />
        </View>
      </View>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: Math.max(insets.bottom, tabBarHeight.horizontalInset),
            height: tabBarHeight.height,
            marginHorizontal: 20,
            borderRadius: tabBarHeight.radius,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarItemStyle: {
            paddingVertical:
              tabBarHeight.height / 2 - tabBarHeight.iconFrame / 1.6,
          },
          tabBarIconStyle: {
            width: tabBarHeight.iconFrame,
            height: tabBarHeight.iconFrame,
            alignItems: "center",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => {
                return <Tabicon focused={focused} icon={tab.icon} />;
              },
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
