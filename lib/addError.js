

// addError

module.exports = (function( id, message, type ){
    if(message==='clear') this._errors = null;
    else {
        const timeStamp = this._timeStamp;
        if(!this._errors) this._errors = {list:[],map:{}};
        if(!this._errors.map[id]) this._errors.map[id] = [];
        this._errors.map[id].push({id,message,timeStamp,type});
        this._errors.list.push({id,message,timeStamp,type});
    }
})