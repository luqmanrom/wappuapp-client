'use strict';

import React, { PropTypes } from 'react';
import {
  ToolbarAndroid,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../style/theme';

// TODO re-enable
// const toolbarActions = [
//   {title: 'Share', id:'share'}
// ];

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: theme.primary,
    position: 'relative',
    left:0,
    top:0,
    right:0,
    elevation: 0,
    height: 56,
    justifyContent: 'flex-start',
  }
});

var EventDetailToolbar = React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  },

  _goBack() {
    this.props.navigator.pop();
  },

  _onActionSelected: function(position) {
    //TODO switch toolbarActions[position]
  },

  render() {
    const toolbarStyles = [styles.toolbar];

    if (this.props.backgroundColor) {
      toolbarStyles.push({backgroundColor: this.props.backgroundColor})
    }

    console.log(this.props.navigator);

    return (
      <Icon.ToolbarAndroid
        // actions={[{title: 'Share', id:'share'}, {title: 'Settings', id:'settings'}]}
        // actions={toolbarActions} TODO - SHARE
        // onActionSelected={this._onActionSelected}
        // logo={require('../../../assets/logo--android.png')}
        // navIconName={'arrow-back'}
        onIconClicked={this._goBack}
        iconColor={theme.light}
        titleColor={theme.light}
        style={toolbarStyles}
        title={this.props.title}
      />
    );
  }
});

module.exports = EventDetailToolbar;