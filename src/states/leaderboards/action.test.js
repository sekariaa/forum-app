/*
1. should dispatch action correctly when data fetching success:
Arrange:
Membuat salinan cadangan implementasi fungsi api.getLeaderBoards ke api._getLeaderboards.
Mengganti implementasi api.getLeaderBoards dengan fungsi tiruan yang selalu mengembalikan Promise yang diselesaikan dengan data palsu.
Membuat objek jest mock untuk fungsi dispatch.
Action: Memanggil asyncPopulateLeaderboards()(dispatch).
Assert:
Memastikan bahwa fungsi dispatch dipanggil dengan showLoading() tepat sekali.
Memastikan bahwa fungsi dispatch dipanggil dengan receiveLeaderboardsActionCreator dan data palsu dari api.getLeaderBoards.
Memastikan bahwa fungsi dispatch dipanggil dengan hideLoading() tepat sekali.

2. should dispatch action and call alert correctly when data fetching failed:
Arrange:
Membuat salinan cadangan implementasi fungsi api.getLeaderBoards ke api._getLeaderboards.
Mengganti implementasi api.getLeaderBoards dengan fungsi tiruan yang selalu mengembalikan Promise yang ditolak dengan kesalahan palsu.
Membuat objek jest mock untuk fungsi dispatch.
Membuat objek jest mock untuk fungsi window.alert.
Action: Memanggil asyncPopulateLeaderboards()(dispatch).
Assert:
Memastikan bahwa fungsi dispatch dipanggil dengan showLoading() tepat sekali.
Memastikan bahwa fungsi dispatch dipanggil dengan hideLoading() tepat sekali.
Memastikan bahwa fungsi window.alert dipanggil dengan pesan kesalahan palsu dari api.getLeaderBoards.
*/
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
} from './action';

const fakerLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getLeaderboards = api.getLeaderBoards;
  });

  afterEach(() => {
    // restore original implementation
    api.getLeaderBoards = api._getLeaderboards;

    // delete backup
    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderBoards = () => Promise.resolve(fakerLeaderboardsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakerLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});