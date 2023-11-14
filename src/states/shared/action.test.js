/*
1. should dispatch action correctly when data fetching success:
Arrange:
Membuat salinan cadangan implementasi fungsi api.getAllUsers dan api.getAllThreads ke api._getAllUsers dan api._getAllThreads.
Mengganti implementasi api.getAllUsers dengan fungsi tiruan yang selalu mengembalikan Promise yang diselesaikan dengan data palsu.
Mengganti implementasi api.getAllThreads dengan fungsi tiruan yang selalu mengembalikan Promise yang diselesaikan dengan data palsu.
Membuat objek jest mock untuk fungsi dispatch.
Action: Memanggil asyncPopulateUsersAndThreads()(dispatch).
Assert:
Memastikan bahwa fungsi dispatch dipanggil dengan showLoading() tepat sekali.
Memastikan bahwa fungsi dispatch dipanggil dengan receiveThreadsActionCreator dan data palsu dari api.getAllThreads.
Memastikan bahwa fungsi dispatch dipanggil dengan receiveUsersActionCreator dan data palsu dari api.getAllUsers.
Memastikan bahwa fungsi dispatch dipanggil dengan hideLoading() tepat sekali.

2. should dispatch action and call alert correctly when data fetching failed:
Arrange:
Membuat salinan cadangan implementasi fungsi api.getAllUsers dan api.getAllThreads ke api._getAllUsers dan api._getAllThreads.
Mengganti implementasi api.getAllUsers dengan fungsi tiruan yang selalu mengembalikan Promise yang ditolak dengan kesalahan palsu.
Mengganti implementasi api.getAllThreads dengan fungsi tiruan yang selalu mengembalikan Promise yang ditolak dengan kesalahan palsu.
Membuat objek jest mock untuk fungsi dispatch.
Membuat objek jest mock untuk fungsi window.alert.
Action: Memanggil asyncPopulateUsersAndThreads()(dispatch).
Assert:
Memastikan bahwa fungsi dispatch dipanggil dengan showLoading() tepat sekali.
Memastikan bahwa fungsi dispatch dipanggil dengan hideLoading() tepat sekali.
Memastikan bahwa fungsi window.alert dipanggil dengan pesan kesalahan palsu dari api.getAllUsers atau api.getAllThreads.
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import asyncPopulateUsersAndThreads from './action';

const fakeThreadsResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeUsersResponse = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});