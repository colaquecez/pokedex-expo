import { AnyAction } from 'redux';
import reducer, { managePokemonAction } from './pokemon.reducer';

test('should return the initial state', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual({
    favorites: []
  });
});

test('should be able to add a pokemon in an empty list', () => {
  const previousState = {
    favorites: []
  };

  expect(
    reducer(
      previousState,
      managePokemonAction({
        image: 'ImageMocked2',
        name: 'NameMocked2',
        url: 'UrlMocked2',
        id: 'IDMocked2'
      })
    )
  ).toEqual({
    favorites: [
      {
        image: 'ImageMocked2',
        name: 'NameMocked2',
        url: 'UrlMocked2',
        id: 'IDMocked2'
      }
    ]
  });
});

test("should be able to add a new pokemon when it doesn't exist in the list", () => {
  const previousState = {
    favorites: [
      {
        image: 'ImageMocked',
        name: 'NameMocked',
        url: 'UrlMocked',
        id: 'IDMocked'
      }
    ]
  };
  expect(
    reducer(
      previousState,
      managePokemonAction({
        image: 'ImageMocked2',
        name: 'NameMocked2',
        url: 'UrlMocked2',
        id: 'IDMocked2'
      })
    )
  ).toEqual({
    favorites: [
      {
        image: 'ImageMocked',
        name: 'NameMocked',
        url: 'UrlMocked',
        id: 'IDMocked'
      },
      {
        image: 'ImageMocked2',
        name: 'NameMocked2',
        url: 'UrlMocked2',
        id: 'IDMocked2'
      }
    ]
  });
});

test('should be able to remove a pokemon when it already exists in the list', () => {
  const previousState = {
    favorites: [
      {
        image: 'ImageMocked',
        name: 'NameMocked',
        url: 'UrlMocked',
        id: 'IDMocked'
      }
    ]
  };
  expect(
    reducer(
      previousState,
      managePokemonAction({
        image: 'ImageMocked',
        name: 'NameMocked',
        url: 'UrlMocked',
        id: 'IDMocked'
      })
    )
  ).toEqual({
    favorites: []
  });
});
