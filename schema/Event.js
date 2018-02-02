'use strict';

exports = module.exports = function(app, mongoose) {
  var EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    Date:{type:Date},
    startTime:{type:String },
    endTime:{type:String },
    username:{type:String , required:true},
    search:[String],
    venu:{type:String}
    

  });
  EventSchema.plugin(require('./plugins/pagedFind'));
  EventSchema.index({ name: 1 });
  EventSchema.index({ username: 1 });
  EventSchema.index({ Date: 1 });
  EventSchema.index({ venu: 1 });
  EventSchema.index({ startTime: 1 });
  EventSchema.index({ endTime: 1 });
  EventSchema.index({ search: 1 });
  
  
  EventSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Event', EventSchema);
};
