import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Styles } from "./Styles";

const MovieOverview = ({ overview }) => {
  const [textShown, setTextShown] = useState(false);
  return (
    <View>
      <Text style={Styles.titleText}>Overview</Text>
      <TouchableWithoutFeedback onPress={() => setTextShown(!textShown)}>
        <Text numberOfLines={textShown ? 0 : 3} style={Styles.textOverview}>
          {overview}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MovieOverview;