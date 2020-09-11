function callServer() {
    var p = arguments[0];
    for (var idx in p) {
    p[idx] = p[idx] + ' - processado pela NASA';
    }
    return p;
    }

export default callServer;