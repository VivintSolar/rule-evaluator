
//cleanUpErrors

module.exports = (function(ids){
    if(ids){
        ids.map(id=>{
            if( this._errors && this._errors.map[id] ){
                this._errors.map[id].filter(error=>{return error.timeStamp === this._timeStamp});
                this._errors.list.map(error=>{return error.id!==id||error.timeStamp === this._timeStamp});
                if(this._errors.map[id].length === 0) this._errors.map[id] = undefined;
                if(this._errors.list.length === 0 ) this._errors = undefined;
            }
        })
    }
})