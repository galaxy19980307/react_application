import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


const InitialTestPostData = [
    {
        id: 1,
        message: 'Hi everybody!',
        likeQuantity: 6,
        img: 'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=2000'
    },
    {
        id: 2,
        message: 'Are you here?',
        likeQuantity: 3,
        img: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'
    },
    {
        id: 3,
        message: 'Nobody love me!',
        likeQuantity: 0,
        img: 'https://i.pinimg.com/originals/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg'
    }
]

it("Length of postsData should be 4", () => {
    //1 TEST DATA
    let action = addPostActionCreator("YYYY")
    let state = {
        postsData: [...InitialTestPostData]
    }
    //2 ACTION
    let newState = profileReducer(state, action)
    //3 EXPECTATION
    expect(newState.postsData.length).toBe(4)
});

it("Message of newPost should be YYYY", () => {
    //1 TEST DATA
    let action = addPostActionCreator("YYYY")
    let state = {
        postsData: [...InitialTestPostData]
    }
    //2 ACTION
    let newState = profileReducer(state, action)
    //3 EXPECTATION
    expect(newState.postsData[3].message).toBe("YYYY")
});

it("Length of postsData should be 2", () => {
    //1 TEST DATA
    let action = deletePost(2)
    let state = {
        postsData: [...InitialTestPostData]
    }
    //2 ACTION
    let newState = profileReducer(state, action)
    //3 EXPECTATION
    expect(newState.postsData.length).toBe(2)
});

it(`Length of postsData shouldn't change`, () => {
    //1 TEST DATA
    let action = deletePost(1000)
    let state = {
        postsData: [...InitialTestPostData]
    }
    //2 ACTION
    let newState = profileReducer(state, action)
    //3 EXPECTATION
    expect(newState.postsData.length).toBe(3)
});

