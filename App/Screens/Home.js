import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import ChatFaceData from "../Services/ChatFaceData";

export default function Home() {
  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
//   const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    setChatFaceData(ChatFaceData);
    setSelectedData(ChatFaceData[0]);
    // setImagePath(ChatFaceData[0].image);
    // setImagePath('../../assets/Noyi.png');
  }, []);
  return (
    <View style={[{ alignItems: "center" }, { paddingTop: 90 }]}>
      <Text style={[{ color: selectedData.primary }, { fontSize: 30 }]}>
        Hello
      </Text>
      <Text
        style={[
          { color: selectedData.primary },
          { fontSize: 30 },
          { fontWeight: "bold" },
        ]}
      >
        I am {selectedData.name}
      </Text>
      <Image
        style={{ width: 150, height: 150, marginTop: 20 }}
        source={{uri: imagePath}}
        // source={{
        //   uri: selectedData.image,
        // }}
      />
    </View>
  );
}
