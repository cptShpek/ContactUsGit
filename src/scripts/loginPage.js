import { app } from './contactPage'

export const logData = new Map ();

export var log = {

    generator () {

        let log = {}

        log.user = Math.random().toString( 36 ).substring( 2, 15 ) + Math.random().toString( 36 ).substring( 2, 15 );
        log.pass = Math.random().toString( 36 ).substring( 2, 15 ) + Math.random().toString( 36 ).substring( 2, 15 );

        logData.set( log.user, log.pass );

        return log;

    },

    logOutput ( e ) {

        e.preventDefault(); 

        let logs = log.generator ();

        let table = app.createTableMethode( logs );

        document.getElementById( 'tablesArea' ).append( table );

    },

    validating ( e ) {

        e.preventDefault();

        let logValue = document.getElementById( 'userLog' ).value;

        let passValue = document.getElementById( 'userPass' ).value;
        
          for ( let entry of logData ){
            if ( entry == `${logValue},${passValue}` ) { 

                alert ( 'Login Success!' );

                app.clear ( e );
                app.switch ( e );

                return;

          };

        };
        
        return alert( 'Invalid Access Data' );

    },

    init () {

        document.getElementById( 'generator' ).addEventListener( 'click', log.logOutput );

        document.getElementById( 'goIn' ).addEventListener( 'click', log.validating );

    },

}