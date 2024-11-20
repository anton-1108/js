// let too = 123321;
// let uldegdeel = too % 2;
// if (uldegdeel == 0) {
//   console.log("tegsh too");
// } else {
//   console.log("sondgoi too");
// }

// too 7d huvaagdana 11ch huvaagdana
// too 7d huvaagdana 11d huvaagdahgui
// too 7d huvaagdahgui 11d huvaagdana
// too 7d huvaagdahgui 11ch huvaagdahgui

let too1 = 20;
if (too1 % 7 == 0) {
  if (too1 % 11 == 0) {
    console.log("too 7d huvaagdana 11ch huvaagdana");
  } else {
    console.log("too 7d huvaagdana 11d huvaagdahgui");
  }
} else {
  if (too1 % 11 == 0) console.log("too 7d huvaagdahgui 11d huvaagdana");
  else {
    console.log("too 7d huvaagdahgui 11ch huvaagdahgui");
  }
}
