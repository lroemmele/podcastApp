import constants from '../constants';

var initialState ={

}

export default (state = initialState, action)=>{
     let updated = Object.assign({}, state);

     switch (action.type){
          case constants.PODCASTS_RECEIVED:
               console.log('PODCASTS_RECEIVED: '+JSON.stringify(action.podcasts))

               return updated;

          default:
               return state;
     }
}
