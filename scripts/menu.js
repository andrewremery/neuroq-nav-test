// testing compiling
console.log('scripts are loaded');

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("jQuery loaded");
    } else {
        // jQuery is not loaded
		console.log("jQuery failed to load");
    }
}
