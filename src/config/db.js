import mongoose from 'mongoose';
import requireDir from 'require-dir';

mongoose.connect('mongodb://localhost:27017/api', {
    useUnifiedTopology:true,
  useNewUrlParser: true,
  useCreateIndex: true
});
requireDir('../models');
