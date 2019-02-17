import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import { List, Card, ListItem } from 'react-native-elements';

class Returns extends Component {

  state = {
		data: []
  }

  componentDidMount() {
  }

	renderItem(item) {
		return(
			<Card
			/>
		)
	}

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}

export default Returns;
