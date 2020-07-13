// app.js
import {User} from './module/user';
App({
  onLaunch: function () {
    let user = new User();
    user.login();
  },
  globalData: {
    user: User
  }
});
