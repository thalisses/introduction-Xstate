import { Machine, assign } from "xstate";

export const STATES = {
  home: "home",
  photos: "photos",
  videos: "videos",
  documents: "documents"
};

export const ACTIONS = {
  clickAtPhotos: "clickAtPhotos",
  clickAtVideos: "clickAtVideos",
  clickAtDocuments: "clickAtDocuments",
  BACK_HOME: "backHome",
  sendName: "sendName"
};

const myDriveMachine = Machine({
  id: "myDrive",
  initial: "home",
  context: {
    userName: "@"
  },
  states: {
    home: {
      on: {
        clickAtPhotos: "photos",
        clickAtVideos: "videos",
        clickAtDocuments: "documents",
        sendName: {
          actions: assign({ userName: (_, event) => event.value })
        }
      }
    },
    photos: {},
    videos: {},
    documents: {}
  },
  on: {
    [ACTIONS.BACK_HOME]: "home"
  }
});

export default myDriveMachine;
