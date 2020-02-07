import {vldtMethods} from './contactPageVldtrs.js';

export var app = {

    startValidating(e) {

        e.preventDefault();

        if  ( !vldtMethods.isEmpty() ) {

            return alert ( 'Information is incorrect!' )

        };

        var dataArr = document.getElementsByTagName( 'input' );

        for ( let el of dataArr ) {

            console.log( el.value );

        };

        return alert ( 'Data received' );

    },

    listCreatingMethod ( wrapper, arr ) {

        for ( let name of arr ) {

            
            let textNode = document.createTextNode( `${name.id} : ${name.value}` );
            let br = document.createElement( 'br' );

            wrapper.append( textNode );
            wrapper.append( br );

        }

        return wrapper;

    },

    createList ( e ) {

        e.preventDefault();

        var dataArr = document.getElementsByTagName( 'input' );
        var wrapper = document.createElement( 'div' );

        app.listCreatingMethod ( wrapper, dataArr );

        document.getElementById( 'tablesArea' ).append( wrapper );
        app.showClearButton ( e );

        return;

    },

    createTableMethode ( arr ) {

        var table = document.createElement( 'table' );
        var html = '<tbody>';

        if ( arr.user || arr.pass ) {

            html += `<tr><td>LOG:  ${arr.user} </td><td>PASS:  ${arr.pass}</td></tr>`; 

            table.innerHTML = html;
            table.style.border = '4px double black';

            return table;


        };

        for ( let el of arr ) {

            html += `<tr><td>${el.id} </td><td> ${el.value}</td></tr>`;

        };

        table.innerHTML = html;
        table.style.border = '4px double black';

        return table;

    },

    createTable ( e ) {

        e.preventDefault();

        var dataArr = document.getElementsByTagName( 'input' );
        var table = app.createTableMethode( dataArr );

        document.getElementById( 'tablesArea' ).append( table );

        app.showClearButton ( e );
        
        return;

    },

    showClearButton ( e) {

        e.preventDefault();

        let btn = document.getElementById( 'clear' );

        if ( btn.style.display == 'none' ) {

            btn.style.display = 'inline';
            return;

        }

        return;

    },

    HideClearButton ( e ) {

        e.preventDefault();

        let btn = document.getElementById( 'clear' );

        if ( btn.style.display == 'inline' ) {

            btn.style.display = 'none';
            return;

        }

        return;

    },

    clear ( e ) {

        e.preventDefault();

        let div = document.getElementById( 'tablesArea' );

        div.innerHTML = '';

        app.HideClearButton ( e );

        return;

    },

    switch ( e ) {

        e.preventDefault ();

        let contact = document.getElementById( 'wrapperContactUs' );
        let logIn = document.getElementById( 'loginPageId' );

        app.clear ( e );

        if ( contact.style.display == 'none' ) {

            document.getElementById( 'tablesArea' ).remove();

            let div = document.createElement( 'div' );

            div.id = 'tablesArea';

            logIn.style.display = 'none'

            contact.style.display = 'inline';

            contact.append( div );

            } else { 

                document.getElementById( 'tablesArea' ).remove();

                let div = document.createElement( 'div' );
    
                div.id = 'tablesArea';
    
                logIn.style.display = 'inline'
    
                contact.style.display = 'none';
    
                contact.append( div );

            };

        return;

    },

    init () {

        document.getElementById( 'btn' ).addEventListener( 'click', app.startValidating );

        document.getElementById( 'list' ).addEventListener( 'click', app.createList );

        document.getElementById( 'table' ).addEventListener( 'click', app.createTable );

        document.getElementById( 'clear' ).addEventListener( 'click', app.clear );

        
        let btnsArr = document.getElementsByClassName( 'switch' );

        for ( let el of btnsArr ) {

            el.addEventListener( 'click', app.switch );

        };


    }

};