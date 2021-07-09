import app from './app';
import * as mongoose from 'mongoose';

mongoose.set('runValidators', true);
mongoose.set('toJSON', {
  transform: (from, to) => {
    to.id = from._id;
    delete to._id;
    delete to.__v;
  }
});

mongoose
  .connect(
    'mongodb+srv://app:sep2021@sep2021npms.ov3qh.mongodb.net/CVDatabase',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      autoIndex: true,
      useUnifiedTopology: true,
      keepAlive: true
    }
  )
  .then(() => console.log('connect to DB successfully :)'));

mongoose.connection.on('error', () => {
  console.log('DBERROR');
});

mongoose.connection.on('disconnected', () => {
  console.log('DB disconnected :(');
});

mongoose.connection.on('reconnected', () => {
  console.log('DB reconnected :)');
});

app.listen(3000, () => {
  console.log(`app is running on port 3000...`);
});
