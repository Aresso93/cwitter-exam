import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { FireappService } from './fireapp.service';
import { OurUser } from '../model/our-user';
import { Cwit } from '../model/cwit';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db: Firestore;

  constructor(private fireApp: FireappService) {
    this.db = getFirestore(this.fireApp.app)
  }

  getCwits() {

    const cwits = collection(this.db, 'cwit');
    return getDocs(cwits).then(snap => snap.docs.map(doc => {
      return {
        text: doc.data()['text'],
        url: doc.data()['url'],
        author: doc.data()['author'],
        authorName: doc.data()['authorName'],
        creationTime: doc.data()['creationTime']?.toDate(),
      }
    }));



  }

  postOurUser(ourUser: OurUser, uid: string){
    const docUrl = doc(this.db, 'user', uid);
    return setDoc(docUrl, ourUser);
  }

  getOurUser(uid: string){
    const docUrl = doc(this.db, 'user', uid);
    console.log(docUrl);
    return getDoc(docUrl)
  }

  postCwit(cwit: Cwit) {
    const cwitsCollection = collection(this.db, 'cwit');
    const newCwitRef = addDoc(cwitsCollection, cwit);

    return newCwitRef;
}

  async loadUserCwits(uid:string){
    const q = query(collection(this.db, "cwit"), where("author", "==", uid));
    const querySnapshot = await getDocs(q)
    const userCwits = querySnapshot.docs.map(doc => {
      return {
        text: doc.data()['text'],
        url: doc.data()['url'],
        author: doc.data()['author'],
        authorName: doc.data()['authorName'],
        creationTime: doc.data()['creationTime'].toDate(),
      }
    })
    return userCwits

  }

}


