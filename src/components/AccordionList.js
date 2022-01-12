import React, {useRef, useState} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

const AccordionList = ({title, children}) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(100);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.childrenContainer,
          // {height: bodyHeight},
          {opacity: animatedController},
        ]}>
        <View
          // onLayout={event =>
          //   setBodySectionHeight(event.nativeEvent.layout.height)
          // }
          style={styles.childrenBody}>
          {children}
        </View>
      </Animated.View>
    </>
  );
};

export default AccordionList;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: '5%',
  },
  childrenContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: '5%',
    overflow: 'hidden',
  },
  childrenBody: {},
});
