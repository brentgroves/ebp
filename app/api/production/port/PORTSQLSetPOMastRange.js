
var sql = require('mssql');

import * as PORTACTION from "../../../actions/production/port/PORTActionConst.js"
import * as PORTSTATE from "../../../actions/production/port/PORTState.js"
import * as PORTCHK from "../../../const/ChkConst.js"
import * as CONNECT from "../../../const/SQLConst.js"
import * as MISC from "../../../const/Misc.js"

var sql1Done=false;
var sql1Cnt=0;
var sql1Failed=false;
var contPORT=false;
var noPOReqs=false;
const ATTEMPTS=1;



export async function sql1(disp,getSt){
//  var that = this;
  var dispatch = disp;
  var getState = getSt;
  var state = getState(); 
  if ('development'==process.env.NODE_ENV) {
    console.dir(state);
  }


  var cnt=0;
  init();
  execSQL1(dispatch,getState);

  while(!isDone() && !didFail()){
    if(++cnt>15){
      dispatch({ type:PORTACTION.SET_REASON, reason:`PORTSQLSetPOMastRange.sql1() Timed Out or Failed.` });
      dispatch({ type:PORTACTION.SET_STATE, state:PORTSTATE.FAILURE });
      break;
    }else{
      await MISC.sleep(2000);
    }
  }

  if(isDone()){
    if ('development'==process.env.NODE_ENV) {
      console.log(`PORTSQLSetPOMastRange.sql1(): Completed`)
    }

  }else{
    if ('development'==process.env.NODE_ENV) {
      console.log(`PORTSQLSetPOMastRange.sql1(): Did NOT Complete`)
    }
  }

  if(didFail()){
    if ('development'==process.env.NODE_ENV) {
      console.log(`PORTSQLSetPOMastRange.sql1(): Failed`)
    }

  }else{
    if ('development'==process.env.NODE_ENV) {
      console.log(`PORTSQLSetPOMastRange.sql1(): Suceeded`)
    }
  }

}

function init(){
  sql1Done=false;
  sql1Cnt=0;
  sql1Failed=false;
  contPORT=false;
}

export function isDone(){
  if(
    (true==sql1Done)
    )
  {
    return true;
  } else{
    return false;
  }
}

export function didFail(){
  if(
    (true==sql1Failed)
    )
  {
    return true;
  } else{
    return false;
  }
}
export function continuePORT(){
  if(true==contPORT)
  {
    return true;
  } else{
    return false;
  }
}


function execSQL1(disp,getSt){
  var dispatch = disp;
  var getState = getSt;
  var state = getState();
  if ('development'==process.env.NODE_ENV) {
    console.log(`PORTSQLSetPOMastRange.execSQL1() top=>${sql1Cnt}`);
  }


  var connection = new sql.Connection(CONNECT.cribDefTO, function(err) {
    // ... error checks
    if(null==err){
      if ('development'==process.env.NODE_ENV) {
        console.log(`PORTSQLSetPOMastRange.execSQL1() Connection Sucess`);
      }

      let sproc;

      if (MISC.PROD===true) {
        sproc = `bpPORTPOMastRange`;
      }else{
        sproc = `bpDevPORTPOMastRange`;
      }

      var postart,poend;

      var request = new sql.Request(connection); 
      request.output('postart', sql.Int);
      request.output('poend', sql.Int);
      request.execute(sproc, function(err, recordsets, returnValue, affected) {
        // ... error checks
        if(null==err){
          if ('development'==process.env.NODE_ENV) {
            console.log(`PORTSQLSetPOMastRange.execSQL1() Sucess`);
/*            console.log(recordsets.length); // count of recordsets returned by the procedure
            console.log(recordsets[0].length); // count of rows contained in first recordset
            console.log(returnValue); // procedure return value
            console.log(recordsets.returnValue); // same as previous line
            console.log(affected); // number of rows affected by the statemens
            console.log(recordsets.rowsAffected); // same as previous line
            console.log(request.parameters.postart.value); // output value
            console.log(request.parameters.poend.value); // output value
*/          }
          postart=request.parameters.postart.value;
          poend=request.parameters.poend.value;
          dispatch({ type:PORTACTION.SET_POMAST_RANGE,poMastRange:{postart,poend}});
          sql1Done=true;
          contPORT=true;
        }else {
          if(++sql1Cnt<ATTEMPTS) {
            if ('development'==process.env.NODE_ENV) {
              console.log(`PORTSQLSetPOMastRange.execSQL1().request.execute():  ${err.message}` );
              console.log(`sql1Cnt = ${sql1Cnt}`);
            }
          }else{
            if ('development'==process.env.NODE_ENV) {
              console.log(`PORTSQLSetPOMastRange.execSQL1().request.execute():  ${err.message}` );
            }
            dispatch({ type:PORTACTION.SET_REASON, reason:err.message });
            dispatch({ type:PORTACTION.SET_STATE, state:PORTSTATE.FAILURE });
            sql1Failed=true;
          }
        }
      });
    }else{
      if(++sql1Cnt<ATTEMPTS) {
        if ('development'==process.env.NODE_ENV) {
          console.log(`PORTSQLSetPOMastRange.Connection: ${err.message}` );
          console.log(`sql1Cnt = ${sql1Cnt}`);
        }
      }else{
        if ('development'==process.env.NODE_ENV) {
          console.log(`PORTSQLSetPOMastRange.Connection: ${err.message}` );
        }
        dispatch({ type:PORTACTION.SET_REASON, reason:err.message });
        dispatch({ type:PORTACTION.SET_STATE, state:PORTSTATE.FAILURE });
        sql1Failed=true;
      }
    }
  });
  
  connection.on('error', function(err) {
    if(++sql1Cnt<ATTEMPTS) {
      if ('development'==process.env.NODE_ENV) {
        console.log(`PORTSQLSetPORange.connection.on(error): ${err.message}` );
        console.log(`sql1Cnt = ${sql1Cnt}`);
      }

    }else{
      if ('development'==process.env.NODE_ENV) {
        console.log(`PORTSQLSetPOMastRange.connection.on(error): ${err.message}` );
      }
      dispatch({ type:PORTACTION.SET_REASON, reason:err.message });
      dispatch({ type:PORTACTION.SET_STATE, state:PORTSTATE.FAILURE });
      sql1Failed=true;
    }
  });
}


