import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import DDB, { PLAYLIST_TABLE } from './../config';

export default () => {

    const [playlists, setPlaylists] = useState([]);

    let [value, setValue] = useState(0);

    const nav = useNavigation();

    useEffect(() => {
        getAllPlaylists();
    }, [value]);

    const removeSong = (position: number) => {
        console.log(position);

        DDB.update(
            {
                TableName: PLAYLIST_TABLE,
                Key: {
                    playlistId: '123'
                },
                UpdateExpression: `REMOVE musics[${position}]`,
                ReturnValues: "UPDATED_NEW"
            }
        ).promise().then(res => {
            console.log(res);
            setValue(value + 1);
        })
            .catch(e => {
                console.log(e)
            })
    }

    const getAllPlaylists = () => {
        const params = {
            Key: {
                playlistId: '123'
            },
            TableName: PLAYLIST_TABLE
        };
    
        DDB.get(params)
        .promise()
        .then(result => {
            setPlaylists(result.Item.musics);
        })
        .catch(console.log)
    }

    return (
        <FlatList
            data={playlists}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <TouchableOpacity activeOpacity={.8} onPress={() => removeSong(index)} style={{ padding: 12, flex: 1, backgroundColor: '#999', margin: 4 }}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )
}