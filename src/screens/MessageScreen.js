import React from "react";
import { View, FlatList } from "react-native";
import MessageData from "../json/message.json";
import MessageList from "../components/MessageList";

const MessageScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={MessageData.direct}
                renderItem={({ item }) =>
                    <MessageList
                        direct={item}
                    />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default MessageScreen;