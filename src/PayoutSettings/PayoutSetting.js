import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  PanResponder,
  Alert,
  Dimensions
} from "react-native";
import styles from '../styles/DoctreatAppStyles';
import { withNavigation, DrawerActions } from "react-navigation";
import { ScrollableTabView } from "@valdio/react-native-scrollable-tabview";
import CustomHeader from "../Header/CustomHeader";
import * as CONSTANT from "../Constants/Constant";
import Payout from "./Payout";
import YourPayouts from "./YourPayouts";
import axios from "axios";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();

class PayoutSetting extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" />
        <CustomHeader headerText={CONSTANT.PayoutSettingheaderText} />

        <ScrollableTabView
          tabBarTextStyle={styles.AppointmentSettingsTabBarTextStyle}
          tabBarUnderlineStyl={{ color: "#3fabf3" }}
          tabBarActiveTextColor="#3d4461"
          style={styles.AppointmentSettingsScrollableTabBar}
          showsHorizontalScrollIndicator={false}
        >
          <Payout tabLabel="Payout Settings" />
          <YourPayouts tabLabel="Your Payouts" />
        </ScrollableTabView>
      </View>
    );
  }
}
export default withNavigation(PayoutSetting);
