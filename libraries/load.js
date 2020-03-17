
    function dataLoader()
{
    this.data_count = 2;
    this.data_array = new Array();
}

function loadFile( file, loader ){

    var FileObject = new Object();
    FileObject.data  = "";
    FileObject.ready = false;
    FileObject.id    = loader.data_count;
    loader.data_array[loader.data_count] = false;
    $.ajax({
        type: "GET",
        url: file,
        dataType: "text"
    }).done( function( msg ) {
        FileObject.data = msg;
        FileObject.ready = true;
        loader.data_array[FileObject.id] = true;
    });
    loader.data_count += 1;
    return FileObject;
}

function load(){
  var loader = new dataLoader();
   verte = loadFile( "shader2.js", loader );
   frage = loadFile( "shader1.js", loader );


}

let verte,frage;

load();
