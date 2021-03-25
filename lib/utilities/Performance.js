
const getPerformanceTracker = () => {
    if( typeof window !== "undefined" ) return window.performance;
    let performanceTracker;
    try {
        performanceTracker = require('perf_hooks').performance;
    }catch( err ){
        performanceTracker = {
            now: () => new Date()
        }
    }
    return performanceTracker;
}

class Performance {
    constructor() {
        this.performance = getPerformanceTracker();
    }
    setContext( context ){
        this.context = context;
    }
    start(){
        this.startTime = this.performance.now();
    }
    end(){
        this.endTime = this.performance.now();
        this.delta = this.endTime - this.startTime;
        return this.delta;
    }
    clear(){
        this.startTime = undefined;
        this.endTime = undefined;
        this.delta = undefined;
    }
}

class PerformanceMulti extends Performance {
    constructor() {
        super();
        this.markers = {};
    }
    addMarker( marker, context ){
        this.markers[ marker ] = new Performance();
        if( context ) this.markers[ marker ].setContext( context );
    }
    clearMarker( marker ){
        this.markers[ marker ].clear();
    }
    startMarker(marker){
        if(!this.startTime){
            this.start();
        }
        this.markers[ marker ].start();
    }
    endMarker(marker){
        return this.markers[ marker ].end();
    }
    getMarker(marker){
        return this.markers[ marker ];
    }
    getTotal(){
        return this.end();
    }
    getSummary(){
        let _total = 0;
        return Object.assign({},
            ...Object.keys(this.markers).map(marker => {
                _total += this.markers[marker].delta;
                return { [ marker ]: this.markers[marker].delta }
            }), { _total }
        )
    }
}

module.exports = PerformanceMulti;
