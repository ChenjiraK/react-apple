export default class Util {
   static normalObject(obj: any) {
      if (!obj) {
         return null;
      }
      var json = JSON.stringify(obj);
      var normalObj = JSON.parse(json);
      return normalObj;
   }
   static isEmpty (value: any) {
      return value === null || value === undefined || value === ''
   }
   static removeNotNumber = (text: string) => {
      let rs = text.replace(/[^0-9]/g, '');
      return rs;
   };
   static isEmailFormat = (email: string) => {
      var rex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return rex.test(email);
   };
}
