// Refactor `makePhone` and `makeSmartPhone` to use pseudo classical inheritance
// They should have exactly the same methods as the objects returned from the
// original maker functions except in pseudo classical style. ie., you should be
// able to use your new functions like so to create new phone instances.
//
//   var myPhone = new Phone();
//   var mySmartPhone = new SmartPhone();
//

// DO NOT MODIFY FUNCTIONS `makePhone` AND `makeSmartPhone`
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

// var makePhone = function(phoneNumber) {
//   var result = {};

//   result.phoneNumber = phoneNumber;
//   result.send = function(recipientPhoneNumber, message) {
//     return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;
//   };

//   return result;
// };

// var makeSmartPhone = function(phoneNumber, email) {
//   var phone = makePhone(phoneNumber);
//   var oldSend = phone.send;

//   phone.email = email;
//   phone.send = function(recipientPhoneNumberOrEmail, message) {
//     if (typeof recipientPhoneNumberOrEmail === 'number') {
//       // We need `.call` here to make sure that `this` will reference our smart phone in makePhone's send
//       return oldSend.call(this, recipientPhoneNumberOrEmail, message);
//     } else {
//       return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
//     }
//   };

//   return phone;
// };

// your code is here
var makePhone = function(phoneNumber) {
  

  this.phoneNumber = phoneNumber;


};
// makePhone.prototype=Object.create(makePhone);
// makePhone.prototype.constuctor=makePhone;
makePhone.prototype.send=function (recipientPhoneNumber, message) {
    return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;
  };

var makeSmartPhone = function(phoneNumber, email) {
  makePhone.call(this,phoneNumber);
  var oldSend = this.send();
  this.email=email;
  

 
};
makeSmartPhone.prototype=Object.create(makePhone.prototype);
makeSmartPhone.prototype.constructor=makeSmartPhone;
makeSmartPhone.send = function(recipientPhoneNumberOrEmail, message) {
    if (typeof recipientPhoneNumberOrEmail === 'number') {
      // We need `.call` here to make sure that `this` will reference our smart phone in makePhone's send
      return oldSend.call(this, recipientPhoneNumberOrEmail, message);
    } else {
      return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
    }
  };