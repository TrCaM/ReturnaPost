import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Card, Text} from 'react-native-elements'

class Home extends Component {

  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            containerStyle={styles.cardWidth}
            style={styles.innerCard}
            image={{uri:'https://static.velkybrands.com/i/items/5418/medium/3345051900.jpg'}}
          >
                <View style={styles.flexDirection}>
                  <View style={styles.item}>
                    <Text>
                      Last shipment received
                    </Text>
                  </View>
                  <View style={styles.item}>
                    <Text>
                      Date of last shipment received
                    </Text>
                  </View>
                  <View style={styles.item}>
                    <Text>
                      Total Shipments Received
                    </Text>
                  </View>
                </View>
            </Card>
          <Card 
            containerStyle={styles.cardWidth}
            image={{uri:'https://static.velkybrands.com/i/items/5418/medium/3345051900.jpg'}}>
            <Text style={{marginBottom: 10}}>
              Last return sent
            </Text>
          </Card>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  cardContainer: {
    flexDirection: 'row',
    flex:1
  },
  cardWidth: {
    flexDirection: 'column',
    flex:1
  },
  item: {
    flex:1
  },
  flexDirection: {
      flexDirection: 'column',
      flex:1
  },
  innerCard: {
    flexDirection: 'column',
    flex:1
  },
});
export default Home;
