const express = require( 'express' );
require( 'dotenv' ).config();
const api = express();
const port = process.env.PORT;

api.use( express.static( 'public' ) );

api.get( '/generic', ( req, res ) => {
    const dir = __dirname + '/public/generic.html';
    res.sendFile( dir );
} );

api.get( '/elements', ( req, res ) => {
    const dir = __dirname + '/public/elements.html';
    res.sendFile( dir );
} );

api.get( '/', ( req, res ) => {
    const dir = __dirname + '/public/';
    res.sendFile( dir );
} );

api.listen( port, () => {
    console.log( `Escuchando en el puerto ${port}` );
} );
