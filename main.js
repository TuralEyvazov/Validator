// const register = {
//   passwordValidator: function (password) {
//     if (!(password.length > 7)) {
//       throw new Error("Parol 8 ve yuxari character olmalidir");
//     }
//     if (!password.match("[0-9]")) {
//       throw new Error("Parolda en azi 1 eded reqem olmalidir");
//     }
//     if (!password.match("[A-Z]")) {
//       throw new Error("En azi 1 eded herf boyuk olmalidir");
//     }
//     if (!password.match("[a-z]")) {
//       throw new Error("En azi 1 eded herf kicik olmalidir");
//     }
//     if (!password.match("[@#$%^&*?]")) {
//       throw new Error("En azi 1 eded xususi simvol olmalidir");
//     }
//     return "Password yoxlanisi ugurludur";
//   },
//   emailValidator: function (email) {
//     if (!email.trim().match("[@]") || email === " ") {
//       throw new Error("Zehmet olmasa email daxil edin");
//     }
//     return "Email yoxlanisi ugurludur";
//   },
//   fullName: function (name) {
//     if (name.trim() === "") {
//       throw new Error("Zehmet olmasa name daxil edin");
//     }
//     return "Name yoxlanisi ugurludur";
//   },
//   phoneNumber: function (phone) {
//     if (!(phone.length > 9)) {
//       throw new Error("Zehmet olmasa Nomreni tam daxil edin");
//     }
//     return "Phone yoxlanisi ugurludur";
//   },
//   age: function (year) {
//     if (!(2024 - +year > 17)) {
//       throw new Error("Yasiniz 18 yasdan yuxari olmalidi");
//     }
//     return "Yas yoxlanisi ugurludur";
//   },
//   adress: function (adress) {
//     if (adress.trim() === "") {
//       throw new Error("Zehmet olmasa adress daxil edin");
//     }
//     return "Adress yoxlanisi ugurludur";
//   },
// };

// console.log(register.passwordValidator("Tural1234@"));
// console.log(register.emailValidator("nhujhgy@"));
// console.log(register.fullName("Tural"));
// console.log(register.phoneNumber("0515718222"));
// console.log(register.age("2006"));
// console.log(register.adress("Baki Seheri"));

// const signIn = {
//   fullName: function (name) {
//     if (name.trim() === "") {
//       throw new Error("Zehmet olmasa name daxil edin");
//     }
//     return "Name yoxlanisi ugurludur";
//   },
//   emailValidator: function (email) {
//     if (!email.trim().match("[@]") || email.trim() === "") {
//       throw new Error("Zehmet olmasa email daxil edin");
//     }
//     return "Email yoxlanisi ugurludur";
//   },
//   passwordValidator: function (password) {
//     if (!(password.length > 7)) {
//       throw new Error("Parol 8 ve yuxari character olmalidir");
//     }
//     if (!password.match("[0-9]")) {
//       throw new Error("Parolda en azi 1 eded reqem olmalidir");
//     }
//     if (!password.match("[A-Z]")) {
//       throw new Error("En azi 1 eded herf boyuk olmalidir");
//     }
//     if (!password.match("[a-z]")) {
//       throw new Error("En azi 1 eded herf kicik olmalidir");
//     }
//     if (!password.match("[@#$%^&*?]")) {
//       throw new Error("En azi 1 eded xususi simvol olmalidir");
//     }
//     return "Password yoxlanisi ugurludur";
//   },
// };

// console.log(signIn.passwordValidator("djdjdedededd2A@"));
// console.log(signIn.emailValidator("ssjJ@sajhuhs"));
// console.log(signIn.fullName("Tural"));
