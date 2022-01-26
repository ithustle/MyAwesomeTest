import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import DDB, { PLAYLIST_TABLE } from './../config';


export default () => {

    const saveDaylyListeners = () => {
        DDB.put({
            Item: {
                playlistId: '321',
                playlistName: 'Rua',
                musics: []
            },
            TableName: PLAYLIST_TABLE,
        })
            .promise()
            .then(data => console.log(data))
            .catch(console.error);
    };

    const addMusic = (musics: { title: string, url: string, id: number; artist: { name: string }; musics: Array<{ title: string }> }) => {
        const params = {
            TableName: PLAYLIST_TABLE,
            Key: {
                "playlistId": '321'
            },
            UpdateExpression: `SET #musics = list_append(if_not_exists(#musics, :empty_list), :p)`,
            ExpressionAttributeNames: {
                '#musics': 'musics'
            },
            ExpressionAttributeValues: {
                ":p": [musics],
                ":empty_list": []
            },
            ReturnValues: "UPDATED_NEW"
        };

        DDB.update(params)
            .promise()
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <View>
            <Text>INDEX</Text>
            <TouchableOpacity style={{ padding: 12 }} onPress={() => saveDaylyListeners()}>
                <Text>Clica</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 12 }} onPress={() => addMusic({
                title: 'Serias 2', url: 'https://www.logomais.com',
                id: 33,
                artist: {
                    name: 'FS'
                },
                musics: [
                    {
                        title: 'Bolada'
                    }
                ]
            })}>
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}