import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

//import postData from "../json/container.json";

const PostList = ({ icon, post }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <View style={{ flexDirection: "row" }}>
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
          <Image
            style={styles.moreStyle}
            source={{
              uri: icon.more
            }}
          />
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
            <View style={styles.iconStyle}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.iconImgStyle}
                  source={{
                    uri: icon.heart
                  }}
                />
                <Image
                  style={styles.iconImgStyle}
                  source={{
                    uri: icon.chat
                  }}
                />
                <Image
                  style={styles.iconImgStyle}
                  source={{
                    uri: icon.message
                  }}
                />
              </View>
              <View>
                <Image
                  style={styles.tagStyle}
                  source={{
                    uri: icon.tag
                  }}
                />
              </View>
            </View>
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
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconStyle: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  iconImgStyle: {
    height: 24,
    width: 24,
    marginBottom: 10,
    marginRight: 10
  },
  tagStyle: {
    height: 30,
    width: 30,
    paddingBottom: 10,
    marginRight: 5
  },
  moreStyle: {
    height: 24,
    width: 24,
    marginTop:20,
    marginRight:5
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
  textStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  likeStyle: {
    fontWeight: 'bold',
    fontSize: 15
  },
  nameStyle: {
    fontWeight: 'bold',
    paddingRight: 5
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