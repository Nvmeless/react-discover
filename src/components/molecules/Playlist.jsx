import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

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

export class Playlist extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            items:[],
            DataIsLoaded: false
            
        }
        this.getPlateformAdaptor = this.getPlateformAdaptor.bind(this)
    }


    get(){
        // retourne les playlists avec un appel a Spotify
        const token = 'BQCs1UXH_sNU7uqnAqBeilr3oqTx_EahESvJsJ7G5HhgtkaBVExo5URhM34cImOu-L3mAEuOi2HyK0BErm9gGMs2Uyd09-VZ1QfYxQiQLcxbH21CVm1PW4u1cSPR9Z_BniHijD6t4Fs1yXyQd6vfCUzjvECsIHjii-zjHg_BxQxQukpcftVBKqG1IQFpvUKeZDTTKyV_Xe8Xrv7P'
        const config = {
            url:'https://api.spotify.com/v1/me/playlists',
            method:'get',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            // data:{}
        }

        axios(config).then((response) => {
            this.getPlateformAdaptor(response)
        }).catch((error) => {
            console.log("ERR: ", error);
            return error
        })

    }


    componentDidMount() {
        this.get()
    }

    getPlateformAdaptor(response) {
        if( 200 === response?.status ){
        
            const spotify = (response) => {



                const row = (item) => {
                    if(item) {
                        return{
                            id:item.id,
                            picture:{
                                custom: item.images[0],
                                generated: item.images[1],
                            },
                            name:item?.name,
                            owner:{
                                picture:{

                                }
                            }
                        }
                    } 
                    else {
                        return 
                    }
                }



                return {
                    data:{
                        rows:response.data.items.map((item) => {
                            return row(item)})
                    }
                }
            }

            let datas = spotify(response);
            this.setState({items:datas.data.rows })
            this.setState({DataisLoaded: true})
       }
    }
    render() {
        return (
            <div style={{
            
            }}>
            {
                this.state.items.map((item, i) => {
                    return ( 
                                    <PlayListRowStyle i={i}>
                                        <PlayListPictureContainerStyle>
                                                        <img 
                                                            style={
                                                                {
                                                                    width: "inherit",
                                                                    height:"inherit",
                                                                    borderRadius:"10px"
                                                                    }} 
                                                            src={item?.picture?.custom?.url}/>
                                                        </PlayListPictureContainerStyle>
                                            <PlaylistTitleStyle>
                        <p>
                            {item.name.length > 28 ? item.name.slice(0,28) + '...' : item.name}
                        </p>
                    </PlaylistTitleStyle>
        </PlayListRowStyle>

                )})
            }
        </div>
    );
    }




}