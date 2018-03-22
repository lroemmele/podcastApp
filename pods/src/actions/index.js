import constants from '../constants';

export default {
     searchPodcasts: (params)=>{
          console.log('searchpodcast: '+JSON.stringify(params))
     },

     podcastsReceived: (podcasts)=>{
          return {
               type: constants.PODCASTS_RECEIVED,
               podcasts: podcasts
          }
     }
}
