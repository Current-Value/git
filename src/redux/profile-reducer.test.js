import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'dada', likesCount: 11},
    ]
}

test('length of posts should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator("112233")

    // 2.action
    let newState = profileReducer(state,action)

    // 3.expectation{ожидание}
    expect(newState.posts.length).toBe(5)
});


test('add message correct', () => {
    // 1.test data
    let action = addPostActionCreator("112233")

    // 2.action
    let newState = profileReducer(state,action)

    // 3.expectation{ожидание}
    expect(newState.posts[4].message).toBe("112233")
});

test('after deleting length of message should be decrement', () => {
    // 1.test data
    let action = deletePost(1)

    // 2.action
    let newState = profileReducer(state,action)

    // 3.expectation{ожидание}
    expect(newState.posts.length).toBe(3)
});
