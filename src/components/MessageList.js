import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import PostData from '../json/container.json'

const MessageList = ({ direct }) => {
    return (
        <ScrollView>
            <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{
                            uri: direct.img
                        }}
                    />
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.nameStyle}>{direct.name}</Text>
                        <Text>{direct.state}</Text>
                    </View>
                </View>
                <Image
                        style={styles.iconImgStyle}
                        source={{
                            uri: PostData.icons.camera
                        }}
                    />
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
    iconImgStyle: {
      height: 24,
      width: 24,
      margin:15
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
    nameStyle: {
      fontWeight: 'bold',
      paddingRight: 5
    },
    cardSectionStyle: {
      padding: 5,
      backgroundColor: "#fff",
    }
  });

export default MessageList;