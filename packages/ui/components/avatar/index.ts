import Avatar from "./src/index.vue";

Avatar.install = function (app) {
  app.component(Avatar.name, Avatar);
};
export const YuAvatar = Avatar;
export default Avatar;
