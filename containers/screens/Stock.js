/**
 * Created by jocelio on 14/02/18.
 */
import React, {Component} from "react";
import { connect } from 'react-redux';
import {Text, View, ListView, ActivityIndicator, StyleSheet, Alert} from "react-native";
import {Button, Container, Content, List, ListItem} from 'native-base'
import MenuSettings from "../common/MenuSettings";
import CustomHeader from '../common/CustomHeader'
import {getStock} from "../../actions/stock";


class Stock extends Component {

    static navigationOptions = MenuSettings({label:'Estoque',iconName:'toc'});

    constructor(props) {
        super(props);
        this.state = {loading:false};

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds: ds
        };
    }

    componentDidMount() {
        this.setState( prev => ({loading: !prev.loading}))
        this.props.getStock().then(r => {
            this.setState( prev => ({loading: !prev.loading}));
        });
    }

    render() {

        const comp = (this.state.loading) ?
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator
                    animating={true}
                    style={[{height: 80, width:80}]}
                    size="large"
                />
            </View>
            :
            <View style={{backgroundColor: '#F5F5F5', paddingTop:20}}>
                <List dataArray={this.props.stockList}
                      renderRow={(item) =>
                          <ListItem>
                              <View style={{flex:1, flexDirection: 'column'}}>
                                  <Text>{item.id}</Text>
                                  <Text>{item.product_name}</Text>
                                  <Text>{item.vendor_name}</Text>
                              </View>
                          </ListItem>
                      }>
                </List>
            </View>

        return (
            <Container>

                <CustomHeader title={Stock.navigationOptions.tapBarLabel} drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content
                    contentContainerStyle={{ padding: 10 }}
                >

                    <Text>Itens</Text>
                    {comp}



                </Content>

            </Container>
        );
    }

}

function mapStateToProps(state) {
    return {
        stockList: state.stockReducer.stockList || []
    }
}

export default connect(mapStateToProps, { getStock })(Stock)


const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // height: 50,
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});

