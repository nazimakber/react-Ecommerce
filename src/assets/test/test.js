import firebase from "firebase/app";
import "firebase/firestore";

const firestor = firebase.firestore();
firestor
  .collection("users")
  .doc("n3otYzYvk7BviJseli09")
  .collection("cartItem")
  .doc("1rdkCEksBKp5HjvcjT6C");

//Alternative of above command
firestor.doc("users/n3otYzYvk7BviJseli09/cartItem/1rdkCEksBKp5HjvcjT6C");

//2nd alternative
firestor
  .collection("users/n3otYzYvk7BviJseli09/cartItem")
  .doc("1rdkCEksBKp5HjvcjT6C");
