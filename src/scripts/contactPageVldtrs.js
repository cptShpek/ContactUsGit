export var vldtMethods = {

    isEmpty () {
        
        let dataArr = document.body.getElementsByTagName( 'input' );


        for ( let name of dataArr ) {

            if ( !name.value ) {

                alert ( `${name.id} is empty!` );
                return false;

            };

        };
        
        if ( !vldtMethods.nameField () ) {

            return false

        };

        return true;
        
    },

    nameField () {

        if ( typeof ( document.getElementById( "name" ).value ) != 'string' ) {

            return alert ( 'Only letters at "First Name" field!' );

        };

        if ( !vldtMethods.lastNameField() ) {

            return false

        };

        return true;

    },

    lastNameField () {

        if ( typeof(document.getElementById( "nameSecond" ).value ) != 'string' ) {

            return alert ( 'Only letters at "Last Name" field!' )

        };

        if ( !vldtMethods.emailField () ) {

            return false

        };

        return true;

    },

    emailField () {

        if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( document.getElementById( 'email' ).value ) ) {
        
          if ( !vldtMethods.numberField() ) {

            return false;

          };  
          
          return true;

        }
          
        alert("You have entered an invalid email address!")

        return false;
    },

    numberField () {

        if ( typeof( +document.getElementById( "number" ).value ) != 'number' ) {

            alert ( 'Only letters at "Number" field!' );

            return false;

        };

        if ( !vldtMethods.mesageField() ) {

            return false;

        };
        
        return true;

    },

    mesageField () {

        if ( typeof( document.getElementById( "textarea" ).value ) != 'string' ) {

            alert( 'Only letters at "Your Message" field!' );
            
            return false;

        };

        return true;

    },

}