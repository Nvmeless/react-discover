import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { fetchPlaylists } from '../../store';

const PlayListPictureContainerStyle = styled.div`
    width:20vw;
    maxWidth:20vw;
    
` 
const PlayListRowStyle = styled.div`
    display:flex;
    color:black;
    background: ${ props => props?.i % 2 ?  'rgba(0,0,0, .05)' :'transparent'};
    align-items:center;
    gap: 5%;
` 
const PlaylistTitleStyle = styled.p`
font-size: 1.1em;
`

export const ReduxPlaylist = () => {

const playlists = useSelector((state) => {

    console.log(state)
    return state.playlists

})

const [dataLoaded, setDataLoaded] = useState(playlists.status);


const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchPlaylists('payload'));
}, [])


useEffect(() => {
    console.log("PLAYLIST A CHANGÉ POUR : ", playlists)
    setDataLoaded(playlists.status)
}, [playlists])

const renderPlaylist =() =>  {
    
    return dataLoaded === "succeeded" ? playlists.playlists.map((playlist) => { return <PlayListRowStyle>{playlist.name}</PlayListRowStyle>}) :"Nothing to display"
}

return (

    <div>{renderPlaylist()}</div>
)




}