var container;
var camera, scene, renderer;
var uniforms;

setTimeout(init, 60);
setTimeout(animate, 80);

let a,b;
a=2000;
b=2000;


function init() {

  container = document.getElementById( 'container' );

  camera = new THREE.Camera();
  camera.position.z = 1;

  scene = new THREE.Scene();

  var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

  uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() }
  };
  console.log(verte.data);
  var material = new THREE.ShaderMaterial( {
      uniforms: uniforms,
    //  vertexShader: document.getElementById( 'vertexShader' ).textContent,
    //  fragmentShader: document.getElementById( 'fragmentShader' ).textContent
      vertexShader: verte.data,
      fragmentShader: frage.data

  });

    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );

    container.appendChild( renderer.domElement );

    onWindowResize();
    window.addEventListener( 'resize', onWindowResize, false );

    document.onmousemove = function(e){
      uniforms.u_mouse.value.x = e.pageX/a
        uniforms.u_mouse.value.y = 1-e.pageY/b
    }
}

function onWindowResize( event ) {
    renderer.setSize( a,b);
    uniforms.u_resolution.value.x =  renderer.domElement.width;
    uniforms.u_resolution.value.y =  renderer.domElement.height;
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    uniforms.u_time.value += 0.01;
    renderer.render( scene, camera );
}
