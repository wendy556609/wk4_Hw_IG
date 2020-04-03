import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

//import postData from "../json/container.json";

const PostList = ({ post, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: post.img
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.nameStyle}>{post.name}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: post.photo
            }}
          />
        </View>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <View>
              <Text style={styles.likeStyle}>{post.like} likes</Text>
            </View>
            <View style={styles.textStyle}>
              <Text style={styles.nameStyle}>{post.name}</Text>
              <Text>{post.text}</Text>
            </View>           
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    justifyContent: "space-around",
    paddingLeft: 10
  },
  textStyle:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  likeStyle:{
    fontWeight:'bold',
    fontSize:15
  },
  nameStyle:{
    fontWeight:'bold',
    paddingRight:5
  },
  cardContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default PostList;