/*
1. should return the initial state when given an unknown action:
Arrange:
Menetapkan initialState sebagai array kosong.
Membuat objek aksi (action) dengan properti type yang tidak dikenal.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa hasilnya (nextState) sama dengan initialState.

2. should return the thread detail when given the RECEIVE_THREAD_DETAIL action:
Arrange:
Menetapkan initialState sebagai array kosong.
Membuat objek aksi (action) dengan properti type 'RECEIVE_THREAD_DETAIL' dan payload yang berisi detail thread palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState sama dengan payload dari aksi.

3. should return the thread detail with toggled UpVote when given the UP_VOTE_THREAD_DETAIL action:
Arrange:
Menetapkan initialState sebagai objek dengan properti upVotesBy dan downVotesBy kosong.
Membuat objek aksi (action) dengan properti type 'UP_VOTE_THREAD_DETAIL' dan payload yang berisi ID pengguna palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan upVotesBy yang berisi ID pengguna dari payload dan downVotesBy yang kosong.

4. should return the thread detail with toggled DownVote when given the DOWN_VOTE_THREAD_DETAIL action:
Arrange:
Menetapkan initialState sebagai objek dengan properti upVotesBy dan downVotesBy kosong.
Membuat objek aksi (action) dengan properti type 'DOWN_VOTE_THREAD_DETAIL' dan payload yang berisi ID pengguna palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan downVotesBy yang berisi ID pengguna dari payload dan upVotesBy yang kosong.

5. should return the thread detail without toggled UpVote and DownVote when given the NEUTRALIZE_VOTE_THREAD_DETAIL action:
Arrange:
Menetapkan initialState sebagai objek dengan properti upVotesBy dan downVotesBy yang berisi ID pengguna palsu.
Membuat objek aksi (action) dengan properti type 'NEUTRALIZE_VOTE_THREAD_DETAIL' dan payload yang berisi ID pengguna palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan upVotesBy dan downVotesBy yang kosong.

6. should return the thread detail with a new comment when given the CREATE_COMMENT action:
Arrange:
Menetapkan initialState sebagai objek dengan properti comments kosong.
Membuat objek aksi (action) dengan properti type 'CREATE_COMMENT' dan payload yang berisi komentar palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan comments yang berisi komentar baru dari payload.

7. should return the thread detail with UpVote toggled comment when given the UP_VOTE_COMMENT action:
Arrange:
Menetapkan initialState sebagai objek dengan properti comments yang berisi satu komentar dengan upVotesBy dan downVotesBy kosong.
Membuat objek aksi (action) dengan properti type 'UP_VOTE_COMMENT' dan payload yang berisi ID komentar dan ID pengguna palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan komentar yang berisi komentar yang telah di-UpVote dari payload.

8. should return the thread detail with DownVote toggled comment when given the DOWN_VOTE_COMMENT action:
Arrange:
Menetapkan initialState sebagai objek dengan properti comments yang berisi satu komentar dengan upVotesBy dan downVotesBy kosong.
Membuat objek aksi (action) dengan properti type 'DOWN_VOTE_COMMENT' dan payload yang berisi ID komentar dan ID pengguna palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan komentar yang berisi komentar yang telah di-DownVote dari payload.

9. should return the thread detail without toggled UpVote and DownVote comment when given the NEUTRALIZE_VOTE_COMMENT action:
Arrange:
Menetapkan initialState sebagai objek dengan properti comments yang berisi satu komentar dengan upVotesBy dan downVotesBy yang berisi ID pengguna palsu.
Membuat objek aksi (action) dengan properti type 'NEUTRALIZE_VOTE_COMMENT' dan payload yang berisi ID komentar dan ID pengguna palsu.
Action: Memanggil threadDetailReducer(initialState, action).
Assert:
Memastikan bahwa nextState adalah salinan dari initialState dengan komentar yang berisi komentar yang tidak memiliki UpVote dan DownVote dari payload.
*/
import threadDetailReducer from './reducer';

describe('threadDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
  it('should return the thread detail with toggled UpVote when given by UP_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });
  it('should return the thread detail with toggled DownVote when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-1',
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });
  it('should return the thread detail without toggled UpVote and DownVote when given by NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-1',
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });
  it('should return the thread detail with new comment when given by CREATE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });
  it('should return the thread detail with UpVote toggled comment when given by UP_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      ],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });
  it('should return the thread detail with DownVote toggled comment when given by DOWN_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      ],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });
  it('should return the thread detail without toggled UpVote and DownVote comment when given by NEUTRALIZE_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      ],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'NEUTRALIZE_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });
});