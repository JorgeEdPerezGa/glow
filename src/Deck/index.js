import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if( gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
      } else {
        this.resetPosition();
        }
      }
    })
    this.state = { panResponder, position, index: 0, totalPoints: 0, counter: 0, totals: 0 };
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
    LayoutAnimation.spring();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data !== this.props.data) {
      this.setState({ index: 0 })
    }
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: 250
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];
    this.addPoints(direction);

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    const nextScore = direction === 'right' ? this.state.counter + 1 : this.state.counter;

    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1, counter: nextScore });
  }

  addPoints(direction) {
    direction === 'right' ? this.setState({
      totalPoints: this.state.totalPoints + 1
    }) : null;
  }


  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  async componentDidMount() {
    let totals = await this.fetchDailyTotals();
    await this.setState({ totals })
  }

  fetchDailyTotals = async() => {
    const initialFetch = await fetch(`https://hyperglow.herokuapp.com/api/v1/users/1/daily_totals`);
    return await initialFetch.json();
  }

  postDailyTotal = async() => {
    const { totals } = this.state;
    const daily_total = this.state.counter
    console.log(totals);
    const week_start_date = totals % 7 === 0 ? new Date() : totals[totals.length - 1].week_start_date;
    const post = await fetch(`https://http://localhost:3000/api/v1/users/1/daily_totals`, {
      method: 'POST',
      body: JSON.stringify({ current_date: new Date(), week_start_date, daily_total}),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return await post.json();
  }

  renderCards() {
    if(this.state.index >= this.props.data.length) {
      this.postDailyTotal()
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, index) => {
      if(index < this.state.index) {
        return null;
      }

      if(index === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this.getCardStyle(), styles.cardStyle]}
            {...this.state.panResponder.panHandlers}>
              {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { top: 10 * (index - this.state.index)}]}>
            {this.props.renderCard(item)}
        </Animated.View>

      )
    }).reverse();
  }

  render(){
    return (
      <View>
          {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width:SCREEN_WIDTH
  }
}


export default Deck;
