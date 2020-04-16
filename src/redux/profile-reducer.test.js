import profileReducer, { addPost, deletePost } from "./profile-reducer";

// 1. test data

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCounts: 15 },
        { id: 2, message: "It's my first post", likesCounts: 20 },
        { id: 3, message: "BlaBla", likesCounts: 30 },
        { id: 4, message: "Lala", likesCounts: 40 }
    ]
};


it('lenght of posts should be incremented', () => {
    // 1. test data

    let action = addPost('post for test');

    // 2. action

    let newState = profileReducer( state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(5);
});

it('message of new post should be "post for test"', () => {
    // 1. test data

    let action = addPost('post for test');

    // 2. action

    let newState = profileReducer( state, action);

    // 3. expectation

    expect(newState.posts[4].message).toBe('post for test');
});

it('after deleting length of posts should be decremented', () => {
    // 1. test data

    let action = deletePost(2);

    // 2. action

    let newState = profileReducer( state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(3);
});

it('after deleting length sholdn\'t be decrement if id is incorrect', () => {
    // 1. test data

    let action = deletePost(8);

    // 2. action

    let newState = profileReducer( state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(4);
});

it('after deleting we can\'t find post with id: 2', () => {
    // 1. test data

    let action = deletePost(2);

    // 2. action

    let newState = profileReducer( state, action);

    // 3. expectation

    expect(newState.posts.filter(p => p.id === 2)).toHaveLength(0);
});