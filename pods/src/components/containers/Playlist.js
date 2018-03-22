import React, { Component } from 'react';
import { Search } from '../presentation';
import { APIClient } from '../../utils';

class Playlist extends Component {
     searchPodcasts(event){
          if(event.keyCode != 13){
               return
          }

          const endpoint = '/search/'+event.target.value;

          APIClient
          .get(endpoint, null)
          .then(response =>{
               console.log(JSON.stringify(response))
          })
          .catch(err =>{
               console.log('ERROR' + JSON.stringigy(response))
          })

     }

     render(){
          return(
               <div>
                    <div className="hero-header bg-shop animated fadeindown">
                      <h1 className="hero-title">Playlist</h1>
                    </div>

                    <Search onSearch={this.searchPodcasts.bind(this)} />
               </div>
          )
     }
}
export default Playlist;
