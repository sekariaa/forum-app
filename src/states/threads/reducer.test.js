/*
1. should return the initial state when given by unknown action:
Arrange:
Menetapkan initialState sebagai array kosong.
Membuat objek aksi (action) dengan properti type yang tidak dikenal.
Action: Memanggil threadReducer(initialState, action).
Assert:
Memastikan bahwa hasilnya (nextState) sama dengan initialState.

2. should return the thread when given by RECEIVE_THREADS action:
Arrange:
Menetapkan initialState sebagai array kosong.
Membuat objek aksi (action) dengan properti type 'RECEIVE_THREADS' dan payload yang berisi data thread palsu.
Action: Memanggil threadReducer(initialState, action).
Assert:
Memastikan bahwa nextState sama dengan payload dari aksi.

3. should return new thread when given by CREATE_THREAD action:
Arrange:
Menetapkan initialState sebagai array dengan satu elemen thread.
Membuat objek aksi (action) dengan properti type 'CREATE_THREAD' dan payload yang berisi thread baru.
Action: Memanggil threadReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah array yang berisi thread baru dan thread-thread dari initialState.

4. should return the thread with toggled UpVote when given by UP_VOTE_THREAD action:
Arrange:
Menetapkan initialState sebagai array dengan satu elemen thread.
Membuat objek aksi (action) dengan properti type 'UP_VOTE_THREAD' dan payload yang berisi ID thread dan ID pengguna palsu.
Action: Memanggil threadReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah array dengan thread yang memiliki UpVote yang diubah sesuai dengan payload.

5. should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action:
Arrange:
Menetapkan initialState sebagai array dengan satu elemen thread.
Membuat objek aksi (action) dengan properti type 'DOWN_VOTE_THREAD' dan payload yang berisi ID thread dan ID pengguna palsu.
Action: Memanggil threadReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah array dengan thread yang memiliki DownVote yang diubah sesuai dengan payload.

6. should return the thread without toggled UpVote and DownVote when given by NEUTRALIZE_VOTE_THREAD action:
Arrange:
Menetapkan initialState sebagai array dengan satu elemen thread yang memiliki UpVote dan DownVote.
Membuat objek aksi (action) dengan properti type 'NEUTRALIZE_VOTE_THREAD' dan payload yang berisi ID thread dan ID pengguna palsu.
Action: Memanggil threadReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah array dengan thread yang tidak memiliki UpVote dan DownVote sesuai dengan payload.
*/

import threadReducer from './reducer';

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
  it('should return new thread when given by CREATE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the thread with toggled UpVote when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });
  it('should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
  it('should return the thread without toggled UpVote and DownVote when given by NEUTRALIZE_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});