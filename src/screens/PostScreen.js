import React from "react";
import { View, FlatList } from "react-native";
import PostData from "../json/container.json";
import PostList from "../components/PostList";

const PostScreen = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
        data={PostData.posts}
        renderItem={({ item }) => 
        <PostList 
        icon={PostData.icons}
        //
        post={item} 
        />}
        keyExtractor={item => item.id}
        />
    </View>
    );
  };
  
  export default PostScreen;