var world = document.getElementById( 'world' ),
	viewport = document.getElementById( 'viewport' ),
	worldXAngle = 0,
	worldYAngle = 0,
	d = 0;

window.addEventListener( 'mousemove', function( e ) {

  worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
  worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;

  updateView();

} );

function updateView() {

  world.style.transform = 'translateZ( ' + d + 'px ) \
  rotateX( ' + worldXAngle + 'deg) \
  rotateY( ' + worldYAngle + 'deg)';

}


/*
  objects is an array of cloud bases
  layers is an array of cloud layers
*/
var objects = [],
  layers = [];

/*
  Clears the DOM of previous clouds bases
  and generates a new set of cloud bases
*/
function generate() {

  objects = [];
  layers = [];

  if ( world.hasChildNodes() ) {
    while ( world.childNodes.length >= 1 ) {
      world.removeChild( world.firstChild );
    }
  }

  for( var j = 0; j < 5; j++ ) {
    objects.push( createCloud() );
  }

}

/*
  Creates a single cloud base: a div in world
  that is translated randomly into world space.
  Each axis goes from -256 to 256 pixels.
*/
function createCloud() {

  var div = document.createElement( 'div'  );
  div.className = 'cloudBase';
  var t = 'translateX( ' + random_x + 'px ) \
    translateY( ' + random_y + 'px ) \
    translateZ( ' + random_z + 'px )';
    console.log(t);
  div.style.transform = t;
  world.appendChild( div );

  return div;

}
//generate();