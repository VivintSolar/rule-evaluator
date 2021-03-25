

class Performance {
    constructor(performance) {
        this.performance = performance || {
            now: () => new Date()
        }
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
    constructor(performance) {
        super(performance);
        this.markers = {};
    }
    addMarker( marker, context ){
        this.markers[ marker ] = new Performance(this.performance);
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
